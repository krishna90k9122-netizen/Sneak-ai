import { Check } from "lucide-react"
import { Reveal } from "./reveal"

// Where the plan buttons go. There is no checkout in this project yet, so they
// lead to the setup steps; point this at your real checkout/sign-up URL.
const PLAN_CTA_HREF = "#download"

const plans = [
  {
    name: "Basic",
    price: 39,
    period: "/mo",
    tagline: "Perfect to get started",
    features: [
      "Core AI assistance",
      "One app connection",
      "Real-time answers",
      "Email support",
    ],
    popular: false,
    cta: "Start with Basic",
  },
  {
    name: "Pro",
    price: 59,
    period: "/mo",
    tagline: "Most popular for professionals",
    features: [
      "Everything in Basic",
      "Unlimited connections",
      "Priority responses",
      "Advanced screen reading",
      "Priority support",
    ],
    popular: true,
    cta: "Start with Pro",
  },
  {
    name: "Premium",
    price: 99,
    period: "/mo",
    tagline: "For teams and power users",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Custom AI tuning",
      "Dedicated support",
    ],
    popular: false,
    cta: "Start with Premium",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sneak-border)] bg-[var(--sneak-surface)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--sneak-text-2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
            Trusted pricing
          </span>
          <span className="rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--brand)]">
            AI-powered plans
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-24">
            <div className="sneak-glass overflow-hidden rounded-[28px] border p-5 shadow-[0_30px_70px_-40px_rgba(14,165,233,0.55)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--sneak-text-2)]">
                <span>Live assistant</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[9px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Online
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--sneak-text-3)]">Faster prep</p>
                  <p className="mt-2 text-[30px] font-extrabold tracking-tight text-[var(--sneak-text)]">3x</p>
                </div>
                <div className="rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--brand)]">
                  AI ready
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--sneak-border)] bg-[#0d1218] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--sneak-text-3)]">Users</div>
                  <div className="mt-2 text-[24px] font-bold text-[var(--sneak-text)]">10K+</div>
                </div>
                <div className="rounded-2xl border border-[var(--sneak-border)] bg-[#0d1218] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--sneak-text-3)]">Uptime</div>
                  <div className="mt-2 text-[24px] font-bold text-[var(--sneak-text)]">99.9%</div>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-[30px] font-extrabold leading-[1.06] tracking-tight sm:text-[38px] lg:text-[46px]">
              <span className="text-[var(--sneak-text)]">Not just faster.</span>
              <br />
              <span className="text-[var(--sneak-text-3)]">Smarter.</span>
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[var(--sneak-text-2)]">
              Join professionals, students, and creators who now get AI-assisted every day.
            </p>
            <p className="mt-6 text-[12px] text-[var(--sneak-text-3)]">
              All plans include a 7-day free trial. No credit card required.
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-3" delay={120}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`sneak-glass relative flex flex-col rounded-2xl border p-5 ${
                  plan.popular
                    ? "border-[var(--sneak-border-strong)] bg-gradient-to-b from-[#141a21] to-[#0b0e12] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.95)] sm:-translate-y-3"
                    : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-[var(--brand)] px-2.5 py-0.5 text-[10px] font-semibold text-[#04121c]">
                    Most Popular
                  </span>
                )}
                <p className="text-[13px] font-semibold text-[var(--sneak-text)]">{plan.name}</p>
                <p className="mt-0.5 text-[11px] text-[var(--sneak-text-3)]">{plan.tagline}</p>
                <p className="mt-3 flex items-baseline gap-1 text-[30px] font-extrabold tracking-tight text-[var(--sneak-text)]">
                  <span>${plan.price}</span>
                  <span className="text-[13px] font-medium text-[var(--sneak-text-3)]">{plan.period}</span>
                </p>

                <ul className="mt-4 flex-1 space-y-2.5" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] text-[var(--sneak-text-2)]">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={PLAN_CTA_HREF}
                  className={`mt-5 block w-full rounded-full py-2.5 text-center text-[13px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60 ${
                    plan.popular ? "sneak-btn-light" : "sneak-btn-glass"
                  }`}
                  aria-label={`${plan.cta} — $${plan.price}${plan.period}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
