"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Reveal } from "./reveal"

export function FinalBrandExperience() {
  return (
    <section
      aria-label="SneakAI Brand Experience"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 py-28 sm:py-40 bg-[#03050C]"
    >
      {/* Cinematic Lighting: Ambient Cyan & Deep Space Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 700px at 50% 50%, rgba(11,18,48,0.9) 0%, rgba(7,11,24,0.7) 40%, #03050C 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full blur-[180px] opacity-25"
          style={{
            background: "radial-gradient(ellipse, #00E5FF 0%, #1677FF 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* 3 Large Editorial Text Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-16 sm:pb-24 border-b border-[rgba(140,190,255,0.14)]">
          {/* Statement 01 */}
          <Reveal delay={0} className="flex flex-col items-start">
            <span className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#00E5FF] uppercase mb-3">
              01 &bull; PERSPECTIVE
            </span>
            <h3 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#F7FAFF] leading-[1.04] tracking-tight">
              Think
              <br />
              <span className="text-white/80">clearly.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#A5B2CB] max-w-[320px]">
              Strip away the cognitive fog. Focus on the core objective while the assistant prepares your foundation.
            </p>
          </Reveal>

          {/* Statement 02 */}
          <Reveal delay={120} className="flex flex-col items-start">
            <span className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#1677FF] uppercase mb-3">
              02 &bull; AUTHORITY
            </span>
            <h3 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#F7FAFF] leading-[1.04] tracking-tight">
              Respond
              <br />
              <span className="text-gradient-cyan">confidently.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#A5B2CB] max-w-[320px]">
              Never struggle for evidence, metrics, or transitions. Deliver structured answers in your authentic voice.
            </p>
          </Reveal>

          {/* Statement 03 */}
          <Reveal delay={240} className="flex flex-col items-start">
            <span className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#A5A9FF] uppercase mb-3">
              03 &bull; ENGAGEMENT
            </span>
            <h3 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#F7FAFF] leading-[1.04] tracking-tight">
              Stay
              <br />
              <span className="text-white/80">present.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#A5B2CB] max-w-[320px]">
              Keep genuine eye contact and read the room. Let technology empower you without creating a barrier.
            </p>
          </Reveal>
        </div>

        {/* Final Brand Call to Action Box */}
        <div className="mt-20 sm:mt-24 text-center">
          <Reveal>
            <div className="sneak-glass relative overflow-hidden rounded-[32px] border border-[rgba(0,229,255,0.3)] bg-gradient-to-b from-[rgba(11,18,48,0.7)] to-[rgba(7,11,24,0.9)] px-6 py-16 sm:px-16 sm:py-20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_50px_rgba(0,229,255,0.15)] backdrop-blur-2xl">
              {/* Subtle top traveling highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-80" />

              <div className="mx-auto max-w-[640px] flex flex-col items-center">
                <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.28em] text-[#00E5FF] uppercase mb-4">
                  YOUR SILENT ADVANTAGE
                </span>

                <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#F7FAFF] leading-[1.06] tracking-tight">
                  Make every conversation count.
                </h2>

                <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[480px] leading-relaxed">
                  Join thousands of leaders, engineers, and creators who elevate their communication with SneakAI.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="#pricing"
                    className="sneak-btn-light group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                  >
                    <span>Experience SneakAI</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#download"
                    className="sneak-btn-glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:border-[#00E5FF]/40 hover:text-white"
                  >
                    Explore How It Works
                  </a>
                </div>

                <p className="mt-5 font-mono text-[11px] text-[#7E8BA6]">
                  Available on macOS &amp; Windows &bull; Instant 2-minute setup
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
