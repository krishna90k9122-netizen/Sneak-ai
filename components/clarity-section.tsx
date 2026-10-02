"use client"

import { Zap, EyeOff, Laptop, Shield, Mic, Camera, Check, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

// ─── Official Brand SVG Icons ──────────────────────────────────────────────────
function GoogleMeetIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M14 8V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-3l6 4.5V4.5L14 8z" fill="#00832d" />
      <path d="M14 9l6-4.5v15L14 15V9z" fill="#00ac47" />
      <path d="M14 5H3c-.55 0-1 .45-1 1v3h12V5z" fill="#ea4335" />
      <path d="M14 9H2v6h12V9z" fill="#0066da" />
      <path d="M14 15H2v4c0 .55.45 1 1 1h11v-5z" fill="#2684fc" />
      <path d="M14 9h-5v6h5V9z" fill="#ffba00" />
    </svg>
  )
}

function ZoomIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="12" fill="#2D8CFF" />
      <path d="M6 9.5C6 8.67 6.67 8 7.5 8H13.5C14.33 8 15 8.67 15 9.5V14.5C15 15.33 14.33 16 13.5 16H7.5C6.67 16 6 15.33 6 14.5V9.5Z" fill="white" />
      <path d="M15.5 10.8L18 8.8C18.25 8.6 18.6 8.78 18.6 9.1V14.9C18.6 15.22 18.25 15.4 18 15.2L15.5 13.2V10.8Z" fill="white" />
    </svg>
  )
}

function TeamsIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M14.5 9.5C15.88 9.5 17 8.38 17 7C17 5.62 15.88 4.5 14.5 4.5C13.12 4.5 12 5.62 12 7C12 8.38 13.12 9.5 14.5 9.5Z" fill="#5059C9" />
      <path d="M17.5 10.5H12C11.17 10.5 10.5 11.17 10.5 12V16.5C10.5 16.78 10.72 17 11 17H18C18.28 17 18.5 16.78 18.5 16.5V11.5C18.5 10.95 18.05 10.5 17.5 10.5Z" fill="#5059C9" />
      <path d="M9 11.5C10.38 11.5 11.5 10.38 11.5 9C11.5 7.62 10.38 6.5 9 6.5C7.62 6.5 6.5 7.62 6.5 9C6.5 10.38 7.62 11.5 9 11.5Z" fill="#7B83EB" />
      <path d="M12 12.5H5.5C4.67 12.5 4 13.17 4 14V17.5C4 17.78 4.22 18 4.5 18H12.5C12.78 18 13 17.78 13 17.5V13.5C13 12.95 12.55 12.5 12 12.5Z" fill="#7B83EB" />
      <rect x="5.5" y="10" width="7" height="9" rx="1.5" fill="#4B53BC" />
      <path d="M7.5 12.5H10.5M9 12.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SlackIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M6 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.5-3a1.5 1.5 0 00-1.5-1.5H5.5a1.5 1.5 0 000 3H7a1.5 1.5 0 001.5-1.5z" fill="#E01E5A" />
      <path d="M10.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-3 2.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0V10a1.5 1.5 0 00-1.5-1.5z" fill="#36C5F0" />
      <path d="M18 13.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.5 3a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 000-3H17a1.5 1.5 0 00-1.5 1.5z" fill="#2EB67D" />
      <path d="M13.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm3-2.5a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-3 0V14a1.5 1.5 0 001.5 1.5z" fill="#ECB22E" />
    </svg>
  )
}

function NotionIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="white" />
      <path d="M6.5 6.8L15.2 6.2c.7-.05 1 .3 1 .9v10c0 .6-.3.9-.9.9L6.5 18c-.6 0-.8-.3-.8-.9V7.7c0-.6.2-.9.8-.9z" fill="white" stroke="#111" strokeWidth="0.8" />
      <path d="M8.5 8.5v7l4-5.5v5.5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2.5L7.2 10.7 3.5 8 2 8.8l2.8 3.2L2 15.2l1.5.8 3.7-2.7 10.3 8.2c.8.6 1.9.1 1.9-.9V3.4c0-1-1.1-1.5-1.9-.9z" fill="#0066B8" />
      <path d="M17.5 2.5L9.8 9.2l1.6 1.4 6.1-4.8V2.5z" fill="#007ACC" />
      <path d="M17.5 21.5l-7.7-6.7 1.6-1.4 6.1 4.8v3.3z" fill="#1F8AD2" />
    </svg>
  )
}

