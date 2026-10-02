"use client"

import { useState } from "react"
import { Eye, EyeOff, ShieldCheck, Monitor, Sparkles, Lock, Cpu, Radio } from "lucide-react"
import { Reveal } from "./reveal"

export function ChapterInvisible() {
  const [viewMode, setViewMode] = useState<"assistant" | "workspace">("assistant")

  return (
    <section
      id="invisible"
      aria-label="Chapter 06 - Invisible"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 py-24 sm:py-32 bg-[#03050C]"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Midnight Blue Deep Space Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 50% 40%, rgba(11,18,48,0.85) 0%, rgba(7,11,24,0.6) 50%, #03050C 100%)",
          }}
        />

        {/* Ambient cyan light pulse */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[850px] rounded-full blur-[180px] opacity-25 pointer-events-none"
          style={{
            background:
              viewMode === "assistant"
                ? "radial-gradient(ellipse, #00E5FF 0%, #1677FF 60%, transparent 80%)"
                : "radial-gradient(ellipse, #1677FF 0%, transparent 60%)",
            transition: "all 0.6s ease-in-out",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Chapter Header */}
        <Reveal className="flex flex-col items-center text-center">
          <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border border-[rgba(0,229,255,0.25)] shadow-[0_0_20px_rgba(0,229,255,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
              CHAPTER 06 — INVISIBLE
            </span>
          </div>

          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#F7FAFF] leading-[1.06] tracking-tight">
            Only you can see it.
          </h2>

          <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[620px] leading-relaxed">
            SneakAI operates on a private hardware graphics layer. Screen recorders, meeting capture tools, and shared screens only see your clean workspace.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <div className="inline-flex rounded-full border border-[rgba(140,190,255,0.22)] bg-[rgba(7,11,24,0.85)] p-1.5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]">
              <button
                type="button"
                onClick={() => setViewMode("assistant")}
                className={`flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-[13px] font-semibold transition-all duration-300 focus:outline-none ${
                  viewMode === "assistant"
                    ? "bg-gradient-to-r from-[#00E5FF] to-[#1677FF] text-[#03050C] shadow-[0_0_24px_rgba(0,229,255,0.45)]"
                    : "text-[#A5B2CB] hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Assistant View</span>
                <span className="hidden sm:inline text-[10px] opacity-80 font-mono">(What only you see)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("workspace")}
                className={`flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-[13px] font-semibold transition-all duration-300 focus:outline-none ${
                  viewMode === "workspace"
                    ? "bg-white/15 text-[#F7FAFF] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "text-[#A5B2CB] hover:text-white"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>Interviewer View</span>
                <span className="hidden sm:inline text-[10px] opacity-75 font-mono">(100% clean stream)</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-[#7E8BA6] tracking-wide flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Toggle view to compare live
            </span>
          </div>
        </Reveal>

        {/* 3D Photorealistic Laptop Showcase Stage */}
        <Reveal delay={150} className="mt-12 relative mx-auto max-w-[1040px]">
          {/* Ambient Ground Glow */}
          <div
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-[180px] w-[80%] rounded-[50%] blur-3xl opacity-50"
            style={{
              background:
                viewMode === "assistant"
                  ? "radial-gradient(ellipse, rgba(0,229,255,0.3) 0%, rgba(22,119,255,0.15) 50%, transparent 80%)"
                  : "radial-gradient(ellipse, rgba(22,119,255,0.2) 0%, transparent 70%)",
              transition: "all 0.6s ease",
            }}
          />

          {/* Outer Glass Card Container */}
          <div className="relative rounded-3xl border border-[rgba(140,190,255,0.18)] bg-gradient-to-b from-[rgba(11,18,48,0.7)] to-[rgba(7,11,24,0.95)] p-4 sm:p-7 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_50px_-15px_rgba(0,229,255,0.15)] backdrop-blur-2xl overflow-hidden">
            {/* Top Bar with Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(140,190,255,0.12)] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="h-4 w-[1px] bg-white/10" />
                <span className="font-mono text-[11px] sm:text-[12px] text-white/80 flex items-center gap-1.5">
                  <Radio className="h-3 w-3 text-[#00E5FF] animate-pulse" />
                  Live Meeting Simulation &bull; MacBook Pro 16&quot;
                </span>
              </div>

              <div className="flex items-center gap-2">
                {viewMode === "assistant" ? (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-3 py-1 font-mono text-[11px] font-semibold text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                    <EyeOff className="h-3.5 w-3.5" />
                    <span>STEALTH HUD ACTIVE (ONLY YOU)</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400">
                    <Eye className="h-3.5 w-3.5" />
                    <span>SHARED SCREEN (100% CLEAN)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Laptop Showcase Visual */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-[rgba(140,190,255,0.15)] bg-[#03050C]">
              {/* Image Transition Box */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {/* Assistant View Image */}
                <img
                  src="/laptop-stealth-hud.jpg"
                  alt="SneakAI Stealth Assistant on 3D Laptop"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    viewMode === "assistant" ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]"
                  }`}
                  style={{
                    filter: "contrast(1.04) brightness(1.02)",
                  }}
                />

                {/* Workspace / Clean View Image */}
                <img
                  src="/laptop-clean.jpg"
                  alt="Interviewer Clean View on 3D Laptop"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    viewMode === "workspace" ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"
                  }`}
                  style={{
                    filter: "contrast(1.04) brightness(1.02)",
                  }}
                />

                {/* Interactive Floating Pill Badges Over the 3D Stage */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/15 bg-[rgba(7,11,24,0.85)] shadow-lg">
                    <Lock className="h-3 w-3 text-[#00E5FF]" />
                    <span className="font-mono text-[10px] text-white/90">
                      {viewMode === "assistant" ? "Discreet Private Overlay" : "Clean Window Capture Stream"}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:block">
                  <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/15 bg-[rgba(7,11,24,0.85)] shadow-lg">
                    <Cpu className="h-3 w-3 text-emerald-400" />
                    <span className="font-mono text-[10px] text-white/90">
                      GPU Hardware Pass-through &bull; 0ms Delay
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Feature Highlights */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[rgba(140,190,255,0.12)]">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)]">
                  <ShieldCheck className="h-4 w-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F7FAFF]">Zero Window Trace</h4>
                  <p className="text-[11px] text-[#A5B2CB] mt-0.5 leading-relaxed">
                    Completely invisible to Zoom, Google Meet, Microsoft Teams, and OBS screen capture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)]">
                  <Cpu className="h-4 w-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F7FAFF]">Direct GPU Overlay</h4>
                  <p className="text-[11px] text-[#A5B2CB] mt-0.5 leading-relaxed">
                    Rendered directly on your personal display panel via private compositing buffer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)]">
                  <Sparkles className="h-4 w-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F7FAFF]">Instant Real-Time Cues</h4>
                  <p className="text-[11px] text-[#A5B2CB] mt-0.5 leading-relaxed">
                    Concise talking points, metrics, and key answers displayed naturally in your field of view.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Final Chapter Statement */}
        <Reveal className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <h3 className="font-display text-[26px] sm:text-[34px] font-bold text-[#F7FAFF] tracking-tight">
              Powerful assistance. Minimal distraction.
            </h3>
            <p className="mt-2 text-sm text-[#A5B2CB] max-w-[460px]">
              No awkward second screen. No frantic alt-tabbing. Stay completely present in the discussion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
