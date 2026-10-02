"use client"

import { useState, useEffect } from "react"
import { Mic, Eye, Sparkles, CheckCircle2, ChevronRight, Activity } from "lucide-react"

interface StatusStep {
  id: number
  label: string
  sublabel: string
  detail: string
  icon: typeof Mic
  color: string
}

const STATUS_STEPS: StatusStep[] = [
  {
    id: 0,
    label: "LISTENING...",
    sublabel: "Reading screen...",
    detail: "Screen audio & active window captured seamlessly",
    icon: Mic,
    color: "#00E5FF",
  },
  {
    id: 1,
    label: "UNDERSTANDING CONTEXT...",
    sublabel: "Analyzing relevant information...",
    detail: "Cross-referencing domain context & discussion objectives",
    icon: Eye,
    color: "#1677FF",
  },
  {
    id: 2,
    label: "THINKING...",
    sublabel: "Preparing a structured response...",
    detail: "Synthesizing concise talking points in your voice",
    icon: Sparkles,
    color: "#A5A9FF",
  },
  {
    id: 3,
    label: "RESPONSE READY",
    sublabel: "A clear answer is ready.",
    detail: "3 structured talking points prepared for immediate delivery",
    icon: CheckCircle2,
    color: "#00E5FF",
  },
]

export function HeroStatusCard() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-cycle through the 4 states smoothly
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STATUS_STEPS.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [isPaused])

  const current = STATUS_STEPS[activeStep]

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="pointer-events-auto w-full sm:w-[360px] md:w-[380px] rounded-2xl border border-[rgba(140,190,255,0.22)] bg-[rgba(7,11,24,0.85)] p-4 sm:p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9),0_0_30px_-10px_rgba(0,229,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[rgba(0,229,255,0.4)]"
      aria-label="SneakAI Status Demonstration"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[rgba(140,190,255,0.14)] pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: current.color }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: current.color }}
            />
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#F7FAFF] uppercase">
            SNEAK STATUS
          </span>
        </div>

        {/* Live Audio / Frequency Monitor */}
        <div className="flex items-center gap-1 rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.06)] px-2.5 py-0.5">
          <Activity className="h-3 w-3 text-[#00E5FF] animate-pulse" />
          <span className="font-mono text-[9px] font-semibold tracking-wider text-[#00E5FF] uppercase">
            LIVE &bull; 0ms TRACE
          </span>
        </div>
      </div>

      {/* Step Progress Indicators */}
      <div className="mt-3.5 grid grid-cols-4 gap-1.5">
        {STATUS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep
          const isDone = idx < activeStep
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className="group flex flex-col gap-1 text-left focus:outline-none"
              aria-label={`Select step ${step.label}`}
            >
              <div
                className={`h-1.5 w-full rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00E5FF] to-[#1677FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]"
                    : isDone
                    ? "bg-[#00E5FF]/40"
                    : "bg-white/10 group-hover:bg-white/20"
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* Main Status Display Area */}
      <div className="mt-4 rounded-xl border border-[rgba(140,190,255,0.12)] bg-[rgba(3,5,12,0.6)] p-3.5 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 shadow-[0_0_15px_-3px_currentColor]"
              style={{
                borderColor: `${current.color}55`,
                backgroundColor: `${current.color}15`,
                color: current.color,
              }}
            >
              <current.icon className="h-5 w-5" />
            </div>

            <div>
              <p
                className="font-mono text-[12px] font-bold tracking-[0.14em] uppercase transition-colors duration-300"
                style={{ color: current.color }}
              >
                {current.label}
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-[#F7FAFF]">
                {current.sublabel}
              </p>
            </div>
          </div>

          {/* Dynamic Waveform for Listening */}
          {activeStep === 0 && (
            <div className="flex h-6 items-center gap-0.5">
              {[40, 90, 60, 100, 75, 45, 80].map((h, i) => (
                <span
                  key={i}
                  className="w-[2.5px] rounded-full bg-[#00E5FF] animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.12}s`,
                    animationDuration: "0.9s",
                  }}
                />
              ))}
            </div>
          )}

          {/* Dynamic Progress Indicator for Thinking */}
          {activeStep === 2 && (
            <div className="flex h-6 items-center">
              <span className="flex h-2 w-2 rounded-full bg-[#A5A9FF] animate-ping" />
            </div>
          )}
        </div>

        {/* Detail statement */}
        <p className="mt-2.5 text-[11px] leading-relaxed text-[#A5B2CB]">
          {current.detail}
        </p>

        {/* Live response preview when ready */}
        {activeStep === 3 && (
          <div className="mt-3 rounded-lg border border-[rgba(0,229,255,0.25)] bg-[rgba(0,229,255,0.05)] p-2.5 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#00E5FF]">
              <span>RESPONSE PREVIEW</span>
              <span className="rounded bg-[#00E5FF]/20 px-1.5 py-0.5 font-bold">READY</span>
            </div>
            <p className="mt-1.5 text-[12px] text-[#F7FAFF] leading-snug font-medium">
              &ldquo;Lead with the architecture refactor, cite the 42% latency win, then invite their feedback.&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="mt-3 flex items-center justify-between pt-1">
        <span className="text-[10px] text-[#7E8BA6] font-mono">
          Step {activeStep + 1} of 4 &bull; {isPaused ? "Paused" : "Auto-advancing"}
        </span>
        <button
          onClick={() => setActiveStep((prev) => (prev + 1) % STATUS_STEPS.length)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00E5FF] transition-colors hover:text-white"
        >
          <span>Next state</span>
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
