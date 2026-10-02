"use client"

export function StarField({ count = 40, className = "" }: { count?: number; className?: string }) {
  const stars = Array.from({ length: count }).map((_, i) => {
    const seed = (i * 9301 + 49297) % 233280
    const x = (seed / 233280) * 100
    const y = (((seed * 7) % 233280) / 233280) * 100
    const s = ((seed % 3) + 1) * 0.6
    const delay = (seed % 40) / 10
    return { x, y, s, delay }
  })
  return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        {stars.map((st, i) => (
          <span
            key={i}
            className="anim-twinkle absolute rounded-full bg-white/70"
            style={{
              left: `${st.x}%`,
              top: `${st.y}%`,
              width: `${st.s}px`,
              height: `${st.s}px`,
              animationDelay: `${st.delay}s`,
            }}
          />
        ))}
      </div>
  )
}
