import { Link } from "react-router-dom"
import { ArrowRight, BarChart3, Layers, Megaphone, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"

const MEDIA_NETWORK_SLUG = "media-network"
const playbookIcons = [Megaphone, Radio, Layers, BarChart3]

export function MediaNetworkExperience() {
  const content = footerPageContent[MEDIA_NETWORK_SLUG]
  const design = footerDesignConfig.pages[MEDIA_NETWORK_SLUG] || {}

  const heroStats = design.statGrid || []
  const journey = design.journey || []
  const playbooks = design.playbooks || []
  const sections = content.sections || []
  const faqs = design.faqs || []
  const cta = content.cta || defaultCta

  return (
    <div className="bg-gradient-to-b from-[#e8faf5] via-[#f0f5ff] to-[#fff7fb] text-[#0f172a]">
      <MediaHero hero={content.hero} category={content.category} stats={heroStats} sections={sections} cta={cta} />
      {journey.length > 0 && <JourneyTimeline journey={journey} />}
      {playbooks.length > 0 && <MediaPlaybooks playbooks={playbooks} />}
      {sections.length > 0 && <MediaNarratives sections={sections} />}
      <MediaCta cta={cta} />
      {faqs.length > 0 && <MediaFaq faqs={faqs} />}
    </div>
  )
}

function MediaHero({ hero, category, stats, sections, cta }) {
  const heroBullets = sections[0]?.bullets || []
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[56px] bg-[#d5f6ec] px-8 py-12 shadow-[0_35px_110px_rgba(15,23,42,0.12)] lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-[#20c28f]/30 bg-white px-4 py-1 text-sm font-semibold text-[#18a072]">
            {hero?.eyebrow || category}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#111939] md:text-5xl">{hero?.title}</h1>
          <p className="mt-4 text-lg text-[#1d2d4b]">{hero?.description}</p>
          {heroBullets.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1b2445]">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#20c28f]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.primary && (
              <Button
                asChild
                className="rounded-full bg-[#20c28f] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#23d6a0]/30 hover:bg-[#189e71]"
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
                className="rounded-full border-[#101c3d] px-8 py-6 text-base font-semibold text-[#101c3d] hover:bg-white/80"
              >
                <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 text-center shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#90a2c7]">Network signals</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#e1edff] bg-[#f4f7ff] px-4 py-4 text-left text-sm text-[#1b2650]">
                <p className="text-3xl font-semibold text-[#0d1436]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#8b97c0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-[#20c28f]/60 bg-[#ecfdf6] px-4 py-3 text-sm text-[#0e6446]">
            Trackier-inspired layouts show partners, placements, and payouts in one ClicksMeta experience.
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneyTimeline({ journey }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[48px] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#1fa7c8]">Network workflow</p>
        <h2 className="mt-3 text-center text-3xl font-semibold text-[#141b46]">Plan, optimize, and monetize instantly</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {journey.map((step, index) => (
            <article key={step.title} className="rounded-[32px] border border-[#e1e9ff] bg-[#f4f6ff] p-6 text-[#11183c]">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d97ba]">Stage {index + 1}</span>
              <p className="mt-2 text-xl font-semibold">{step.title}</p>
              <p className="mt-2 text-sm text-[#3a4261]">{step.description}</p>
              <div className="mt-4 rounded-2xl border border-[#d8e1ff] bg-white px-4 py-2 text-sm font-semibold text-[#1d2752]">{step.metric}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MediaPlaybooks({ playbooks }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[48px] bg-[#fff2e4] p-8 shadow-[0_30px_90px_rgba(249,164,92,0.18)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#de7b30]">Playbooks</p>
        <h2 className="mt-3 text-center text-3xl font-semibold text-[#351a0f]">Govern supply and incentives together</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {playbooks.map((playbook, index) => {
            const Icon = playbookIcons[index % playbookIcons.length]
            return (
              <article key={playbook.title} className="rounded-[32px] border border-[#ffe2cc] bg-white p-6">
                <div className="flex items-center gap-3 text-[#d25c3c]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe8d9]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f08d5d]">Playbook</p>
                    <h3 className="text-xl font-semibold text-[#1e1424]">{playbook.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#4a3849]">{playbook.description}</p>
                {playbook.chips && (
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {playbook.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-[#f6cdb4] px-3 py-1 text-[#b54d2f]">
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

function MediaNarratives({ sections }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 rounded-[38px] border border-white/60 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d94c2]">
                {section.tagline || (index === 0 ? "Own the audience" : "Media intelligence")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#13173d]">{section.title}</h3>
              <p className="mt-4 text-base text-[#3b4363]">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-[#20294d]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-4 rounded-full bg-[#20c28f]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-[32px] border border-[#e0f2ff] bg-[#f4fbff] p-6">
              <p className="text-sm font-semibold text-[#16507a]">What teams unlock</p>
              <p className="mt-3 text-lg text-[#133147]">{section.outcome || "Aligned publishers, advertisers, and revenue teams."}</p>
              <div className="mt-5 grid gap-3 text-sm text-[#1f364b]">
                {(section.bullets || []).slice(0, 4).map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[#cee3f5] bg-white px-4 py-3">
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

function MediaCta({ cta }) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[40px] border border-[#cfdcff] bg-[#10173a] px-8 py-10 text-white shadow-[0_30px_80px_rgba(16,23,66,0.4)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Expanding to new channels?</p>
          <h3 className="mt-3 text-3xl font-semibold">{cta.title}</h3>
          <p className="mt-3 text-base text-white/80">{cta.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cta.primary && (
            <Button asChild className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#10173a] hover:bg-white/90">
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

function MediaFaq({ faqs }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-[#dbeafe] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c86b4]">Frequently asked</p>
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
  title: "See how ClicksMeta powers media & network marketplaces",
  description: "Book a walkthrough to connect advertiser demand, publisher supply, and automation rules across every channel.",
  primary: { label: "Request Demo", href: "/demorequest" },
  secondary: { label: "Talk to Sales", href: "/contact" },
}
