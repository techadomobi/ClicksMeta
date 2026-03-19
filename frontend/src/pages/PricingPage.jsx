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
    cta: { label: "Get Started", href: "/starter-plan" },
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
  "bg-linear-to-r from-[#2563eb] to-[#06b6d4] text-white hover:from-[#1d4ed8] hover:to-[#0891b2]"

export function PricingPage() {
  return (
    <section className="min-h-screen w-full bg-linear-to-b from-[#f9fbff] via-[#f3f7ff] to-[#edf4ff] pb-24 pt-16">
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
          <span className="bg-linear-to-r from-[#1f6bff] to-[#06b6d4] bg-clip-text text-transparent">Best Plan</span>
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
            className="group relative flex h-full flex-col rounded-4xl border border-[#d6e4ff] bg-white p-7 text-[#12234a] shadow-[0_22px_55px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#93c5fd] hover:shadow-[0_26px_65px_rgba(37,99,235,0.2)]"
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffb347] px-4 py-1 text-xs font-semibold text-[#1d1405] shadow-lg">
                <span className="inline-flex items-center gap-1">
                  {plan.name === "Exclusive Offer" && <Star className="h-3 w-3" />}
                  {plan.highlight}
                </span>
              </div>
            )}

            <div className="space-y-2 border-b border-[#e5edff] pb-6">
              <p className="text-lg font-semibold text-[#112251]">{plan.name}</p>
              <div className="space-y-1">
                {plan.oldPrice && (
                  <p className="text-sm font-semibold text-[#6a7fa7] line-through">{plan.oldPrice}</p>
                )}
                {plan.msrp && (
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6a7fa7] line-through">
                    {plan.msrp}
                  </p>
                )}
                <p className="text-4xl font-bold tracking-tight text-[#0f1b3d]">
                  {plan.price}
                  <span className="text-lg font-medium text-[#5b6f99]">{plan.period}</span>
                </p>
                {plan.promoNote && <p className="text-xs uppercase tracking-[0.3em] text-[#5b6f99]">{plan.promoNote}</p>}
              </div>
              <p className="text-sm text-[#4b5f88]">{plan.tagline}</p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#5b6f99]">Includes:</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#2d4570]">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f1ff] text-[#2563eb]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild={Boolean(plan.cta?.href)}
              className={`h-12 w-full rounded-2xl text-sm font-semibold shadow-lg shadow-[#2563eb]/20 transition-all duration-300 ${cyanButton} group-hover:-translate-y-0.5 mt-auto`}
            >
              {plan.cta?.href ? <Link to={plan.cta.href}>{plan.cta.label}</Link> : "Get Started"}
            </Button>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-5xl gap-4 rounded-3xl border border-[#dbe8ff] bg-white p-6 text-[#1a315b] shadow-[0_20px_45px_rgba(37,99,235,0.1)] sm:grid-cols-2">
        {perks.map((perk) => (
          <div key={perk} className="flex items-center gap-3 text-sm text-[#2d4570]">
            <BadgeCheck className="h-4 w-4 text-[#2563eb]" />
            {perk}
          </div>
        ))}
      </div>
    </section>
  )
}
