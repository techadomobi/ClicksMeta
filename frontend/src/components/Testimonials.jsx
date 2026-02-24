"use client"

import { Quote } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useInView } from "@/hooks/use-in-view"

const accolades = [
  { platform: "G2", rating: "4.7/5", detail: "Top tier partner marketing" },
  { platform: "Capterra", rating: "4.3/5", detail: "Loved for onboarding speed" },
  { platform: "Trustradius", rating: "8/10", detail: "Best UI refresh toolkit" },
]

const testimonials = [
  {
    quote:
      "ClicksMeta helped us recreate OffersMeta's hero, proof, and CTA layers in less than three sprints. Conversion jumped 29% once we shipped across every page.",
    name: "Rachit Chugh",
    title: "Senior Operations Manager · Cuelinks",
  },
  {
    quote:
      "We paired their UI refresh matrix with our compliance pods. Every OffersMeta-inspired block ships with security copy and data capture baked in.",
    name: "Vijay Tiwari",
    title: "Business Head · JioCoupons",
  },
  {
    quote:
      "Our creative team iterates directly inside ClicksMeta's experience lab. We preview gradients, glass cards, and stats in context before engineers build.",
    name: "Rohit Arora",
    title: "VP Mobile · Xapads Media",
  },
]

export function Testimonials() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="px-4 py-16 sm:px-6" ref={ref} id="testimonials">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <SectionHeading
            align="center"
            eyebrow="Customer proof"
            title="Teams that borrowed OffersMeta's glow—and grew faster"
            description="Ratings and rave notes from growth leaders who applied the same pastel gradients, proof rails, and CTA stacks across every ClicksMeta page."
          />
        </div>

        <div className={`grid gap-4 rounded-[32px] border border-[#e4e8ff] bg-white/95 p-6 shadow-[0_35px_120px_rgba(8,18,68,0.08)] sm:grid-cols-3 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {accolades.map((accolade) => (
            <div key={accolade.platform} className="rounded-[24px] border border-[#edf0ff] bg-[#f8f9ff] px-4 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">{accolade.platform}</p>
              <p className="mt-2 text-2xl font-semibold text-[#050b1d]">{accolade.rating}</p>
              <p className="text-sm text-[#4b5877]">{accolade.detail}</p>
            </div>
          ))}
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex h-full flex-col rounded-[28px] border border-[#e4e8ff] bg-white px-6 py-6 shadow-sm">
              <Quote className="h-8 w-8 text-[#c4c9ff]" />
              <p className="mt-4 flex-1 text-base text-[#0f172a]">{testimonial.quote}</p>
              <div className="mt-6 border-t border-[#edf0ff] pt-4">
                <p className="text-sm font-semibold text-[#050b1d]">{testimonial.name}</p>
                <p className="text-xs text-[#4b5877]">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
