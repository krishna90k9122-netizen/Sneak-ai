"""
Robot frame pipeline (Python 3 + Pillow, NumPy, SciPy).

Reads the 80 source frames (1280x720 RGBA WebP/PNG) and writes:
  public/robot/d_001..d_080.webp   desktop set, full resolution, cropped to a shared bbox
  public/robot/m_001..m_040.webp   mobile set, 40 frames @ 0.75x, cropped to the same bbox
and prints the crop numbers that live in components/robot-sequence.tsx.

What it fixes at the source (not with CSS):
  1. 1-9px speckle islands hugging the silhouette  -> removed
  2. Near-binary alpha (stair-stepped outline)      -> true anti-aliased alpha
  3. Colour under the edge band                     -> re-sampled from the interior
     (no dark/white matte fringe when the alpha is partial)
  4. Resizing is done in premultiplied space        -> no halo on the mobile set
"""
import sys, glob, os
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

# The 80 original 1280x720 source frames are NOT shipped in public/ (they are not used at
# runtime). Pass their folder as the first argument to regenerate public/robot.
SRC = sys.argv[1] if len(sys.argv) > 1 else "robot-source-frames"
OUT = sys.argv[2] if len(sys.argv) > 2 else "public/robot"
os.makedirs(OUT, exist_ok=True)
files = sorted(glob.glob(os.path.join(SRC, "frame_*.*")))
assert len(files) == 80, f"expected 80 frames, found {len(files)}"

def clean(path):
    a = np.asarray(Image.open(path).convert("RGBA"), dtype=np.float32)
    rgb, alpha = a[..., :3], a[..., 3] / 255.0
    mask = alpha > 0.5
    # 1. drop specks / pinholes (< 40 px)
    lab, n = ndi.label(mask)
    if n:
        sizes = ndi.sum(mask, lab, range(1, n + 1))
        keep = np.isin(lab, 1 + np.flatnonzero(sizes >= 40))
        mask = keep
    holes, hn = ndi.label(~mask)
    if hn:
        hs = ndi.sum(~mask, holes, range(1, hn + 1))
        mask |= np.isin(holes, 1 + np.flatnonzero(hs < 40))
    # 2. anti-aliased alpha: blur the clean mask, then re-steepen around 0.5 (no net shrink)
    g = ndi.gaussian_filter(mask.astype(np.float32), 0.9)
    new_alpha = np.clip((g - 0.5) * 1.7 + 0.5, 0, 1)
    new_alpha[~ndi.binary_dilation(mask, iterations=2)] = 0
    # 3. edge colour from the interior (1px inside), extended outward
    solid = ndi.binary_erosion(mask, iterations=1)
    idx = ndi.distance_transform_edt(~solid, return_distances=False, return_indices=True)
    rgb2 = rgb[idx[0], idx[1]]
    out = np.dstack([rgb2, new_alpha * 255.0])
    return out

frames = [clean(f) for f in files]

# shared crop = union of visible pixels + padding; bottom kept at the frame bottom (bust is cut there)
x0 = y0 = 10**9; x1 = y1 = 0
for f in frames:
    ys, xs = np.where(f[..., 3] > 4)
    x0, x1 = min(x0, xs.min()), max(x1, xs.max()); y0, y1 = min(y0, ys.min()), max(y1, ys.max())
PAD = 6
x0 = max(0, x0 - PAD); y0 = max(0, y0 - PAD); x1 = min(1279, x1 + PAD); y1 = 719
x0 -= x0 % 2; y0 -= y0 % 2
cw, ch = (x1 - x0 + 1), (y1 - y0 + 1)
cw += cw % 2; ch += ch % 2
print(f"CROP x={x0} y={y0} w={cw} h={ch}  (source frame 1280x720)")

def save(arr, path, q):
    Image.fromarray(np.clip(arr + 0.5, 0, 255).astype(np.uint8), "RGBA").save(
        path, "WEBP", quality=q, alpha_quality=100, method=6)

def resize_premult(arr, scale):
    h, w = arr.shape[:2]
    nw, nh = round(w * scale), round(h * scale)
    p = arr.copy(); p[..., :3] *= (p[..., 3:4] / 255.0)
    chans = [np.asarray(Image.fromarray(p[..., i], "F").resize((nw, nh), Image.LANCZOS)) for i in range(4)]
    r = np.dstack(chans)
    al = np.clip(r[..., 3:4], 0, 255)
    r[..., :3] = np.where(al > 0.5, r[..., :3] / np.maximum(al / 255.0, 1e-4), 0)
    r[..., :3] = np.clip(r[..., :3], 0, 255); r[..., 3:4] = al
    return r

tot_d = tot_m = 0
mobile_idx = list(np.round(np.linspace(0, 79, 40)).astype(int))
for i, f in enumerate(frames):
    c = f[y0:y0 + ch, x0:x0 + cw]
    p = os.path.join(OUT, f"d_{i+1:03d}.webp"); save(c, p, 88); tot_d += os.path.getsize(p)
for j, i in enumerate(mobile_idx):
    c = frames[i][y0:y0 + ch, x0:x0 + cw]
    p = os.path.join(OUT, f"m_{j+1:03d}.webp"); save(resize_premult(c, 0.75), p, 84); tot_m += os.path.getsize(p)
print(f"desktop set: 80 frames, {tot_d/1e6:.1f} MB | mobile set: 40 frames, {tot_m/1e6:.1f} MB")
