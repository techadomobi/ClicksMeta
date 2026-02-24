"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import logo from "../assets/clicksmeta-logo.png"

export function CTASection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section className="px-4 pb-24 pt-12 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl rounded-[40px] border border-[#e4e8ff] bg-gradient-to-br from-[#fef2ff] via-white to-[#ecfdf5] px-8 py-12 text-center shadow-[0_40px_140px_rgba(8,18,68,0.1)] ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold text-[#4b5877]">
          <img src={logo} alt="ClicksMeta" className="h-5 w-auto" />
          <Sparkles className="h-3.5 w-3.5 text-[#f97316]" />
          OffersMeta-ready UI
        </div>
        <h2 className="mt-5 text-3xl font-semibold text-[#050b1d] sm:text-4xl">
          Ready to deploy the OffersMeta aesthetic on every ClicksMeta page?
        </h2>
        <p className="mt-4 text-base text-[#4b5877]">
          We&apos;ll audit your current experience, map the gaps, and ship a refreshed UI kit that mirrors the site you linked—hero to footer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ec4899] px-8 text-base font-semibold">
            <Link to="/demorequest">
              Book the redesign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#b5c2ff] px-8 text-base font-semibold text-[#050b1d]">
            <Link to="/contact">Talk to design leads</Link>
          </Button>
        </div>
        <p className="mt-5 text-xs text-[#4b5877]">Includes audit, UI kit, and implementation guidance.</p>
      </div>
    </section>
  )
}
