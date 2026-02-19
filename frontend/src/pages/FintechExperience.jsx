import { Link } from "react-router-dom"
import { ArrowRight, BarChart3, Globe2, ShieldCheck, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const FINTECH_SLUG = "fintech"

const iconPalette = [BarChart3, ShieldCheck, Globe2, Workflow]

export function FintechExperience() {
  const content = footerPageContent[FINTECH_SLUG]
  const design = footerDesignConfig.pages[FINTECH_SLUG] || {}
  const heroStats = design.statGrid || []
  const journey = design.journey || []
  const playbooks = design.playbooks || []
  const sections = content.sections || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#e9fbf5] via-[#f0f6ff] to-[#fdf7ff] text-[#0f1a36]">
      <HeroSection hero={content.hero} category={content.category} stats={heroStats} sections={sections} cta={cta} />
      {journey.length > 0 && <JourneySection journey={journey} />}
      {playbooks.length > 0 && <PlaybooksSection playbooks={playbooks} />}
      {sections.length > 0 && <NarrativeSections sections={sections} />}
      <FintechCta cta={cta} />
      {faqs.length > 0 && <FaqSection faqs={faqs} />}
    </div>
  )
}

function HeroSection({ hero, category, stats, sections, cta }) {
  const highlightBullets = sections[0]?.bullets || []
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#d4f6e9] px-8 py-12 shadow-[0_35px_120px_rgba(7,44,71,0.15)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#18c08e]/40 bg-white px-4 py-1 text-sm font-semibold text-[#18c08e]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#12143c] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#1c2d4a]">{hero?.description}</p>
          {highlightBullets.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1f2a44]">
              {highlightBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#18c08e]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button className="rounded-full bg-[#18c08e] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#19c897]/40 hover:bg-[#13a474]" asChild>
                <Link to={cta.primary.href}>
                  {cta.primary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {cta.secondary && (
              <Button
                variant="outline"
                className="rounded-full border-[#102044] px-8 py-6 text-base font-semibold text-[#102044] hover:bg-white/80"
                asChild
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-[36px] border border-white/40 bg-white/80 p-8 text-center shadow-[0_45px_110px_rgba(15,23,42,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8ea0c4]">Program Signals</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#e2ecff] bg-[#f7fbff] px-4 py-5 text-left text-sm text-[#1c2c4b]">
                <p className="text-3xl font-semibold text-[#11153f]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#8c99bf]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-[#18c08e]/60 bg-[#ecfdf5] px-4 py-3 text-sm text-[#0f673f]">
            Enterprise-ready oversight for regulated teams
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneySection({ journey }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[48px] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#7b82ab]">Financial focus</p>
        <h2 className="mt-3 text-center text-3xl font-semibold text-[#121540]">Your fintech affiliate programs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {journey.map((step, index) => (
            <article key={step.title} className="rounded-[32px] border border-[#e3e9ff] bg-[#f6f8ff] p-6 text-[#111842]">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f98c2]">Step {index + 1}</span>
              <p className="mt-2 text-xl font-semibold">{step.title}</p>
              <p className="mt-2 text-sm text-[#4a5173]">{step.description}</p>
              <div className="mt-4 rounded-2xl border border-[#dbe3ff] bg-white px-4 py-2 text-sm font-semibold text-[#1f2c58]">{step.metric}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlaybooksSection({ playbooks }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[48px] bg-[#fff3f7] p-8 shadow-[0_30px_80px_rgba(239,110,189,0.15)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#c870a5]">Playbooks</p>
        <h2 className="mt-3 text-center text-3xl font-semibold text-[#311133]">Protect growth with smarter governance</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {playbooks.map((playbook, index) => {
            const Icon = iconPalette[index % iconPalette.length]
            return (
              <article key={playbook.title} className="rounded-[32px] border border-[#ffd7e7] bg-white p-6">
                <div className="flex items-center gap-3 text-[#d9488b]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe4f0]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f17aa9]">Playbook</p>
                    <h3 className="text-xl font-semibold text-[#1e1333]">{playbook.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#4b3d57]">{playbook.description}</p>
                {playbook.chips && (
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {playbook.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-[#f9b2cf] px-3 py-1 text-[#c54584]">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function NarrativeSections({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 rounded-[40px] border border-white/60 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7f86b1]">{section.tagline || "Fintech insight"}</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#111645]">{section.title}</h3>
              <p className="mt-4 text-base text-[#374165]">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-[#202a4f]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-4 rounded-full bg-[#18c08e]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-[32px] border border-[#f3d2f5] bg-[#fff6fd] p-6">
              <p className="text-sm font-semibold text-[#bb4f9c]">What teams gain</p>
              <p className="mt-3 text-lg text-[#241322]">{section.outcome || "Faster reviews, cleaner payouts, and happier partners."}</p>
              <div className="mt-6 grid gap-3 text-sm text-[#3f1f3f]">
                {(section.bullets || []).slice(0, 3).map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[#f7c9e6] bg-white px-4 py-3">
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

function FintechCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#ffeec4] bg-[#fff7e1] px-8 py-10 text-[#181236] shadow-[0_30px_70px_rgba(224,161,50,0.25)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d28c1d]">Ready for regulated revenue</p>
          <h3 className="mt-3 text-3xl font-semibold">{cta.title}</h3>
          <p className="mt-3 text-base text-[#3f2d19]">{cta.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cta.primary && (
            <Button className="rounded-full bg-[#111437] px-8 py-4 text-base font-semibold text-white hover:bg-[#16194b]" asChild>
              <Link to={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
          )}
          {cta.secondary && (
            <Button
              variant="outline"
              className="rounded-full border-[#111437] px-8 py-4 text-base font-semibold text-[#111437] hover:bg-white"
              asChild
            >
              <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

function FaqSection({ faqs }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-[#dbeafe] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c86b4]">Frequently asked</p>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
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
  title: "See how ClicksMeta scales compliant fintech programs",
  description: "Request a walkthrough tailored to your KPIs so we can map partner workflows, fraud rules, and payouts together.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
