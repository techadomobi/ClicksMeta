import { BadgeCheck, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/PageShell"
import { PageHero } from "@/components/PageHero"
import { SectionHeading } from "@/components/SectionHeading"

const plans = [
  {
    name: "Launch",
    price: "Free",
    period: "15 days",
    tagline: "Rebuild every hero, proof rail, and CTA using OffersMeta presets.",
    features: ["All experience kits", "Live preview links", "Email support", "Strategy checklist"],
    highlight: "Start designing",
  },
  {
    name: "Studio",
    price: "$149",
    period: "/month",
    tagline: "For teams refreshing multiple industries in parallel.",
    features: ["Unlimited variants", "Automation triggers", "Snapshots & approvals", "Priority support"],
    highlight: "Most loved",
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    period: "",
    tagline: "Dedicated pods to replatform large catalogs with security reviews.",
    features: ["Compliance reviews", "Custom integrations", "24/5 coverage", "Migration support"],
    highlight: "White-glove",
  },
]

const faqs = [
  { q: "Is the free trial really the full OffersMeta kit?", a: "Yes. All hero, stat, CTA, and proof components are unlocked for 15 days so you can mirror the site before paying." },
  { q: "Can I switch plans later?", a: "Upgrade or downgrade anytime. Content, previews, and automation rules stay intact." },
  { q: "Do you help migrate existing pages?", a: "Studio and Enterprise plans include guided migrations so every URL inherits the new UI without downtime." },
]

export function PricingPage() {
  return (
    <PageShell tone="mint">
      <PageHero
        eyebrow="Pricing"
        title="Transparent plans for an OffersMeta-grade refresh"
        description="Pick the kit that matches your launch velocity. Every plan mirrors the gradients, typography, and storytelling patterns you loved on OffersMeta."
        stats={[
          { label: "Pages refreshed", value: "140+", description: "per customer" },
          { label: "Avg. uplift", value: "+37%", description: "conversion lift" },
        ]}
        primary={{ label: "Start free trial", href: "/signup" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
        tone="mint"
      />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeading
            align="center"
            eyebrow="Packages"
            title="Every plan keeps OffersMeta’s polish intact"
            description="No surprise fees. Pay for the level of coaching and automation you need."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[32px] border px-7 py-8 shadow-sm ${plan.primary ? "border-transparent bg-gradient-to-br from-[#fef2ff] via-white to-[#ecfdf5] shadow-[0_35px_120px_rgba(8,18,68,0.1)]" : "border-[#e4e8ff] bg-white"}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#050b1d]">{plan.name}</p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#d5dcff] px-3 py-1 text-xs font-semibold text-[#4b5877]">
                    <Sparkles className="h-3 w-3 text-[#f97316]" />
                    {plan.highlight}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-[#050b1d]">
                  {plan.price}
                  {plan.period && <span className="text-base font-medium text-[#4b5877]"> {plan.period}</span>}
                </p>
                <p className="mt-2 text-sm text-[#4b5877]">{plan.tagline}</p>
                <ul className="mt-6 space-y-3 text-sm text-[#0f172a]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f8ff] text-[#4f46e5]">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`mt-8 rounded-2xl ${plan.primary ? "bg-gradient-to-r from-[#4f46e5] to-[#ec4899]" : "bg-[#0f172a]"}`}>
                  {plan.primary ? "Book a design session" : "Select plan"}
                </Button>
              </article>
            ))}
          </div>
          <div className="grid gap-4 rounded-[32px] border border-[#e4e8ff] bg-white/90 p-6 text-sm text-[#4b5877] md:grid-cols-2">
            {["Cancel anytime during the trial", "No setup fees or hidden charges", "Data privacy & uptime SLAs included", "Migration support for existing pages"].map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-[#4f46e5]" />
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-[#e4e8ff] bg-white/95 p-8 shadow-sm">
          <SectionHeading
            align="center"
            eyebrow="Common questions"
            title="Billing clarity that feels as polished as the UI"
          />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-[24px] border border-[#edf0ff] bg-[#f8f9ff] px-5 py-4">
                <summary className="cursor-pointer text-base font-semibold text-[#050b1d]">{faq.q}</summary>
                <p className="mt-3 text-sm text-[#4b5877]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
