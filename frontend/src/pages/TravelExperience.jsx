import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const TRAVEL_SLUG = "travel"

const heroFallback = {
  eyebrow: "Solutions / Travel",
  title: "Make Your Travel Affiliate Programs Soar with Trackier",
  description:
    "Drive more travel bookings, expand partner reach, and optimize ROI with advanced partner management, omni-channel tracking, flexible payouts, and compliant reporting.",
}

const heroHighlights = ["Omni-channel tracking", "Multi-currency payouts", "Influencer programs", "Travel-ready analytics"]

const featureVisuals = [
  {
    chip: "Attribution",
    label: "Journey clarity",
    background: "from-[#def7ff] via-[#f5fbff] to-[#ffffff]",
    accent: "#0ea5e9",
    cards: [
      { label: "Touchpoints", value: "Full funnel" },
      { label: "Insights", value: "Dynamic modeling" },
      { label: "Alerts", value: "Real time" },
    ],
  },
  {
    chip: "Finance",
    label: "Global readiness",
    background: "from-[#fff2d7] via-[#fff9ed] to-[#ffffff]",
    accent: "#f97316",
    cards: [
      { label: "Currencies", value: "85+" },
      { label: "Geo ledgers", value: "One view" },
      { label: "Reconciled", value: "Instant" },
    ],
  },
  {
    chip: "Packages",
    label: "Bundled insight",
    background: "from-[#f9e4ff] via-[#fff5ff] to-[#ffffff]",
    accent: "#c084fc",
    cards: [
      { label: "Combos", value: "Flight + stay" },
      { label: "Guardrails", value: "Brand safe" },
      { label: "Upsell", value: "Data led" },
    ],
  },
  {
    chip: "Operations",
    label: "Market pulse",
    background: "from-[#dfe8ff] via-[#f4f7ff] to-[#ffffff]",
    accent: "#4f46e5",
    cards: [
      { label: "Updates", value: "Live" },
      { label: "Dashboards", value: "Role based" },
      { label: "Programs", value: "Loyalty ready" },
    ],
  },
]

const apptroveCta = {
  eyebrow: "Fraudulent events hurting your app growth?",
  title: "Roll Out Apptrove to Keep Every Travel App Experience Clean",
  body: "Apptrove mirrors the Trackier travel playbook with automated vetting, credential workflows, and in-app guardrails so you can fight fake installs while boosting genuine demand.",
  primary: { label: "Explore Apptrove", href: "https://apptrove.com" },
}

const faqData = [
  {
    question: "Does Trackier integrate with other travel marketing tools?",
    answer:
      "Yes. Connect CRM, booking engines, ad platforms, and analytics stacks so partner insights, spend data, and loyalty signals land inside one dashboard.",
  },
  {
    question: "How do travel affiliate programs boost bookings?",
    answer:
      "Programs combine influencer reach, partner marketplaces, and owned campaigns so you can experiment with itineraries, reward high performers, and scale proven offers quickly.",
  },
  {
    question: "Can Trackier personalize my travel affiliate program?",
    answer:
      "Use granular traveler segments, contextual landing pages, and triggered creatives to personalize messaging for routes, seasonal trips, or loyalty tiers.",
  },
  {
    question: "What travel marketing challenges does Trackier solve?",
    answer:
      "Trackier centralizes cross-border compliance, payout governance, inventory signals, and fraud detection so distributed teams make coordinated decisions.",
  },
  {
    question: "Can I track offline or influencer impact?",
    answer:
      "Upload redemption files or promo codes from offline events, pair them with influencer tracking links, and attribute conversions alongside digital campaigns.",
  },
  {
    question: "Will Trackier support multi-geo travel programs?",
    answer:
      "Absolutely. Apply geo-specific rate cards, taxes, disclosures, and publishing permissions so each market scales on its own timeline without losing oversight.",
  },
]

const defaultCta = {
  title: "See How Trackier's Marketing Analytics Work for Campaigns Across Industries",
  description: "Request your demo now to revisit attribution, payouts, and analytics tailored to travel affiliate teams.",
  primary: { label: "Request Your Demo Now", href: "/demorequest" },
  secondary: { label: "Get Started", href: "/signup" },
}

export function TravelExperience() {
  const content = footerPageContent[TRAVEL_SLUG] || {}
  const design = footerDesignConfig.pages[TRAVEL_SLUG] || {}
  const hero = content.hero || heroFallback
  const sections = content.sections || []
  const heroStats = design.statGrid || []
  const inlineCta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#e9fbf7] via-[#f1f7ff] to-[#fff5f7] text-[#0f172a]">
      <HeroBlock hero={hero} highlights={heroHighlights} stats={heroStats} />
      <IntroCopy />
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          {sections.map((section, index) => (
            <Fragment key={section.title}>
              <FeatureBlock section={section} visual={featureVisuals[index % featureVisuals.length]} reversed={index % 2 === 1} />
              {index === 1 && <InlineCta cta={inlineCta} />}
            </Fragment>
          ))}
        </div>
      </section>
      <ApptrovePanel data={apptroveCta} />
      <FaqStack faqs={faqData} />
    </div>
  )
}

