import { Logo } from "./logo"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#download" },
  { label: "Pricing", href: "#pricing" },
]
// NOTE: social/legal placeholder links were removed — they pointed at "#"
// and navigated nowhere. Restore them only with real destinations.

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="border-t border-[var(--sneak-border)] px-5 py-10 md:px-10"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--sneak-text)]">SneakAI</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-[var(--sneak-text-3)]">
            An invisible AI copilot for your everyday — interviews, meetings, and beyond.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sneak-text-3)]">
            Product
          </p>
          <ul className="flex flex-col gap-0.5" role="list">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-block py-1.5 text-[13px] text-[var(--sneak-text-2)] transition-colors hover:text-[var(--sneak-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col gap-3 border-t border-[var(--sneak-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-[var(--sneak-text-3)]">
          © {year} SneakAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
