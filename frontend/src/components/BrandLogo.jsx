"use client"

export function BrandLogo({ className = "", textClassName = "text-white" }) {
  const containerClass = ["flex items-center gap-3", className].filter(Boolean).join(" ")

  return (
    <span className={containerClass} aria-label="ClicksMeta logo">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        className="h-9 w-9 text-white drop-shadow-[0_4px_18px_rgba(31,182,255,0.65)]"
      >
        <path
          fill="currentColor"
          d="M21 6v40.6l6.4-7 7.8 17.7 7.6-2.6-7.1-15.8h13.5L21 6Z"
        />
        <path
          d="M44 7.5 52 3"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 24h10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.5 40 58 45"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={["text-xl font-semibold tracking-tight", textClassName].filter(Boolean).join(" ")}>ClicksMeta</span>
    </span>
  )
}