// ─── Audio Waveform Component ──────────────────────────────────────────────────
function AnimatedWaveform() {
  const heights = [
    0.35, 0.7, 0.45, 0.9, 0.6, 1.0, 0.5, 0.85, 0.4, 0.95, 0.65, 0.8, 0.45, 0.9,
    0.55, 0.75, 0.35,
  ]
  return (
    <div className="flex h-9 items-center gap-[3.5px] px-1">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[var(--brand)] opacity-70 animate-pulse"
          style={{
            height: `${Math.round(h * 100)}%`,
            animationDelay: `${(i * 0.1).toFixed(2)}s`,
            animationDuration: "1.2s",
          }}
        />
      ))}
    </div>
  )
}

export function ClaritySection() {
  return (
    <section
      id="features"
      aria-label="Features and Integrations"
      /* Tight to the hero: the WORKS WITH band continues the hero (its label
         sits ~5px below the robot's bottom edge on desktop, verified by
         measurement). lg:-mt-5 overlaps only the hero's empty bottom scrim —
         never the robot, the corner accents, or the scroll cue. */
      className="relative w-full px-4 sm:px-8 lg:px-14 pt-2 lg:-mt-5 pb-20 overflow-hidden"
    >
      {/* ── Background: one soft NEUTRAL depth wash ──────────────────────────
          Removed: 3 large blue radial blobs, a masked dot-grid, two neon
          gradient "light trail" paths and two pinging node dots. They stacked
          into visible cyan noise behind the copy and fought the accent. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 50% 0%, rgba(148,178,205,0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* ── 1. Top "WORKS WITH" Bar ────────────────────────────────────────── */}
        <div className="w-full flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono tracking-[0.28em] text-[var(--brand)] uppercase font-semibold mb-1">
            WORKS WITH
          </span>

          <div className="sneak-glass w-full max-w-[1040px] lg:max-w-[1120px] rounded-full px-6 sm:px-10 py-3 flex flex-wrap items-center justify-between gap-y-3">
            {/* Google Meet */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <GoogleMeetIcon />
              <span>Google Meet</span>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-[var(--sneak-border)]" />

            {/* Zoom */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <ZoomIcon />
              <span>Zoom</span>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-[var(--sneak-border)]" />

            {/* Microsoft Teams */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <TeamsIcon />
              <span>Microsoft Teams</span>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-[var(--sneak-border)]" />

            {/* Slack */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <SlackIcon />
              <span>Slack</span>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-[var(--sneak-border)]" />

            {/* Notion */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <NotionIcon />
              <span>Notion</span>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-[var(--sneak-border)]" />

            {/* VS Code */}
            <div className="flex items-center gap-2.5 text-white/75 font-medium text-[13px]">
              <VSCodeIcon />
              <span>VS Code</span>
            </div>
          </div>
        </div>

        {/* ── 2. Middle Section: Left Heading + Right Interactive Status Panel ── */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Column */}
          <Reveal className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Features Badge */}
            <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_8px_var(--brand-glow)]" />
              <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-white/80 uppercase">
                FEATURES
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight leading-[1.06]">
              <span className="text-[var(--sneak-text)] block">
                More clarity.
              </span>
              <span className="text-[var(--sneak-text-3)] block mt-1">
                Less distraction.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-[var(--sneak-text-2)] max-w-[460px]">
              SneakAI quietly gives you real-time answers wherever you work — in interviews, meetings, or deep focus sessions.
            </p>
          </Reveal>

          {/* Right Status Panel Column */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Removed: the decorative vertical neon gradient trace with 3 glowing
                nodes. It sat in the gutter, introduced a second accent colour
                (emerald) as pure decoration, and read as leftover noise. The
                status cards carry the meaning on their own. */}

            {/* 3 Status Cards Stack */}
            <Reveal className="flex w-full max-w-[460px] flex-col gap-4" delay={120}>
              {/* Card 1: Listening... */}
              <div className="sneak-glass rounded-[22px] p-4 sm:p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-[var(--sneak-border-strong)] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)]">
                    <Mic className="h-5 w-5 text-[var(--brand)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--sneak-text)] leading-tight">
                      Listening...
                    </h3>
                    <p className="text-[12px] text-[var(--sneak-text-3)] mt-0.5 truncate">
                      Understanding your screen
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <AnimatedWaveform />
                </div>
              </div>

              {/* Card 2: Generating response... */}
              <div className="sneak-glass rounded-[22px] p-4 sm:p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-[var(--sneak-border-strong)] flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)]">
                  <Camera className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[var(--sneak-text)] leading-tight">
                    Generating response...
                  </h4>
                  <div className="mt-3 w-full space-y-2">
                    {/* Primary progress meter */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                      <div className="h-full w-[68%] rounded-full bg-[var(--brand)] opacity-80" />
                    </div>
                    {/* Secondary meter — full-width track so it reads as a
                        deliberate second line, not a broken half-empty bar */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                      <div className="h-full w-[48%] rounded-full bg-[var(--brand)] opacity-45" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Ready */}
              <div className="sneak-glass rounded-[22px] p-4 sm:p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-[rgba(16,185,129,0.45)] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(16,185,129,0.35)] bg-[rgba(16,185,129,0.12)]">
                    <Check className="h-5 w-5 text-[#10b981]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--sneak-text)] leading-tight">
                      Ready
                    </h3>
                    <p className="text-[12px] text-[var(--sneak-text-3)] mt-0.5 truncate">
                      Response ready to use
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pr-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── 3. Bottom Row: 4 Glowing Feature Cards ─────────────────────────── */}
        <Reveal className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Real-time AI Answers */}
          <div className="sneak-glass group relative rounded-[22px] p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[var(--sneak-border-strong)] hover:-translate-y-1 flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-[var(--sneak-text)] tracking-wide">
                Real-time AI Answers
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] text-[var(--sneak-text-3)] leading-relaxed">
                Get instant, accurate solutions during interviews, meetings, or any screen activity.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--sneak-border)] bg-white/[0.03] text-[var(--sneak-text-2)] transition-all duration-200 group-hover:border-[var(--brand-line)] group-hover:bg-[var(--brand-soft)] group-hover:text-[var(--brand)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Undetectable */}
          <div className="sneak-glass group relative rounded-[22px] p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[var(--sneak-border-strong)] hover:-translate-y-1 flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-[var(--sneak-text)] tracking-wide">
                Undetectable
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] text-[var(--sneak-text-3)] leading-relaxed">
                Runs silently in the background — no screen sharing, no noise, no risk.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--sneak-border)] bg-white/[0.03] text-[var(--sneak-text-2)] transition-all duration-200 group-hover:border-[var(--brand-line)] group-hover:bg-[var(--brand-soft)] group-hover:text-[var(--brand)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Works Everywhere */}
          <div className="sneak-glass group relative rounded-[22px] p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[var(--sneak-border-strong)] hover:-translate-y-1 flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-[var(--sneak-text)] tracking-wide">
                Works Everywhere
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] text-[var(--sneak-text-3)] leading-relaxed">
                Use it on Google Meet, Zoom, Teams, Slack, Notion, VS Code and more.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--sneak-border)] bg-white/[0.03] text-[var(--sneak-text-2)] transition-all duration-200 group-hover:border-[var(--brand-line)] group-hover:bg-[var(--brand-soft)] group-hover:text-[var(--brand)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 4: Boosts Confidence */}
          <div className="sneak-glass group relative rounded-[22px] p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[var(--sneak-border-strong)] hover:-translate-y-1 flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-[var(--sneak-text)] tracking-wide">
                Boosts Confidence
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] text-[var(--sneak-text-3)] leading-relaxed">
                Stay prepared, think clearly, and perform your best in every situation.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--sneak-border)] bg-white/[0.03] text-[var(--sneak-text-2)] transition-all duration-200 group-hover:border-[var(--brand-line)] group-hover:bg-[var(--brand-soft)] group-hover:text-[var(--brand)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
