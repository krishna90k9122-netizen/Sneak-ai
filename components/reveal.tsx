"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// Reveal — restrained scroll entrance for section headers and cards.
// Progressive enhancement: if IntersectionObserver is unavailable the content
// renders visible (no .rv class applied until observed... instead we render
// visible-first and only hide once the observer is attached, so no-JS and
// reduced-motion users always see content).
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") return
    // Arm (hide) only once we can actually observe — avoids a flash of
    // hidden content when IO is missing.
    setArmed(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${armed && !inView ? "rv" : ""} ${inView ? "rv-in" : ""} ${className}`}
      style={delay && inView ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
