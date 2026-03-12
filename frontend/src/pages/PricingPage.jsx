import { BadgeCheck, CheckCircle2, Sparkles, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    oldPrice: "$49/mo",
    promoNote: "for 12 months",
    tagline: "Best suited for early stage business",
    features: [
      "3,00,000 Clicks",
      "Unlimited Conversions",
      "Unlimited Campaigns",
      "Smart Reports",
      "Technical Support",
      "API Access",
      "Smart Offer Access",
      "Link Testing Tool",
    ],
    badgeColor: "from-[#0f172a] to-[#020617]",
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    tagline: "Best plan for professionals",
    features: [
      "15,000 Conversions",
      "Unlimited Clicks",
      "Unlimited Campaigns",
      "Smart Reports",
      "$0.010 per additional conversion",
      "Fully Whitelabel",
      "API Access",
      "24/7 Support",
      "Dedicated Account Manager",
    ],
    highlight: "Most Popular",
    badgeColor: "from-[#0f172a] to-[#050f24]",
  },
  {
    name: "Enterprise",
    price: "$249",
    period: "/mo",
    tagline: "Best plan for enterprise",
    features: [
      "40,000 Conversions",
      "Unlimited Clicks",
      "Unlimited Campaigns",
      "$0.008 per additional conversion",
      "Fully Whitelabel",
      "API Access",
      "Premium Support",
      "Dedicated Account Manager",
    ],
    badgeColor: "from-[#0f172a] to-[#020617]",
  },
]

const perks = [
  "Cancel anytime during trial",
  "No setup fees or hidden charges",
  "Data encryption & GDPR compliant",
  "Migration support for existing networks",
]

const cyanButton =
  "bg-gradient-to-r from-[#1fb6ff] to-[#36d1ff] text-[#02121f] hover:from-[#17a9ef] hover:to-[#2fc9fa]"

export function PricingPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#f8fbff] via-[#eef4ff] to-[#020617] pb-24 pt-16">
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-[#006fbd]">Start </span>
          <span className="text-[#1f6bff]">15 days </span>
          <span className="text-[#006fbd]">free trial!</span>
        </p>
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#1fb6ff]/20 bg-white px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#2177ff]">
          <Sparkles className="h-4 w-4 text-[#1fb6ff]" />
          Pricing
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#112251] md:text-5xl">
          Choose the{" "}
          <span className="bg-gradient-to-r from-[#1f6bff] to-[#7c3aed] bg-clip-text text-transparent">Best Plan</span>
        </h1>
        <p className="mt-4 text-base text-[#4b5676] md:text-lg">
          Scale confidently with plans that include unlimited tracking, automation and real human support.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-6">
        <div className="inline-flex items-start gap-4 rounded-3xl border border-[#ffd6d6] bg-[#fff5f5] px-5 py-4 text-left text-[#8b1d1d] shadow-[0_18px_40px_rgba(168,43,43,0.15)]">
          <div className="h-3 w-3 rounded-full bg-[#e11d48] mt-2" />
          <div>
            <p className="text-lg font-semibold">12 Months Free Plans</p>
            <p className="text-sm font-medium">Limited offers in 30 days only</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 grid w-full max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="group relative flex h-full flex-col rounded-[32px] border border-white/70 bg-gradient-to-b from-[#050f23] to-[#020617] p-7 text-white shadow-2xl shadow-[#010309]/50 transition-all duration-300 hover:-translate-y-2 hover:border-[#1fb6ff] hover:shadow-[#1fb6ff]/30"
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffb347] px-4 py-1 text-xs font-semibold text-[#1d1405] shadow-lg">
                <span className="inline-flex items-center gap-1">
                  {plan.name === "Exclusive Offer" && <Star className="h-3 w-3" />}
                  {plan.highlight}
                </span>
              </div>
            )}

            <div className="space-y-2 border-b border-white/10 pb-6">
              <p className="text-lg font-semibold">{plan.name}</p>
              <div className="space-y-1">
                {plan.oldPrice && (
                  <p className="text-sm font-semibold text-white/40 line-through">{plan.oldPrice}</p>
                )}
                {plan.msrp && (
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35 line-through">
                    {plan.msrp}
                  </p>
                )}
                <p className="text-4xl font-bold tracking-tight">
                  {plan.price}
                  <span className="text-lg font-medium text-white/60">{plan.period}</span>
                </p>
                {plan.promoNote && <p className="text-xs uppercase tracking-[0.3em] text-white/50">{plan.promoNote}</p>}
              </div>
              <p className="text-sm text-white/50">{plan.tagline}</p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/40">Includes:</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-[#1fb6ff]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild={Boolean(plan.cta?.href)}
              className={`h-12 w-full rounded-2xl text-sm font-semibold shadow-lg shadow-[#1fb6ff]/20 transition-all duration-300 ${cyanButton} group-hover:-translate-y-0.5 mt-auto`}
            >
              {plan.cta?.href ? <Link to={plan.cta.href}>{plan.cta.label}</Link> : "Get Started"}
            </Button>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-5xl gap-4 rounded-3xl border border-white/40 bg-white/10 p-6 text-white backdrop-blur-sm sm:grid-cols-2">
        {perks.map((perk) => (
          <div key={perk} className="flex items-center gap-3 text-sm text-white/80">
            <BadgeCheck className="h-4 w-4 text-[#1fb6ff]" />
            {perk}
          </div>
        ))}
      </div>
    </section>
  )
}
