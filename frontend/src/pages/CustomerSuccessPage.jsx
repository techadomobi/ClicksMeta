import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Users,
  ShieldCheck,
  LineChart,
  Gauge,
  Globe,
  Rocket,
  HeartHandshake,
  Target,
  ArrowRight,
} from "lucide-react"

const heroStats = [
  { label: "Daily users", value: "10M+" },
  { label: "Uptime", value: "99%" },
  { label: "Markets", value: "150+" },
]

const proofMetrics = [
  { label: "50M+", sub: "Daily impressions" },
  { label: "95%", sub: "Fill rate" },
  { label: "24/7", sub: "Support" },
  { label: "99.9%", sub: "Uptime" },
]

const differentiators = [
  {
    badge: "Audience quality",
    description: "Advanced anti-fraud technology keeps every click relevant and brand-safe.",
    icon: ShieldCheck,
  },
  {
    badge: "Traffic volume",
    description: "12B+ daily impressions, 195+ geos, and curated premium placements.",
    icon: Globe,
  },
  {
    badge: "Ad performance",
    description: "AI bidding, templates, and experimentation accelerate campaign learning loops.",
    icon: LineChart,
  },
]

const partnerBrands = ["Hotstar", "Makemytrip", "Amazon", "Myntra", "MoneyMan", "Zasta"]

const industries = ["Mobile apps", "Finance", "eCommerce", "Gaming", "Lead gen", "Telco"]

const journeyCards = [
  {
    title: "Advertisers",
    copy: "Launch global reach campaigns in a few clicks with data clarity baked in.",
    cta: "Buy premium traffic",
    href: "/demorequest",
  },
  {
    title: "Publishers",
    copy: "Monetize inventory with real-time insights, flexible pricing, and instant payouts.",
    cta: "Monetize your traffic",
    href: "/signup",
  },
]

