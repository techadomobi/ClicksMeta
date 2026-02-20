import { Link } from "react-router-dom"
import { ArrowRight, CloudCog, Fingerprint, Lock, ShieldHalf, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const PRIVACY_SLUG = "privacy-policy"
const iconPalette = [ShieldCheck, Lock, Users, CloudCog, Fingerprint, ShieldHalf]

export function PrivacyPolicyExperience() {
  const content = footerPageContent[PRIVACY_SLUG]
  const design = footerDesignConfig.pages[PRIVACY_SLUG] || {}

  const stats = design.statGrid || []
  const sections = content.sections || []
  const pillars = design.principles || []
  const clauses = design.clauses || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#f3f8ff] via-[#fdf9f1] to-[#f5fbf2] text-[#0f172a]">
      <PrivacyHero hero={content.hero} category={content.category} stats={stats} cta={cta} points={content.hero?.points} />
      {pillars.length > 0 && <Pillars pillars={pillars} />}
      {sections.length > 0 && <PrivacySections sections={sections} />}
      {clauses.length > 0 && <PrivacyClauses clauses={clauses} />}
      <PrivacyCta cta={cta} />
      {faqs.length > 0 && <PrivacyFaq faqs={faqs} />}
    </div>
  )
}

function PrivacyHero({ hero, category, stats, cta, points = [] }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#eef5ff] px-8 py-12 shadow-[0_35px_110px_rgba(61,91,189,0.15)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#16a34a]/30 bg-white px-4 py-1 text-sm font-semibold text-[#16a34a]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#11183c] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#1f294d]">{hero?.description}</p>
          {points.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1d213f]">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#16a34a]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button asChild className="rounded-full bg-[#111437] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#111437]/35 hover:bg-[#1a1d50]">
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9ca3c7]">Security posture</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#dfe6ff] bg-[#f5f7ff] px-4 py-4 text-left text-sm text-[#1f2649]">
                <p className="text-3xl font-semibold text-[#0f132b]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#9ca3c7]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-[#16a34a]/60 bg-[#edfbf2] px-4 py-3 text-sm text-[#0f5035]">
            Trust is everything—privacy and security are baked into every workflow.
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars({ pillars }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-[#ffeec7] bg-[#fffaf1] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f97316]">Our pillars of security</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-[#ffe4c4] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1d172c]">{pillar.title}</h3>
              <p className="mt-2 text-sm text-[#3f314c]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrivacySections({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => {
          const Icon = iconPalette[index % iconPalette.length]
          return (
            <article key={section.title} className="grid gap-8 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0284c7]">{section.tagline || "Security insight"}</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#121640]">{section.title}</h3>
                <p className="mt-4 text-base text-[#374165]">{section.description}</p>
                {section.bullets && (
                  <ul className="mt-5 space-y-2 text-sm text-[#202a4f]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-4 rounded-full bg-[#22c55e]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="rounded-[32px] border border-[#d9e4ff] bg-[#f5fbff] p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1d4ed8]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-[#1d3a4a]">What it delivers</p>
                <p className="mt-3 text-lg text-[#0f2b39]">{section.outcome || "Clear visibility and trustworthy compliance."}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function PrivacyClauses({ clauses }) {
  if (!clauses?.length) return null
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        {clauses.map((clause) => (
          <article key={clause.title} className="rounded-[32px] border border-[#e1e8ff] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c86b4]">Clause</p>
            <h3 className="mt-2 text-lg font-semibold text-[#131943]">{clause.title}</h3>
            <p className="mt-2 text-sm text-[#41476b]">{clause.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function PrivacyCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#cfdcff] bg-[#0f1b3c] px-8 py-10 text-white shadow-[0_30px_80px_rgba(16,23,66,0.4)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Ready to scale securely?</p>
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

function PrivacyFaq({ faqs }) {
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
  title: "See how ClicksMeta protects every data touchpoint",
  description: "Request a walkthrough of our privacy controls, security posture, and compliance workflows.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
