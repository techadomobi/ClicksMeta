import { Fragment } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react"
import { footerPageContent } from "@/data/footerContent"
import { footerDesignConfig } from "@/data/footerDesign"
import { Button } from "@/components/ui/button"
import { AutomatedPayoutExperience } from "./AutomatedPayoutExperience"
import { FintechExperience } from "./FintechExperience"
import { SaasExperience } from "./SaasExperience"
import { TravelExperience } from "./TravelExperience"

const highlightIcons = [Sparkles, Workflow, ShieldCheck, Compass, Layers, BookOpenCheck, UsersRound]

const pageThemes = {
  Products: {
    heroGradient: "from-[#051937] via-[#031129] to-[#030A1F]",
    accent: "#38bdf8",
    glow: "#1fb6ff",
  },
  Solutions: {
    heroGradient: "from-[#220b33] via-[#1a0f2c] to-[#050111]",
    accent: "#fb7185",
    glow: "#f472b6",
  },
  Resources: {
    heroGradient: "from-[#04291c] via-[#041b15] to-[#010c08]",
    accent: "#34d399",
    glow: "#6ee7b7",
  },
  Company: {
    heroGradient: "from-[#36100d] via-[#1c0b19] to-[#050108]",
    accent: "#fbbf24",
    glow: "#fed7aa",
  },
  default: {
    heroGradient: "from-[#020b1f] via-[#03102e] to-[#050f25]",
    accent: "#38bdf8",
    glow: "#38bdf8",
  },
}

const defaultModules = {
  product: [
    { type: "statGrid", options: { label: "Performance snapshot" } },
    { type: "featurePanels" },
    { type: "highlights" },
    { type: "sections", options: { variant: "split" } },
    { type: "faq" },
  ],
  solution: [
    { type: "statGrid", options: { label: "Solution impact" } },
    { type: "journey" },
    { type: "playbooks" },
    { type: "sections", options: { variant: "stagger" } },
    { type: "faq" },
  ],
  resource: [
    { type: "statGrid", options: { label: "Engagement health" } },
    { type: "pillars" },
    { type: "spotlights" },
    { type: "sections", options: { variant: "resource" } },
    { type: "faq" },
  ],
  company: [
    { type: "statGrid", options: { label: "Company signals" } },
    { type: "timeline" },
    { type: "values" },
    { type: "sections", options: { variant: "company" } },
  ],
  policy: [
    { type: "statGrid", options: { label: "Compliance essentials" } },
    { type: "principles" },
    { type: "clauses" },
    { type: "sections", options: { variant: "policy" } },
    { type: "faq" },
  ],
  about: [
    { type: "statGrid", options: { label: "Global footprint" } },
    { type: "timeline" },
    { type: "leadership" },
    { type: "cultureCards" },
    { type: "values" },
    { type: "sections", options: { variant: "stagger" } },
  ],
  careers: [
    { type: "statGrid", options: { label: "Team snapshot" } },
    { type: "timeline" },
    { type: "benefits" },
    { type: "cultureMoments" },
    { type: "values" },
    { type: "sections", options: { variant: "company" } },
    { type: "faq" },
  ],
}

const slugList = Object.keys(footerPageContent)

const themeVariants = [
  { heroGradient: "from-[#030617] via-[#08113a] to-[#0b1f5f]", accent: "#7dd3fc", glow: "#38bdf8", shift: 0 },
  { heroGradient: "from-[#1b0034] via-[#2b004f] to-[#360066]", accent: "#f472b6", glow: "#fb7185", shift: 1 },
  { heroGradient: "from-[#001f29] via-[#003641] to-[#005061]", accent: "#5eead4", glow: "#2dd4bf", shift: 2 },
  { heroGradient: "from-[#2c0a0d] via-[#3f1012] to-[#5c1a1d]", accent: "#fb923c", glow: "#f97316", shift: 3 },
  { heroGradient: "from-[#001a31] via-[#002449] to-[#003062]", accent: "#a5b4fc", glow: "#818cf8", shift: 4 },
  { heroGradient: "from-[#071b12] via-[#0b2e1c] to-[#0f3f26]", accent: "#86efac", glow: "#4ade80", shift: 1 },
  { heroGradient: "from-[#1a0033] via-[#28004e] to-[#340066]", accent: "#c084fc", glow: "#a855f7", shift: 2 },
  { heroGradient: "from-[#0a0a2e] via-[#13134a] to-[#1f1f63]", accent: "#60a5fa", glow: "#3b82f6", shift: 3 },
]

const slugVariants = slugList.reduce((acc, slug, index) => {
  acc[slug] = themeVariants[index % themeVariants.length]
  return acc
}, {})