export function CustomerSuccessPage() {
  return (
    <div className="bg-[#eefafc] text-[#03172c]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e9fff5] via-white to-[#c9f5ff] px-4 py-20 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#a7f3d0] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#bae6fd] blur-[140px]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#008a60] shadow">
              <Sparkles className="h-4 w-4 text-[#0ead69]" />
              Why ClicksMeta
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#022c3b] md:text-5xl">
              Essential for affiliates, agencies, and ambitious growth teams.
            </h1>
            <p className="mt-4 text-lg text-[#0f3050]/80">
              Industry-leading multisource ad network with unmatched automation, transparent payouts, and delightful design modeled
              after OffersMeta&apos;s best-in-class experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-[#0ead69] px-8 text-base font-semibold text-white shadow-lg shadow-[#0ead69]/30 hover:bg-[#0a8650]"
              >
                <Link to="/demorequest">
                  Start now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-[#d0d7ff] bg-white/70 px-8 text-base font-semibold text-[#02233f] hover:bg-white"
              >
                <Link to="/case-studies">Learn more</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/80 px-6 py-5 shadow-sm">
                  <p className="text-2xl font-semibold text-[#022c3b]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#0f3050]/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[48px] border border-white/70 bg-white/80 p-8 shadow-[0_40px_90px_rgba(3,25,45,0.12)]">
            <div className="rounded-[36px] bg-gradient-to-br from-[#00c6ff]/15 to-[#0072ff]/10 p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[#4f5d7a]">
                <span>Live analytics</span>
                <span className="text-[#0ead69]">+8.3%</span>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-[#0f3050]">
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#2563eb]">Revenue</span>
                    <span className="text-[#0f3050]/60">$847K</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <LineChart className="h-6 w-6 text-[#2563eb]" />
                    <p className="text-lg font-semibold text-[#022c3b]">+15.7% today</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#0ead69]">Conversion</span>
                    <span className="text-[#0f3050]/60">+2.1%</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Gauge className="h-6 w-6 text-[#0ead69]" />
                    <p className="text-lg font-semibold text-[#022c3b]">12%</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#ec4899]">Active campaigns</span>
                    <span className="text-[#0f3050]/60">847</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-[#ec4899]" />
                    <p className="text-lg font-semibold text-[#022c3b]">Live right now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-6 hidden rounded-full bg-[#ffedd5] px-4 py-2 text-xs font-semibold text-[#c2410c] shadow lg:block">
              ROI 340% up
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[48px] bg-white px-8 py-10 shadow-[0_40px_80px_rgba(3,25,45,0.08)]">
          <div className="grid gap-6 sm:grid-cols-4">
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fbff] px-6 py-6 text-center">
                <p className="text-2xl font-semibold text-[#022c3b]">{metric.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#0f3050]/60">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-[#022c3b]">Here&apos;s why we&apos;re the leading platform</h2>
          <p className="mt-3 text-[#0f3050]/70">Inspired by OffersMeta aesthetics, tuned for ClicksMeta speed.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article key={item.badge} className="rounded-[36px] border border-[#c5e7ff] bg-white px-6 py-8 text-left shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ecfdf5]">
                <item.icon className="h-6 w-6 text-[#0ead69]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#022c3b]">{item.badge}</h3>
              <p className="mt-2 text-sm text-[#0f3050]/80">{item.description}</p>
              <button className="mt-4 text-sm font-semibold text-[#0ea5e9]">Learn more →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[48px] bg-gradient-to-br from-[#d1fae5] to-[#a5f3fc] px-8 py-12 shadow-[0_35px_80px_rgba(3,25,45,0.07)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#047857]">Global network</p>
              <h3 className="mt-4 text-3xl font-semibold text-[#022c3b]">Reach millions across our advertising platform</h3>
              <p className="mt-3 text-[#0f3050]/80">
                Monetize your inventory and reach the stars with transparent analytics, flexible pricing models, and global coverage.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[30px] border border-white/60 bg-white/60 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#065f46]">Daily reach</span>
                  <p className="text-2xl font-semibold text-[#022c3b]">7B+</p>
                  <p className="text-sm text-[#0f3050]/70">Impressions across the network</p>
                </div>
                <div className="rounded-[30px] border border-white/60 bg-white/60 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#065f46]">Flexible pricing</span>
                  <p className="text-lg font-semibold text-[#022c3b]">CPM / CPC / CPA</p>
                  <p className="text-sm text-[#0f3050]/70">Pay for the outcomes you value most</p>
                </div>
                <div className="rounded-[30px] border border-white/60 bg-white/60 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#065f46]">Global coverage</span>
                  <p className="text-2xl font-semibold text-[#022c3b]">200+</p>
                  <p className="text-sm text-[#0f3050]/70">Countries with localized inventory</p>
                </div>
              </div>
              <Button asChild className="mt-8 rounded-full bg-[#047857] text-white hover:bg-[#036149]">
                <Link to="/contact">Start your campaign</Link>
              </Button>
            </div>
            <div className="rounded-[42px] border border-white/70 bg-white/80 p-8 text-center shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ead69]">Elite partner brands</p>
              <p className="mt-3 text-[#0f3050]/70">Join the trusted logos already scaling with us.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {partnerBrands.map((brand) => (
                  <div key={brand} className="rounded-[28px] border border-[#e0f2fe] bg-[#f8fbff] px-5 py-4 text-sm font-semibold text-[#022c3b]">
                    {brand}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[32px] border border-dashed border-[#bbf7d0] bg-[#f0fdf4] p-6">
                <p className="text-lg font-semibold text-[#022c3b]">Let&apos;s add your badge next.</p>
                <Button asChild variant="outline" className="mt-4 rounded-full border-[#0ead69] text-[#0ead69] hover:bg-[#dcfce7]">
                  <Link to="/contact">Talk to partnerships</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[48px] bg-white px-8 py-12 shadow-[0_35px_80px_rgba(3,25,45,0.07)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ead69]">How to start</p>
              <h3 className="mt-4 text-3xl font-semibold text-[#022c3b]">Two guided paths, one shared dashboard.</h3>
              <p className="mt-3 text-[#0f3050]/80">Pick your persona, and our onboarding studio mirrors OffersMeta&apos;s delightful motions.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {journeyCards.map((card) => (
                <article key={card.title} className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fbff] px-6 py-6">
                  <h4 className="text-xl font-semibold text-[#022c3b]">{card.title}</h4>
                  <p className="mt-2 text-sm text-[#0f3050]/70">{card.copy}</p>
                  <Button asChild variant="outline" className="mt-4 rounded-full border-[#0ead69] text-[#0ead69] hover:bg-[#dcfce7]">
                    <Link to={card.href}>{card.cta}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ead69]">One billion monthly audience</p>
          <h3 className="mt-3 text-3xl font-semibold text-[#022c3b]">Industry-focused campaigns you can trust</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-[30px] border border-[#e0f2fe] bg-white px-5 py-6 text-sm font-semibold text-[#022c3b] shadow-sm">
                {industry}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[40px] border border-[#d5f5ff] bg-gradient-to-r from-[#eef2ff] to-[#ecfeff] px-8 py-10 text-left">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563eb]">Global traffic source</p>
                <h4 className="mt-3 text-3xl font-semibold text-[#022c3b]">Experience AI-powered distribution with real-time analytics.</h4>
                <p className="mt-3 text-[#0f3050]/80">
                  We mirror OffersMeta&apos;s playful gradients and pair them with actionable dashboards so every cohort stays confident.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#0ea5e9]">
                  <span className="rounded-full bg-white/80 px-4 py-1">99.9% uptime</span>
                  <span className="rounded-full bg-white/80 px-4 py-1">Realtime analytics</span>
                  <span className="rounded-full bg-white/80 px-4 py-1">Global network</span>
                </div>
              </div>
              <div className="rounded-[32px] border border-[#e0f2fe] bg-white/80 p-6 shadow-inner">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#ecfdf5] p-4 text-center">
                    <HeartHandshake className="mx-auto h-6 w-6 text-[#0ead69]" />
                    <p className="mt-2 text-sm font-semibold text-[#022c3b]">Customer love</p>
                    <p className="text-xs text-[#0f3050]/70">CSAT 4.9/5</p>
                  </div>
                  <div className="rounded-3xl bg-[#e0f2fe] p-4 text-center">
                    <Target className="mx-auto h-6 w-6 text-[#2563eb]" />
                    <p className="mt-2 text-sm font-semibold text-[#022c3b]">Precision</p>
                    <p className="text-xs text-[#0f3050]/70">+34% ROAS</p>
                  </div>
                  <div className="rounded-3xl bg-[#fef3f8] p-4 text-center">
                    <Rocket className="mx-auto h-6 w-6 text-[#ec4899]" />
                    <p className="mt-2 text-sm font-semibold text-[#022c3b]">Velocity</p>
                    <p className="text-xs text-[#0f3050]/70">Campaign setup in 15 min</p>
                  </div>
                  <div className="rounded-3xl bg-[#fff7ed] p-4 text-center">
                    <Globe className="mx-auto h-6 w-6 text-[#ea580c]" />
                    <p className="mt-2 text-sm font-semibold text-[#022c3b]">Coverage</p>
                    <p className="text-xs text-[#0f3050]/70">200+ countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full bg-[#0ead69] text-white hover:bg-[#0a8650]">
                <Link to="/demorequest">Get started</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#2563eb] text-[#2563eb] hover:bg-[#dbeafe]">
                <Link to="/contact">Watch demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
