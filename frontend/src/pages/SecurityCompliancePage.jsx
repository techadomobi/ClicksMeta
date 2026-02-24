import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  BadgeCheck,
  Eye,
  Server,
  Shield,
  CheckCircle2,
} from "lucide-react"

const frameworks = ["SOC 2 Type II", "GDPR", "CCPA", "ISO 27001", "PCI-DSS"]

const securityPillars = [
  {
    title: "Proactive Governance",
    description:
      "Threats are prevented before they materialize with automated reviews, access recertifications, and risk scoring built into every launch.",
    icon: FileCheck2,
    accent: "#ffeec2",
  },
  {
    title: "Resilient Infrastructure",
    description:
      "ClicksMeta runs on geographically diverse cloud regions with live failover, immutable backups, and 24/7 monitoring dashboards.",
    icon: Server,
    accent: "#f5f5ff",
  },
  {
    title: "Intelligent Vigilance",
    description:
      "AI-assisted anomaly detection, pen-tests, and continuous scanning surface issues before partners ever notice a blip.",
    icon: Eye,
    accent: "#f1f9ff",
  },
  {
    title: "Security Culture",
    description:
      "Every ClicksMeta teammate is credentialed through mandatory trainings, phishing drills, and privacy-first coding practices.",
    icon: BadgeCheck,
    accent: "#f8f0ff",
  },
]

const accessControls = [
  {
    title: "Google Workspace SSO",
    description: "Centralized single sign-on keeps employee access scoped, logged, and instantly revocable.",
  },
  {
    title: "Cloudflare Zero Trust",
    description: "Every request is verified at the edge—no implicit trust, full session isolation, device posture checks.",
  },
  {
    title: "Endpoint Protection",
    description: "EDR agents, disk encryption, and patch automation harden every laptop that touches customer data.",
  },
]

const businessBenefits = [
  {
    title: "Scale with confidence",
    description: "Security practices grow with your partner program so revenue teams never trade velocity for safety.",
  },
  {
    title: "Maintain partner trust",
    description: "Every interaction is logged, encrypted, and provable—earning enterprise approvals faster.",
  },
  {
    title: "Stay compliant automatically",
    description: "Policy automation and alerts map to global regulations to keep you ahead of audits.",
  },
  {
    title: "Built for reliability",
    description: "Multi-region infrastructure and disaster recovery plans eliminate single points of failure.",
  },
]

