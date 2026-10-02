"use client"

import { useEffect, useRef, useState } from "react"

// ─── Config ───────────────────────────────────────────────────────────────────
// Frames are produced by scripts/build-robot-frames.py. Every frame in a set is
// cropped to the SAME box (CROP, in the coordinates of the original 1280x720
// artwork), so geometry only needs this one rectangle.
const SRC_W = 1280
const SRC_H = 720
const CROP = { x: 254, y: 66, w: 746, h: 654 } // reaches the bottom of the source frame

interface FrameSet {
  prefix: "d" | "m"
  count: number
}
// Desktop: 80 frames, full resolution.  Mobile / low-memory: 40 frames @ 0.75x.
// (80 full-size decoded bitmaps are ~160 MB; that is what makes Android tabs reload.)
const DESKTOP_SET: FrameSet = { prefix: "d", count: 80 }
const MOBILE_SET: FrameSet = { prefix: "m", count: 40 }

const framePath = (set: FrameSet, i: number) =>
  `/robot/${set.prefix}_${String(i + 1).padStart(3, "0")}.webp`

// Desktop stage: the robot is drawn slightly smaller than the full 16:9 fit so
// its arm clears the hero copy column on 1024–1536px screens.
const STAGE_SCALE = 0.92
const STAGE_QUERY = "(min-width: 1024px)"
// Beyond this width the robot stops growing (at 2560px it was ~1300px wide and
// swallowed the whole content column). Centering still uses the full width.
const STAGE_MAX_W = 1920

const PRELOAD_CONCURRENCY = 6
const MAX_DPR = 2 // 3x+ quadruples fill cost on phones with no visible gain
const LERP = 0.16
// ─────────────────────────────────────────────────────────────────────────────

interface RobotSequenceProps {
  className?: string
}

type NavigatorWithMemory = Navigator & { deviceMemory?: number }

function pickFrameSet(): FrameSet {
  if (typeof window === "undefined") return DESKTOP_SET
  const smallScreen = Math.min(window.screen.width, window.innerWidth) < 1024
  const lowMemory = ((navigator as NavigatorWithMemory).deviceMemory ?? 8) <= 4
  return smallScreen || lowMemory ? MOBILE_SET : DESKTOP_SET
}

