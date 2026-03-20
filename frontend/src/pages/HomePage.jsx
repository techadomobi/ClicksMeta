import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Hero } from "@/components/Hero"
import { HeroStatsBar } from "@/components/HeroStatsBar"
import { FeaturesTabs } from "@/components/Features-tabs"
import { DashboardPreview } from "@/components/DashboardPreview"
import { Testimonials } from "@/components/Testimonials"
import { Pricing } from "@/components/Pricing"

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <div className="home-page space-y-24 md:space-y-32">
      <section className="perf-section"><Hero /></section>
      <section className="perf-section"><HeroStatsBar /></section>
      <section className="perf-section"><FeaturesTabs /></section>
      <section className="perf-section"><DashboardPreview /></section>
      <section className="perf-section"><Testimonials /></section>
      <section className="perf-section"><Pricing /></section>
    </div>
  )
}
