import { Link } from "react-router-dom"
import { PageShell } from "@/components/PageShell"
import { Button } from "@/components/ui/button"
import { Globe2, Users, Sparkles, Activity, Compass, Rocket, Quote, MapPin, ShieldCheck } from "lucide-react"

const stats = [
  { label: "Teammates", value: "180+" },
  { label: "Customers", value: "350+" },
  { label: "Markets", value: "32" },
]

const timeline = [
  {
    year: "2018",
    title: "ClicksMeta begins",
    detail: "Two ex-media buyers build better analytics for affiliate teams.",
  },
  {
    year: "2020",
    title: "Global footprint",
    detail: "Opens NYC, Dubai, and Bengaluru studios to stay close to customers.",
  },
  {
    year: "2023",
    title: "Intelligence layer",
    detail: "Launches AI copilots that keep partner managers proactive.",
  },
  {
    year: "2025",
    title: "ClicksMeta Cloud",
    detail: "Unifies analytics, automation, and payouts inside one trust platform.",
  },
]

const values = [
  {
    title: "Craft with clarity",
    description: "We default to open communication and shared dashboards so everyone sees the same truth.",
    icon: Globe2,
  },
  {
    title: "Operate with empathy",
    description: "Customers, partners, and teammates get the same level of care, feedback, and candor.",
    icon: Users,
  },
  {
    title: "Ship fearless",
    description: "Launch weeks keep us iterating fast but responsibly—we ship when outcomes are measurable.",
    icon: Rocket,
  },
]

const cultureNotes = [
  {
    badge: "Studio Rhythm",
    title: "Launch Weeks",
    description: "Every quarter we pause meetings, pair designers with engineers, and ship bold customer ideas.",
  },
  {
    badge: "Community",
    title: "ClicksMeta Commons",
    description: "Hybrid spaces in NYC, Dubai, and Bengaluru host learning clubs and partner meetups.",
  },
  {
    badge: "Wellness",
    title: "Recharge Sprints",
    description: "Teams take coordinated recharge time after big launches to stay creative and grounded.",
  },
]

const leadershipQuotes = [
  {
    quote: "Performance marketing deserves the same craft and trust as product-led growth. We're building that operating system.",
    author: "Mira Patel",
    role: "CEO & Co-founder",
  },
  {
    quote: "Our platform mirrors customer cultures—from compliance-heavy banks to creator-first agencies.",
    author: "Jonas Müller",
    role: "Chief Product Officer",
  },
]

export function AboutUsPage() {
  return (
    <PageShell tone="mint">
    <div className="bg-[#f5f7fe] text-[#0f1a3d]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#131c33] to-[#0b1120] px-4 py-24 sm:px-6">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22d3ee]/20 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-[#f472b6]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
              <Sparkles className="h-4 w-4" /> About ClicksMeta
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              We build the operating system for trustworthy performance growth
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A distributed collective of builders, strategists, and success partners obsessed with turning every click into a
              measurable, ethical customer moment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/15 bg-white/10 px-5 py-6 text-center text-white">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white text-[#0f172a] hover:bg-white/90">
                <Link to="/careers">Explore careers</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
                <Link to="/contact">Talk to leadership</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[36px] border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Global presence</p>
              <div className="mt-6 space-y-4 text-white/80">
                <div className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3">
                  <MapPin className="h-5 w-5 text-[#38bdf8]" />
                  HQ hubs in NYC, Dubai, Bengaluru, and São Paulo
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3">
                  <ShieldCheck className="h-5 w-5 text-[#34d399]" />
                  Compliance-ready pods for fintech, retail, and agency collectives
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3">
                  <Activity className="h-5 w-5 text-[#f472b6]" />
                  24/5 follow-the-sun support
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#38bdf8]/30 blur-2xl lg:block" />
            <div className="absolute -right-4 bottom-0 hidden h-16 w-16 rounded-full bg-[#ec4899]/30 blur-xl lg:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Mission & vision</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f172a]">Built for ambitious, responsible teams</h2>
            <p className="mt-3 text-[#475569]">
              We help growth teams operate like product orgs: data-transparent, automation-friendly, and relentlessly customer-centric.
              That means coaching, documentation, and rituals that turn experimentation into habit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-[30px] border border-[#dfe6ff] bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4f7ff] text-[#2563eb]">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">{value.title}</h3>
                <p className="mt-2 text-sm text-[#475569]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#0f172a]">Milestones that shaped us</h2>
          <div className="mt-10 space-y-6">
            {timeline.map((entry) => (
              <div key={entry.year} className="grid gap-4 rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] px-6 py-5 md:grid-cols-[120px_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">{entry.year}</p>
                  <p className="text-xl font-semibold text-[#0f172a]">{entry.title}</p>
                </div>
                <p className="text-[#475569]">{entry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[#0f172a]">Culture in motion</h2>
              <p className="mt-3 text-[#475569]">
                The way we work is as important as what we ship. Here are rituals teammates and customers feel every week.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cultureNotes.map((note) => (
                <article key={note.title} className="rounded-[30px] border border-[#dfe6ff] bg-white p-5 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ec4899]">{note.badge}</span>
                  <h3 className="mt-3 text-lg font-semibold text-[#0f172a]">{note.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{note.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef2ff] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-[#0f172a]">Voices of leadership</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {leadershipQuotes.map((item) => (
              <article key={item.author} className="rounded-[32px] border border-[#d5dbff] bg-white p-6 shadow-sm">
                <Quote className="h-6 w-6 text-[#6366f1]" />
                <p className="mt-4 text-[#0f172a]">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[#0f172a]">{item.author}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-[40px] border border-[#c6f7e2] bg-gradient-to-r from-[#c6f7e2] via-[#dbeafe] to-[#fbcfe8] px-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f9f6e]">Join the build</p>
            <h3 className="mt-4 text-3xl font-semibold text-[#0f172a]">Bring your craft to ClicksMeta</h3>
            <p className="mt-3 text-[#475569]">
              Engineers, strategists, storytellers, operators—we are hiring across product, success, and compliance pods. If building
              trustworthy growth systems excites you, we should talk.
            </p>
          </div>
          <div className="rounded-[30px] border border-[#0f172a]/10 bg-white/80 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563eb]">Next steps</p>
            <p className="mt-3 text-lg text-[#0f172a]">Explore open roles or design a custom partnership visit.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full bg-[#2563eb] text-white hover:bg-[#1e4fd6]">
                <Link to="/careers">See open roles</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#0f172a] text-[#0f172a] hover:bg-black/5">
                <Link to="/contact">Plan a visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageShell>
  )
}
