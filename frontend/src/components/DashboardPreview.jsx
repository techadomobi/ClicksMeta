"use client"

import { ArrowUpRight, Eye, Layers, MousePointerClick, Palette, Scroll, Type } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "./SectionHeading"

const insights = [
  { label: "Hero realism score", value: "92/100", detail: "Typography, gradients, stat bars mirror OffersMeta layouts." },
  { label: "CTA resonance", value: "+28%", detail: "Visitors hover twice as long on layered CTA clusters." },
  { label: "Scroll completion", value: "74%", detail: "Users reach proof blocks thanks to anchored storytelling." },
]

const actions = [
  { icon: Type, label: "Typography sync", description: "Space Grotesk + uppercase pills auto-applied." },
  { icon: Palette, label: "Color audit", description: "Ensured whites, lilac, mint trio per OffersMeta spec." },
  { icon: Layers, label: "Depth system", description: "Card radii + shadows updated across 38 surfaces." },
]

const journey = [
  { step: "Hero refresh", metric: "2.1x click-through", icon: Eye },
  { step: "Proof rail", metric: "1.6x dwell time", icon: MousePointerClick },
  { step: "CTA stack", metric: "+34% demos", icon: Scroll },
]

export function DashboardPreview() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-10" ref={ref}>
        <div className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <SectionHeading
            align="center"
            eyebrow="Experience lab"
            title="Control panel for OffersMeta-level polish"
            description="Preview every surface before you ship—hero, proof rail, CTA stack, and supporting cards stay in sync with the OffersMeta playbook."
          />
        </div>

        <div className={`grid gap-8 rounded-[40px] border border-[#e4e8ff] bg-white/95 p-8 shadow-[0_45px_140px_rgba(8,18,68,0.1)] ${isInView ? "opacity-100" : "opacity-0"}`}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[32px] border border-[#e4e8ff] bg-gradient-to-br from-[#fef6ff] via-[#f5f8ff] to-[#ecfdf5] p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Visual diff</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#4b5877]">
                  <ArrowUpRight className="h-4 w-4 text-[#4f46e5]" />
                  Live
                </span>
              </div>
              <div className="mt-6 space-y-6">
                <div className="rounded-[28px] border border-[#e4e8ff] bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">Hero</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#050b1d]">“Build with the OffersMeta aura.”</h3>
                  <p className="mt-2 text-sm text-[#4b5877]">
                    Typography, stat chips, and CTA gradients match the live reference. Scorecards prove parity before pushing to production.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <HeroMetric label="Typography" value="100%" />
                    <HeroMetric label="Gradient depth" value="97%" />
                    <HeroMetric label="CTA parity" value="94%" />
                  </div>
                </div>
                <div className="rounded-[28px] border border-dashed border-[#d7dbec] bg-white/70 px-5 py-4 text-sm text-[#4b5877]">
                  Scroll hints show where proof, stats, or CTA stacks need upgrades. Everything happens before engineering touches a line of code.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#e4e8ff] bg-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Impact readout</p>
                <div className="mt-4 grid gap-4">
                  {insights.map((insight) => (
                    <div key={insight.label} className="rounded-[24px] border border-[#edf0ff] bg-[#f8f9ff] px-4 py-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#0f172a]">{insight.label}</p>
                        <span className="text-sm font-semibold text-[#4f46e5]">{insight.value}</span>
                      </div>
                      <p className="text-sm text-[#4b5877]">{insight.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#e4e8ff] bg-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Playbook queue</p>
                <div className="mt-4 grid gap-3">
                  {actions.map(({ icon: Icon, label, description }) => (
                    <div key={label} className="flex items-start gap-3 rounded-[22px] border border-[#edf0ff] bg-[#f8f9ff] px-3 py-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-[0_10px_25px_rgba(8,18,68,0.08)] text-[#4f46e5]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">{label}</p>
                        <p className="text-sm text-[#4b5877]">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#e4e8ff] bg-gradient-to-br from-[#fef7f1] via-[#f4f7ff] to-[#ecfdf5] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">Journey wins</p>
                <div className="mt-4 space-y-3">
                  {journey.map(({ step, metric, icon: Icon }) => (
                    <div key={step} className="flex items-center justify-between rounded-[22px] border border-[#f0e5ff] bg-white px-3 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-sm font-semibold text-[#0f172a]">{step}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#4f46e5]">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMetric({ label, value }) {
  return (
    <div className="rounded-[20px] border border-[#e4e8ff] bg-white px-3 py-3 text-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">{label}</p>
      <p className="text-lg font-semibold text-[#050b1d]">{value}</p>
    </div>
  )
}
