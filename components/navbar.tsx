"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const links = [
  { label: "Home", href: "#home", id: "home", active: true },
  { label: "Features", href: "#features", id: "features" },
  { label: "How It Works", href: "#download", id: "download" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
]
// NOTE: Testimonials/FAQ links were removed — those sections don't exist and
// the links scrolled nowhere. Add them back only with real targets.

const DESKTOP_BREAKPOINT = 1024

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState("home")

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setOpen(false)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Escape closes the mobile menu (keyboard users)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Shadow on scroll + scroll-spy so the active link tracks the section in view
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15)

      // Only sections that actually exist on the page can become active.
      const probe = window.scrollY + window.innerHeight * 0.35
      let current = "home"
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (!el) continue
        if (el.offsetTop <= probe) current = l.id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-[1240px] pointer-events-auto">
        <nav
          className={`flex h-14 items-center justify-between px-5 sm:px-7 rounded-full border bg-[var(--glass-bg-strong)] backdrop-blur-xl transition-all duration-300 ${scrolled
              ? "shadow-[0_10px_34px_-18px_rgba(0,0,0,0.9)] border-[var(--sneak-border-strong)]"
              : "shadow-[0_6px_26px_-18px_rgba(0,0,0,0.8)] border-[var(--glass-border)]"
            }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 rounded-full py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60"
            aria-label="SNEAK AI home"
          >
            <Logo className="h-5 w-5 text-[var(--brand)]" />
            <img
              src="/sneak_ai_brand_logo.png"
              alt="SNEAK AI"
              width={993}
              height={171}
              className="h-4 sm:h-[18px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex" role="list">
            {links.map((l) => (
              <li key={l.label} className="relative">
                <a
                  href={l.href}
                  aria-current={activeId === l.id ? "page" : undefined}
                  className={`relative py-1 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sneak-accent)]/60 ${
                    activeId === l.id
                      ? "text-[var(--brand)] font-semibold"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {l.label}
                  {activeId === l.id && (
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[var(--brand)] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#pricing"
              className="sneak-btn-light flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-semibold"
            >
              <span>Get Started</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="flex h-11 w-11 -mr-2 items-center justify-center rounded-full text-white/80 hover:text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div id="mobile-nav" className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg-strong)] p-5 backdrop-blur-xl lg:hidden shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3" role="list">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  aria-current={activeId === l.id ? "page" : undefined}
                  className={`block py-2.5 text-sm ${
                    activeId === l.id ? "text-[var(--brand)] font-semibold" : "text-white/75 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-[var(--sneak-border)]">
            <a
              href="#pricing"
              className="sneak-btn-light flex items-center justify-center rounded-full py-3 text-xs font-semibold"
              onClick={() => setOpen(false)}
            >
              Get Started →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
