"use client"

const palettes = {
  dark: {
    base: "#050c1f",
    pointer: "#f5f7ff",
    rays: "#f5f7ff",
    glow: "rgba(31,182,255,0.35)",
    text: "text-white",
  },
  light: {
    base: "#f5f7ff",
    pointer: "#07122c",
    rays: "#102347",
    glow: "rgba(15,28,63,0.25)",
    text: "text-[#0d1b3d]",
  },
}

const sizePresets = {
  sm: 36,
  md: 44,
  lg: 52,
  xl: 60,
}

export function BrandLogo({
  className = "",
  textClassName,
  iconClassName = "",
  variant = "dark",
  showText = true,
  size = "md",
  textSizeClass = "",
}) {
  const palette = palettes[variant] ?? palettes.dark
  const resolvedSize = typeof size === "number" ? size : sizePresets[size] || sizePresets.md
  const containerClass = ["flex items-center gap-3", className].filter(Boolean).join(" ")
  const computedTextClass = textClassName || palette.text
  const svgClasses = ["drop-shadow-[0_6px_18px_rgba(31,182,255,0.35)]", iconClassName].filter(Boolean).join(" ")

  return (
    <span className={containerClass} aria-label="ClicksMeta logo">
      <span
        className="relative inline-flex items-center justify-center"
        style={{ width: resolvedSize, height: resolvedSize }}
      >
        <span
          className="absolute inset-0 rounded-full blur-2xl"
          style={{ backgroundColor: palette.glow }}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 64 64"
          role="img"
          aria-hidden="true"
          className={svgClasses}
          style={{ width: resolvedSize, height: resolvedSize }}
        >
          <circle cx="32" cy="32" r="28" fill={palette.base} />
          <path d="M21 6v40.6l6.4-7 7.8 17.7 7.6-2.6-7.1-15.8h13.5L21 6Z" fill={palette.pointer} />
          <path d="M44 7.5 52 3" stroke={palette.rays} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 24h10" stroke={palette.rays} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M49.5 40 58 45" stroke={palette.rays} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {showText && (
        <span
          className={[
            "font-semibold tracking-tight",
            computedTextClass,
            textSizeClass || "text-2xl",
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