export function FooterInfoPage() {
  const { slug } = useParams()
  if (slug === "automated-payout") {
    return <AutomatedPayoutExperience />
  }
  if (slug === "fintech") {
    return <FintechExperience />
  }
  if (slug === "saas") {
    return <SaasExperience />
  }
  if (slug === "travel") {
    return <TravelExperience />
  }
  const content = footerPageContent[slug]

  if (!content) {
    return (
      <section className="mx-auto grid min-h-[50vh] max-w-4xl place-items-center px-4 text-center">
        <div>
          <p className="text-sm font-semibold text-[#38bdf8]">Page not found</p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">We could not find that resource</h1>
          <p className="mt-4 text-base text-white/60">
            The link you followed may be broken or the page may have been moved. Return home or explore another section.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="rounded-full bg-[#1fb6ff] px-6 text-[#031124] hover:bg-[#17a9ef]">
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const design = footerDesignConfig.pages[slug] || {}
  const defaultLayout = footerDesignConfig.defaults[content.category]?.layout || "product"
  const layout = design.layout || defaultLayout
  const variant = slugVariants[slug] || {}
  const baseTheme = pageThemes[content.category] || pageThemes.default
  const theme = { ...baseTheme, ...variant }
  const statGrid = design.statGrid || []
  const heroStats = statGrid.slice(0, 2)
  const bodyStats = statGrid.slice(heroStats.length)
  const heroPoints = content.hero?.points || []
  const baseModules = design.modules || defaultModules[layout] || defaultModules.product
  const modules = design.lockModules ? baseModules : rotateModules(baseModules, variant.shift || 0) || []

  const defaultCta = {
    title: "Looking for deeper details?",
    description: "Schedule a tailored walkthrough so we can show you how ClicksMeta mirrors Trackier-level execution.",
    primary: { label: "Book a demo", href: "/demorequest" },
    secondary: { label: "Contact sales", href: "/contact" },
  }

  const cta = content.cta || defaultCta

  return (
    <div className="bg-[#020617] text-white">
      {renderHero({ content, theme, heroStats, heroPoints })}
      {renderModules(modules, { content, design, theme, bodyStats })}
      {renderCta(cta)}
    </div>
  )
}

function rotateModules(modules = [], shift = 0) {
  if (!modules.length || !shift) return modules
  const normalized = ((shift % modules.length) + modules.length) % modules.length
  return [...modules.slice(normalized), ...modules.slice(0, normalized)]
}

const moduleRenderers = {
  statGrid: (ctx, options) => renderStatGrid(ctx.bodyStats, ctx.theme, options?.label),
  featurePanels: (ctx) => renderFeaturePanels(ctx.design.featurePanels, ctx.theme),
  highlights: (ctx) => renderHighlights(ctx.content.highlights, ctx.theme),
  sections: (ctx, options) => renderSections(ctx.content.sections, ctx.theme, options?.variant),
  faq: (ctx) => renderFaq(ctx.design.faqs),
  journey: (ctx) => renderJourney(ctx.design.journey),
  playbooks: (ctx) => renderPlaybooks(ctx.design.playbooks),
  pillars: (ctx) => renderPillars(ctx.design.pillars, ctx.theme),
  spotlights: (ctx) => renderSpotlights(ctx.design.spotlights),
  timeline: (ctx) => renderTimeline(ctx.design.timeline),
  values: (ctx) => renderValues(ctx.design.values),
  principles: (ctx) => renderPrinciples(ctx.design.principles),
  clauses: (ctx) => renderClauses(ctx.design.clauses),
  leadership: (ctx) => renderLeadershipQuotes(ctx.design.leadershipQuotes),
  cultureCards: (ctx) => renderCultureCards(ctx.design.cultureCards),
  benefits: (ctx) => renderBenefits(ctx.design.benefits),
  cultureMoments: (ctx) => renderCultureMoments(ctx.design.cultureMoments),
}

function renderModules(sequence = [], context) {
  return sequence.map((module, index) => {
    const renderer = moduleRenderers[module.type]
    if (!renderer) return null
    return <Fragment key={`${module.type}-${index}`}>{renderer(context, module.options || {})}</Fragment>
  })
}

function renderHero({ content, theme, heroStats, heroPoints }) {
  const { hero, category } = content
  return (
    <section className={`relative overflow-hidden border-b border-white/5 bg-gradient-to-br ${theme.heroGradient}`}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[-120px] h-64 w-[480px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ background: `${theme.glow}44` }}
        />
        <div
          className="absolute bottom-[-180px] right-[-120px] h-72 w-72 rounded-full blur-[120px]"
          style={{ background: `${theme.accent}33` }}
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.85fr] lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{hero?.eyebrow || category}</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">{hero?.title || content.title}</h1>
          <p className="mt-6 text-lg text-white/75 md:text-xl">{hero?.description}</p>
          {heroPoints.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: theme.accent }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 px-4 py-1.5">{category}</span>
            <span className="rounded-full border border-white/10 px-4 py-1.5">Enterprise-ready</span>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Key signals</p>
          <div className="mt-5 grid gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/70">
            Inspired by Trackier's glassy hero panels yet written for ClicksMeta's voice.
          </div>
        </div>
      </div>
    </section>
  )
}

