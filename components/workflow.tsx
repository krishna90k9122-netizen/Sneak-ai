"use client"

import { useState } from "react"
import { Download, Link2, Sparkles, Check, Apple, Monitor, ChevronRight } from "lucide-react"
import { LaptopShowcase } from "./laptop-showcase"
import { Reveal } from "./reveal"

const steps = [
  {
    n: 1,
    icon: Download,
    title: "Download & launch",
    subtitle: "STEP 01",
    desc: "Get SneakAI running in seconds. Available for Mac and Windows.",
    badge: "Native Client",
  },
  {
    n: 2,
    icon: Link2,
    title: "Connect your AI",
    subtitle: "STEP 02",
    desc: "Tune the assistant to your workflow and preferred apps.",
    badge: "Instant Sync",
  },
  {
    n: 3,
    icon: Sparkles,
    title: "Start using",
    subtitle: "STEP 03",
    desc: "Get real-time help without interruptions — stay in your flow.",
    badge: "Live Teleprompter",
  },
]

export function Workflow() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section
      id="download"
      aria-label="How it works"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32 bg-[#03050C]"
    >
      {/* Atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(11,18,48,0.7) 0%, rgba(7,11,24,0.9) 50%, #03050C 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Section label */}
        <div className="flex flex-col items-start">
          <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-3 border border-[rgba(0,229,255,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold leading-[1.08] tracking-tight text-[#F7FAFF]">
            Simple. Seamless. Secure.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] sm:text-[16px] leading-relaxed text-[#A5B2CB]">
            Get started in minutes and stay on track without disrupting your workflow.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              {/* Stepper container with vertical connecting line */}
              <div className="relative">
                {/* Vertical connecting line - accurately centered on 48px icon nodes */}
                <div
                  className="absolute left-[43px] top-[44px] bottom-[72px] hidden w-[2px] sm:block pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, #00E5FF 0%, rgba(0,229,255,0.4) 60%, rgba(140,190,255,0.1) 100%)",
                    boxShadow: "0 0 10px rgba(0,229,255,0.25)",
                  }}
                  aria-hidden="true"
                />

                <div className="space-y-6" role="list">
                  {steps.map(({ n, icon: Icon, title, subtitle, desc, badge }) => {
                    const isSelected = activeStep === n
                    return (
                      <div
                        key={n}
                        onClick={() => setActiveStep(n)}
                        className={`cursor-pointer group relative flex items-start gap-5 rounded-2xl border p-5 transition-all duration-300 ${
                          isSelected
                            ? "border-[rgba(0,229,255,0.4)] bg-[rgba(0,229,255,0.06)] shadow-[0_10px_30px_-10px_rgba(0,229,255,0.18)]"
                            : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                        }`}
                      >
                        {/* Step Indicator Node */}
                        <div
                          className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isSelected
                              ? "border-[#00E5FF] bg-[#070B1E] text-[#00E5FF] shadow-[0_0_18px_rgba(0,229,255,0.35)]"
                              : "border-white/10 bg-[#060A17] text-[#A5B2CB]"
                          }`}
                          aria-hidden="true"
                        >
                          <Icon className="h-5 w-5" />
                          <span
                            className={`absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                              isSelected
                                ? "bg-[#00E5FF] text-[#03050C]"
                                : "bg-[#0B1230] text-[#A5B2CB] border border-white/20"
                            }`}
                          >
                            {n}
                          </span>
                        </div>

                        <div className="flex-1 pt-0.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold tracking-wider text-[#00E5FF] uppercase">
                              {subtitle}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-[#A5B2CB]">
                              {badge}
                            </span>
                          </div>
                          <h3 className="mt-1 text-[16px] sm:text-[17px] font-bold leading-snug text-[#F7FAFF]">
                            {title}
                          </h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-[#A5B2CB]">
                            {desc}
                          </p>

                          {/* Interactive Step Preview Detail */}
                          {isSelected && n === 1 && (
                            <div className="mt-3 flex items-center gap-3 pt-2 text-xs font-medium text-white/90">
                              <span className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2.5 py-1">
                                <Apple className="h-3.5 w-3.5 text-[#00E5FF]" /> macOS (Apple Silicon &amp; Intel)
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2.5 py-1">
                                <Monitor className="h-3.5 w-3.5 text-[#00E5FF]" /> Windows 10 &amp; 11
                              </span>
                            </div>
                          )}

                          {isSelected && n === 2 && (
                            <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-[#00E5FF]">
                              <span className="rounded bg-[#00E5FF]/10 px-2 py-0.5">&bull; Google Meet</span>
                              <span className="rounded bg-[#00E5FF]/10 px-2 py-0.5">&bull; Zoom</span>
                              <span className="rounded bg-[#00E5FF]/10 px-2 py-0.5">&bull; Teams</span>
                              <span className="rounded bg-[#00E5FF]/10 px-2 py-0.5">&bull; Slack</span>
                            </div>
                          )}

                          {isSelected && n === 3 && (
                            <div className="mt-3 flex items-center gap-2 pt-2 text-xs text-[#F7FAFF] font-medium">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Zero lag screen interpretation &bull; Real-time bullet responses</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Button - Outside stepper so connecting line never overlaps */}
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#pricing"
                  className="sneak-btn-light inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-[0_0_24px_rgba(0,229,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
                >
                  <span>Experience SneakAI</span>
                  <ChevronRight className="h-4 w-4" />
                </a>

                <span className="text-xs text-[#7E8BA6]">
                  7-day free trial &bull; 2-minute setup
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right side Laptop Mockup */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px]">
              <LaptopShowcase />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
