import { ArrowRight } from "lucide-react"
import { StarField } from "./decor"
import { Reveal } from "./reveal"

export function CTA() {
  return (
    <section className="px-5 pb-16 md:px-10 md:pb-24" aria-label="Call to action">
      <div className="sneak-glass relative overflow-hidden rounded-3xl px-6 py-14 md:px-14 md:py-20">
        {/* Background — neutral depth only. The previous blue bloom
            (rgba(70,120,170,0.35) at 80% 120%) sat directly under the
            right-hand buttons and read as a smudge. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(760px 340px at 82% 118%, rgba(148,178,205,0.07) 0%, transparent 62%)",
          }}
          aria-hidden="true"
        />
        {/* 50 twinkling nodes was the heaviest element on the page and read as
            generic space noise rather than brand. 18 keeps the depth cue at a
            fraction of the paint/composite cost. */}
        <StarField count={18} />

        {/* Orbital curve — lowered to a faint neutral so it stays a texture
            rather than a feature competing with the headline. */}
        <svg
          viewBox="0 0 800 300"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M-50 320 Q 400 120 900 -20"
            fill="none"
            stroke="rgba(174,196,216,0.14)"
            strokeWidth="1"
            className="anim-dash"
          />
        </svg>

        <Reveal className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-md text-[24px] font-extrabold leading-[1.15] tracking-tight text-[var(--sneak-text)] sm:text-[28px] lg:text-[32px]">
              Never face an important conversation without SneakAI again.
            </h2>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-[var(--sneak-text-2)]">
              Join thousands of professionals already using SneakAI every day.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="sneak-btn-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#pricing"
              className="sneak-btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
            >
              See Pricing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
