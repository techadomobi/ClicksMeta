import { useState } from "react"
import { ArrowRight, LineChart, ShieldCheck, BarChart3, Lock, Workflow, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroHighlights = [
  "Regulatory-grade tracking",
  "Fraud-safe partner payouts",
  "Bank-ready data encryption",
]

const analyticsTiles = [
  "Understand user cohorts with lifetime value insights",
  "Visualize payouts, deposits, and referrals in real time",
  "Compare networks with conversion quality scoring",
  "Model growth scenarios with configurable KPIs",
]

const fraudTiles = [
  "Identify invalid clicks with behavioral biometrics",
  "Stop fraudulent conversions automatically",
  "Encrypt sensitive partner details at rest & in transit",
  "Stream alerts into risk, compliance, and RevOps tools",
]

const automationTiles = [
  { title: "Workflow templates", body: "Launch fintech partner tiers with guardrails in minutes.", icon: Workflow },
  { title: "Realtime alerts", body: "Know when cost per funded account drifts off target.", icon: Sparkles },
  { title: "Secure APIs", body: "Sync payouts with core banking, CRM, and billing systems.", icon: Lock },
]

const faqs = [
  {
    question: "How does ClicksMeta keep fintech programs compliant?",
    answer:
      "ClicksMeta logs every touch point, applies configurable approval workflows, and stores evidence for audits. KYB-ready onboarding packages help banks and fintechs satisfy regulatory reviews.",
  },
  {
    question: "Can we connect banking cores or card processors?",
    answer:
      "Yes. Our secure APIs and webhooks integrate with processors, digital banking platforms, and payment providers so deposits, loans, or card activations can be measured instantly.",
  },
  {
    question: "How do you detect sophisticated fraud?",
    answer:
      "Layered detection combines behavioral analytics, device fingerprinting, sanction screening, and payout policy rules to catch synthetic IDs or bot bursts before money moves.",
  },
  {
    question: "What reports do growth teams see?",
    answer:
      "Dashboards highlight funded accounts, CAC, approval rates, and partner quality. Schedule PDF or BI-friendly feeds for finance, compliance, and executive teams.",
  },
]

const HighlightPill = ({ text }) => (
  <div className="rounded-full border border-white/40 bg-white/80 px-4 py-2 text-sm font-semibold text-[#103042] shadow-sm shadow-white/30">
    {text}
  </div>
)

const InfoCard = ({ title, body, icon: Icon }) => (
  <div className="rounded-[28px] border border-[#dde5ff] bg-white/90 p-5 shadow-[0_15px_40px_rgba(10,12,50,0.08)]">
    <div className="flex items-center gap-3 text-[#0e1740]">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ecf1ff] text-[#2c3de8]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="text-base font-semibold">{title}</p>
    </div>
    <p className="mt-3 text-sm text-[#4d5578]">{body}</p>
  </div>
)

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-[#e0e7ff] bg-white/90 p-5 shadow-sm">
      <button type="button" className="flex w-full items-center justify-between text-left" onClick={() => setOpen((prev) => !prev)}>
        <span className="text-base font-semibold text-[#0f1540]">{question}</span>
        <span className="text-2xl font-bold text-[#14c285]">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-4 text-sm leading-relaxed text-[#4b5170]">{answer}</p>}
    </div>
  )
}

const SectionShell = ({ children }) => (
  <section className="rounded-[48px] bg-white p-8 shadow-[0_30px_80px_rgba(8,18,68,0.08)]">{children}</section>
)

export function FintechPage() {
  return (
    <div className="bg-gradient-to-b from-[#e9fbf5] to-[#eff5ff] py-16 text-[#081332]">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-10 rounded-[56px] bg-[#d8f7ec] px-8 py-12 shadow-[0_45px_110px_rgba(9,32,51,0.18)] lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#18c08e]/40 bg-white px-4 py-1 text-sm font-semibold text-[#18c08e]">Fintech</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#11133f]">
              Empower your fintech affiliate program with ClicksMeta
            </h1>
            <p className="mt-4 text-lg text-[#203050]">
              ClicksMeta helps banks, neobanks, exchanges, and payment providers scale secure referral channels with realtime analytics, adaptive fraud prevention, and compliant payout workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <HighlightPill key={item} text={item} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-full bg-[#18c08e] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#1ac995]/40 hover:bg-[#14a777]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-[#102044] px-8 py-6 text-base font-semibold text-[#102044]">
                Request Demo
              </Button>
            </div>
          </div>
          <div className="rounded-[36px] border border-white/40 bg-white/70 p-10 text-center shadow-[0_35px_90px_rgba(8,18,68,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#9ea7ca]">AI Monitoring</p>
            <p className="mt-3 text-3xl font-bold text-[#151b46]">Live program health</p>
            <p className="mt-1 text-sm text-[#4c5578]">approvals · risk · revenue</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-left text-sm">
              {analyticsTiles.slice(0, 3).map((tile) => (
                <div key={tile} className="rounded-2xl bg-[#f1f7ff] p-3 text-[#1c254e] shadow-inner">
                  {tile}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f5f7ff] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b92c1]">Analytics</span>
              <h2 className="mt-4 text-3xl font-semibold text-[#0f1642]">Grow with advanced analytics and reporting</h2>
              <p className="mt-3 text-base text-[#3b4264]">
                Monitor conversion rates, funded accounts, and revenue per partner instantly. Align growth, finance, and risk teams with a single view of truth.
              </p>
              <div className="mt-6 grid gap-3">
                {analyticsTiles.map((tile) => (
                  <div key={tile} className="flex items-start gap-3 rounded-2xl border border-[#dbe2ff] bg-white px-4 py-3 text-sm text-[#212959]">
                    <LineChart className="mt-1 h-4 w-4 text-[#4b5ceb]" />
                    {tile}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] bg-[#fdfdff] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b92c1]">Automation</span>
              <h2 className="mt-4 text-3xl font-semibold text-[#0f1642]">Automate operations without sacrificing oversight</h2>
              <div className="mt-6 grid gap-4">
                {automationTiles.map((tile) => (
                  <InfoCard key={tile.title} {...tile} />
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f8ff] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b92c1]">Fraud Prevention</span>
              <h2 className="mt-4 text-3xl font-semibold text-[#0f1642]">Protect your financial data with adaptive fraud shields</h2>
              <p className="mt-3 text-base text-[#3b4264]">
                Detect bot bursts, synthetic IDs, and suspicious payouts across every affiliate and sub-network.
              </p>
              <div className="mt-6 grid gap-3">
                {fraudTiles.map((tile) => (
                  <div key={tile} className="flex items-start gap-3 rounded-2xl border border-[#d9e2ff] bg-white px-4 py-3 text-sm text-[#212959]">
                    <ShieldCheck className="mt-1 h-4 w-4 text-[#5670ff]" />
                    {tile}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] bg-[#111439] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Scale with confidence</p>
              <h3 className="mt-4 text-3xl font-semibold">Ready to secure your fintech affiliate program?</h3>
              <p className="mt-3 text-base text-white/80">See how ClicksMeta automates compliance, improves ROAS, and keeps payouts clean.</p>
              <Button className="mt-8 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0c173a] hover:bg-white/90">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b92c1]">FAQ</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#0f1642]">Frequently asked, clearly answered</h3>
          </div>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </SectionShell>
      </div>
    </div>
  )
}
