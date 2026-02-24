"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Play, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCountUp, useInView } from "@/hooks/use-in-view"
import { GlowCard } from "./GlowCard"

const heroStats = [
  { label: "Advertisers scaled", value: 1200, suffix: "+", caption: "Multi-market teams" },
  { label: "Offers syndicated", value: 48000, suffix: "+", caption: "Live, tracked payouts" },
  { label: "Markets served", value: 35, suffix: " regions", caption: "Fintech to travel" },
]

const heroPills = ["Unified offers OS", "Fraud-native payouts", "AI-powered launches"]
const heroLogos = ["Offermatic", "Swiftnova", "Orbitreach", "AlignX", "Nordly", "FluxBay"]
const chartSeries = [32, 45, 38, 62, 55, 71, 64, 78, 69, 86]

export function Hero() {
  const { ref, isInView } = useInView(0.25)
  const counts = heroStats.map((stat) => useCountUp(stat.value, 1800, isInView))

  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4f46e5]/20 blur-[180px]" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#34d399]/15 blur-[200px]" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#f472b6]/15 blur-[180px]" />
      </div>
      <div className="relative mx-auto max-w-6xl rounded-[40px] border border-white/70 bg-white/80 p-8 shadow-[0_45px_140px_rgba(8,18,68,0.12)] backdrop-blur">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="section-tag bg-[#eef2ff] text-xs text-[#4f46e5]">Built like OffersMeta</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#050b1d] sm:text-5xl">
              Launch a commerce marketplace with the polish of OffersMeta—right inside ClicksMeta.
            </h1>
            <p className="mt-5 text-lg text-[#4b5877]">
              Every interaction is choreographed: cinematic hero, trust-loaded stats, proof-rich stories. Your teams get the same storytelling canvas to convert high-intent partners faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {heroPills.map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-[#e4e8ff] bg-[#f6f8ff] px-4 py-2 text-xs font-semibold text-[#4b5877]">
                  <ShieldCheck className="h-4 w-4 text-[#4f46e5]" />
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ec4899] px-8 text-base font-semibold shadow-[0_20px_60px_rgba(79,70,229,0.3)]">
                <Link to="/demorequest">
                  Design my launch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#d0d7ff] px-6 text-base font-semibold text-[#050b1d]">
                <Link to="/pricing">
                  Explore pricing
                  <Sparkles className="ml-2 h-4 w-4 text-[#f97316]" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="rounded-full px-4 text-base font-semibold text-[#4f46e5] hover:bg-[#eef2ff]"
                asChild
              >
                <Link to="/about-us">
                  <Play className="mr-2 h-4 w-4 fill-[#4f46e5]" />
                  Watch the story
                </Link>
              </Button>
            </div>
            <div ref={ref} className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="rounded-[28px] border border-[#e4e8ff] bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#050b1d]">
                    {stat.label === "Markets served" ? "" : ""}
                    {counts[index].toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-[#4b5877]">{stat.caption}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-[28px] border border-[#e4e8ff] bg-[#f6f8ff] px-6 py-4 text-sm text-[#4b5877]">
              <Zap className="h-4 w-4 text-[#f97316]" />
              Craft inspired by{" "}
              <a href="https://www.offersmeta.com" target="_blank" rel="noreferrer" className="font-semibold text-[#4f46e5] hover:underline">
                OffersMeta.com
              </a>{" "}
              to prove credibility before a single scroll.
            </div>
          </div>

          <div className="space-y-5">
            <GlowCard>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Live marketplace</p>
                <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#4f46e5]">Realtime</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-[#050b1d]">$3.8M</p>
              <p className="text-sm text-[#4b5877]">Monthly tracked pipeline</p>
              <div className="mt-4 flex items-center gap-3 rounded-[20px] border border-[#dce4ff] bg-[#f6f8ff] px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-[#34d399]" />
                <p className="text-sm text-[#0f172a]">Fraud safe through ClicksMeta Guard</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">Velocity</p>
                  <div className="mt-2 flex h-16 items-end gap-1">
                    {chartSeries.map((value, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#4f46e5] to-[#38bdf8]"
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#e4e8ff] bg-white px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#94a3b8]">Time to launch</p>
                  <p className="text-2xl font-semibold text-[#050b1d]">12d</p>
                  <p className="text-xs text-[#4b5877]">Avg. enterprise onboarding</p>
                </div>
              </div>
            </GlowCard>

            <div className="rounded-[32px] border border-[#e4e8ff] bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">Trusted by launch partners</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm font-semibold text-[#4b5877] sm:grid-cols-3">
                {heroLogos.map((logoName) => (
                  <div key={logoName} className="rounded-[20px] border border-[#e4e8ff] bg-[#f8f9ff] px-3 py-3 text-center">
                    {logoName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
