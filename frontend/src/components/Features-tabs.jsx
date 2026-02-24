"use client"

import { useState } from "react"
import { ArrowRight, BarChart3, CheckCircle2, CreditCard, LineChart, Shield, Zap } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useInView } from "@/hooks/use-in-view"

const tabs = [
  {
    id: "campaign",
    icon: BarChart3,
    label: "Campaign Management",
    description:
      "Drag-and-drop campaign builders, premium hero templates, and instant device previews—matching the polish of OffersMeta rollouts.",
    features: [
      { title: "Campaign wizards", desc: "Spin up OffersMeta-like hero blocks with aligned typography.", pct: "+92%" },
      { title: "Allowed traffic channels", desc: "Lock media rules with one toggle per creative." },
      { title: "Bulk targeting", desc: "Update tens of offers with mirrored content blocks." },
    ],
    accent: "#4f46e5",
  },
  {
    id: "analytics",
    icon: LineChart,
    label: "Marketing Analytics",
    description: "Observe how every scroll depth and CTA replicates OffersMeta's conversion blueprint across pages.",
    features: [
      { title: "Realtime tracking", desc: "Blend commerce & affiliate data with scroll telemetry.", pct: "+95%" },
      { title: "Flexible reporting", desc: "Share Looker-ready decks for stakeholders." },
      { title: "QR & coupon tracking", desc: "Match offline activations with digital journeys." },
    ],
    accent: "#0ea5e9",
  },
  {
    id: "payout",
    icon: CreditCard,
    label: "Automated Payout",
    description: "Mirror OfferMeta's transparent commission panels while finance gets one-click reconciliations.",
    features: [
      { title: "Cost ETL", desc: "See burn-down by hero, decor, and CTA." },
      { title: "Scaling payouts", desc: "Auto-escalate partners after defined scroll %." },
      { title: "Delegated processing", desc: "Compliance ready invoices with brand-safe skins." },
    ],
    accent: "#f97316",
  },
  {
    id: "automation",
    icon: Zap,
    label: "Easy Automation",
    description: "Trigger creative swaps, variant tests, and modals when a visitor mirrors OffersMeta behaviors.",
    features: [
      { title: "Automated workflows", desc: "If hero view + CTA hover, fire tailored follow-ups.", pct: "+94%" },
      { title: "Smart links & deep links", desc: "Keep the same aesthetic across every funnel." },
      { title: "Offer checker tools", desc: "Validate variant parity before publishing." },
    ],
    accent: "#22c55e",
  },
  {
    id: "fraud",
    icon: Shield,
    label: "Fraud Detection",
    description: "OffersMeta finish with ClicksMeta level guardrails—spot anomalies before humans notice.",
    features: [
      { title: "Protect your budget", desc: "Block suspicious scroll signatures instantly.", pct: "+96%" },
      { title: "Validate traffic", desc: "Layer device, geo, and creative fingerprinting." },
      { title: "Industry-grade shield", desc: "Share compliance snapshots with legal." },
    ],
    accent: "#ec4899",
  },
]

export function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="px-4 py-16 sm:px-6" id="features">
      <div ref={ref} className="mx-auto max-w-6xl space-y-10">
        <div className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <SectionHeading
            align="center"
            eyebrow="Product suite"
            title="Recreate the OffersMeta buying journey with modular ClicksMeta blocks"
            description="Toggle between suites to see how each capability keeps every page cinematic, trusted, and conversion-ready."
          />
        </div>

        <div className={`grid gap-3 lg:grid-cols-5 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-[28px] border px-4 py-4 text-left transition hover:-translate-y-1 ${
                activeTab === tab.id ? "border-transparent bg-gradient-to-br from-white via-white to-[#f6f8ff] shadow-[0_20px_60px_rgba(8,18,68,0.12)]" : "border-[#e4e8ff] bg-white"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${tab.accent}14`, color: tab.accent }}>
                <tab.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-[#0f172a]">{tab.label}</p>
              <p className="text-xs text-[#4b5877]">{tab.description.substring(0, 56)}...</p>
            </button>
          ))}
        </div>

        <div className="rounded-[36px] border border-[#e4e8ff] bg-white p-8 shadow-[0_35px_120px_rgba(8,18,68,0.08)]">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f6f8ff] px-4 py-1 text-xs font-semibold text-[#4b5877]">
                <span className="h-2 w-2 rounded-full" style={{ background: current.accent }} />
                {current.label}
              </div>
              <p className="mt-4 text-2xl font-semibold text-[#050b1d]">{current.description}</p>
              <div className="mt-5 space-y-4">
                {current.features.map((feature) => (
                  <div key={feature.title} className="rounded-[24px] border border-[#edf0ff] bg-[#f8f9ff] px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[#0f172a]">{feature.title}</p>
                      {feature.pct && <span className="text-xs font-semibold text-[#4f46e5]">{feature.pct}</span>}
                    </div>
                    <p className="text-sm text-[#4b5877]">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5]">
                Explore playbooks
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 rounded-[30px] border border-[#e4e8ff] bg-gradient-to-br from-[#f6f8ff] via-white to-[#fef4ff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">What this unlocks</p>
              <div className="mt-5 space-y-4">
                <Highlight label="Hero parity" value="1:1" description="Match OffersMeta typography + layout tokens." />
                <Highlight label="Launch velocity" value="12 days" description="Average time to ship full experience." />
                <Highlight label="Conversion lift" value="+37%" description="After updating every page." />
              </div>
              <div className="mt-6 rounded-[24px] border border-dashed border-[#d7dbec] bg-white/80 px-4 py-3 text-sm text-[#4b5877]">
                Each feature tile is purpose-built to replicate OffersMeta&apos;s airy gradients, layered cards, and confident typography.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlight({ label, value, description }) {
  return (
    <div className="rounded-[24px] border border-[#e4e8ff] bg-white px-4 py-3">
      <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">{label}</p>
      <p className="text-2xl font-semibold text-[#050b1d]">{value}</p>
      <p className="text-sm text-[#4b5877]">{description}</p>
      <div className="mt-3 h-2 rounded-full bg-[#eef2ff]">
        <div className="h-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#38bdf8]"></div>
      </div>
    </div>
  )
}
