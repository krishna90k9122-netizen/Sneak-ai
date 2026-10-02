"use client"

import { useState } from "react"
import { Check, Sparkles, Shield, Zap, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const PLAN_CTA_HREF = "#download"

const plans = [
  {
    name: "Basic",
    monthlyPrice: 39,
    annualPrice: 31,
    period: "/mo",
    tagline: "Perfect to get started",
    features: [
      "Core AI assistance",
      "One app connection",
      "Real-time answers",
      "Standard screen reading",
      "Email support",
    ],
    popular: false,
    cta: "Start with Basic",
  },
  {
    name: "Pro",
    monthlyPrice: 59,
    annualPrice: 47,
    period: "/mo",
    tagline: "Most popular for professionals",
    features: [
      "Everything in Basic",
      "Unlimited connections",
      "Priority sub-280ms responses",
      "Advanced screen reading & code analysis",
      "Custom vocabulary & tone adaptation",
      "Priority 24/7 support",
    ],
    popular: true,
    cta: "Experience Pro",
  },
  {
    name: "Premium",
    monthlyPrice: 99,
    annualPrice: 79,
    period: "/mo",
    tagline: "For teams and power users",
    features: [
      "Everything in Pro",
      "Team workspace & shared profiles",
      "Custom AI model fine-tuning",
      "Multi-monitor support",
      "Dedicated account manager",
      "Custom SLA & onboarding",
    ],
    popular: false,
    cta: "Start with Premium",
  },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative px-5 py-24 md:px-10 md:py-32 bg-[#03050C]">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 600px at 50% 30%, rgba(11,18,48,0.7) 0%, rgba(7,11,24,0.4) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[350px] w-[600px] rounded-full blur-[140px] opacity-15"
          style={{ background: "#00E5FF" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="sneak-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-3 border border-[rgba(0,229,255,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.24em] text-[#00E5FF] uppercase">
              PLANS &amp; PRICING
            </span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#F7FAFF] leading-[1.08] tracking-tight">
            Choose your experience.
          </h2>

          <p className="mt-4 text-sm sm:text-[16px] text-[#A5B2CB] max-w-[540px] leading-relaxed">
            Explore the plan that fits the way you work. All plans include a 7-day risk-free trial.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[rgba(140,190,255,0.2)] bg-[rgba(7,11,24,0.8)] p-1.5 backdrop-blur-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                !isAnnual
                  ? "bg-[#F7FAFF] text-[#03050C] shadow-sm"
                  : "text-[#A5B2CB] hover:text-[#F7FAFF]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                isAnnual
                  ? "bg-gradient-to-r from-[#00E5FF] to-[#1677FF] text-[#03050C] shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  : "text-[#A5B2CB] hover:text-[#F7FAFF]"
              }`}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-[#00E5FF]/20 px-1.5 py-0.2 text-[10px] font-bold text-[#00E5FF]">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-[26px] p-6 sm:p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[rgba(0,229,255,0.5)] bg-gradient-to-b from-[rgba(16,23,56,0.9)] to-[rgba(7,11,24,0.95)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(0,229,255,0.2)] sm:-translate-y-3"
                    : "border border-[rgba(140,190,255,0.18)] bg-[rgba(7,11,24,0.7)] backdrop-blur-xl hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#1677FF] px-3 py-1 text-[11px] font-bold text-[#03050C] shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                    <Sparkles className="h-3 w-3" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[20px] font-bold text-[#F7FAFF]">
                      {plan.name}
                    </h3>
                    <span className="font-mono text-[10px] text-[#00E5FF] uppercase tracking-wider">
                      {plan.popular ? "FULL ACCESS" : "ESSENTIALS"}
                    </span>
                  </div>

                  <p className="mt-1 text-[13px] text-[#A5B2CB]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5 pb-6 border-b border-[rgba(140,190,255,0.12)]">
                    <span className="font-display text-[44px] font-extrabold text-[#F7FAFF] tracking-tight">
                      ${price}
                    </span>
                    <span className="text-[14px] font-medium text-[#7E8BA6]">
                      {plan.period}
                    </span>
                    {isAnnual && (
                      <span className="ml-1 text-[11px] font-mono text-[#00E5FF]">
                        (billed annually)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3" aria-label={`${plan.name} features`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13px] text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00E5FF]" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={PLAN_CTA_HREF}
                    className={`block w-full rounded-full py-3 text-center text-[13px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      plan.popular
                        ? "sneak-btn-light shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:scale-[1.02]"
                        : "sneak-btn-glass hover:border-[#00E5FF]/40 hover:text-white"
                    }`}
                    aria-label={`${plan.cta} at $${price} per month`}
                  >
                    {plan.cta}
                  </a>

                  <p className="mt-2.5 text-center text-[11px] text-[#7E8BA6]">
                    Cancel anytime &bull; 7-day money back guarantee
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
