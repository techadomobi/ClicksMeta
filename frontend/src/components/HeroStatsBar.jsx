"use client"

import { useCountUp, useInView } from "@/hooks/use-in-view"

const stats = [
  { label: "Campaign briefs built", value: 950, suffix: "+", caption: "Reusable OffersMeta layouts" },
  { label: "Creative variants shipped", value: 4200, suffix: "+", caption: "Across vertical pages" },
  { label: "Avg. time on page", value: 3, suffix: "m 12s", caption: "After UI refresh" },
  { label: "Conversion lift", value: 37, suffix: "%", caption: "When recreating OffersMeta flow" },
]

export function HeroStatsBar() {
  const { ref, isInView } = useInView(0.2)
  const count0 = useCountUp(stats[0].value, 2000, isInView)
  const count1 = useCountUp(stats[1].value, 2000, isInView)
  const count3 = useCountUp(stats[3].value, 2000, isInView)

  return (
    <section className="px-4 pb-8 pt-4 sm:px-6">
      <div
        ref={ref}
        className="mx-auto flex max-w-6xl flex-wrap gap-4 rounded-[32px] border border-[#e4e8ff] bg-white/90 p-6 shadow-[0_25px_80px_rgba(8,18,68,0.08)] backdrop-blur"
      >
        <StatCard stat={stats[0]} value={count0} />
        <StatCard stat={stats[1]} value={count1} />
        <StatCard stat={stats[2]} value={stats[2].value} />
        <StatCard stat={stats[3]} value={count3} />
      </div>
    </section>
  )
}

function StatCard({ stat, value }) {
  const display = stat.label === "Avg. time on page" ? `${stat.value}${stat.suffix}` : `${Number(value).toLocaleString()}${stat.suffix}`
  return (
    <div className="flex flex-1 min-w-[220px] flex-col gap-1 rounded-[24px] border border-[#edf0ff] bg-[#f8f9ff] px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">{stat.label}</p>
      <p className="text-2xl font-semibold text-[#050b1d]">{display}</p>
      <p className="text-sm text-[#4b5877]">{stat.caption}</p>
    </div>
  )
}
