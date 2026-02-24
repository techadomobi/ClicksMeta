import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sparkles, ShieldCheck, TrendingUp, Globe, Star, ArrowRight, Rocket } from "lucide-react"

const heroStats = [
  { label: "Daily Impressions", value: "50M+" },
  { label: "Fill Rate", value: "95%" },
  { label: "Support", value: "24/7" },
]

const journeyCards = [
  {
    title: "Advertisers",
    copy: "Reach millions of users every day with premium, brand-safe inventory curated for growth teams.",
    cta: { label: "Buy premium traffic", href: "/demorequest" },
    accent: "from-[#ecfdf5] to-[#d1fae5]",
  },
  {
    title: "Publishers",
    copy: "Maximize the value of your inventory with transparent analytics, payouts, and fraud protection.",
    cta: { label: "Monetize your traffic", href: "/signup" },
    accent: "from-[#e0f2fe] to-[#bfdbfe]",
  },
]

const reasonCards = [
  {
    title: "Audience quality",
    description: "Advanced verification layers block bots, spoofed installs, and risky placements before they hit your budget.",
    icon: ShieldCheck,
  },
  {
    title: "Traffic volume",
    description: "12B+ daily ad impressions across 195 geos so campaigns can launch anywhere without waiting lists.",
    icon: Globe,
  },
  {
    title: "Ad performance",
    description: "Creative labs, AI bidding, and live experimentation help you iterate as fast as your best-performing channels.",
    icon: TrendingUp,
  },
]

const partnerLogos = ["Samsung", "Verizon", "T-Mobile", "Xiaomi", "Nokia", "Oppo", "Amazon", "Myntra", "Lenovo", "Vivo"]

const industries = [
  "Mobile utilities",
  "Software",
  "Lead generation",
  "eCommerce",
  "Mobile apps",
  "Finance",
]

const reachMetrics = [
  { label: "Daily reach", value: "7B+", detail: "Global impressions across every channel" },
  { label: "Flexible pricing", value: "CPM / CPC / CPA", detail: "Match payouts with goals" },
  { label: "Global coverage", value: "200+", detail: "Countries with compliant inventory" },
]

