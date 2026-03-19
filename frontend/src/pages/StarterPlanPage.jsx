import { Link } from "react-router-dom"
import {
  BadgeCheck,
  Rocket,
  ShieldCheck,
  Zap,
  Sparkles,
  LineChart,
  Users,
  Wand2,
  Clock3,
  CheckCircle2,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "3,00,000 tracked clicks included",
  "Unlimited campaigns and core automation",
  "Priority processing and email support",
]

const features = [
  "3,00,000 Clicks",
  "Unlimited Conversions",
  "Unlimited Campaigns",
  "Smart Reports",
  "Technical Support",
  "API Access",
]

const advantageCards = [
  {
    title: "Launch-ready workflows",
    description: "Start campaigns in minutes with prebuilt templates and routing logic built for small teams.",
    icon: Wand2,
  },
  {
    title: "Reliable reporting",
    description: "Daily and hourly performance views keep every decision grounded in clean data.",
    icon: LineChart,
  },
  {
    title: "Focused support",
    description: "Priority email support plus guided onboarding to keep your launch on track.",
    icon: ShieldCheck,
  },
  {
    title: "Room to grow",
    description: "Upgrade to Professional without losing any data or campaign history.",
    icon: Users,
  },
]

const timeline = [
  {
    step: "Day 1",
    title: "Workspace setup",
    detail: "We configure tracking domains, user roles, and your first offer stack.",
  },
  {
    step: "Day 3",
    title: "Launch + test",
    detail: "Validate links, QA redirects, and spin up live reporting dashboards.",
  },
  {
    step: "Day 7",
    title: "Optimize",
    detail: "Review early data and tune campaigns using smart routing and fraud checks.",
  },
]

const faqs = [
  {
    q: "Is the Starter plan really free for 12 months?",
    a: "Yes. You get full Starter access for 12 months, then you can renew or upgrade anytime.",
  },
  {
    q: "What happens after 3,00,000 clicks?",
    a: "You can upgrade to Professional or purchase additional volume based on your growth needs.",
  },
  {
    q: "Can we invite teammates?",
    a: "Yes. Starter includes team access with role permissions and activity tracking.",
  },
]

export function StarterPlanPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#f8fbff] via-[#f0f7ff] to-[#eef4ff] py-16 text-[#0f1b3d]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-[36px] border border-[#1fb6ff]/20 bg-gradient-to-br from-[#f0f7ff] via-[#e6f0ff] to-[#d9e6ff] p-8 shadow-2xl shadow-[#1fb6ff]/20 md:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#1fb6ff]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1fb6ff]/30 bg-[#f0f7ff] px-4 py-2">
              <Rocket className="h-4 w-4 text-[#1fb6ff]" />
              Starter Plan
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1fb6ff]/30 bg-[#f0f7ff] px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-[#1fb6ff]" />
              Growth Ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1fb6ff]/30 bg-[#f0f7ff] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#1fb6ff]" />
              12 Months Free
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Launch faster with a Starter plan built for early-stage teams.
              </h1>
              <p className="text-lg text-[#0f1b3d]/70">
                Everything you need to ship campaigns, track conversions, and build a reliable growth engine.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-[#1fb6ff]/20 bg-[#f0f7ff] p-4 text-sm text-[#0f1b3d]/75">
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Go-live speed", value: "7 days", icon: Clock3 },
                  { label: "Included clicks", value: "3,00,000", icon: Zap },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-3xl border border-[#1fb6ff]/20 bg-[#f0f7ff] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e6f0ff]">
                        <Icon className="h-5 w-5 text-[#1fb6ff]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#0f1b3d]/50">{label}</p>
                        <p className="text-lg font-semibold text-[#0f1b3d]">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold text-[#051227] hover:bg-white/90">
                  <Link to="/signup">Start now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Link to="/pricing">Back to pricing</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-6 shadow-[0_25px_80px_rgba(31,182,255,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f1b3d]/60">Starter pricing</p>
              <p className="mt-4 text-sm font-semibold text-[#0f1b3d]/40 line-through">$49 / month</p>
              <p className="mt-2 text-4xl font-semibold text-[#0f1b3d]">Free</p>
              <p className="mt-1 text-sm text-[#0f1b3d]/60">for 12 months • billed $0</p>
              <div className="mt-6 space-y-3">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#0f1b3d]/75">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1fb6ff]">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[#1fb6ff]/20 bg-[#e6f0ff] p-4 text-xs text-[#0f1b3d]/60">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#1fb6ff]" />
                  <span>Upgrade to Professional anytime without losing data.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {advantageCards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[32px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6f0ff]">
                <Icon className="h-6 w-6 text-[#1fb6ff]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f1b3d]">{title}</h3>
              <p className="mt-3 text-sm text-[#0f1b3d]/70">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[36px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f1b3d]/50">Launch timeline</p>
            <span className="text-xs text-[#0f1b3d]/50">First-week acceleration</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <div key={item.step} className="relative rounded-3xl border border-[#1fb6ff]/20 bg-[#e6f0ff] p-5">
                <span className="absolute -top-3 left-5 rounded-full bg-[#1fb6ff] px-3 py-1 text-xs font-semibold text-[#04152b]">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-[#0f1b3d]">{item.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#0f1b3d]/50">{item.step}</p>
                <p className="mt-3 text-sm text-[#0f1b3d]/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f1b3d]/50">Outcomes</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0f1b3d]">Starter advantages that show up in week one</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "Setup time", value: "< 1 day" },
                { label: "Click capacity", value: "3,00,000" },
                { label: "Support SLA", value: "Priority email" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-[#1fb6ff]/20 bg-[#e6f0ff] p-5 text-center">
                  <p className="text-2xl font-semibold text-[#0f1b3d]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#0f1b3d]/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f1b3d]/50">Customer note</p>
            <p className="mt-4 text-lg text-[#0f1b3d]/80">
              “We went from spreadsheet chaos to real-time tracking in under a week. The Starter plan was the perfect
              launchpad for our first campaigns.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0ff]">
                <Star className="h-5 w-5 text-[#1fb6ff]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#0f1b3d]">Growth Lead, DTC Brand</p>
                <p className="text-xs text-[#0f1b3d]/50">Starter customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-[#1fb6ff]/20 bg-[#f0f7ff] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f1b3d]/50">FAQ</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-[#1fb6ff]/20 bg-[#e6f0ff] p-5">
                <p className="text-sm font-semibold text-[#0f1b3d]">{faq.q}</p>
                <p className="mt-3 text-sm text-[#0f1b3d]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-[#1fb6ff]/20 bg-gradient-to-r from-[#1fb6ff] to-[#6366f1] p-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Ready to launch?</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Start free for 12 months and scale with confidence.</h3>
              <p className="mt-2 text-sm text-white/80">
                Included click volume, priority processing, and upgrade paths when you are ready.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold text-[#0f172a] hover:bg-white">
                <Link to="/signup">Start now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/70 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Link to="/demorequest">Book a demo</Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
            {["No credit card required", "Cancel anytime", "Priority email support"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2">
                <CheckCircle2 className="h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
