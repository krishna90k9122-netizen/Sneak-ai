"use client"

import { useState } from "react"
import { ListOrdered, Compass, Sparkles, Copy, Check, MessageSquare, ArrowRight, CornerDownRight } from "lucide-react"
import { Reveal } from "./reveal"

export function IntelligentResponse() {
  const [activePoint, setActivePoint] = useState(1)
  const [copied, setCopied] = useState(false)
  const [activeContextTab, setActiveContextTab] = useState(0)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contextExamples = [
    {
      theySaid: "We need to improve our customer retention before the Q3 fundraise.",
      keyContext: "Customer Satisfaction & Churn Analysis",
      followUp: "What specific feedback patterns have emerged from recent cancellations?",
    },
    {
      theySaid: "The timeline for this infrastructure rollout seems aggressive given our current headcount.",
      keyContext: "Resource Allocation & Risk Management",
      followUp: "Which milestones would you prioritize if we staged the deployment in two phases?",
    },
  ]

  return (
    <section
      id="capabilities"
      aria-label="Intelligent Response System"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 py-24 sm:py-32 bg-[#03050C]"
    >
      {/* Background Lighting: Subtle Cyan & Midnight Navy Radial */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 50% 50%, rgba(11,18,48,0.7) 0%, rgba(7,11,24,0.4) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-10 top-20 h-72 w-72 rounded-full blur-[140px] opacity-20"
          style={{ background: "#00E5FF" }}
        />
        <div
          className="absolute left-10 bottom-20 h-72 w-72 rounded-full blur-[140px] opacity-15"
          style={{ background: "#1677FF" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border border-[rgba(0,229,255,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
              INTELLIGENT RESPONSE SYSTEM
            </span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#F7FAFF] leading-[1.08] tracking-tight">
            Clarity, when it matters most.
          </h2>

          <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[580px] leading-relaxed">
            Turn complex conversations into clear, organized thoughts. Three intuitive capabilities engineered for calm authority.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* ────────────────── CARD 01: TALKING POINTS ────────────────── */}
          <Reveal className="flex flex-col h-full" delay={60}>
            <div className="sneak-glass-card group flex flex-col justify-between h-full rounded-[24px] p-6 sm:p-7 transition-all duration-300 hover:border-[rgba(0,229,255,0.35)] hover:-translate-y-1">
              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(0,229,255,0.25)] bg-[rgba(0,229,255,0.08)] text-[#00E5FF]">
                    <ListOrdered className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] tracking-wider text-[#00E5FF]/80 uppercase">
                    CARD 01
                  </span>
                </div>

                <h3 className="font-display mt-5 text-[22px] font-bold text-[#F7FAFF]">
                  Stay on track.
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-[#A5B2CB]">
                  Three things to mention, in order, without losing the thread.
                </p>

                {/* Visual Timeline Interface */}
                <div className="mt-6 rounded-2xl border border-[rgba(140,190,255,0.14)] bg-[rgba(3,5,12,0.6)] p-4 sm:p-5">
                  <div className="relative pl-6 space-y-4">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[9px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#00E5FF] via-[rgba(140,190,255,0.3)] to-transparent" />

                    {/* Point 1 */}
                    <button
                      onClick={() => setActivePoint(1)}
                      className={`relative w-full text-left transition-all duration-200 focus:outline-none ${
                        activePoint === 1 ? "opacity-100" : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <span
                        className={`absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border transition-all duration-300 ${
                          activePoint === 1
                            ? "border-[#00E5FF] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                            : "border-white/30 bg-[#070B18]"
                        }`}
                      />
                      <div className="rounded-xl border border-[rgba(140,190,255,0.1)] bg-[rgba(7,11,24,0.6)] p-2.5">
                        <span className="font-mono text-[10px] text-[#00E5FF] font-bold">01 &bull; ANCHOR</span>
                        <p className="text-[12px] font-medium text-[#F7FAFF] mt-0.5">
                          Introduce your key idea
                        </p>
                      </div>
                    </button>

                    {/* Point 2 */}
                    <button
                      onClick={() => setActivePoint(2)}
                      className={`relative w-full text-left transition-all duration-200 focus:outline-none ${
                        activePoint === 2 ? "opacity-100" : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <span
                        className={`absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border transition-all duration-300 ${
                          activePoint === 2
                            ? "border-[#00E5FF] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                            : "border-white/30 bg-[#070B18]"
                        }`}
                      />
                      <div className="rounded-xl border border-[rgba(140,190,255,0.1)] bg-[rgba(7,11,24,0.6)] p-2.5">
                        <span className="font-mono text-[10px] text-[#00E5FF] font-bold">02 &bull; EVIDENCE</span>
                        <p className="text-[12px] font-medium text-[#F7FAFF] mt-0.5">
                          Support it with relevant context
                        </p>
                      </div>
                    </button>

                    {/* Point 3 */}
                    <button
                      onClick={() => setActivePoint(3)}
                      className={`relative w-full text-left transition-all duration-200 focus:outline-none ${
                        activePoint === 3 ? "opacity-100" : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <span
                        className={`absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border transition-all duration-300 ${
                          activePoint === 3
                            ? "border-[#00E5FF] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                            : "border-white/30 bg-[#070B18]"
                        }`}
                      />
                      <div className="rounded-xl border border-[rgba(140,190,255,0.1)] bg-[rgba(7,11,24,0.6)] p-2.5">
                        <span className="font-mono text-[10px] text-[#00E5FF] font-bold">03 &bull; TRANSITION</span>
                        <p className="text-[12px] font-medium text-[#F7FAFF] mt-0.5">
                          End with your next point
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(140,190,255,0.1)] flex items-center justify-between text-[11px] text-[#7E8BA6]">
                <span>Click steps to simulate</span>
                <span className="text-[#00E5FF] font-mono">Sequential Flow</span>
              </div>
            </div>
          </Reveal>

          {/* ────────────────── CARD 02: CONTEXT ────────────────── */}
          <Reveal className="flex flex-col h-full" delay={120}>
            <div className="sneak-glass-card group flex flex-col justify-between h-full rounded-[24px] p-6 sm:p-7 transition-all duration-300 hover:border-[rgba(0,229,255,0.35)] hover:-translate-y-1">
              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(22,119,255,0.25)] bg-[rgba(22,119,255,0.08)] text-[#1677FF]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] tracking-wider text-[#1677FF]/90 uppercase">
                    CARD 02
                  </span>
                </div>

                <h3 className="font-display mt-5 text-[22px] font-bold text-[#F7FAFF]">
                  Understand the moment.
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-[#A5B2CB]">
                  What the other side said, what they care about, what to ask next.
                </p>

                {/* Context Analyzer Panel */}
                <div className="mt-6 rounded-2xl border border-[rgba(140,190,255,0.14)] bg-[rgba(3,5,12,0.6)] p-4 sm:p-5 space-y-3.5">
                  {/* They Said */}
                  <div className="rounded-xl border border-[rgba(140,190,255,0.1)] bg-[rgba(7,11,24,0.6)] p-3">
                    <span className="font-mono text-[10px] text-[#A5A9FF] font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <MessageSquare className="h-3 w-3" />
                      THEY SAID
                    </span>
                    <p className="mt-1.5 text-[12px] text-white/90 italic leading-snug">
                      &ldquo;{contextExamples[activeContextTab].theySaid}&rdquo;
                    </p>
                  </div>

                  {/* Connection Node Indicator */}
                  <div className="flex items-center justify-center -my-1 text-[#00E5FF]">
                    <CornerDownRight className="h-4 w-4 opacity-50" />
                  </div>

                  {/* Key Context */}
                  <div className="rounded-xl border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.05)] p-3">
                    <span className="font-mono text-[10px] text-[#00E5FF] font-bold tracking-wider uppercase">
                      KEY CONTEXT
                    </span>
                    <p className="mt-1 text-[13px] font-semibold text-[#00E5FF]">
                      {contextExamples[activeContextTab].keyContext}
                    </p>
                  </div>

                  {/* Possible Follow-Up */}
                  <div className="rounded-xl border border-[rgba(140,190,255,0.1)] bg-[rgba(7,11,24,0.6)] p-3">
                    <span className="font-mono text-[10px] text-[#A5B2CB] font-bold tracking-wider uppercase">
                      POSSIBLE FOLLOW-UP
                    </span>
                    <p className="mt-1 text-[12px] font-medium text-[#F7FAFF] leading-snug">
                      &ldquo;{contextExamples[activeContextTab].followUp}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Toggle Example */}
              <div className="mt-5 pt-3 border-t border-[rgba(140,190,255,0.1)] flex items-center justify-between text-[11px] text-[#7E8BA6]">
                <button
                  onClick={() => setActiveContextTab((prev) => (prev === 0 ? 1 : 0))}
                  className="inline-flex items-center gap-1 text-[#00E5FF] font-semibold hover:underline"
                >
                  <span>Switch scenario</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
                <span className="font-mono">Insight Graph</span>
              </div>
            </div>
          </Reveal>

          {/* ────────────────── CARD 03: STRUCTURED RESPONSES ────────────────── */}
          <Reveal className="flex flex-col h-full" delay={180}>
            <div className="sneak-glass-card group flex flex-col justify-between h-full rounded-[24px] p-6 sm:p-7 transition-all duration-300 hover:border-[rgba(0,229,255,0.35)] hover:-translate-y-1">
              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(165,169,255,0.25)] bg-[rgba(165,169,255,0.08)] text-[#A5A9FF]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] tracking-wider text-[#A5A9FF] uppercase">
                    CARD 03
                  </span>
                </div>

                <h3 className="font-display mt-5 text-[22px] font-bold text-[#F7FAFF]">
                  Find your words.
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-[#A5B2CB]">
                  A clear, structured answer — written in your voice.
                </p>

                {/* Animated Response Preview Window */}
                <div className="mt-6 rounded-2xl border border-[rgba(140,190,255,0.14)] bg-[rgba(3,5,12,0.6)] p-4 sm:p-5 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
                        <span className="font-mono text-[10px] text-[#00E5FF] font-bold tracking-wider">
                          GENERATED ANSWER
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#7E8BA6]">
                        NATURAL VOICE
                      </span>
                    </div>

                    <div className="space-y-2 text-[12px] sm:text-[13px] text-[#F7FAFF] leading-relaxed">
                      <p>
                        &ldquo;We prioritized latency reduction by shifting state verification to client edge caches.&rdquo;
                      </p>
                      <p className="text-[#A5B2CB]">
                        &ldquo;This eliminated 60% of database contention during peak load while keeping data consistency absolute.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Copy Action + Status Bar */}
                  <div className="mt-4 pt-3 border-t border-[rgba(140,190,255,0.1)] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#00E5FF]">
                      <Check className="h-3.5 w-3.5 text-[#00E5FF]" />
                      Response complete
                    </span>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(140,190,255,0.2)] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#F7FAFF] hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 transition-colors"
                      aria-label="Copy sample response"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-[#00E5FF]" />
                          <span className="text-[#00E5FF]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(140,190,255,0.1)] flex items-center justify-between text-[11px] text-[#7E8BA6]">
                <span>Voice Calibration</span>
                <span className="text-[#A5A9FF] font-mono">Zero Robot Tone</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
