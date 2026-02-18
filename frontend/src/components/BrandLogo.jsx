"use client"

const sizePresets = {
  sm: 32,
  md: 44,
  lg: 56,
  xl: 68,
}

export function BrandLogo({
  className = "",
  pointerClassName = "text-[#2622f4]",
  textClassName,
  showText = true,
  size = "md",
  textSizeClass = "",
}) {
  const resolvedSize = typeof size === "number" ? size : sizePresets[size] || sizePresets.md
  const containerClass = ["flex items-center gap-3", className].filter(Boolean).join(" ")
  const iconClasses = ["drop-shadow-[0_12px_20px_rgba(38,34,244,0.45)]", pointerClassName].filter(Boolean).join(" ")
  const computedTextClass = textClassName || pointerClassName

  return (
    <span className={containerClass} aria-label="ClicksMeta logo">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        className={iconClasses}
        style={{ width: resolvedSize, height: resolvedSize }}
      >
        <path d="M7 6v39.4l10.3-10.7 13.6 29.5 12.4-4.6-11.7-25.9h23.7L7 6Z" fill="currentColor" />
        <path d="M43 6 56 1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 26h16" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 44l12 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {showText && (
        <span
          className={[
            "font-semibold tracking-tight",
            computedTextClass,
            textSizeClass || "text-3xl",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          ClicksMeta
        </span>
      )}
    </span>
  )
}