function HeroBlock({ hero, highlights, stats }) {
  return (
    <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-gradient-to-br from-[#d9f8ee] via-white to-[#fff5fb] px-8 py-12 shadow-[0_35px_110px_rgba(15,23,42,0.12)] lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6689a9]">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0b1330] md:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-lg text-[#1f2b49]">{hero.description}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-[#1d2752]">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-full border border-[#d7def5] bg-white/90 px-4 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-[#1cbc8a]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="rounded-full bg-[#1cbc8a] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#21d29a]/30 hover:bg-[#19966f]">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#142046] px-8 py-6 text-base font-semibold text-[#142046] hover:bg-white/70 hover:text-[#0f172a]"
            >
              <Link to="/demorequest">Request a Demo</Link>
            </Button>
          </div>
        </div>
        <HeroVisual stats={stats} />
      </div>
    </section>
  )
}

function HeroVisual({ stats }) {
  const fallbackStats = [
    { label: "Routes monitored", value: "640" },
    { label: "Geo payouts", value: "85" },
    { label: "Ancillary lift", value: "+19%" },
  ]
  const data = stats.length ? stats : fallbackStats

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/80 p-6 text-[#0b1535] shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
      <div className="rounded-[28px] border border-dashed border-[#97e0ca] bg-[#ecfdf6] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6da38c]">Travel program snapshot</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {data.slice(0, 4).map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-sm">
              <p className="text-2xl font-semibold text-[#0d1c43]">{card.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7d89b8]">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-[28px] border border-[#ffe0f2] bg-gradient-to-br from-[#fff0f7] to-[#fff] p-5">
        <p className="text-sm font-semibold text-[#c34b84]">Travel Affiliate Programs Done Right</p>
        <p className="mt-2 text-sm text-[#563351]">Soft gradients, pastel stat cards, and pill CTAs mirror the Trackier travel reference layout.</p>
      </div>
    </div>
  )
}

function IntroCopy() {
  return (
    <section className="px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7b88ad]">Chart your course</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#0e1636]">Travel Affiliate Programs Management</h2>
        <p className="mt-4 text-base text-[#4c5573]">
          Every fold echoes Trackier&apos;s travel affiliate management software page--long-form storytelling, alternating layouts, and proof blocks for insights, multi-currency payouts, packaged booking analytics, and real-time dashboards.
        </p>
      </div>
    </section>
  )
}

function FeatureBlock({ section, visual, reversed }) {
  return (
    <article
      className={[
        "grid gap-8 rounded-[48px] border border-[#ecf0fb] bg-white/90 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.06)]",
        reversed ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]",
      ].join(" ")}
    >
      <div className={reversed ? "order-2" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7f8cb7]">Travel affiliate focus</p>
        <h3 className="mt-3 text-3xl font-semibold text-[#121942]">{section.title}</h3>
        <p className="mt-4 text-base text-[#3b4363]">{section.description}</p>
        {section.bullets && (
          <ul className="mt-6 space-y-3 text-sm text-[#1b223f]">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#1cbc8a]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={reversed ? "order-1" : ""}>
        <FeatureVisual visual={visual} />
      </div>
    </article>
  )
}

function FeatureVisual({ visual }) {
  return (
    <div className={`relative overflow-hidden rounded-[36px] border border-[#eceffe] bg-gradient-to-br ${visual.background} p-6`}>
      <span className="inline-flex rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: visual.accent }}>
        {visual.chip}
      </span>
      <h4 className="mt-4 text-2xl font-semibold text-[#0f162f]">{visual.label}</h4>
      <div className="mt-6 grid gap-3">
        {visual.cards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm">
            <p className="text-sm font-semibold text-[#4b546e]">{card.label}</p>
            <p className="text-lg font-semibold text-[#0d1c43]">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-dashed border-white/70 bg-white/60 px-4 py-3 text-sm text-[#4b546e]">
        Layout mirrors the Trackier travel screenshot with gradients, pill stats, and caption cards.
      </div>
    </div>
  )
}

function InlineCta({ cta }) {
  return (
    <div className="mx-auto max-w-5xl rounded-[44px] border border-[#d9e4ff] bg-gradient-to-r from-[#eef2ff] via-white to-[#fff8fb] px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a96c6]">In-depth reporting</p>
      <h3 className="mt-3 text-2xl font-semibold text-[#0f1c3d]">{cta.title}</h3>
      {cta.description && <p className="mt-3 text-base text-[#4b546e]">{cta.description}</p>}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {cta.primary && (
          <Button asChild className="rounded-full bg-[#1b55f5] px-8 py-4 text-base font-semibold text-white hover:bg-[#1746cc]">
            <Link to={cta.primary.href}>{cta.primary.label}</Link>
          </Button>
        )}
        {cta.secondary && (
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#142046] px-8 py-4 text-base font-semibold text-[#142046] hover:bg-white/80 hover:text-[#0f172a]"
          >
            <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
          </Button>
        )}
      </div>
    </div>
  )
}

function ApptrovePanel({ data }) {
  if (!data) return null
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[44px] border border-[#1f285b] bg-[#0d1738] px-8 py-12 text-white shadow-[0_35px_100px_rgba(13,23,56,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{data.eyebrow}</p>
        <h3 className="mt-3 text-3xl font-semibold">{data.title}</h3>
        <p className="mt-4 text-base text-white/80">{data.body}</p>
        {data.primary && (
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0d1738] hover:bg-white/90"
            >
              <a href={data.primary.href} target="_blank" rel="noreferrer">
                {data.primary.label}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function FaqStack({ faqs }) {
  if (!faqs?.length) return null
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-[#dbeafe] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c86b4]">Frequently asked, clearly answered</p>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-[#e1e8ff] bg-[#f6f8ff] p-5 text-[#131943]">
              <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
              <p className="mt-3 text-sm text-[#41476b]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