function renderStatGrid(items = [], theme, label) {
  if (!items.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{label}</p>
        <span className="text-xs text-white/50">Live benchmarks</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6">
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function renderFeaturePanels(panels = [], theme) {
  if (!panels.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {panels.map((panel) => (
          <article key={panel.title} className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10/50 via-transparent to-transparent p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: theme.accent }}>
              {panel.badge}
            </span>
            <h3 className="mt-3 text-xl font-semibold">{panel.title}</h3>
            <p className="mt-3 text-sm text-white/70">{panel.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function renderHighlights(highlights = [], theme) {
  if (!highlights.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Why operators care</p>
        <span className="text-xs text-white/50">Modeled after Trackier layouts</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = highlightIcons[index % highlightIcons.length]
          return (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function renderSections(sections = [], theme, variant = "default") {
  if (!sections?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-8">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={[
              "rounded-[32px] border border-white/5 p-8",
              variant === "split" && index % 2 === 0 ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-8" : "",
              variant === "stagger" ? "bg-gradient-to-br from-white/5 to-transparent" : "bg-white/5",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: theme.accent }}>
                {section.tagline || "Key takeaway"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-base text-white/70">{section.description}</p>
              {section.bullets && (
                <ul className="mt-5 space-y-3 text-white/75">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: theme.accent }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {variant === "split" && (
              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-6 lg:mt-0">
                <p className="text-sm font-semibold text-white/70">What it unlocks</p>
                <p className="mt-2 text-lg text-white">{section.outcome || "Clarity for every operator"}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function renderFaq(faqs = []) {
  if (!faqs.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Questions</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-white">{faq.question}</p>
              <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderJourney(steps = []) {
  if (!steps.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Journey</div>
      <div className="relative pl-6">
        <span className="absolute left-1.5 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-5">
              <span className="absolute -left-6 top-5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#0f172a] text-xs font-semibold">
                {index + 1}
              </span>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-white/70">{step.description}</p>
                </div>
                <span className="text-xs font-semibold text-white/60">{step.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderPlaybooks(playbooks = []) {
  if (!playbooks.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-2">
        {playbooks.map((playbook) => (
          <article key={playbook.title} className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Playbook</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{playbook.title}</h3>
            <p className="mt-3 text-sm text-white/70">{playbook.description}</p>
            {playbook.chips && (
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {playbook.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/10 px-3 py-1">
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function renderPillars(pillars = [], theme) {
  if (!pillars.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: theme.accent }}>
              Pillar
            </p>
            <h3 className="mt-3 text-base font-semibold text-white">{pillar.title}</h3>
            <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function renderSpotlights(spotlights = []) {
  if (!spotlights.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Spotlights</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {spotlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0f1a2d] p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">{item.category}</p>
              <h4 className="mt-2 text-base font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-xs text-white/60">{item.readingTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderTimeline(events = []) {
  if (!events.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Milestones</p>
        <div className="mt-6 space-y-5">
          {events.map((event) => (
            <div key={event.year} className="flex flex-col gap-2 border-l border-white/10 pl-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{event.year}</span>
              <p className="text-base font-semibold text-white">{event.title}</p>
              <p className="text-sm text-white/70">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderValues(values = []) {
  if (!values.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">{value.title}</h3>
            <p className="mt-2 text-sm text-white/70">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function renderPrinciples(principles = []) {
  if (!principles.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-black/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Principles</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-base font-semibold text-white">{principle.title}</h4>
              <p className="mt-2 text-sm text-white/70">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderClauses(clauses = []) {
  if (!clauses.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-2">
        {clauses.map((clause) => (
          <article key={clause.title} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Clause</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{clause.title}</h3>
            <p className="mt-2 text-sm text-white/70">{clause.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function renderLeadershipQuotes(quotes = []) {
  if (!quotes?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Leadership voices</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {quotes.map((quote) => (
            <article key={quote.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-base text-white/80">“{quote.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-white">{quote.name}</p>
              <p className="text-xs text-white/50">{quote.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderCultureCards(cards = []) {
  if (!cards?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{card.tag}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm text-white/70">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function renderBenefits(benefits = []) {
  if (!benefits?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Benefits</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-white/70">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderCultureMoments(moments = []) {
  if (!moments?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {moments.map((moment) => (
          <article key={moment.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">{moment.title}</h3>
            <p className="mt-2 text-sm text-white/70">{moment.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function renderCta(cta) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#1fb6ff] to-[#6366f1] px-8 py-10 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Next step</p>
        <h3 className="mt-4 text-2xl font-semibold">{cta.title}</h3>
        <p className="mt-3 text-white/80">{cta.description}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {cta.primary && (
            <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold text-[#0f172a] hover:bg-white">
              <Link to={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
          )}
          {cta.secondary && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/70 bg-transparent text-sm text-white hover:bg-white/10"
            >
              <Link to={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
