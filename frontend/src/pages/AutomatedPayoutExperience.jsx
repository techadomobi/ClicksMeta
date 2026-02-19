import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Globe2,
  Headphones,
  LifeBuoy,
  ListChecks,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  WalletCards,
} from "lucide-react"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const automatedPayoutSlug = "automated-payout"

const illustrationVariants = ["invoice", "documents", "ledger", "support", "smartwatch"]

const industrySources = [
  { slug: "ecommerce", accent: "#22c55e" },
  { slug: "banking", accent: "#f97316" },
  { slug: "fintech", accent: "#0ea5e9" },
  { slug: "travel", accent: "#a855f7" },
  { slug: "media-network", accent: "#ec4899" },
]

const ratingBadges = [
  { platform: "G2", rating: "4.7/5" },
  { platform: "Capterra", rating: "4.3/5" },
  { platform: "Trustradius", rating: "8/10" },
]

const testimonialQuotes = [
  {
    quote:
      "I am very much satisfied. The CSM goes above and beyond. The support we receive is exceptional. I would give ClicksMeta a 10 on 10.",
    name: "Rachit Chugh",
    role: "Senior Operations Manager, Cuelinks",
  },
  {
    quote:
      "I would rate ClicksMeta a solid 10. The primary reasons include its robust features, excellent support, and the measurable impact on our marketing efforts.",
    name: "Vijay Tiwari",
    role: "Business Head, JioCoupons",
  },
  {
    quote:
      "The only constant about our industry is that it changes every day. You expect your tech stack to be ready for changes, and ClicksMeta never fails to amaze.",
    name: "Rohit Arora",
    role: "VP - Mobile, Xapads Media",
  },
]

const defaultCta = {
  title: "Looking for deeper details?",
  description: "Schedule a tailored walkthrough so we can show you how ClicksMeta mirrors Trackier-level execution.",
  primary: { label: "Book a demo", href: "/demorequest" },
  secondary: { label: "Contact sales", href: "/contact" },
}

export function AutomatedPayoutExperience() {
  const content = footerPageContent[automatedPayoutSlug]
  const design = footerDesignConfig.pages[automatedPayoutSlug] || {}

  const heroStats = (design.statGrid || []).slice(0, 2)
  const bodyStats = (design.statGrid || []).slice(heroStats.length)
  const highlights = content.highlights || []
  const infoSections = buildInfoSections(content, design)
  const faqs = design.faqs || []
  const featurePanels = design.featurePanels || []
  const cta = content.cta || defaultCta
  const industries = buildIndustries()

  return (
    <div className="bg-gradient-to-b from-[#fffef8] via-[#f3f7ff] to-[#ecf2ff] text-[#081225]">
      <HeroSection hero={content.hero} category={content.category} highlights={highlights} stats={heroStats} cta={cta} />
      {bodyStats.length > 0 && <BodyStatGrid stats={bodyStats} />}
      {infoSections.map((section, index) => (
        <InfoSection key={section.id} section={section} reverse={index % 2 === 1} />
      ))}
      {featurePanels.length > 0 && <FeaturePanelGrid panels={featurePanels} />}
      <AccoladesSection ratings={ratingBadges} quotes={testimonialQuotes} />
      {industries.length > 0 && <IndustriesSection industries={industries} />}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}
      <BottomCta cta={cta} />
    </div>
  )
}

function buildInfoSections(content, design) {
  const sections = content.sections || []
  const highlights = content.highlights || []
  const featurePanels = design.featurePanels || []
  const mapped = []

  if (sections[0]) {
    mapped.push({
      id: `section-${sections[0].title}`,
      label: sections[0].tagline || "Product insight",
      title: sections[0].title,
      description: sections[0].description,
      bullets: featurePanels.map((panel) => ({
        title: panel.title,
        emphasis: panel.badge,
        description: panel.description,
      })),
    })
  }

  if (sections[1]) {
    mapped.push({
      id: `section-${sections[1].title}`,
      label: sections[1].tagline || "Partner experience",
      title: sections[1].title,
      description: sections[1].description,
      bullets: highlights.map((item) => ({
        title: item.title,
        emphasis: "Key benefit",
        description: item.description,
      })),
    })
  }

  return mapped.map((section, index) => ({
    ...section,
    illustration: illustrationVariants[index % illustrationVariants.length],
  }))
}

