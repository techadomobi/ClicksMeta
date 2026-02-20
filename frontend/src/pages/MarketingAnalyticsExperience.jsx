import { Link } from "react-router-dom"
import { ArrowRight, BarChart3, ListChecks, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const MARKETING_ANALYTICS_SLUG = "marketing-analytics"
const iconLineup = [Workflow, BarChart3, ListChecks]

export function MarketingAnalyticsExperience() {
  const content = footerPageContent[MARKETING_ANALYTICS_SLUG]
  const design = footerDesignConfig.pages[MARKETING_ANALYTICS_SLUG] || {}

  const heroStats = design.statGrid || []
  const featurePanels = design.featurePanels || []
  const highlights = content.highlights || []
  const sections = content.sections || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#fff7ed] via-[#f2fbff] to-[#f7f5ff] text-[#111827]">
      <AnalyticsHero hero={content.hero} category={content.category} stats={heroStats} sections={sections} cta={cta} />
      {highlights.length > 0 && <AnalyticsHighlights highlights={highlights} />}
      {featurePanels.length > 0 && <AnalyticsPanels panels={featurePanels} />}
      {sections.length > 0 && <AnalyticsSections sections={sections} />}
      <AnalyticsCta cta={cta} />
      {faqs.length > 0 && <AnalyticsFaq faqs={faqs} />}
    </div>
  )
}

function AnalyticsHero({ hero, category, stats, sections, cta }) {
  const heroBullets = sections[0]?.bullets || []
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#fff0dc] px-8 py-12 shadow-[0_35px_110px_rgba(237,137,54,0.2)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#16a34a]/30 bg-white px-4 py-1 text-sm font-semibold text-[#16a34a]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#111338] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#1f233f]">{hero?.description}</p>
          {heroBullets.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1d2139]">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#16a34a]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button
                asChild
                className="rounded-full bg-[#141332] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#141332]/40 hover:bg-[#1f2058]"
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
                className="rounded-full border-[#141332] px-8 py-6 text-base font-semibold text-[#141332] hover:bg-white/90"
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 text-center shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9ca3c2]">Automation signals</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#ffe5c3] bg-[#fff9ef] px-4 py-4 text-left text-sm text-[#241b24]">
                <p className="text-3xl font-semibold text-[#0f0c20]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#9ca3c2]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-[#16a34a]/60 bg-[#edfbf2] px-4 py-3 text-sm text-[#0f5132]">
            Inspired by Trackier's automation hero—insights, routing, and trust in one glassy module.
          </div>
        </div>
      </div>
    </section>
  )
}

function AnalyticsHighlights({ highlights }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[44px] border border-[#e1f4ff] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1f988a]">Easy does it</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = iconLineup[index % iconLineup.length]
            return (
              <article key={item.title} className="rounded-3xl border border-[#e3f6ed] bg-[#f7fffb] p-5">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0faf0] text-[#16a34a]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#102329]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#3b4a56]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AnalyticsPanels({ panels }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        {panels.map((panel) => (
          <article key={panel.title} className="rounded-[32px] border border-[#dfe6ff] bg-[#f5f7ff] p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#5161ff]">{panel.badge}</span>
            <h3 className="mt-3 text-xl font-semibold text-[#171c3b]">{panel.title}</h3>
            <p className="mt-2 text-sm text-[#3c4662]">{panel.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AnalyticsSections({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0ea5e9]">
                {section.tagline || (index === 0 ? "Simplifying marketing with automation" : "Analytics insight")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#101436]">{section.title}</h3>
              <p className="mt-4 text-base text-[#333a5c]">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-[#1d243f]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-4 rounded-full bg-[#16a34a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-[32px] border border-[#dff1ff] bg-[#f5fbff] p-6">
              <p className="text-sm font-semibold text-[#0f4c81]">What teams unlock</p>
              <p className="mt-3 text-lg text-[#123449]">{section.outcome || "Automation you can trust across data, routing, and reporting."}</p>
              <div className="mt-5 grid gap-3 text-sm text-[#1e3f4f]">
                {(section.bullets || []).slice(0, 4).map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[#cbe4f3] bg-white px-4 py-3">
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

function AnalyticsCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#cfdcff] bg-[#10223a] px-8 py-10 text-white shadow-[0_30px_80px_rgba(16,23,66,0.4)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Track your way to success</p>
          <h3 className="mt-3 text-3xl font-semibold">{cta.title}</h3>
          <p className="mt-3 text-base text-white/80">{cta.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cta.primary && (
            <Button asChild className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#10223a] hover:bg-white/90">
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

function AnalyticsFaq({ faqs }) {
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
  title: "See how ClicksMeta automates marketing analytics",
  description: "Book a walkthrough to route traffic, validate offers, and trust every report with Trackier-style automation.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
