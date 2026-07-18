import { BadgeCheck, CheckCircle2, Sparkles, Star, Rocket, Zap, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$49",
    period: "",
    tagline: "Best suited for early stage business",
    features: [
      "5000 Conversions",
      "3,00,000 Clicks",
      "Unlimited Campaigns",
      "Smart Reports",
      "Technical Support",
      "API Access",
      "Smart Offer Access",
      "Link Testing Tool",
    ],
    variant: "light",
  },
  {
    name: "Professional",
    icon: Zap,
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
    variant: "dark",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "$349",
    period: "/mo",
    tagline: "Best plan for enterprise",
    features: [
      "50,000 Conversions",
      "Unlimited Clicks",
      "Unlimited Campaigns",
      "$0.008 per additional conversion",
      "Fully Whitelabel",
      "API Access",
      "Premium Support",
      "Dedicated Account Manager",
    ],
    variant: "light",
  },
]

const perks = [
  { icon: BadgeCheck, label: "Cancel anytime during trial" },
  { icon: BadgeCheck, label: "No setup fees or hidden charges" },
  { icon: BadgeCheck, label: "Data encryption & GDPR compliant" },
  { icon: BadgeCheck, label: "Migration support for existing networks" },
]

export function PricingPage() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6faff] pb-28 pt-20">
      {/* ambient background accents */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(31,182,255,0.18), transparent 70%)" }}
      />
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] w-full opacity-[0.06]"
        viewBox="0 0 1200 420"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0 80 L220 160 L460 40 L720 180 L1000 60 L1200 140" stroke="#1fb6ff" strokeWidth="1.5" />
        {[
          [220, 160],
          [460, 40],
          [720, 180],
          [1000, 60],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#1fb6ff" />
        ))}
      </svg>

      <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1fb6ff]/20 bg-white px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#2177ff] shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#1fb6ff]" />
          Pricing
        </div>

        <h1 className="mt-7 text-4xl font-semibold tracking-tight text-[#0f1b3d] sm:text-5xl md:text-6xl">
          Choose the{" "}
          <span className="bg-gradient-to-r from-[#1f6bff] to-[#06b6d4] bg-clip-text text-transparent">
            best plan
          </span>{" "}
          for your growth
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[#4b5676] md:text-lg">
          Scale confidently with plans that include unlimited tracking, automation and real human support.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0f1b3d]/70 shadow-sm shadow-[#1fb6ff]/10 ring-1 ring-[#1fb6ff]/15">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1fb6ff] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1fb6ff]" />
          </span>
          15 days free trial on every plan — no card required
        </div>
      </div>

      <div className="relative mx-auto mt-14 grid w-full max-w-6xl items-stretch gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        {plans.map((plan) => {
          const isDark = plan.variant === "dark"
          const Icon = plan.icon

          return (
            <article
              key={plan.name}
              className={`group relative flex h-full flex-col rounded-[32px] p-7 transition-all duration-300 sm:p-8 ${
                isDark
                  ? "bg-[#0a1330] text-white shadow-[0_30px_70px_rgba(10,19,48,0.35)] lg:-translate-y-4 lg:scale-[1.03]"
                  : "border border-[#d6e4ff] bg-white text-[#12234a] shadow-[0_22px_55px_rgba(37,99,235,0.1)] hover:-translate-y-1.5 hover:border-[#93c5fd] hover:shadow-[0_26px_65px_rgba(37,99,235,0.18)]"
              }`}
            >
              {isDark && (
                <div
                  className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full opacity-30 blur-3xl"
                  style={{ background: "radial-gradient(circle, #1fb6ff, transparent 70%)" }}
                />
              )}

              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1fb6ff] to-[#06b6d4] px-4 py-1.5 text-xs font-semibold text-[#031124] shadow-lg shadow-[#1fb6ff]/40">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    {plan.highlight}
                  </span>
                </div>
              )}

              <div
                className={`relative flex items-center justify-center rounded-2xl ${
                  isDark ? "h-12 w-12 bg-white/10" : "h-12 w-12 bg-[#e8f1ff]"
                }`}
              >
                <Icon className={`h-5.5 w-5.5 ${isDark ? "text-[#1fb6ff]" : "text-[#2563eb]"}`} />
              </div>

              <div className={`relative mt-5 space-y-2 border-b pb-6 ${isDark ? "border-white/10" : "border-[#e5edff]"}`}>
                <p className="text-lg font-semibold">{plan.name}</p>
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-lg font-medium ${isDark ? "text-white/50" : "text-[#5b6f99]"}`}>
                    {plan.period}
                  </span>
                </p>
                <p className={`text-sm ${isDark ? "text-white/50" : "text-[#4b5f88]"}`}>{plan.tagline}</p>
              </div>

              <div className="relative mt-6 flex-1 space-y-3">
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    isDark ? "text-white/40" : "text-[#5b6f99]"
                  }`}
                >
                  Includes
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${isDark ? "text-white/80" : "text-[#2d4570]"}`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isDark ? "bg-white/10 text-[#1fb6ff]" : "bg-[#e8f1ff] text-[#2563eb]"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`group/btn relative mt-8 h-12 w-full rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isDark
                    ? "bg-white text-[#0a1330] shadow-lg shadow-black/20 hover:bg-[#e8f1ff]"
                    : "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white shadow-lg shadow-[#2563eb]/20 hover:from-[#1d4ed8] hover:to-[#0891b2]"
                }`}
              >
                <a href="https://www.clicksmeta.com/demorequest" className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
            </article>
          )
        })}
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-5xl px-4 md:px-6">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#dbe8ff] bg-[#dbe8ff] shadow-[0_20px_45px_rgba(37,99,235,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white p-5 text-sm text-[#2d4570]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] text-[#2563eb]">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#4b5676]">
          Need a custom volume plan?{" "}
          <a href="https://www.clicksmeta.com/demorequest" className="font-semibold text-[#1fb6ff] hover:text-[#0f1b3d]">
            Talk to our team
          </a>
        </p>
      </div>
    </section>
  )
}