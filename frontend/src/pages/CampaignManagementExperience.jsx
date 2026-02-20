import { Link } from "react-router-dom"
import { ArrowRight, BarChart3, ClipboardList, Sparkles, Target, Workflow, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const CAMPAIGN_SLUG = "campaign-management"
const highlightIcons = [Sparkles, Target, Workflow, BarChart3, ClipboardList, Zap]

export function CampaignManagementExperience() {
  const content = footerPageContent[CAMPAIGN_SLUG]
  const design = footerDesignConfig.pages[CAMPAIGN_SLUG] || {}

  const heroStats = design.statGrid || []
  const featurePanels = design.featurePanels || []
  const sections = content.sections || []
  const highlights = content.highlights || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#fff9ed] via-[#fdf4ff] to-[#f0f6ff] text-[#0e142a]">
      <Hero hero={content.hero} category={content.category} stats={heroStats} sections={sections} cta={cta} />
      {highlights.length > 0 && <HighlightGrid highlights={highlights} />}
      {featurePanels.length > 0 && <PanelDeck panels={featurePanels} />}
      {sections.length > 0 && <CampaignSections sections={sections} />}
      <CampaignCta cta={cta} />
      {faqs.length > 0 && <CampaignFaq faqs={faqs} />}
    </div>
  )
}

function Hero({ hero, category, stats, sections, cta }) {
  const heroBullets = sections[0]?.bullets || []
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#fff1d6] px-8 py-12 shadow-[0_35px_110px_rgba(157,81,26,0.15)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#f27e5f]/40 bg-white px-4 py-1 text-sm font-semibold text-[#e35c3c]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1b0f19] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#2c1f32]">{hero?.description}</p>
          {heroBullets.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#281f2f]">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#f27e5f]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button
                asChild
                className="rounded-full bg-[#1b1742] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#1b1742]/30 hover:bg-[#251f59]"
              >
                <Link to={cta.primary.href}>
                  {cta.primary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {cta.secondary && (
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#1b1742] px-8 py-6 text-base font-semibold text-[#1b1742] hover:bg-white/80"
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 text-center shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a28db0]">Campaign signals</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#ffe1c4] bg-[#fff8ef] px-4 py-4 text-left text-sm text-[#2b1c26]">
                <p className="text-3xl font-semibold text-[#120c1f]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#a28db0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-[#f27e5f]/60 bg-[#fff4ea] px-4 py-3 text-sm text-[#8a3522]">
            Lifted straight from Trackier's campaign central vibe—centralized, fast, and intuitive.
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightGrid({ highlights }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[44px] border border-[#ffe7d0] bg-white/70 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a1815c]">Campaign central</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length]
            return (
              <article key={highlight.title} className="rounded-3xl border border-[#ffe7d0] bg-white p-5">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4eb] text-[#f27e5f]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#23172b]">{highlight.title}</h3>
                <p className="mt-2 text-sm text-[#4a3952]">{highlight.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PanelDeck({ panels }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-4 lg:grid-cols-3">
        {panels.map((panel) => (
          <article key={panel.title} className="rounded-[32px] border border-[#dfe4ff] bg-[#f6f8ff] p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#5465ff]">{panel.badge}</span>
            <h3 className="mt-3 text-xl font-semibold text-[#171c3b]">{panel.title}</h3>
            <p className="mt-2 text-sm text-[#3c4662]">{panel.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CampaignSections({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c05c3d]">
                {section.tagline || (index === 0 ? "Manage. Optimize. Conquer." : "Campaign insight")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#1b1331]">{section.title}</h3>
              <p className="mt-4 text-base text-[#3b2f4b]">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-[#251f35]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-4 rounded-full bg-[#f48766]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-[32px] border border-[#ffe8d7] bg-[#fff7f0] p-6">
              <p className="text-sm font-semibold text-[#a24e32]">What teams unlock</p>
              <p className="mt-3 text-lg text-[#2f1a1a]">{section.outcome || "Calmer workflows, cleaner data, happier partners."}</p>
              <div className="mt-5 grid gap-3 text-sm text-[#36211d]">
                {(section.bullets || []).slice(0, 4).map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[#ffd9be] bg-white px-4 py-3">
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CampaignCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#d0dcff] bg-[#0f1b3c] px-8 py-10 text-white shadow-[0_30px_80px_rgba(16,23,66,0.4)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Track your way to success</p>
          <h3 className="mt-3 text-3xl font-semibold">{cta.title}</h3>
          <p className="mt-3 text-base text-white/80">{cta.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cta.primary && (
            <Button asChild className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0f1b3c] hover:bg-white/90">
              <Link to={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
          )}
          {cta.secondary && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

function CampaignFaq({ faqs }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-[#dbeafe] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
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

const defaultCta = {
  title: "See how ClicksMeta simplifies campaign management",
  description: "Request a walkthrough to centralize campaigns, automate workflows, and share reporting your teams will love.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
