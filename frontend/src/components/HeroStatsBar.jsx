"use client"

import { useEffect, useState } from "react"
import { useCountUp } from "@/hooks/use-in-view"

const bottomStats = [
  { label: "Active Users", end: 10000, suffix: "+", caption: "Marketers worldwide" },
  { label: "Campaigns Tracked", end: 50000, suffix: "+", caption: "Performance workflows" },
  { label: "Revenue Generated", end: 312, suffix: "M+", caption: "Attributed revenue" },
  { label: "Countries", end: 180, suffix: "+", caption: "Global coverage" },
]

export function HeroStatsBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const count0 = useCountUp(bottomStats[0].end, 2000, mounted)
  const count1 = useCountUp(bottomStats[1].end, 2200, mounted)
  const count2 = useCountUp(bottomStats[2].end, 1800, mounted)
  const count3 = useCountUp(bottomStats[3].end, 1600, mounted)
  const counts = [count0, count1, count2, count3]

  return (
    <section className="relative border-t border-white/5 bg-[#020617] py-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#2563eb]/20 blur-[140px]" />
        <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-[#7c3aed]/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bottomStats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center backdrop-blur-sm"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {stat.label === "Revenue Generated" ? "$" : ""}
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm text-white/50">{stat.caption}</p>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70" />
              <p className="mt-3 text-xs font-semibold text-emerald-300/80">Realtime synced metrics</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