function buildIndustries() {
  return industrySources
    .map(({ slug, accent }) => {
      const entry = footerPageContent[slug]
      if (!entry) return null
      const firstSection = entry.sections?.[0]
      return {
        id: slug,
        label: entry.title,
        description: entry.hero?.description || "",
        bullets: firstSection?.bullets || [],
        accent,
        tag: entry.hero?.eyebrow || entry.category,
      }
    })
    .filter(Boolean)
}

function HeroSection({ hero, category, highlights, stats, cta }) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-[#facc15]/30 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#34d399]/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#16a34a]/20 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#16a34a]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#0b1024] md:text-5xl">
            {hero?.title}
          </h1>
          <p className="mt-4 text-lg text-[#1f2a44]/80">{hero?.description}</p>
          {highlights.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1f2a44]">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0b1024]">{item.title}</p>
                    <p className="text-[#475467]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button
                asChild
                className="rounded-full bg-[#22c55e] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a]"
              >
                <Link to={cta.primary.href}>{cta.primary.label}</Link>
              </Button>
            )}
            {cta.secondary && (
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0f172a]/20 bg-white/80 px-8 py-6 text-base font-semibold text-[#0f172a] hover:bg-white"
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-[#475467]">
            <span>{category}</span>
            <span>Enterprise-ready</span>
          </div>
        </div>
        <HeroIllustration stats={stats} />
      </div>
    </section>
  )
}

function HeroIllustration({ stats }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#fde68a] to-transparent blur-2xl" />
      <div className="relative z-10 w-full rounded-[36px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur">
        <div className="rounded-[28px] border border-[#fde68a] bg-[#fff4d6] p-5">
          <div className="flex items-center justify-between text-sm font-semibold text-[#0b1024]">
            <span>INVOICE</span>
            <span className="text-xs text-[#475467]">NET 7</span>
          </div>
          <div className="mt-4 space-y-3">
            {["LATAM partner", "EU marketplace", "APAC creator"].map((label, index) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-2 text-sm">
                <span className="text-[#475467]">{label}</span>
                <span className="font-semibold">${(4.8 + index * 1.2).toFixed(1)}k</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-dashed border-[#f59e0b] bg-white px-4 py-3 text-sm text-[#92400e]">
            FX lock confirmed - 1.2% fee
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-100 bg-[#f9fbff] px-4 py-3">
              <p className="text-2xl font-semibold text-[#0b1024]">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#22c55e]/30 bg-[#ecfdf3] px-4 py-3 text-sm text-[#166534]">
          <span>Automated payout</span>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

function BodyStatGrid({ stats }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#475467]">In-market signals</p>
        <span className="text-xs text-[#94a3b8]">Live benchmarks</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/60 bg-white px-5 py-6 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
            <p className="text-3xl font-semibold text-[#0b1024]">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function InfoSection({ section, reverse }) {
  const bulletIcons = [Globe2, BadgeDollarSign, BarChart3, ShieldCheck, Sparkles, ListChecks]
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div
        className={[
          "mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[40px] border border-white/60 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]",
          reverse ? "md:flex-row-reverse" : "md:flex-row",
        ].join(" ")}
      >
        <div className="w-full p-8 md:w-3/5 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#94a3b8]">{section.label}</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0b1024]">{section.title}</h2>
          <p className="mt-4 text-base text-[#475467]">{section.description}</p>
          <div className="mt-6 space-y-4">
            {section.bullets.map((bullet, index) => {
              const Icon = bulletIcons[index % bulletIcons.length]
              return (
                <div key={bullet.title} className="flex items-start gap-4 rounded-2xl bg-[#fff1f7] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#ec4899] shadow-md shadow-[#ec4899]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#0b1024]">
                      {bullet.title} <span className="text-[#ec4899]">{bullet.emphasis}</span>
                    </p>
                    <p className="mt-1 text-sm text-[#475467]">{bullet.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full border-t border-slate-100 bg-gradient-to-b from-[#f9fbff] to-white p-8 md:w-2/5 md:border-t-0 md:border-l">
          <IllustrationPanel variant={section.illustration} />
        </div>
      </div>
    </section>
  )
}

function IllustrationPanel({ variant }) {
  return (
    <div className="relative mx-auto flex h-full max-w-sm items-center justify-center">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#dbeafe] via-white to-white blur-3xl" />
      <div className="relative z-10 w-full rounded-[32px] border border-[#e0e7ff] bg-white p-6 shadow-2xl">
        {variant === "invoice" && <PanelInvoice />}
        {variant === "documents" && <PanelDocuments />}
        {variant === "ledger" && <PanelLedger />}
        {variant === "support" && <PanelSupport />}
        {variant === "smartwatch" && <PanelSmartwatch />}
      </div>
    </div>
  )
}

function PanelInvoice() {
  return (
    <div className="space-y-4">
      {["North America", "Europe", "APAC"].map((region, index) => (
        <div key={region} className="rounded-2xl border border-[#f8d1ff] bg-[#fef3ff] p-4">
          <div className="flex items-center justify-between text-sm text-[#475467]">
            <span>{region}</span>
            <span className="text-xs uppercase tracking-[0.35em] text-[#f472b6]">Paid</span>
          </div>
          <p className="mt-2 text-2xl font-semibold text-[#0b1024]">${(3.2 + index).toFixed(1)}k</p>
          <p className="text-xs uppercase tracking-[0.35em] text-[#a855f7]">ACH - Cleared</p>
        </div>
      ))}
    </div>
  )
}

function PanelDocuments() {
  return (
    <div className="space-y-3">
      {["INV-2026-04", "INV-2026-05", "INV-2026-06"].map((invoice) => (
        <div key={invoice} className="rounded-2xl border border-[#d9e5ff] bg-[#eef2ff] p-4">
          <p className="text-sm font-semibold text-[#1f2a44]">{invoice}</p>
          <p className="text-xs text-[#475467]">Auto-generated - Net 15</p>
        </div>
      ))}
      <div className="rounded-2xl border border-dashed border-[#4f46e5] bg-white/80 p-4 text-sm text-[#312e81]">
        Reconciliation scheduled - 04:00 UTC
      </div>
    </div>
  )
}

function PanelLedger() {
  return (
    <div className="space-y-4">
      {[
        { title: "Wallet balance", value: "$482K", accent: "#16a34a" },
        { title: "Queued payouts", value: "$96K", accent: "#f97316" },
        { title: "On hold", value: "$12K", accent: "#f43f5e" },
      ].map((row) => (
        <div key={row.title} className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">{row.title}</p>
          <p className="mt-2 text-2xl font-semibold" style={{ color: row.accent }}>
            {row.value}
          </p>
        </div>
      ))}
      <div className="rounded-2xl border border-[#22c55e]/30 bg-[#ecfdf3] p-4 text-sm text-[#166534]">34 payouts cleared in the last hour</div>
    </div>
  )
}

function PanelSupport() {
  return (
    <div className="space-y-4">
      {[
        { title: "Finance hotline", detail: "Avg. response 2m", icon: Headphones },
        { title: "Workflow bot", detail: "Guided invoice fix", icon: MessageCircle },
        { title: "Self-serve library", detail: "24/7 payouts docs", icon: LifeBuoy },
      ].map((item) => (
        <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-[#dbeafe] bg-[#eef2ff] p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4f46e5]">
            <item.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0b1024]">{item.title}</p>
            <p className="text-xs text-[#475467]">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function PanelSmartwatch() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-48 w-36 rounded-[32px] border-[6px] border-[#0f172a] bg-white p-4">
        <div className="rounded-2xl border border-slate-200 p-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">Slot</p>
          <p className="text-3xl font-semibold text-[#0f172a]">08:00</p>
          <p className="text-xs text-[#475467]">GMT +5:30</p>
        </div>
        <div className="mt-3 rounded-2xl border border-dashed border-[#34d399] p-3 text-center text-sm text-[#0f172a]">
          Auto-release ready
        </div>
      </div>
      <p className="text-sm text-[#475467]">Fine-tune payouts across every timezone.</p>
    </div>
  )
}

function FeaturePanelGrid({ panels }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Workflow accelerators</p>
        <h3 className="mt-4 text-3xl font-semibold text-[#0b1024]">Purpose-built payout controls</h3>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {panels.map((panel) => (
          <article key={panel.title} className="rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-[0_20px_65px_rgba(15,23,42,0.08)]">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2563eb]">{panel.badge}</span>
            <h4 className="mt-3 text-xl font-semibold text-[#0b1024]">{panel.title}</h4>
            <p className="mt-3 text-sm text-[#475467]">{panel.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AccoladesSection({ ratings, quotes }) {
  return (
    <section className="bg-[#030617] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#030617] to-[#050d2b] p-10 shadow-[0_40px_120px_rgba(8,16,40,0.6)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Accolades & Appreciations</p>
            <h3 className="mt-4 text-3xl font-semibold">Preferred by finance and partner leaders</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {ratings.map((stat) => (
                <div key={stat.platform} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold">{stat.rating}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">{stat.platform}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {quotes.map((item, index) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <div className="flex items-center gap-2 text-amber-300">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={`${item.name}-${star}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-base text-white/80">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{item.role}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                  <span className="h-1.5 w-16 rounded-full bg-white/20" />
                  <span>Story {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection({ industries }) {
  const [activeId, setActiveId] = useState(industries[0]?.id)
  const active = industries.find((item) => item.id === activeId) || industries[0]

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-[#e2e8f0] bg-white p-10 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">
          Solving marketing challenges across industries
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((item) => (
            <button
              key={item.id}
              type="button"
              className={[
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                item.id === activeId ? "border-transparent text-white" : "border-[#e2e8f0] text-[#475467]",
              ].join(" ")}
              style={item.id === activeId ? { backgroundColor: item.accent } : {}}
              onMouseEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{active.tag}</p>
            <h4 className="mt-3 text-2xl font-semibold text-[#0b1024]">{active.label}</h4>
            <p className="mt-4 text-base text-[#475467]">{active.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#1f2a44]">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: active.accent }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#eef2ff] to-white blur-2xl" />
            <div className="relative z-10 rounded-[32px] border border-[#e2e8f0] bg-white p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">Workflow preview</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-dashed border-[#cbd5f5] p-4">
                  <p className="text-sm font-semibold text-[#0b1024]">Trigger</p>
                  <p className="text-sm text-[#475467]">Conversion posted - {active.label}</p>
                </div>
                <div className="rounded-2xl border border-dashed border-[#fde68a] p-4">
                  <p className="text-sm font-semibold text-[#0b1024]">Action</p>
                  <p className="text-sm text-[#475467]">Apply payout template - Lock FX rate</p>
                </div>
                <div className="rounded-2xl border border-dashed border-[#22c55e] p-4">
                  <p className="text-sm font-semibold text-[#0b1024]">Result</p>
                  <p className="text-sm text-[#475467]">Partner portal updates instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection({ faqs }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#dbeafe] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Frequently Asked, Clearly Answered</p>
        <Accordion type="single" collapsible className="mt-6 divide-y divide-[#e2e8f0]">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-none">
              <AccordionTrigger className="text-left text-base font-semibold text-[#0b1024]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#475467]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function BottomCta({ cta }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[40px] border border-[#bae6fd] bg-gradient-to-r from-[#dcfce7] via-[#e0f2fe] to-[#ede9fe] p-10 text-[#0b1024] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0b1024]/60">Next step</p>
          <h3 className="mt-4 text-3xl font-semibold">{cta.title}</h3>
          <p className="mt-3 text-base text-[#1f2a44]">{cta.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cta.primary && (
            <Button
              asChild
              className="rounded-full bg-[#0f172a] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#0f172a]/40 hover:bg-[#111827]"
            >
              <Link to={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
          )}
          {cta.secondary && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0f172a] px-8 py-6 text-base font-semibold text-[#0f172a] hover:bg-white"
            >
              <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

