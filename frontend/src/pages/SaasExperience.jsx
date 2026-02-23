import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"

const SAAS_SLUG = "saas"

const heroFallback = {
  eyebrow: "Solutions / SaaS",
  title: "From Sign-Up to Scale-Up SaaS Affiliate Programs Done Right",
  description:
    "Build, manage, and scale high-performing SaaS affiliate programs with campaign management. Improve ROI with advanced tracking, flexible commission structures, influencer and affiliate management, and detailed analytics and reporting.",
}

const heroHighlights = [
  "Advanced tracking",
  "Flexible commission structures",
  "Influencer & affiliate management",
  "Detailed analytics & reporting",
]

const featureVisuals = [
  {
    chip: "Acquisition",
    label: "Lifecycle coverage",
    background: "from-[#dff7eb] via-[#f5fffb] to-[#ffffff]",
    accent: "#1eb481",
    cards: [
      { label: "Touchpoints", value: "Full funnel" },
      { label: "Segments", value: "ICP ready" },
      { label: "Attribution", value: "Multi-touch" },
    ],
  },
  {
    chip: "Payouts",
    label: "Incentive studio",
    background: "from-[#fff3df] via-[#fff9ef] to-[#ffffff]",
    accent: "#f27e5f",
    cards: [
      { label: "Structures", value: "CPA • CPL • Hybrid" },
      { label: "Tiers", value: "Auto-escalate" },
      { label: "Monitoring", value: "Live health" },
    ],
  },
  {
    chip: "Influencers",
    label: "Omnichannel view",
    background: "from-[#fbe7ff] via-[#fff4ff] to-[#ffffff]",
    accent: "#c34b84",
    cards: [
      { label: "KPIs", value: "Reach & trials" },
      { label: "Attribution", value: "Creator-safe" },
      { label: "Insights", value: "Campaign level" },
    ],
  },
  {
    chip: "Revenue",
    label: "Growth ops",
    background: "from-[#e4edff] via-[#f5f8ff] to-[#ffffff]",
    accent: "#4f46e5",
    cards: [
      { label: "Automation", value: "Always-on" },
      { label: "Compliance", value: "Built-in" },
      { label: "Outcomes", value: "Stable ARR" },
    ],
  },
]

const saasContent = footerPageContent[SAAS_SLUG] || {}
const defaultSections = saasContent.sections || []
const reportingCtaFallback =
  saasContent.cta || {
    title: "See How Trackier's In-Depth Reporting Works for Campaigns Across Industries",
    description:
      "Request your demo now to walk through recurring commission management, attribution, and analytics tailored to SaaS teams.",
    primary: { label: "Request Your Demo Now", href: "/demorequest" },
    secondary: { label: "Get Started", href: "/signup" },
  }

const faqData = [
  {
    question: "Can Trackier map every SaaS customer journey from trials to paid conversions?",
    answer:
      "Yes. Trackier's SaaS affiliate management software uses advanced tracking tools to manage and optimize multiple SaaS affiliate programs. You can track user journeys end-to-end, capture KPIs, and gain actionable insights to scale the most profitable partners.",
  },
  {
    question: "How flexible are the payouts and commission structures?",
    answer:
      "You can customize commission models, set payout tiers, and assign rewards based on trials, activations, renewals, or qualified leads. Everything is centralized, so finance and partner teams stay aligned on incentives.",
  },
  {
    question: "Does Trackier help with influencer partnerships for SaaS products?",
    answer:
      "Absolutely. Identify niche influencers, manage creatives and deliverables, and measure real-time performance. Automated attribution ties influencer impact directly to your SaaS revenue goals.",
  },
  {
    question: "Can I automate partner marketing workflows?",
    answer:
      "Trackier automates approvals, communication, payouts, and performance nudges. Workflows keep every partner touchpoint consistent while freeing managers to focus on strategy.",
  },
  {
    question: "What guardrails exist for compliance and fraud protection?",
    answer:
      "Built-in compliance controls, customizable policies, and fraud detection protect your SaaS affiliate program. You can monitor campaigns, block suspicious activity, and keep partner trust intact.",
  },
  {
    question: "How quickly can my team launch a SaaS affiliate program on Trackier?",
    answer:
      "Teams typically import existing partners, configure tracking, and go live within days. Templates for campaign types, payouts, and onboarding flows mirror Trackier's SaaS solutions page so the launch experience matches what you see publicly.",
  },
]

