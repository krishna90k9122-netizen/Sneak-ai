"use client"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* currentColor-driven so the brand accent actually applies (the previous
          fixed gradient made the caller's text colour a no-op). */}
      <path
        d="M16 3.2 28 10v12L16 28.8 4 22V10L16 3.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path d="M16 3.2 28 10 16 16.4 4 10 16 3.2Z" fill="currentColor" opacity="0.22" />
      <path
        d="M16 16.4V28.8M16 16.4 28 10M16 16.4 4 10"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.55"
      />
    </svg>
  )
}
