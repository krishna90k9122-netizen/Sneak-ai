"use client"

import { useState } from "react"
import { Zap, EyeOff, Laptop, Shield, ArrowRight, ExternalLink } from "lucide-react"
import { Reveal } from "./reveal"

// ─── Official Brand SVG Icons ──────────────────────────────────────────────────
function GoogleMeetIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="12" fill="#2D8CFF" />
      <path d="M6 9.5C6 8.67 6.67 8 7.5 8H13.5C14.33 8 15 8.67 15 9.5V14.5C15 15.33 14.33 16 13.5 16H7.5C6.67 16 6 15.33 6 14.5V9.5Z" fill="white" />
      <path d="M15.5 10.8L18 8.8C18.25 8.6 18.6 8.78 18.6 9.1V14.9C18.6 15.22 18.25 15.4 18 15.2L15.5 13.2V10.8Z" fill="white" />
    </svg>
  )
}

function TeamsIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.5-3a1.5 1.5 0 00-1.5-1.5H5.5a1.5 1.5 0 000 3H7a1.5 1.5 0 001.5-1.5z" fill="#E01E5A" />
      <path d="M10.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-3 2.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0V10a1.5 1.5 0 00-1.5-1.5z" fill="#36C5F0" />
      <path d="M18 13.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.5 3a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 000-3H17a1.5 1.5 0 00-1.5 1.5z" fill="#2EB67D" />
      <path d="M13.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm3-2.5a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-3 0V14a1.5 1.5 0 001.5 1.5z" fill="#ECB22E" />
    </svg>
  )
}

function NotionIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="white" />
      <path d="M6.5 6.8L15.2 6.2c.7-.05 1 .3 1 .9v10c0 .6-.3.9-.9.9L6.5 18c-.6 0-.8-.3-.8-.9V7.7c0-.6.2-.9.8-.9z" fill="white" stroke="#111" strokeWidth="0.8" />
      <path d="M8.5 8.5v7l4-5.5v5.5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17.5 2.5L7.2 10.7 3.5 8 2 8.8l2.8 3.2L2 15.2l1.5.8 3.7-2.7 10.3 8.2c.8.6 1.9.1 1.9-.9V3.4c0-1-1.1-1.5-1.9-.9z" fill="#0066B8" />
      <path d="M17.5 2.5L9.8 9.2l1.6 1.4 6.1-4.8V2.5z" fill="#007ACC" />
      <path d="M17.5 21.5l-7.7-6.7 1.6-1.4 6.1 4.8v3.3z" fill="#1F8AD2" />
    </svg>
  )
}

const INTEGRATIONS = [
  { name: "Google Meet", icon: GoogleMeetIcon },
  { name: "Zoom", icon: ZoomIcon },
  { name: "Microsoft Teams", icon: TeamsIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Notion", icon: NotionIcon },
  { name: "VS Code", icon: VSCodeIcon },
]

const FEATURE_CARDS = [
  {
    id: "01",
    icon: Zap,
    title: "Real-time AI Answers",
    description: "Get relevant suggestions and structured responses when you need them.",
    highlight: "< 280ms Low Latency",
    color: "#00E5FF",
  },
  {
    id: "02",
    icon: EyeOff,
    title: "Undetectable Design",
    description: "Designed for a discreet assistant experience, with clear privacy controls.",
    highlight: "Zero Screen Trace",
    color: "#1677FF",
  },
  {
    id: "03",
    icon: Laptop,
    title: "Works Everywhere",
    description: "Explore the possibilities across your favorite productivity applications.",
    highlight: "Universal Overlay",
    color: "#A5A9FF",
  },
  {
    id: "04",
    icon: Shield,
    title: "Boosts Confidence",
    description: "Stay prepared, think clearly, and communicate with confidence.",
    highlight: "Calm Authority",
    color: "#00E5FF",
  },
]

export function ClaritySection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section
      id="features"
      aria-label="Features and Integrations"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 pt-8 pb-24 sm:pb-32 bg-[#03050C]"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 500px at 50% 0%, rgba(11,18,48,0.6) 0%, rgba(7,11,24,0.3) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* ── 09: INTEGRATION SHOWCASE ("Fits into your workflow.") ───────────── */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-[11px] font-mono tracking-[0.28em] text-[#00E5FF] uppercase font-semibold">
              FITS INTO YOUR WORKFLOW
            </span>
          </div>

          {/* Integration Ribbon with smooth hover illumination */}
          <div className="w-full max-w-[1120px] rounded-full border border-[rgba(140,190,255,0.18)] bg-[rgba(7,11,24,0.7)] p-2 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]">
            <div className="flex flex-wrap items-center justify-around gap-y-3 px-4 py-2">
              {INTEGRATIONS.map((item, idx) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className="group flex items-center gap-2.5 rounded-full px-3 py-1.5 text-xs sm:text-[13px] font-medium text-white/80 transition-all duration-300 hover:text-white hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                    <item.icon />
                    <span>{item.name}</span>
                  </div>
                  {idx < INTEGRATIONS.length - 1 && (
                    <span className="hidden md:inline-block h-3.5 w-[1px] bg-white/10" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 08: FEATURES SECTION ("More clarity. Less distraction.") ────────── */}
        <div className="mt-24 sm:mt-32">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border border-[rgba(0,229,255,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
                CORE CAPABILITIES
              </span>
            </div>

            <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#F7FAFF] leading-[1.08] tracking-tight">
              More clarity. Less distraction.
            </h2>

            <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[620px] leading-relaxed">
              SneakAI quietly gives you real-time answers wherever you work — in interviews, meetings, or deep focus sessions.
            </p>
          </div>

          {/* 4 Visually Distinctive Feature Cards */}
          <Reveal className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_CARDS.map((card) => {
              const isHovered = hoveredCard === card.id
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`sneak-glass-card group relative flex flex-col justify-between rounded-[24px] p-6 transition-all duration-300 min-h-[260px] ${
                    isHovered
                      ? "border-[rgba(0,229,255,0.4)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.18)] -translate-y-1.5"
                      : "hover:border-white/20"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + ID */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300"
                        style={{
                          borderColor: `${card.color}40`,
                          backgroundColor: `${card.color}12`,
                          color: card.color,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#7E8BA6]">
                        {card.id}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-[17px] font-bold text-[#F7FAFF] tracking-wide">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-relaxed text-[#A5B2CB]">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: Highlight Badge + Minimal Directional Arrow */}
                  <div className="mt-6 pt-3 border-t border-[rgba(140,190,255,0.1)] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00E5FF] tracking-wider uppercase font-semibold">
                      {card.highlight}
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#A5B2CB] transition-all duration-200 group-hover:border-[#00E5FF]/40 group-hover:bg-[#00E5FF]/10 group-hover:text-[#00E5FF]">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
