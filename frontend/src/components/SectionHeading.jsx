export function SectionHeading({ eyebrow, title, description, align = "left", kickerColor = "text-[#6366f1]" }) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
  }[align]

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className={`section-tag text-[0.65rem] tracking-[0.35em] ${align === "center" ? "justify-center" : ""}`}>
          <span className={`h-2 w-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] ${kickerColor}`} />
          {eyebrow}
        </span>
      )}
      {title && <h2 className="text-balance text-3xl font-semibold text-[#050b1d] sm:text-4xl">{title}</h2>}
      {description && <p className="max-w-2xl text-base text-[#4c5877] sm:text-lg">{description}</p>}
    </div>
  )
}
