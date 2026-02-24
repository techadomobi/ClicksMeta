import { useState } from "react"
import { PageShell } from "@/components/PageShell"
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Layers,
  LineChart,
  Store,
  Repeat,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const highlightPills = [
  { label: "Fraud-safe payouts", icon: ShieldCheck },
  { label: "Shopify & Magento ready", icon: Store },
  { label: "Realtime cohort reporting", icon: LineChart },
]

const analyticsBenefits = [
  "Real-time revenue tracking across every partner and SKU",
  "Granular cohort filters to isolate winning audiences",
  "Predictive pacing alerts that flag underspending campaigns",
  "Shared workspaces for agencies, affiliates, and merch teams",
]

const fraudBenefits = [
  "Advanced anomaly detection modeling click + conversion spikes",
  "Multi-network device fingerprinting keeps bots out",
  "Proactive alerts inside Slack, Teams, or custom webhooks",
  "Exportable compliance logs for finance and legal reviews",
]

const reportingInsights = [
  "Drag-and-drop report builder with saved templates",
  "Revenue mix visualizations for margin protection",
  "Automated PDF recaps for leadership",
  "Goal tracking with pacing vs. target lines",
]

const integrationHighlights = [
  { label: "Shopify & Hydrogen", icon: Store },
  { label: "Adobe Commerce", icon: Layers },
  { label: "WooCommerce", icon: Repeat },
  { label: "CRM + ESP", icon: Repeat },
]

const metrics = [
  { label: "Faster partner launches", value: "4x", copy: "pre-approved rule templates" },
  { label: "Compliance savings", value: "32%", copy: "avg. reduction in manual reviews" },
  { label: "Campaign lift", value: "+27%", copy: "higher ROAS after 90 days" },
]

const faqs = [
  {
    question: "How does ClicksMeta improve ecommerce affiliate ROI?",
    answer:
      "ClicksMeta unifies partner tracking, product feeds, and payout automation so teams can see what sku, creative, or cohort drives the most profitable orders. Real-time pacing alerts highlight overspend while rule-based adjustments keep blended ROAS in range.",
  },
  {
    question: "Can I connect Shopify, Magento, or headless builds?",
    answer:
      "Yes. Native connectors stream orders, refunds, and customer data from Shopify, Magento/Adobe Commerce, WooCommerce, and custom storefronts via our GraphQL + REST APIs. Duplicate detection keeps data clean across stacks.",
  },
  {
    question: "Does ClicksMeta block fraudulent referrals?",
    answer:
      "Layered fraud shields score every click and conversion with IP reputation, device fingerprinting, and behavioral baselines. Suspicious sessions can be auto-held, auto-rejected, or reviewed inside compliance queues.",
  },
  {
    question: "What reporting can merchandisers access?",
    answer:
      "Self-serve dashboards show SKU, bundle, or coupon level performance. Schedule branded PDF or Looker Studio-ready exports so executives and partners stay aligned without logins.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most ecommerce teams import historical conversions, configure partner tiers, and go live in under two weeks with guided onboarding plus sandbox testing environments.",
  },
]

const Pill = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#1f2a56] shadow-sm">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef2ff] text-[#4453c6]"><Icon className="h-4 w-4" /></span>
    {label}
  </div>
)

