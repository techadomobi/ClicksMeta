import { Link } from "react-router-dom"
import {
  BadgeCheck,
  CalendarDays,
  Crown,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Star,
  LineChart,
  Layers,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { title: "Guaranteed focus", detail: "Priority routing with concierge escalation paths." },
  { title: "Hands-on growth", detail: "Dedicated solutions architect + quarterly strategy reviews." },
  { title: "Enterprise-grade data", detail: "Full API access, exports, and custom integrations." },
]

const inclusions = [
  "Unlimited campaigns and tracking domains",
  "Priority anti-fraud rule tuning",
  "Full data exports + warehouse sync",
  "White-glove onboarding",
  "Executive success reviews",
  "Premium support coverage",
]

const advantageCards = [
  {
    title: "Revenue acceleration",
    description: "Capture more high-quality conversions with tailored routing, faster approvals, and smarter payouts.",
    icon: LineChart,
  },
  {
    title: "Enterprise readiness",
    description: "Dedicated compliance support and SLA-backed uptime for mission-critical programs.",
    icon: ShieldCheck,
  },
  {
    title: "Precision control",
    description: "Custom rules, whitelabel dashboards, and role-based permissions for every partner team.",
    icon: Layers,
  },
  {
    title: "Launch velocity",
    description: "White-glove onboarding and 7-day go-live to keep your pipeline moving fast.",
    icon: Zap,
  },
]

const timeline = [
  { step: "Week 1", title: "Discovery + migration audit", detail: "We map your current stack, data sources, and pain points." },
  { step: "Week 2", title: "Custom build + integrations", detail: "We configure rules, APIs, and partner flows to match your goals." },
  { step: "Week 3", title: "Launch + optimization", detail: "We tune performance and deliver your first executive report." },
]

const faqs = [
  {
    q: "Is the ₹3,00,000 plan billed in INR or USD?",
    a: "We can invoice in INR or USD. The USD amount shown is an approximate conversion and may vary with FX.",
  },
  {
    q: "What makes this different from Enterprise?",
    a: "Exclusive Offer adds a dedicated solutions architect, quarterly strategy reviews, priority routing, and premium SLAs.",
  },
  {
    q: "Can we add custom modules later?",
    a: "Yes. We can expand with bespoke reporting, custom fraud logic, and partner portals as you grow.",
  },
]

export function ExclusiveOfferPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#050917] via-[#0a1226] to-[#020617] py-16 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0b1732] via-[#0a1328] to-[#050a19] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#9fd4ff]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Crown className="h-4 w-4" />
              Exclusive Offer
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays className="h-4 w-4" />
              1 Year Access
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Sparkles className="h-4 w-4" />
              Limited Seats
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Unlock the all-access ClicksMeta program for enterprise operators.
              </h1>
              <p className="text-lg text-white/70">
                Designed for teams that need always-on support, bespoke integrations, and performance guarantees that
                move revenue fast.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs text-white/60">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Faster launch", value: "7-day go-live", icon: TrendingUp },
                  { label: "Dedicated team", value: "24/7 coverage", icon: ShieldCheck },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-5 w-5 text-[#7dd3fc]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/50">{label}</p>
                        <p className="text-lg font-semibold text-white">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold text-[#051227] hover:bg-white/90">
                  <Link to="/demorequest">Request a walkthrough</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Link to="/contact">Contact sales</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#050c1f] p-6 shadow-[0_25px_80px_rgba(5,12,31,0.6)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Annual investment</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/35 line-through">$4,500</p>
              <p className="mt-2 text-sm font-semibold text-white/40 line-through">$3,900</p>
              <p className="mt-1 text-4xl font-semibold text-white">$3,252</p>
              <p className="mt-1 text-sm text-white/60">Approx. ₹3,00,000 billed yearly</p>
              <div className="mt-6 space-y-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-[#7dd3fc]">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#7dd3fc]" />
                  <span>FX rate shown for reference. Final billed USD may vary.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {advantageCards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-6 w-6 text-[#7dd3fc]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[36px] border border-white/10 bg-[#050c1f] p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Launch timeline</p>
            <span className="text-xs text-white/50">3-week acceleration plan</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <div key={item.step} className="relative rounded-3xl border border-white/10 bg-white/5 p-5">
                <span className="absolute -top-3 left-5 rounded-full bg-[#1fb6ff] px-3 py-1 text-xs font-semibold text-[#04152b]">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{item.step}</p>
                <p className="mt-3 text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Outcomes</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Why teams upgrade to the exclusive tier</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "Conversion lift", value: "+28%" },
                { label: "Approval speed", value: "2x faster" },
                { label: "Partner retention", value: "97%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#050c1f] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Client note</p>
            <p className="mt-4 text-lg text-white/80">
              “ClicksMeta’s exclusive tier gave us instant clarity on our top partners. Our payout velocity improved
              in the first two weeks.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Star className="h-5 w-5 text-[#7dd3fc]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">VP Growth, Global Commerce</p>
                <p className="text-xs text-white/50">Enterprise client testimonial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0b1732] via-[#0a1328] to-[#050a19] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">FAQ</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">{faq.q}</p>
                <p className="mt-3 text-sm text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-white/10 bg-gradient-to-r from-[#1fb6ff] to-[#6366f1] p-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Ready to lock it in?</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Reserve the exclusive annual plan today.</h3>
              <p className="mt-2 text-sm text-white/80">
                Limited seats. Priority onboarding and dedicated strategic support included.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold text-[#0f172a] hover:bg-white">
                <Link to="/demorequest">Book a strategy call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/70 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Link to="/pricing">Compare plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
