export function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_80px_rgba(10,22,61,0.08)] backdrop-blur ${className}`}
    >
      <div className="pointer-events-none absolute inset-px rounded-[30px] bg-gradient-to-br from-white via-white to-white/60 opacity-80" />
      <div className="relative">{children}</div>
    </div>
  )
}
