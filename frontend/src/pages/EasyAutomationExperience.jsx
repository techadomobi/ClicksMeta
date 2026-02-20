import { Link } from "react-router-dom"
import { ArrowRight, BadgeDollarSign, ClipboardCheck, Coins, LifeBuoy, Repeat, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const EASY_AUTOMATION_SLUG = "easy-automation"
const highlightIcons = [Sparkles, Repeat, Coins, ClipboardCheck, LifeBuoy, BadgeDollarSign]

export function EasyAutomationExperience() {
  const content = footerPageContent[EASY_AUTOMATION_SLUG]
  const design = footerDesignConfig.pages[EASY_AUTOMATION_SLUG] || {}

  const heroStats = design.statGrid || []
  const featurePanels = design.featurePanels || []
  const sections = content.sections || []
  const highlights = content.highlights || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#fff8ed] via-[#f5fbff] to-[#fdf5ff] text-[#111827]">
      <AutomationHero hero={content.hero} category={content.category} stats={heroStats} sections={sections} cta={cta} />
      {highlights.length > 0 && <AutomationHighlights highlights={highlights} />}
      {featurePanels.length > 0 && <AutomationFeaturePanels panels={featurePanels} />}
      {sections.length > 0 && <AutomationSections sections={sections} />}
      <AutomationCta cta={cta} />
      {faqs.length > 0 && <AutomationFaq faqs={faqs} />}
    </div>
  )
}

function AutomationHero({ hero, category, stats, sections, cta }) {
  const heroBullets = sections[0]?.bullets || []
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#fff2dc] px-8 py-12 shadow-[0_35px_110px_rgba(196,140,64,0.15)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#16a34a]/30 bg-white px-4 py-1 text-sm font-semibold text-[#16a34a]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#151238] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#262145]">{hero?.description}</p>
          {heroBullets.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#201f38]">
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
                className="rounded-full bg-[#111437] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#111437]/35 hover:bg-[#1c2155]"
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
                className="rounded-full border-[#111437] px-8 py-6 text-base font-semibold text-[#111437] hover:bg-white/80"
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 text-center shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9ca3c7]">Automation signals</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#ffe3c5] bg-[#fff8ef] px-4 py-4 text-left text-sm text-[#251f2f]">
                <p className="text-3xl font-semibold text-[#140f1f]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#9ca3c7]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-[#16a34a]/60 bg-[#edfbf2] px-4 py-3 text-sm text-[#0f5035]">
            Borrowed from Trackier's painless payday hero—automation your finance org can trust.
          </div>
        </div>
      </div>
    </section>
  )
}

function AutomationHighlights({ highlights }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[44px] border border-[#fff0d7] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e879f9]">Automation essentials</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length]
            return (
              <article key={item.title} className="rounded-3xl border border-[#ffe8d3] bg-[#fffbf5] p-5">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e0] text-[#f97316]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#1d172c]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#3f314c]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AutomationFeaturePanels({ panels }) {
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

function AutomationSections({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f97316]">
                {section.tagline || (index === 0 ? "A painless payday" : "Automation insight")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#161032]">{section.title}</h3>
              <p className="mt-4 text-base text-[#3a2f4f]">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-[#221b36]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-4 rounded-full bg-[#16a34a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-[32px] border border-[#ffe0c5] bg-[#fff7ef] p-6">
              <p className="text-sm font-semibold text-[#a0431d]">What teams unlock</p>
              <p className="mt-3 text-lg text-[#381c14]">{section.outcome || "Finance automation that feels human and scalable."}</p>
              <div className="mt-5 grid gap-3 text-sm text-[#462717]">
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

function AutomationCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#cfdcff] bg-[#0f1b3c] px-8 py-10 text-white shadow-[0_30px_80px_rgba(16,23,66,0.4)] lg:flex-row lg:items-center">
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
            <Button asChild variant="outline" className="rounded-full border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10">
              <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

function AutomationFaq({ faqs }) {
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
  title: "See how ClicksMeta automates payouts and partner operations",
  description: "Book a walkthrough to connect payouts, invoicing, and support automation inside one ClicksMeta workspace.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