export function SecurityCompliancePage() {
  return (
    <div className="bg-[#f8fbff] text-[#0f1a3d]">
      <section className="bg-[#f3f6ff] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#36c3a3] bg-white px-4 py-1 text-sm font-semibold text-[#059669]">
              <ShieldCheck className="h-4 w-4" /> Security and Compliance
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#0f172a] md:text-5xl">
              Trust is everything at <span className="text-[#02c39a]">ClicksMeta</span>
            </h1>
            <p className="mt-6 text-lg text-[#1f2a44]/80">
              In a world of nonstop breaches, trust is the foundation of every partnership. ClicksMeta bakes zero-trust controls,
              privacy-by-design workflows, and audited delivery into the heart of the platform.
            </p>
            <p className="mt-4 text-lg text-[#1f2a44]/80">
              From infrastructure to employee onboarding, every layer is instrumented so you can prove compliance without slowing
              down your growth teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#0f1a3d]/70">
              {frameworks.map((framework) => (
                <span key={framework} className="rounded-full border border-[#d6d9f0] bg-white px-4 py-1.5 font-semibold">
                  {framework}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-[#ff4d8f] text-white shadow-lg shadow-[#ff4d8f33] hover:bg-[#ff337b]">
                <Link to="/contact">Talk to security</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#0f172a] text-[#0f172a] hover:bg-black/5">
                <Link to="/privacy-policy">View privacy policy</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-md rounded-[40px] border border-[#dfe6ff] bg-white p-8 shadow-[0_30px_80px_rgba(15,26,61,0.1)]">
              <div className="flex items-center gap-3 rounded-2xl bg-[#f2fbff] px-4 py-3">
                <Lock className="h-5 w-5 text-[#02c39a]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#4b5563]">Zero Trust</p>
                  <p className="text-sm font-semibold text-[#0f172a]">All access verified in real time</p>
                </div>
              </div>
              <div className="mt-6 rounded-3xl bg-[#0f172a] px-6 py-7 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Live posture</p>
                <p className="mt-3 text-3xl font-semibold">99.98% uptime</p>
                <p className="mt-2 text-sm text-white/70">Monitored across 5 regions</p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <Shield className="h-5 w-5 text-[#22d3ee]" />
                  Encryption enforced at rest & in transit
                </div>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-[#0f1a3d]/80">
                {["Access approvals in < 15 min", "Immutable audit trail", "Disaster recovery verified quarterly"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f7f9ff] px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-[#02c39a]/20 blur-2xl md:block" />
            <div className="absolute bottom-0 left-10 hidden h-16 w-16 rounded-full bg-[#60a5fa]/30 blur-xl md:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Our four pillars</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">Security strategy engineered for resilience</h2>
          <p className="mt-3 text-[#475569]">
            Four interconnected pillars create a comprehensive defence framework—mirroring the Trackier layout but written for the
            ClicksMeta voice.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {securityPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="grid gap-6 rounded-[46px] border border-[#dfe6ff] px-6 py-6 md:grid-cols-[auto_1fr]"
              style={{ background: pillar.accent }}
            >
              <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#02c39a] shadow-inner shadow-white/60">
                <pillar.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">{pillar.title}</h3>
                <p className="mt-2 text-[#1f2a44]/80">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#c6f7e2] bg-[#e9fff5] p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f9f6e]">Privacy-first design</p>
          <h3 className="mt-4 text-2xl font-semibold text-[#0f172a]">Data stewardship that respects every click</h3>
          <p className="mt-3 text-[#1f2a44]/80">
            Data minimization, anonymization, and encryption safeguards run throughout the platform so you can analyze performance
            without exposing raw personal information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#0f172a]">Secure access, every time</h2>
          <p className="mt-3 text-[#475569]">Identity is the new perimeter. We layer controls to protect systems and data.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {accessControls.map((control) => (
            <article key={control.title} className="rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0f172a]">{control.title}</h3>
              <p className="mt-3 text-sm text-[#475569]">{control.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eff2ff] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[#0f172a]">What this means for your business</h2>
            <p className="mt-3 text-[#475569]">
              Security is not a checkbox—it is a growth lever. Here is how ClicksMeta keeps you ahead.
            </p>
            <div className="mt-6 space-y-4">
              {businessBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white/80 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0f172a]">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[40px] border border-[#fcdceb] bg-[#fff0f7] p-10 text-center text-[#0f172a]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f43f5e]">Ready to scale securely?</p>
            <h3 className="mt-4 text-2xl font-semibold">ClicksMeta keeps your data protected at every step.</h3>
            <p className="mt-3 text-[#1f2a44]/80">
              Whether you manage your first campaign or a global network, we give you the compliance framework to grow with
              confidence.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full bg-[#ff4d8f] text-white hover:bg-[#ff337b]">
                <Link to="/demorequest">Get started today</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#0f172a] text-[#0f172a] hover:bg-black/5">
                <Link to="/case-studies">See proof</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-[36px] border border-[#e2e8f0] bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Additional resources</p>
          <h3 className="mt-4 text-2xl font-semibold text-[#0f172a]">Co-build your security roadmap with ClicksMeta</h3>
          <p className="mt-3 text-[#475569]">
            Dive deeper into certifications, breach response, and implementation guides with our trust engineers.
          </p>
          <Button asChild className="mt-6 rounded-full bg-[#1fb6ff] text-white hover:bg-[#17a9ef]">
            <Link to="/help-center">View security resources</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

