"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "./SectionHeading"

const plans = [
  {
    name: "Launch",
    price: "Free",
    period: "for 15 days",
    description: "Preview OffersMeta-inspired UI on every core page.",
    badge: "Start here",
    features: ["All builder modules", "Hero + proof templates", "Live preview links"],
  },
  {
    name: "Studio",
    price: "$149",
    period: "/month",
    description: "For teams refreshing multiple industry pages in parallel.",
    badge: "Most loved",
    highlight: true,
    features: ["Unlimited variants", "Snapshots & approvals", "Automation triggers", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    description: "White-glove rollouts, security reviews, and migration help.",
    badge: "Talk to us",
    features: ["Dedicated partner pod", "Compliance reviews", "Custom integrations", "24/5 coverage"],
  },
]

export function Pricing() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="px-4 pb-24 pt-16 sm:px-6" id="pricing">
      <div ref={ref} className="mx-auto max-w-6xl space-y-10">
        <div className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Invest once, ship OffersMeta polish everywhere"
            description="Flexible plans for startups, studios, and enterprises. All include access to the experience lab and pastel-perfect component library."
          />
        </div>

        <div className={`grid gap-6 lg:grid-cols-3 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-[32px] border px-7 py-8 shadow-sm ${plan.highlight ? "border-transparent bg-gradient-to-br from-[#fef2ff] via-white to-[#ecfdf5] shadow-[0_35px_120px_rgba(8,18,68,0.1)]" : "border-[#e4e8ff] bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#050b1d]">{plan.name}</p>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#d5dcff] px-3 py-1 text-xs font-semibold text-[#4b5877]">
                  {plan.highlight && <Sparkles className="h-3 w-3 text-[#f97316]" />}
                  {plan.badge}
                </span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-[#050b1d]">
                {plan.price} <span className="text-base font-medium text-[#4b5877]">{plan.period}</span>
              </p>
              <p className="mt-2 text-sm text-[#4b5877]">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-[#0f172a]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f8ff] text-[#4f46e5]">
                      <Check className="h-4 w-4" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 rounded-2xl ${plan.highlight ? "bg-gradient-to-r from-[#4f46e5] to-[#ec4899] text-white" : "bg-[#0f172a] text-white"}`}>
                {plan.highlight ? "Book a design session" : "Start now"}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