export function AboutUsPage() {
  return (
    <div className="bg-[#eefafc] text-[#031b35]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e0f2f1] via-white to-[#dff5ff] px-4 py-20 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-10 h-60 w-60 rounded-full bg-[#a7f3d0] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#bfdbfe] blur-[140px]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0284c7] shadow">
              <Sparkles className="h-4 w-4 text-[#10b981]" />
              About ClicksMeta
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#022c3b] md:text-5xl lg:text-6xl">
              Global traffic intelligence for ethical, unstoppable growth.
            </h1>
            <p className="mt-4 text-lg text-[#0f3050]/80">
              We built ClicksMeta so marketers, publishers, and agencies could collaborate inside one glassy, data-rich workspace.
              Think OffersMeta&apos;s polish with a transparency-first mindset.
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
                className="rounded-full border-2 border-[#d0d7ff] bg-white/60 px-8 text-base font-semibold text-[#02233f] hover:bg-white"
              >
                <Link to="/about-us#story">Learn more</Link>
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
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ea5e9]">Live analytics</p>
              <div className="mt-6 grid gap-4 text-sm text-[#0f3050]">
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#0ead69]">Active users</p>
                    <span className="text-xs text-[#0f3050]/60">+12.5%</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#022c3b]">100K</p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#2563eb]">Conversion</p>
                    <span className="text-xs text-[#0f3050]/60">+2.1%</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#022c3b]">12%</p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#f97316]">Impressions</p>
                    <span className="text-xs text-[#0f3050]/60">+15.7%</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#022c3b]">984M</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 top-10 hidden rounded-full bg-[#4ade80]/40 px-4 py-2 text-xs font-semibold text-[#065f46] shadow lg:flex">
              ROI 340% up
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[48px] bg-gradient-to-r from-[#ecfeff] via-[#e0fffa] to-[#ecfdf5] px-6 py-12 shadow-[0_40px_90px_rgba(3,25,45,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_auto_1.2fr]">
            {journeyCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[36px] border border-white/70 bg-gradient-to-br ${card.accent} p-8 text-center shadow`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-inner shadow-white/60">
                  <Star className="h-6 w-6 text-[#0ea5e9]" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[#022c3b]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#0f3050]/80">{card.copy}</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 rounded-full border-2 border-[#0ead69] bg-white text-[#0ead69] hover:bg-[#dcfce7]"
                >
                  <Link to={card.cta.href}>
                    {card.cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
            <div className="hidden flex-col items-center justify-center text-center text-[#059669] lg:flex">
              <div className="text-3xl font-semibold">How to start?</div>
              <p className="mt-2 text-sm text-[#0f3050]/70">Pick your path, we guide the rest.</p>
              <div className="mt-6 h-24 w-24 rounded-full border-2 border-dashed border-[#34d399] p-4 text-xs uppercase tracking-[0.35em]">
                Easy
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[48px] bg-white px-8 py-10 shadow-[0_45px_80px_rgba(3,25,45,0.08)]">
            <span className="inline-flex items-center rounded-full bg-[#f1fff2] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0ead69]">
              OffersMeta energy
            </span>
            <h2 className="mt-6 text-4xl font-semibold text-[#022c3b]">ClicksMeta</h2>
            <p className="mt-4 text-[#0f3050]/80">
              We empower brands and apps to grow smarter—not harder. Our all-in-one platform simplifies ad creation, optimization,
              and partner payouts with transparent analytics. Backed by AI copilots and revenue strategists, every impression is
              tuned for long-term retention.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#bbf7d0] bg-[#ecfdf5] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#0ead69]">App integrations</p>
                <p className="mt-2 text-3xl font-semibold text-[#022c3b]">8,000</p>
              </div>
              <div className="rounded-3xl border border-[#bfdbfe] bg-[#e0f2fe] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2563eb]">Worldwide users</p>
                <p className="mt-2 text-3xl font-semibold text-[#022c3b]">2M+</p>
              </div>
            </div>
            <Button asChild className="mt-8 rounded-full bg-[#0ead69] text-white hover:bg-[#0a8650]">
              <Link to="/contact">Learn more</Link>
            </Button>
          </div>
          <div className="rounded-[48px] border border-[#bbf7d0] bg-gradient-to-br from-[#a7f3d0] to-[#6ee7b7] p-10 text-white">
            <div className="h-full rounded-[36px] border border-white/40 bg-white/20 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em]">
                <span>Live preview</span>
                <Rocket className="h-5 w-5" />
              </div>
              <div className="mt-8 rounded-[28px] bg-white/80 p-5 text-[#022c3b] shadow-lg">
                <p className="text-lg font-semibold">Your App</p>
                <p className="text-sm text-[#0f3050]/70">Installing...</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {["Brown Chair", "Elegant Table", "Lighting Kit", "Art Print"].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#bae6fd] bg-white px-4 py-3 text-sm font-semibold text-[#022c3b]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/30 p-4">
                  <p className="text-xs uppercase tracking-[0.35em]">Realtime</p>
                  <p className="text-2xl font-semibold">99.9%</p>
                  <p className="text-xs text-white/80">Uptime</p>
                </div>
                <div className="rounded-3xl bg-white/30 p-4">
                  <p className="text-xs uppercase tracking-[0.35em]">Markets</p>
                  <p className="text-2xl font-semibold">150+</p>
                  <p className="text-xs text-white/80">Active regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ead69]">Why we lead</p>
          <h3 className="mt-4 text-3xl font-semibold text-[#022c3b]">Here&apos;s why ClicksMeta is the leading platform</h3>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
          {reasonCards.map((card) => (
            <article key={card.title} className="rounded-[36px] border border-[#c5e7ff] bg-white px-6 py-8 text-left shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ecfdf5]">
                <card.icon className="h-6 w-6 text-[#0ead69]" />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-[#022c3b]">{card.title}</h4>
              <p className="mt-2 text-sm text-[#0f3050]/80">{card.description}</p>
              <button className="mt-4 text-sm font-semibold text-[#0ea5e9]">Learn more →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[48px] bg-gradient-to-r from-white via-[#ecfeff] to-white px-8 py-12 shadow-[0_35px_75px_rgba(3,25,45,0.07)]">
          <h3 className="text-center text-3xl font-semibold text-[#022c3b]">One billion monthly audience for industry-focused campaigns</h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-[30px] border border-[#e0f2fe] bg-white px-5 py-6 text-center text-sm font-semibold text-[#022c3b] shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[48px] bg-gradient-to-br from-[#d1fae5] to-[#a5f3fc] p-10 text-[#022c3b] shadow-[0_35px_80px_rgba(3,25,45,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#047857]">Global network</p>
            <h3 className="mt-4 text-3xl font-semibold">Reach Millions</h3>
            <p className="mt-3 text-[#0f3050]/80">
              Monetize inventory and reach the stars with our AI-powered advertising platform. Transparent reporting keeps every stakeholder aligned.
            </p>
            <div className="mt-8 grid gap-4">
              {reachMetrics.map((metric) => (
                <div key={metric.label} className="flex flex-col rounded-3xl border border-white/60 bg-white/60 px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#059669]">{metric.label}</span>
                  <span className="text-xl font-semibold text-[#022c3b]">{metric.value}</span>
                  <span className="text-sm text-[#0f3050]/70">{metric.detail}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 w-full rounded-full bg-[#047857] text-white hover:bg-[#036149]">
              <Link to="/demorequest">Start your campaign</Link>
            </Button>
          </div>
          <div className="rounded-[48px] border border-white/70 bg-white px-8 py-10 shadow-[0_35px_80px_rgba(3,25,45,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0ead69]">Elite partner brands</p>
            <p className="mt-4 text-[#0f3050]/80">
              Join a prestigious network and discover the brands who trust ClicksMeta.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Hotstar", "Makemytrip", "Amazon", "Myntra", "MoneyMan", "Zasta"].map((brand) => (
                <div key={brand} className="rounded-[28px] border border-[#e0f2fe] bg-[#f8fbff] px-5 py-4 text-center text-sm font-semibold text-[#022c3b]">
                  {brand}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[32px] border border-dashed border-[#bbf7d0] bg-[#f0fdf4] p-6 text-center">
              <p className="text-lg font-semibold text-[#022c3b]">Want your logo here?</p>
              <p className="mt-2 text-sm text-[#0f3050]/70">Tap our partnerships team to co-design your launch.</p>
              <Button asChild variant="outline" className="mt-4 rounded-full border-[#0ead69] text-[#0ead69] hover:bg-[#dcfce7]">
                <Link to="/contact">Talk to partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