const IllustrationCard = ({ variant }) => {
  const accent = variant === "mint" ? "#c1f5db" : variant === "blush" ? "#ffdce8" : "#dfe9ff"
  return (
    <PageShell tone="dusk">
    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(8,18,68,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[rgba(255,255,255,0.6)]" />
      <div className="absolute -top-10 -left-6 h-40 w-40 rounded-full" style={{ background: accent, opacity: 0.6 }} />
      <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full" style={{ background: accent, opacity: 0.45 }} />
      <div className="relative flex flex-col items-center gap-4 text-[#0d1540]">
        <div className="rounded-3xl border border-[#f1f1ff] bg-gradient-to-br from-[#f4f7ff] to-white p-6 text-center shadow-inner">
          <div className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9aa4d6]">Flow</div>
          <p className="mt-2 text-3xl font-bold text-[#121b3f]">Live Metrics</p>
          <p className="text-xs text-[#6d7398]">cart  affiliate  crm</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[#eff1ff] bg-white/80 px-4 py-3 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9aa2c6]">{metric.label}</p>
              <p className="text-2xl font-bold text-[#1c2554]">{metric.value}</p>
              <p className="text-xs text-[#57608d]">{metric.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageShell>
  )
}

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-white/90 p-5 shadow-sm shadow-[#0c1236]/5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-semibold text-[#121942]">{question}</span>
        <span className="text-2xl font-bold text-[#1fb87c]">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-4 text-sm leading-relaxed text-[#4b5175]">{answer}</p>}
    </div>
  )
}

const SectionShell = ({ background = "#f3f6ff", children }) => (
  <section className="rounded-[48px] p-8 shadow-[0_25px_80px_rgba(8,18,68,0.08)]" style={{ background }}>{children}</section>
)

export function EcommercePage() {
  return (
    <div className="bg-gradient-to-b from-[#f5fbff] to-[#eef2ff] py-16 text-[#081133]">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-10 rounded-[56px] bg-[#dff8eb] px-8 py-12 shadow-[0_40px_100px_rgba(8,18,68,0.15)] lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#1fb87c]/20 bg-white px-4 py-1 text-sm font-semibold text-[#1fb87c]">Ecommerce</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#101b41]">ClicksMeta for Ecommerce Affiliate Programs</h1>
            <p className="mt-4 text-lg text-[#1f2752]">
              Build an ecommerce affiliate engine that scales with clarity. Automate partner workflows, connect your commerce stack, and make merchandising decisions using live campaign data.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {highlightPills.map((pill) => (
                <Pill key={pill.label} {...pill} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-full bg-[#1fb87c] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#1fb87c]/40 hover:bg-[#18a56f]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-[#121c45] px-8 py-6 text-base font-semibold text-[#121c45]">
                Request Demo
              </Button>
            </div>
          </div>
          <IllustrationCard variant="mint" />
        </section>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-2">
            <IllustrationCard variant="ice" />
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8e94c6]">Analytics</p>
              <h2 className="text-3xl font-semibold text-[#0a133c]">Make better decisions instantly with ClicksMeta analytics</h2>
              <p className="text-base text-[#3a4163]">
                Track every click, conversion, and item-level sale in real time. Blend partner, ad, and merchandising data to see exactly where ROI is won or wasted.
              </p>
              <div className="grid gap-3">
                {analyticsBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-[#e0e6ff] bg-white/80 px-4 py-3 text-sm text-[#1e2554]">
                    <BarChart3 className="mt-1 h-4 w-4 text-[#4e5de3]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell background="#f1f4ff">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8e94c6]">Fraud Shields</p>
              <h2 className="text-3xl font-semibold text-[#0a133c]">Protect your marketing campaigns with adaptive fraud shields</h2>
              <p className="text-base text-[#3a4163]">
                Stop malware, bot rings, and abusive coupon stacking before it impacts budgets. ClicksMeta scores every session and applies policy actions automatically.
              </p>
              <div className="grid gap-3">
                {fraudBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-[#d7ddff] bg-white px-4 py-3 text-sm text-[#1e2554]">
                    <ShieldCheck className="mt-1 h-4 w-4 text-[#4f6ae6]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <IllustrationCard variant="blush" />
          </div>
        </SectionShell>

        <SectionShell background="#ffeef7">
          <div className="grid gap-10 lg:grid-cols-2">
            <IllustrationCard variant="blush" />
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8e94c6]">Reporting</p>
              <h2 className="text-3xl font-semibold text-[#0a133c]">Actionable campaign insights with in-depth reporting</h2>
              <p className="text-base text-[#3a4163]">
                Build the exact view each stakeholder needs with our report designer, pacing goals, and automated recaps.
              </p>
              <div className="grid gap-3">
                {reportingInsights.map((insight) => (
                  <div key={insight} className="flex items-start gap-3 rounded-2xl border border-[#ffd6eb] bg-white px-4 py-3 text-sm text-[#1e2554]">
                    <Sparkles className="mt-1 h-4 w-4 text-[#ff5fa2]" />
                    {insight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell background="#ffe9f2">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8e94c6]">Integrations</p>
              <h2 className="text-3xl font-semibold text-[#0a133c]">Seamless tech stack integrations with ClicksMeta two-way APIs</h2>
              <p className="text-base text-[#3a4163]">
                Sync storefront, CRM, ESP, and finance data automatically. Keep every team operating from one trusted source of revenue truth.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {integrationHighlights.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 rounded-3xl border border-[#ffd1e5] bg-white px-4 py-4 text-center text-sm font-semibold text-[#25143d]">
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe3ef] text-[#f05c96]"><item.icon className="h-5 w-5" /></span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <IllustrationCard variant="mint" />
          </div>
        </SectionShell>

        <section className="rounded-[40px] bg-[#0a0f2d] px-8 py-10 text-white shadow-[0_40px_90px_rgba(2,8,25,0.6)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">Scale Faster</p>
              <h3 className="mt-3 text-3xl font-semibold">Ready to launch a smarter ecommerce affiliate program?</h3>
              <p className="mt-3 text-base text-white/80">Let our team help you design workflows, migrate partners, and measure revenue in days, not months.</p>
            </div>
            <Button className="self-start rounded-full bg-[#1fb87c] px-8 py-4 text-base font-semibold text-[#041021] hover:bg-[#16a269]">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <SectionShell background="#ffffff">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8e94c6]">FAQ</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#0b153b]">Frequently asked, clearly answered</h3>
              <p className="mt-2 text-base text-[#3f4768]">Everything ecommerce teams ask before modernizing their affiliate tech stack.</p>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.question} index={index} {...faq} />
              ))}
            </div>
          </div>
        </SectionShell>
      </div>
    </div>
  )
}
