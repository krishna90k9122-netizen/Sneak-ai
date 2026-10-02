"use client"

import { useSyncExternalStore } from "react"
import { RobotSequence } from "./robot-sequence"
import { HeroStatusCard } from "./hero-status-card"
import { Play } from "lucide-react"

// The robot is mounted exactly once, in the place that suits the viewport:
//  • ≥1024px: absolute stage behind the copy (full-bleed hero artwork)
//  • <1024px: in-flow box between the wordmark and the copy, so it can never
//    sit under text/cards (it used to be parked behind the feature card).
// `null` on the server and first client render → nothing mounts, and both
// slots are sized in CSS, so there is no layout shift when it appears.
const DESKTOP_QUERY = "(min-width: 1024px)"
function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY)
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}
function useIsDesktop(): boolean | null {
  return useSyncExternalStore<boolean | null>(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => null
  )
}

export function Hero() {
  const isDesktop = useIsDesktop()
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-between w-full min-h-[92svh] lg:min-h-[96svh] px-4 sm:px-8 lg:px-14 pt-4 pb-4 sm:pb-6 overflow-hidden bg-[var(--sneak-bg)]"
      aria-label="SneakAI Hero Section"
    >
      {/* ── Background: existing artwork, lifted and gently settled ─────────── */}
      {/* No blue wash, no rings, no vignette stack — just a brightness lift so
          the real image is visible, plus one NEUTRAL scrim (edges only) to settle
          the areas the copy sits on. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "var(--sneak-bg)",
            filter: "brightness(1.22) contrast(1.05) saturate(0.9)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(118% 88% at 50% 42%, rgba(5,7,10,0.16) 0%, rgba(5,7,10,0.5) 76%, rgba(5,7,10,0.7) 100%)",
          }}
        />
        {/* Bottom fade — the intentional handoff into the WORKS WITH band.
            z-[5] sits UNDER the robot canvas (z-10), so it only shows through
            the canvas's transparent regions and never dims the robot itself. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[5] h-20"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--sneak-bg) 100%)",
          }}
        />
      </div>

      {/* ── Interactive Robot Sequence Canvas (Z-10) ─────────────────────────── */}
      {/* Subtle ambient glow behind the robot — matches the hero's deep navy
          palette, fades outward so it reads as atmosphere, not an outline.
          z-[5] sits UNDER the canvas (z-10) so it only shows through the
          canvas's transparent regions and never dims the robot itself. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none"
      >
        <div
          className="h-[70%] w-[70%] rounded-[50%] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(56,189,248,0.06) 0%, rgba(30,60,90,0.04) 40%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute inset-0 z-10 hidden lg:flex items-center justify-center pointer-events-none">
        <div className="w-full h-full pointer-events-auto flex items-center justify-center">
          {isDesktop === true && <RobotSequence key="stage" />}
        </div>
      </div>

      {/* ── Foreground Content & Features (Z-30) ─────────────────────────────── */}
      <div className="relative z-30 w-full max-w-[1380px] mx-auto flex-1 flex flex-col justify-between pointer-events-none pt-2 sm:pt-4">
        {/* Top-Right Decorative Corner Text */}
        <div className="w-full flex items-start justify-between">
          <div />
          <div className="border-t-2 border-r-2 border-[var(--brand-line)] pr-3.5 pt-2 text-right">
            <span className="block text-[11px] font-mono tracking-[0.24em] text-white/60 uppercase">
              SMARTER PREPARATION
            </span>
            <span className="block text-[11px] font-mono tracking-[0.24em] text-[var(--brand)] uppercase font-semibold">
              BRIGHTER FUTURE
            </span>
          </div>
        </div>

        {/* ── Badge + Wordmark band (normal flow, so they can never collide) ──
            These used to be independent: an absolutely positioned wordmark
            layer at a percentage of the hero, plus a badge with negative
            offsets. Because the foreground column is vertically centred, the
            clear band between badge and h1 moved with viewport height and the
            wordmark overlapped the h1 at 10 of 22 tested viewports (up to
            23px). Now the badge and the wordmark are siblings and the gap
            below the badge is a real, reserved block whose height is sized to
            the AI wordmark at each breakpoint. */}
        <div className="w-full pt-7 sm:pt-9">
          <div className="w-full flex items-start justify-between gap-4">
            {/* Pill Badge — geometry now comes from the flow, so the previous
                negative offsets (-top-11/-top-13/-top-16) are gone. */}
            <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_8px_var(--brand-glow)]" />
              <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.22em] text-white/80 uppercase">
                YOUR SILENT ADVANTAGE
              </span>
            </div>
          </div>

          {/* Wordmark band. Height >= rendered AI height at each breakpoint
              (AI is the taller of the two, so it governs the band). */}
          <div className="relative mt-3 h-[68px] sm:h-[86px] md:h-[100px] lg:h-[132px]" aria-hidden="true">
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto w-full">
              {/* SNEAK - Left side of robot
                  Source art is a low-saturation metallic ramp (16% sat), so a
                  clean neutral grayscale + a light contrast/brightness lift
                  yields light metallic. Full `brightness()` alone posterises
                  the metal banding. */}
              <div className="w-[168px] sm:w-[280px] md:w-[340px] lg:w-[420px]">
                <img
                  src="/sneak_wordmark_metallic.png"
                  alt="SNEAK"
                  width={749}
                  height={171}
                  className="w-full h-auto object-contain"
                  style={{
                    filter:
                      "grayscale(1) contrast(1.08) brightness(1.26) drop-shadow(0 2px 16px rgba(3,6,10,0.55)) drop-shadow(0 0 22px rgba(190,220,240,0.18))",
                  }}
                />
              </div>

              {/* AI - Right side of robot
                  Source art is 87% saturated electric blue; `grayscale(1)`
                  turned it to flat mud and `brightness(1.45)` then clipped it
                  to a harsh white. `saturate(0.35)` keeps only a controlled
                  cyan tint over a clean light-metallic body, with a single
                  subtle brand glow. */}
              <div className="mr-[8px] sm:mr-[60px] md:mr-[130px] lg:mr-[200px]">
                <img
                  src="/ai_wordmark_electric.png"
                  alt="AI"
                  width={220}
                  height={171}
                  className="w-[76px] sm:w-[100px] md:w-[120px] lg:w-[160px] h-auto object-contain"
                  style={{
                    filter:
                      "saturate(0.35) contrast(1.18) brightness(1.5) drop-shadow(0 2px 16px rgba(3,6,10,0.55)) drop-shadow(0 0 24px rgba(56,189,248,0.24))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* In-flow robot for < lg. Aspect ratio = the robot's own crop box, so the
            slot is reserved before the frames load (no layout shift). */}
        <div
          className="robot-inflow relative z-10 mx-auto mt-1 w-full max-w-[560px] pointer-events-auto lg:hidden"
          style={{ aspectRatio: "746 / 654" }}
        >
          {isDesktop === false && <RobotSequence key="inflow" />}
        </div>

        {/* Middle Main Content Row */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-auto mb-auto py-2">
          {/* Left Hero Content Column */}
          <div className="w-full lg:max-w-[480px] flex flex-col items-start text-left pointer-events-none">
            {/* Eyebrow */}
            <p className="sneak-eyebrow text-[12px] sm:text-[13px] tracking-[0.26em] text-[var(--sneak-text)] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Invisible AI interview copilot
            </p>

            {/* Display headline — answers what/why in one glance */}
            <h1 className="sneak-display mt-3 text-[34px] sm:text-[44px] lg:text-[50px] text-[var(--sneak-text)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              <span className="block">Be brilliant.</span>
              <span className="block text-[var(--sneak-text-3)]">Stay invisible.</span>
            </h1>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-[14px] leading-relaxed text-[var(--sneak-text-2)] max-w-[380px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Get real-time answers, smart suggestions, and confidence — without being noticed.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 pointer-events-auto">
              <a
                href="#pricing"
                className="sneak-btn-light group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs sm:text-[13px] font-semibold shadow-[0_0_24px_rgba(0,229,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
              >
                <span>Experience SneakAI</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#story"
                className="sneak-btn-glass flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-medium transition-all duration-300 hover:border-[var(--brand-line)] hover:bg-[rgba(7,11,24,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)]">
                  <Play className="h-2.5 w-2.5 fill-[var(--brand)] text-[var(--brand)] ml-0.5" />
                </div>
                <span>Explore the Experience</span>
              </a>
            </div>

            {/* Statistics Row */}
            <div className="hero-stats mt-7 flex items-center gap-5 sm:gap-7 pt-4 border-t border-[var(--sneak-border)] w-full max-w-[440px]">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--sneak-text)] tracking-tight">
                  10K+
                </div>
                <div className="text-[11px] font-medium text-[var(--sneak-text-3)] mt-0.5">Active Users</div>
              </div>

              <div className="h-8 w-[1px] bg-[var(--sneak-border)]" />

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--sneak-text)] tracking-tight text-[#00E5FF]">
                  95%
                </div>
                <div className="text-[11px] font-medium text-[var(--sneak-text-3)] mt-0.5">Success Rate</div>
              </div>

              <div className="h-8 w-[1px] bg-[var(--sneak-border)]" />

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--sneak-text)] tracking-tight">
                  4.9★
                </div>
                <div className="text-[11px] font-medium text-[var(--sneak-text-3)] mt-0.5">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side: Floating AI Status Interface */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end pointer-events-none mt-6 lg:mt-0">
            <HeroStatusCard />
          </div>
        </div>

        {/* Bottom Bar: Bottom Corner Accents & Scroll Indicator */}
        <div className="w-full flex items-end justify-between pt-2">
          {/* Bottom-Left Corner Accent */}
          <div className="border-b-2 border-l-2 border-[var(--brand-line)] pl-3.5 pb-2 text-left">
            <span className="block text-[11px] font-mono tracking-[0.24em] text-white/60 uppercase">
              MORE THAN ANSWERS
            </span>
            <span className="block text-[11px] font-mono tracking-[0.24em] text-[var(--brand)] uppercase font-semibold">
              A SMARTER YOU
            </span>
          </div>

          {/* Center Scroll Indicator */}
          <a
            href="#story"
            aria-label="Scroll to experience"
            className="flex flex-col items-center gap-2 pointer-events-auto cursor-pointer pb-1 transition-opacity hover:opacity-80"
          >
            <div className="flex h-7 w-4 justify-center rounded-full border border-white/25 p-1">
              <span className="h-1.5 w-1 rounded-full bg-[var(--brand)] animate-bounce" />
            </div>
          </a>

          {/* Bottom-Right Corner Accent */}
          <div className="border-b-2 border-r-2 border-[var(--brand-line)] pr-3.5 pb-2 text-right">
            <span className="block text-[11px] font-mono tracking-[0.24em] text-white/60 uppercase">
              POWERED BY AI
            </span>
            <span className="block text-[11px] font-mono tracking-[0.24em] text-[var(--brand)] uppercase font-semibold">
              FOR YOUR SUCCESS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