export function RobotSequence({ className = "" }: RobotSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setRef = useRef<FrameSet>(DESKTOP_SET)
  const bitmapsRef = useRef<(ImageBitmap | null)[]>([])

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const offscreenRef = useRef<HTMLCanvasElement | null>(null)
  const octxRef = useRef<CanvasRenderingContext2D | null>(null)

  // Cached geometry in DEVICE pixels: [destX, destY, destW, destH]. Recomputed
  // only on resize, never inside the rAF loop.
  const geoRef = useRef<[number, number, number, number]>([0, 0, 0, 0])
  const geoDirtyRef = useRef(true)

  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const rafRef = useRef(0)
  const isReadyRef = useRef(false)
  const visibleRef = useRef(true)
  const reducedMotionRef = useRef(false)

  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const centerPos = () => (setRef.current.count - 1) / 2

  // ── Geometry ────────────────────────────────────────────────────────────────
  const updateGeo = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
    const dw = canvas.clientWidth
    const dh = canvas.clientHeight
    if (dw === 0 || dh === 0) return

    const tw = Math.round(dw * dpr)
    const th = Math.round(dh * dpr)
    if (canvas.width !== tw || canvas.height !== th) {
      canvas.width = tw
      canvas.height = th
      ctxRef.current = null // buffer resize resets the context
    }
    if (!ctxRef.current) {
      const c = canvas.getContext("2d", { alpha: true })
      if (c) {
        c.imageSmoothingEnabled = true
        c.imageSmoothingQuality = "high"
      }
      ctxRef.current = c
    }

    // Two layouts, one image:
    //  • stage (≥1024px): the robot keeps the position it has in the full 16:9
    //    artwork, sits behind the copy, and is anchored to the bottom edge.
    //  • fit (<1024px): the robot's own bounding box fills the (in-flow) box,
    //    so it is large on phones instead of a 16:9 letterbox.
    let destW: number, destH: number, destX: number
    if (window.matchMedia(STAGE_QUERY).matches) {
      const s = Math.min(Math.min(dw, STAGE_MAX_W) / SRC_W, dh / SRC_H) * STAGE_SCALE
      destW = CROP.w * s
      destH = CROP.h * s
      destX = (dw - SRC_W * s) / 2 + CROP.x * s
    } else {
      const s = Math.min(dw / CROP.w, dh / CROP.h)
      destW = CROP.w * s
      destH = CROP.h * s
      destX = (dw - destW) / 2
    }
    const destY = dh - destH // crop reaches the frame bottom → bottom-anchored

    const gx = Math.round(destX * dpr)
    const gy = Math.round(destY * dpr)
    const gw = Math.max(1, Math.round(destW * dpr))
    const gh = Math.max(1, Math.round(destH * dpr))
    geoRef.current = [gx, gy, gw, gh]

    // Offscreen blend buffer is exactly the destination size (device pixels),
    // resized only when that size really changes.
    if (!offscreenRef.current) offscreenRef.current = document.createElement("canvas")
    const oc = offscreenRef.current
    if (oc.width !== gw || oc.height !== gh) {
      oc.width = gw
      oc.height = gh
      octxRef.current = null
    }
    if (!octxRef.current) {
      const c = oc.getContext("2d", { alpha: true })
      if (c) {
        c.imageSmoothingEnabled = true
        c.imageSmoothingQuality = "high"
      }
      octxRef.current = c
    }
    geoDirtyRef.current = false
  }

  // Never paint a blank frame: if the exact frame has not decoded yet, use the
  // nearest cached one.
  const nearestLoaded = (idx: number): number | null => {
    const arr = bitmapsRef.current
    const count = setRef.current.count
    if (arr[idx]) return idx
    for (let d = 1; d < count; d++) {
      if (idx - d >= 0 && arr[idx - d]) return idx - d
      if (idx + d < count && arr[idx + d]) return idx + d
    }
    return null
  }

  // ── Render one (possibly interpolated) frame ────────────────────────────────
  // Interpolation is a true premultiplied lerp: lo*(1-f) + hi*f, composited with
  // "lighter" on a cleared buffer. Both silhouettes contribute, so the outline
  // glides between frames instead of snapping to one of them (the old
  // "source-atop" approach kept only lo's silhouette and popped at frame swaps).
  const renderPos = (pos: number) => {
    if (geoDirtyRef.current) updateGeo()
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    const [gx, gy, gw, gh] = geoRef.current
    if (gw === 0 || gh === 0) return

    const count = setRef.current.count
    const clamped = Math.max(0, Math.min(count - 1, pos))
    const lo = Math.floor(clamped)
    const hi = Math.min(lo + 1, count - 1)
    const frac = clamped - lo

    const loIdx = nearestLoaded(lo)
    if (loIdx === null) return
    const bmpLo = bitmapsRef.current[loIdx]
    if (!bmpLo) return

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.globalCompositeOperation = "source-over"
    ctx.globalAlpha = 1
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (frac > 0.004 && hi !== lo) {
      const hiIdx = nearestLoaded(hi)
      const bmpHi = hiIdx !== null && hiIdx !== loIdx ? bitmapsRef.current[hiIdx] : null
      const octx = octxRef.current
      const oc = offscreenRef.current
      if (bmpHi && octx && oc) {
        octx.setTransform(1, 0, 0, 1, 0, 0)
        octx.clearRect(0, 0, oc.width, oc.height)
        octx.globalCompositeOperation = "source-over"
        octx.globalAlpha = 1 - frac
        octx.drawImage(bmpLo, 0, 0, oc.width, oc.height)
        octx.globalCompositeOperation = "lighter"
        octx.globalAlpha = frac
        octx.drawImage(bmpHi, 0, 0, oc.width, oc.height)
        octx.globalAlpha = 1
        octx.globalCompositeOperation = "source-over"
        ctx.drawImage(oc, gx, gy) // 1:1 copy, pixel-aligned → no resampling blur
        return
      }
    }
    ctx.drawImage(bmpLo, gx, gy, gw, gh)
  }

  // ── rAF loop: created once, all state in refs ───────────────────────────────
  useEffect(() => {
    let alive = true
    const loop = () => {
      if (!alive) return
      if (isReadyRef.current && visibleRef.current && !document.hidden) {
        if (geoDirtyRef.current) {
          updateGeo()
          renderPos(currentRef.current)
        } else {
          const diff = targetRef.current - currentRef.current
          if (Math.abs(diff) > 0.001) {
            currentRef.current += reducedMotionRef.current ? diff : diff * LERP
            renderPos(currentRef.current)
          }
        }
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      alive = false
      cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Preloader: fetch → createImageBitmap (off-main-thread decode) ───────────
  useEffect(() => {
    let mounted = true
    const set = pickFrameSet()
    setRef.current = set
    const count = set.count
    const bitmaps: (ImageBitmap | null)[] = new Array<ImageBitmap | null>(count).fill(null)
    bitmapsRef.current = bitmaps
    const center = Math.round(centerPos())
    targetRef.current = centerPos()
    currentRef.current = centerPos()

    let loaded = 0
    let lastReported = -1
    const report = () => {
      const pct = Math.round((loaded / count) * 100)
      if (pct !== lastReported && (pct - lastReported >= 5 || pct === 100)) {
        lastReported = pct
        if (mounted) setProgress(pct)
      }
    }
    const finish = () => {
      geoDirtyRef.current = true
      isReadyRef.current = true
      if (mounted) {
        setProgress(100)
        setIsReady(true)
      }
    }

    const decode = async (blob: Blob): Promise<ImageBitmap | null> => {
      try {
        return await createImageBitmap(blob)
      } catch {
        return null
      }
    }

    const loadFrame = async (idx: number) => {
      try {
        const res = await fetch(framePath(set, idx), { credentials: "same-origin" })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const bmp = await decode(await res.blob())
        if (!mounted) {
          bmp?.close()
          return
        }
        if (bmp) bitmaps[idx] = bmp
        loaded++
        report()
        // The robot is visible + interactive as soon as the centre frame decodes.
        if (idx === center && bmp) {
          geoDirtyRef.current = true
          isReadyRef.current = true
          updateGeo()
          renderPos(currentRef.current)
        }
        if (loaded === count) finish()
      } catch {
        loaded++
        report()
        if (loaded === count && mounted) finish()
      }
    }

    // Centre first (fastest first paint), then the rest, bounded concurrency.
    const queue = [center, ...Array.from({ length: count }, (_, i) => i).filter((i) => i !== center)]
    let cursor = 0
    const worker = async () => {
      while (mounted && cursor < queue.length) await loadFrame(queue[cursor++])
    }
    void Promise.all(Array.from({ length: Math.min(PRELOAD_CONCURRENCY, count) }, worker))

    return () => {
      mounted = false
      isReadyRef.current = false
      bitmaps.forEach((b) => b?.close())
      bitmapsRef.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Resize, visibility, input ───────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedMotionRef.current = rm.matches
    const onRm = () => (reducedMotionRef.current = rm.matches)
    rm.addEventListener("change", onRm)

    const markDirty = () => {
      geoDirtyRef.current = true
    }
    window.addEventListener("resize", markDirty, { passive: true })
    window.addEventListener("orientationchange", markDirty, { passive: true })
    const ro = new ResizeObserver(markDirty)
    ro.observe(el)

    // Skip all drawing while the hero is off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) geoDirtyRef.current = true
      },
      { threshold: 0 }
    )
    io.observe(el)

    const setFromX = (clientX: number) => {
      const w = window.innerWidth || 1200
      const norm = Math.max(0, Math.min(1, clientX / w))
      targetRef.current = norm * (setRef.current.count - 1)
    }
    const recentre = () => {
      targetRef.current = centerPos()
    }
    // Mouse/pen drive the robot from anywhere on the page. Touch is handled on
    // the robot itself so scrolling the page never makes it jitter.
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "touch") setFromX(e.clientX)
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) setFromX(e.touches[0].clientX)
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("mouseleave", recentre)
    el.addEventListener("touchmove", onTouchMove, { passive: true })
    el.addEventListener("touchend", recentre, { passive: true })
    el.addEventListener("touchcancel", recentre, { passive: true })

    return () => {
      rm.removeEventListener("change", onRm)
      window.removeEventListener("resize", markDirty)
      window.removeEventListener("orientationchange", markDirty)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("mouseleave", recentre)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", recentre)
      el.removeEventListener("touchcancel", recentre)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      className={`robot-fade relative h-full w-full cursor-ew-resize select-none ${className}`}
      style={{ touchAction: "pan-y" }}
      role="img"
      aria-label="Interactive chrome robot. Move your cursor or drag sideways to turn it."
    >
      {/* One canvas, no filters/shadows/blur — only transform/opacity compositing. */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full bg-transparent" />

      {!isReady && (
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 lg:bottom-16"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-4 py-2 font-mono text-xs text-white/80">
            <span className="h-2 w-2 animate-ping rounded-full bg-[var(--brand)]" aria-hidden="true" />
            Loading… {progress}%
          </div>
        </div>
      )}
    </div>
  )
}
