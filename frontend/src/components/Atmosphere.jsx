export function Atmosphere({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] soft-grid" />
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4f46e5]/20 blur-[180px]" />
        <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-[#f472b6]/15 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#34d399]/20 blur-[220px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
