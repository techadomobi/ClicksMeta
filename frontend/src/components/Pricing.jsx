"use client"

import { Check, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const cyanButton =
  "bg-linear-to-r from-[#2563eb] to-[#06b6d4] text-white hover:from-[#1d4ed8] hover:to-[#0891b2] shadow-[#2563eb]/30"

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    period: "15 Days",
    description: "Full access. No credit card required.",
    features: [
      "All core features unlocked",
      "Real-time analytics",
      "Unlimited campaigns",
      "Upgrade anytime",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: false,
  },
  {
    name: "Starter Plan",
    price: "Free",
    period: "",
    oldPrice: "$49 / month",
    promoNote: "for 12 months",
    description: "For small teams getting started.",
    features: [
      "Complex Tracking",
      "3,00,000 Clicks",
      "Priority Processing",
      "Email Support",
    ],
    cta: "Get Started",
    ctaLink: "/starter-plan",
    popular: false,
    gradient: false,
  },
  {
    name: "Professional Plan",
    price: "$149",
    period: "/ month",
    description: "For growing marketing teams.",
    features: [
      "Everything in Starter",
      "Unlimited Seats",
      "Advanced Analytics",
      "API Access",
      "Priority Support",
    ],
    cta: "Get Started",
    popular: true,
    gradient: true,
  },
  {
    name: "Enterprise Plan",
    price: "$249",
    period: "/ month",
    description: "For large organizations.",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    cta: "Get Started",
    popular: false,
    gradient: false,
  },
]

export function Pricing() {
  const { ref, isInView } = useInView()

  return (
    <section className="pt-16 pb-24 lg:pt-20 lg:pb-28 bg-linear-to-b from-[#f8fbff] via-[#f3f8ff] to-[#eef5ff] relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[420px] bg-[#60a5fa]/20 rounded-full blur-[180px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#2563eb] text-sm font-medium mb-5 border border-[#bfdbfe] shadow-sm">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b3d] text-balance leading-tight">
            Simple, transparent{" "}
            <span className="bg-linear-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-5 text-[#4a628f] text-lg max-w-xl mx-auto">
            Start free, upgrade when you{"'"}re ready. No hidden charges.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`card-glow relative flex h-full flex-col rounded-2xl p-7 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                plan.gradient
                  ? "border border-[#bfdbfe] bg-linear-to-br from-[#2563eb] to-[#0891b2] text-white shadow-2xl shadow-blue-500/20 ring-1 ring-[#7dd3fc]/50"
                  : "border border-[#d9e6ff] bg-white text-[#0f1b3d] shadow-md shadow-blue-900/10 hover:border-[#bfdbfe] hover:shadow-xl hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-[#2563eb] to-[#06b6d4] text-white text-xs font-semibold shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-lg font-semibold mb-2 ${plan.gradient ? "text-white" : "text-[#0f1b3d]"}`}>
                {plan.name}
              </h3>

              {plan.msrp && (
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 line-through mb-1">
                  {plan.msrp}
                </p>
              )}
              {plan.oldPrice && (
                <p className={`text-xs line-through mb-1 ${plan.gradient ? "text-white/75" : "text-[#5b6f99]"}`}>{plan.oldPrice}</p>
              )}
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-bold ${plan.gradient ? "text-white" : "text-[#0f1b3d]"}`}>
                  {plan.price}
                </span>
                {plan.period !== "15 Days" && (
                  <span className={`text-sm ${plan.gradient ? "text-white/75" : "text-[#5b6f99]"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.promoNote && (
                <p className={`text-[0.65rem] uppercase tracking-[0.25em] mb-4 ${plan.gradient ? "text-white/85" : "text-[#5b6f99]"}`}>{plan.promoNote}</p>
              )}

              {plan.period === "15 Days" && (
                <span className={`text-sm mb-4 ${plan.gradient ? "text-white/75" : "text-[#5b6f99]"}`}>
                  {plan.period}
                </span>
              )}

              <p className={`text-sm mb-8 ${plan.gradient ? "text-white/80" : "text-[#4a628f]"}`}>
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.gradient ? "bg-white/20" : "bg-[#eff6ff]"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.gradient ? "text-white" : "text-[#2563eb]"}`} />
                    </div>
                    <span className={`text-sm ${plan.gradient ? "text-white/90" : "text-[#314872]"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild={Boolean(plan.ctaLink)}
                className={`w-full rounded-full py-5 font-semibold transition-all duration-300 ${
                  plan.gradient
                    ? `${cyanButton} border-0 shadow-lg`
                    : "bg-[#0f1b3d] text-white hover:bg-[#17264a] border-0 hover:shadow-lg"
                }`}
              >
                {plan.ctaLink ? <Link to={plan.ctaLink}>{plan.cta}</Link> : plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


