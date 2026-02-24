import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PageHero({ eyebrow, title, description, stats = [], primary, secondary, tone = "iris" }) {
  const palettes = {
    iris: { border: "#e0e6ff", badge: "#4f46e5" },
    mint: { border: "#cfeee2", badge: "#0f9f6e" },
    dusk: { border: "#ffe3d4", badge: "#f97316" },
  }
  const palette = palettes[tone] || palettes.iris

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[40px] border bg-white/95 px-8 py-12 shadow-[0_40px_140px_rgba(8,18,68,0.08)]" style={{ borderColor: palette.border }}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {eyebrow && (
              <span className="section-tag text-xs" style={{ color: palette.badge, background: `${palette.badge}14` }}>
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#050b1d] md:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-[#4b5877]">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {primary && (
                <Button asChild className="rounded-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ec4899] px-8 text-base font-semibold">
                  <Link to={primary.href}>
                    {primary.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondary && (
                <Button asChild variant="outline" className="rounded-full border-[#d4dafb] px-6 text-base font-semibold text-[#050b1d]">
                  <Link to={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="rounded-[32px] border border-dashed border-[#d7dbec] bg-[#f8f9ff] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Signals</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-[#edf0ff] bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">{stat.label}</p>
                  <p className="text-2xl font-semibold text-[#050b1d]">{stat.value}</p>
                  {stat.description && <p className="text-xs text-[#4b5877]">{stat.description}</p>}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#4b5877]">Crafted to match the OffersMeta UI cadence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
