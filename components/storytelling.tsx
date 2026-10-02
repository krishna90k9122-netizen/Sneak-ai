"use client"

import { useState, useEffect } from "react"
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Check, Clock } from "lucide-react"
import { Reveal } from "./reveal"

interface StoryStage {
  id: number
  kicker: string
  title: string
  subtitle: string
  badge: string
}

const STORY_STAGES: StoryStage[] = [
  {
    id: 1,
    kicker: "THE SCENARIO",
    title: "A difficult question.",
    subtitle: "The interviewer leans forward. A high-stakes inquiry hangs in the air.",
    badge: "00:04 SILENCE",
  },
  {
    id: 2,
    kicker: "THE ACTIVATION",
    title: "A long silence.",
    subtitle: "Heart rate rises. Words scatter. Quietly, SneakAI detects the moment.",
    badge: "REAL-TIME SYNTHESIS",
  },
  {
    id: 3,
    kicker: "THE ADVANTAGE",
    title: "SneakAI appears.",
    subtitle: "Not essays or robotic scripts. Just three punchy anchors in your natural voice.",
    badge: "CONFIDENCE RESTORED",
  },
]

export function Storytelling() {
  const [activeStage, setActiveStage] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev % 3) + 1)
    }, 4500)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section
      id="story"
      aria-label="The Storytelling Experience"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 py-24 sm:py-32 bg-[#03050C]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Atmosphere: Electric Cyan & Deep Navy Scrim */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Navy depth wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 550px at 50% 30%, rgba(11,18,48,0.75) 0%, rgba(3,5,12,0.95) 70%, #03050C 100%)",
          }}
        />

        {/* Soft cyan beam at center */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[600px] rounded-full blur-[120px] opacity-25"
          style={{
            background: "radial-gradient(ellipse, #00E5FF 0%, #1677FF 50%, transparent 80%)",
          }}
        />

        {/* Hairline grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(140,190,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(140,190,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Section Pill Kicker & Headline */}
        <Reveal className="flex flex-col items-center text-center">
          <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border border-[rgba(0,229,255,0.25)] shadow-[0_0_20px_rgba(0,229,255,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
              THE STORYTELLING EXPERIENCE
            </span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#F7FAFF] leading-[1.08] tracking-tight max-w-[880px]">
            What if you never ran out of the{" "}
            <span className="text-gradient-cyan">right words?</span>
          </h2>

          <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[620px] leading-relaxed">
            A difficult question. A long silence. Quietly, SneakAI appears. The moment you need clarity the most is exactly when traditional tools fail.
          </p>
        </Reveal>

        {/* Interactive Story Timeline Controls */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-[rgba(140,190,255,0.18)] bg-[rgba(7,11,24,0.7)] p-1.5 backdrop-blur-xl">
            {STORY_STAGES.map((s) => {
              const isActive = activeStage === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`relative rounded-full px-4 sm:px-6 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "text-[#03050C] shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                      : "text-[#A5B2CB] hover:text-[#F7FAFF]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#1677FF]" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="font-mono text-[10px] opacity-80">0{s.id}</span>
                    <span>{s.title.replace(".", "")}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Central Cinematic Scene Box */}
        <div className="mt-10 relative rounded-3xl border border-[rgba(140,190,255,0.2)] bg-gradient-to-b from-[rgba(11,18,48,0.7)] to-[rgba(7,11,24,0.9)] p-6 sm:p-10 lg:p-14 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9),0_0_50px_-15px_rgba(0,229,255,0.15)] backdrop-blur-2xl">
          {/* Traveling Laser Light Beam */}
          <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
            <div className="laser-beam h-full w-48 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_12px_#00E5FF]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side: Editorial narrative */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] tracking-wider uppercase">
                <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>{STORY_STAGES[activeStage - 1].badge}</span>
              </div>

              <h3 className="font-display mt-4 text-[26px] sm:text-[34px] font-bold text-[#F7FAFF] leading-snug">
                {STORY_STAGES[activeStage - 1].title}
              </h3>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#A5B2CB]">
                {STORY_STAGES[activeStage - 1].subtitle}
              </p>

              {/* Story Stage Highlights */}
              <div className="mt-6 space-y-3 w-full border-t border-[rgba(140,190,255,0.12)] pt-5">
                {activeStage === 1 && (
                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#A5B2CB]">
                    <Clock className="h-4 w-4 text-[#A5A9FF] shrink-0" />
                    <span>The silence feels amplified while your mind races.</span>
                  </div>
                )}

                {activeStage === 2 && (
                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#00E5FF]">
                    <Sparkles className="h-4 w-4 text-[#00E5FF] shrink-0 animate-spin" />
                    <span>SneakAI parses the question context in under 280ms.</span>
                  </div>
                )}

                {activeStage === 3 && (
                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#00E5FF]">
                    <ShieldCheck className="h-4 w-4 text-[#00E5FF] shrink-0" />
                    <span>Invisible overlay delivers calm, structured talking points.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right side: Live Simulated Scene Interface */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-2xl border border-[rgba(140,190,255,0.2)] bg-[#03050C]/90 p-5 sm:p-6 shadow-2xl">
                {/* Simulated Window Chrome */}
                <div className="flex items-center justify-between border-b border-[rgba(140,190,255,0.1)] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-[11px] text-[#A5B2CB]/70">
                      Interview Stream &bull; Live Session
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00E5FF] rounded bg-[#00E5FF]/10 px-2 py-0.5 border border-[#00E5FF]/20">
                    PROTECTED HUD
                  </span>
                </div>

                {/* Content: Stage 1 Prompt */}
                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-[rgba(140,190,255,0.12)] bg-[rgba(11,18,48,0.4)] p-4">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#A5A9FF] uppercase tracking-wider">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Interviewer (VP of Engineering)</span>
                    </div>
                    <p className="mt-2 text-[14px] sm:text-[15px] font-medium text-[#F7FAFF] leading-relaxed">
                      &ldquo;Can you explain how you designed the distributed consensus model when primary nodes partition, and what trade-offs you accepted?&rdquo;
                    </p>
                  </div>

                  {/* Stage 2 & 3: SneakAI Silent Overlay */}
                  <div
                    className={`rounded-xl border transition-all duration-500 p-4 ${
                      activeStage === 1
                        ? "border-dashed border-white/10 bg-white/[0.02] opacity-40"
                        : activeStage === 2
                        ? "border-[#00E5FF]/30 bg-[rgba(0,229,255,0.05)] shadow-[0_0_25px_rgba(0,229,255,0.12)]"
                        : "border-[#00E5FF]/50 bg-gradient-to-br from-[rgba(0,229,255,0.1)] to-[rgba(7,11,24,0.9)] shadow-[0_0_35px_rgba(0,229,255,0.22)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
                        <span className="font-mono text-[11px] font-bold tracking-wider text-[#00E5FF] uppercase">
                          SNEAKAI SILENT TELEPROMPTER
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#A5B2CB]">
                        {activeStage === 1 ? "STANDBY" : activeStage === 2 ? "PARSING CONTEXT..." : "READY TO SPEAK"}
                      </span>
                    </div>

                    {activeStage === 1 && (
                      <p className="mt-3 text-xs text-[#A5B2CB]/60 italic">
                        Waiting for speech pause...
                      </p>
                    )}

                    {activeStage === 2 && (
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-[#00E5FF] to-[#1677FF] animate-pulse" />
                        </div>
                        <p className="text-[12px] font-mono text-[#A5B2CB]">
                          Analyzing: Distributed Consensus &bull; Raft vs PBFT &bull; Partition Recovery
                        </p>
                      </div>
                    )}

                    {activeStage === 3 && (
                      <div className="mt-3 space-y-2 animate-in fade-in duration-300">
                        <div className="flex items-start gap-2.5 text-[13px] text-[#F7FAFF]">
                          <span className="font-mono text-[#00E5FF] font-bold shrink-0">01</span>
                          <span>Start with the Raft leader election lease and heartbeat timeout threshold.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-[13px] text-[#F7FAFF]">
                          <span className="font-mono text-[#00E5FF] font-bold shrink-0">02</span>
                          <span>Highlight the explicit trade-off: strong consistency over immediate availability (CAP CP).</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-[13px] text-[#F7FAFF]">
                          <span className="font-mono text-[#00E5FF] font-bold shrink-0">03</span>
                          <span>Conclude with how split-brain was prevented via quorum fencing tokens.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Core Statement */}
        <Reveal delay={100} className="mt-20 sm:mt-28 relative max-w-[900px] mx-auto">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[80%] rounded-[50%] blur-3xl opacity-35"
            style={{
              background: "radial-gradient(ellipse, rgba(0,229,255,0.25) 0%, rgba(22,119,255,0.1) 50%, transparent 80%)",
            }}
          />

          <div className="relative rounded-3xl border border-[rgba(140,190,255,0.2)] bg-gradient-to-b from-[rgba(11,18,48,0.75)] to-[rgba(7,11,24,0.92)] p-8 sm:p-12 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(0,229,255,0.15)] backdrop-blur-2xl overflow-hidden text-center">
            {/* Travelling laser light hairline */}
            <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
              <div className="laser-beam h-full w-48 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_12px_#00E5FF]" />
            </div>

            {/* Header Content */}
            <div className="max-w-[680px] mx-auto">
              <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-3.5 py-1 mb-4 border border-[rgba(0,229,255,0.25)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
                  COGNITIVE CLARITY &bull; ZERO ESSAYS
                </span>
              </div>

              <h3 className="font-display text-[32px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#F7FAFF] tracking-tight leading-[1.06]">
                <span>Not paragraphs.</span>
                <br />
                <span className="text-gradient-cyan">Just confidence.</span>
              </h3>

              <p className="mt-4 text-base sm:text-lg text-[#A5B2CB] font-normal leading-relaxed">
                A clear, structured answer — written in your voice.
              </p>
            </div>

            {/* Bottom Proof Metrics */}
            <div className="mt-8 pt-6 border-t border-[rgba(140,190,255,0.12)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-[720px] mx-auto">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E5FF]">&lt; 0.4s</div>
                <div className="text-[11px] text-[#A5B2CB] mt-1 font-medium">Glance Cognitive Load</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">3 Anchors</div>
                <div className="text-[11px] text-[#A5B2CB] mt-1 font-medium">Punchy Speaking Points</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E5FF]">100%</div>
                <div className="text-[11px] text-[#A5B2CB] mt-1 font-medium">Your Authentic Voice</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
