import { Download, Link2, Sparkles } from "lucide-react"
import { LaptopShowcase } from "./laptop-showcase"
import { Reveal } from "./reveal"

const steps = [
  {
    n: 1,
    icon: Download,
    title: "Download & launch",
    desc: "Get SneakAI running in seconds. Available for Mac and Windows.",
  },
  {
    n: 2,
    icon: Link2,
    title: "Connect your AI ally",
    desc: "Tune the assistant to your workflow and preferred apps.",
  },
  {
    n: 3,
    icon: Sparkles,
    title: "Start using",
    desc: "Get real-time help without interruptions — stay in your flow.",
  },
]

export function Workflow() {
  return (
    <section
      id="download"
      className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28"
    >
      {/* Atmospheric background — dark navy/black gradient matching the hero */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(10,16,28,0.9) 0%, rgba(5,7,10,0.95) 50%, var(--sneak-bg) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle top fade from hero */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, var(--sneak-bg) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section label */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sneak-border)] bg-[var(--sneak-surface)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--sneak-text-2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
          How it works
        </span>

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[30px] font-extrabold leading-[1.08] tracking-tight text-[var(--sneak-text)] sm:text-[38px] lg:text-[46px]">
              Simple. Seamless. Secure.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-[var(--sneak-text-2)]">
              Get started in minutes and stay on track without disrupting your workflow.
            </p>

            <div className="relative mt-12">
              {/* Connecting line — thin cyan, solid, centered on the 40px nodes */}
              <div
                className="absolute left-[19.5px] top-3 hidden h-[calc(100%-24px)] w-px sm:block"
                style={{
                  background:
                    "linear-gradient(180deg, var(--brand-line) 0%, var(--sneak-border) 100%)",
                }}
                aria-hidden="true"
              />
              <ol className="space-y-8" aria-label="Setup steps">
                {steps.map(({ n, icon: Icon, title, desc }) => (
                  <li key={n} className="relative flex items-start gap-5">
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)] shadow-[0_0_12px_rgba(56,189,248,0.12)]"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4 text-[var(--brand)]" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--brand)] text-[9px] font-bold text-[#04121c] shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                        {n}
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[15px] font-semibold leading-snug text-[var(--sneak-text)]">{title}</h3>
                      <p className="mt-1.5 text-[13px] leading-[1.65] text-[var(--sneak-text-2)]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <a
                  href="#pricing"
                  className="sneak-btn-light inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <LaptopShowcase />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