const apptroveCta = {
  eyebrow: "Have Your Own SaaS App?",
  title: "With Apptrove, Experience a Whole New World of Efficiency!",
  body: "Create app experiences that complement your affiliate and partner strategy. Apptrove keeps onboarding, credentialing, and go-to-market orchestration as smooth as the Trackier SaaS showcase promises.",
  primary: { label: "Explore Apptrove", href: "https://apptrove.com" },
}

export function SaasExperience() {
  const hero = saasContent.hero || heroFallback
  const sections = defaultSections.length ? defaultSections : []
  const inlineCta = reportingCtaFallback

  return (
    <div className="bg-gradient-to-b from-[#f1f7ff] via-white to-[#fff5fb] text-[#0b132b]">
      <HeroBlock hero={hero} highlights={heroHighlights} />
      <section className="px-4 pb-2 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7b88ad]">Software Synergy</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0e1636]">Features That Click with SaaS</h2>
          <p className="mt-4 text-base text-[#4c5573]">
            Mirror every fold from Trackier&apos;s SaaS affiliate management solutions page--long-form storytelling, alternating layouts, and checklist proof for
            customer acquisition, payouts, influencer reach, and partner-powered revenue.
          </p>
        </div>
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          {sections.map((section, index) => (
            <Fragment key={section.title}>
              <FeatureBlock section={section} visual={featureVisuals[index % featureVisuals.length]} reversed={index % 2 === 1} />
              {index === 1 && <ReportingCta cta={inlineCta} />}
            </Fragment>
          ))}
        </div>
      </section>
      <ApptrovePanel data={apptroveCta} />
      <FaqStack faqs={faqData} />
    </div>
  )
}

function HeroBlock({ hero, highlights }) {
  return (
    <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-gradient-to-br from-[#e8f8ff] via-white to-[#fff6fb] px-8 py-12 shadow-[0_35px_110px_rgba(15,23,42,0.12)] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6a78a0]">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0b1330] md:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-lg text-[#1f2b49]">{hero.description}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-[#1d2752]">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-full border border-[#d7def5] bg-white/90 px-4 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-[#1eb481]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="rounded-full bg-[#1b55f5] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#1d4ed8]/30 hover:bg-[#1746cc]">
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
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/80 p-6 text-[#0b1535] shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
      <div className="rounded-[28px] border border-dashed border-[#d0dcff] bg-[#eef2ff] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a96c6]">Program Snapshot</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Partner journeys", value: "Full funnel" },
            { label: "Commission recipes", value: "12 active" },
            { label: "Influencer cohorts", value: "24 running" },
            { label: "ARR attributed", value: "$84M" },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-sm">
              <p className="text-2xl font-semibold text-[#0d1c43]">{card.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7d89b8]">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-[28px] border border-[#ffe0f2] bg-gradient-to-br from-[#fff0f7] to-[#fff] p-5">
        <p className="text-sm font-semibold text-[#c34b84]">SaaS Affiliate Programs Done Right</p>
        <p className="mt-2 text-sm text-[#563351]">Dynamic charts echo the Trackier reference page with softly layered gradients and pill-shaped modules.</p>
      </div>
    </div>
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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7f8cb7]">SaaS Affiliate Focus</p>
        <h3 className="mt-3 text-3xl font-semibold text-[#121942]">{section.title}</h3>
        <p className="mt-4 text-base text-[#3b4363]">{section.description}</p>
        {section.bullets && (
          <ul className="mt-6 space-y-3 text-sm text-[#1b223f]">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#1eb481]" />
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
        Art direction mimics Trackier&apos;s SaaS page with glossy cards, pastel gradients, and pill-shaped stats.
      </div>
    </div>
  )
}

function ReportingCta({ cta }) {
  if (!cta) return null
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
