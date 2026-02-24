import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sparkles, HeartHandshake, Users, Leaf, Globe, Megaphone } from "lucide-react"

const heroStats = [
  { label: "Partner programs", value: "350+" },
  { label: "Playbooks", value: "120" },
  { label: "Countries", value: "32" },
]

const commitments = [
  { title: "Customer love rituals", description: "Quarterly business reviews and health scans keep every stakeholder aligned." },
  { title: "Inclusive enablement", description: "Guided onboarding paths and certifications welcome every persona and region." },
  { title: "Impact initiatives", description: "We reinvest time into community, education, and sustainability projects selected with clients." },
  { title: "Radical transparency", description: "Shared dashboards give customers a live view of what we are building together." },
]

const initiativeSections = [
  {
    badge: "Digital Education & Literacy",
    title: "Empowering the next generation of marketers",
    description:
      "We believe talent is everywhere. ClicksMeta sponsors digital literacy cohorts, provides sandbox environments, and mentors underrepresented creators so they can launch data-backed programs with confidence.",
    quote:
      "Education changes customer outcomes. When teams understand measurement, they can build trustworthy partner experiences.",
    author: "Aisha Rao",
    role: "VP, Customer Success",
    accent: "#fef3f8",
    illustration: "education",
  },
  {
    badge: "Diversity & Inclusion",
    title: "Fostering an inclusive tech ecosystem",
    description:
      "From scholarships to mentorship circles, we help emerging voices access the partnerships industry. Customers join co-design labs that keep new perspectives at the table.",
    quote: "Inclusive programs deliver better creative, better trust, and better revenue.",
    author: "Marco Liu",
    role: "Head of Customer Programs",
    accent: "#f3f6ff",
    illustration: "community",
  },
  {
    badge: "Local Community Support",
    title: "Making a difference where it matters most",
    description:
      "ClicksMeta teams volunteer with food banks, STEM clubs, and disaster relief partners in the same cities our customers operate. AM playbooks include a give-back chapter to grow impact together.",
    quote: "Partnerships thrive when the communities behind them are resilient.",
    author: "Maya Ortiz",
    role: "Director, Global Success",
    accent: "#f6fbff",
    illustration: "impact",
  },
  {
    badge: "Environmental Stewardship",
    title: "Contributing to a greener future",
    description:
      "We offset campaign footprints through reforestation partners, green data centers, and sustainability goals baked into customer QBRs.",
    quote: "Responsible growth is now a customer mandate—we embed it in every roadmap.",
    author: "Daniel Cho",
    role: "Customer Strategy Lead",
    accent: "#eefcf4",
    illustration: "sustainability",
  },
]

export function CustomerSuccessPage() {
  return (
    <div className="bg-[#f4f6fb] text-[#0f1a3d]">
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#36c3a3] bg-white px-4 py-1 text-sm font-semibold text-[#059669]">
              <Sparkles className="h-4 w-4" /> Customer Success
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#0f172a] md:text-5xl">
              Empowering the future of every partner relationship
            </h1>
            <p className="mt-5 text-lg text-[#334155]">
              Success at ClicksMeta is a social impact mission. We co-build growth playbooks, mentor emerging talent, and invest in
              communities touched by our customers so every click drives meaningful change.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-[#dfe6ff] bg-white px-5 py-6 text-center">
                  <p className="text-2xl font-semibold text-[#0f172a]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#94a3b8]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#ff4d8f] text-white hover:bg-[#ff377f]">
                <Link to="/demorequest">Get involved</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#0f1a3d] text-[#0f1a3d] hover:bg-black/5">
                <Link to="/case-studies">See initiatives</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-md rounded-[40px] border border-[#dfe6ff] bg-white p-8 shadow-[0_30px_80px_rgba(15,26,61,0.1)]">
              <div className="rounded-[30px] bg-[#fef3f8] p-6">
                <p className="text-sm font-semibold text-[#db2777]">Social impact snapshot</p>
                <p className="mt-3 text-2xl font-semibold text-[#0f172a]">72 initiatives</p>
                <p className="text-sm text-[#475569]">funded with customers in 2025</p>
              </div>
              <div className="mt-6 space-y-4">
                {["Workforce upskilling", "Scholarships", "Community labs"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f7f9ff] px-4 py-3 text-sm text-[#475569]">
                    <HeartHandshake className="h-4 w-4 text-[#02c39a]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-8 -top-6 hidden h-24 w-24 rounded-full bg-[#a5f3fc]/60 blur-2xl lg:block" />
            <div className="absolute -right-6 bottom-4 hidden h-16 w-16 rounded-full bg-[#fbcfe8]/70 blur-xl lg:block" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-[#0f172a]">Our commitments to create a better future</h2>
          <p className="mt-4 text-[#475569]">
            Every customer engagement is anchored in six key promises that turn success into a long-term movement.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {commitments.map((commitment) => (
            <article key={commitment.title} className="rounded-[32px] border border-[#dfe6ff] bg-white px-6 py-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0f172a]">{commitment.title}</h3>
              <p className="mt-3 text-sm text-[#475569]">{commitment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10 px-4 pb-12 pt-4 sm:px-6">
        {initiativeSections.map((initiative, index) => (
          <article
            key={initiative.title}
            className="mx-auto max-w-6xl rounded-[40px] border border-[#dfe6ff] px-6 py-10"
            style={{ background: initiative.accent }}
          >
            <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div>
                <span className="inline-flex items-center rounded-full border border-[#ec4899] bg-white px-3 py-1 text-sm font-semibold text-[#ec4899]">
                  {initiative.badge}
                </span>
                <h3 className="mt-4 text-3xl font-semibold text-[#0f172a]">{initiative.title}</h3>
                <p className="mt-4 text-[#475569]">{initiative.description}</p>
                <div className="mt-6 rounded-[28px] bg-[#2f2c5f] p-6 text-white">
                  <p className="text-sm leading-relaxed">“{initiative.quote}”</p>
                  <p className="mt-4 text-sm font-semibold">{initiative.author}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{initiative.role}</p>
                </div>
              </div>
              <div className="rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-inner shadow-white/40">
                {initiative.illustration === "education" && (
                  <div className="space-y-4 text-[#475569]">
                    <div className="rounded-3xl bg-[#f2fbff] p-5">
                      <Users className="h-8 w-8 text-[#0ea5e9]" />
                      <p className="mt-3 text-sm">Mentor network + sandbox access</p>
                    </div>
                    <div className="rounded-3xl bg-[#fef3f8] p-5">
                      <Megaphone className="h-8 w-8 text-[#ec4899]" />
                      <p className="mt-3 text-sm">Live workshops with customer practitioners</p>
                    </div>
                  </div>
                )}
                {initiative.illustration === "community" && (
                  <div className="space-y-4 text-[#475569]">
                    <div className="rounded-3xl bg-[#e0f2fe] p-5">
                      <HeartHandshake className="h-8 w-8 text-[#0284c7]" />
                      <p className="mt-3 text-sm">Scholarships + certification stipends</p>
                    </div>
                    <div className="rounded-3xl bg-[#ede9fe] p-5">
                      <Globe className="h-8 w-8 text-[#7c3aed]" />
                      <p className="mt-3 text-sm">Global co-design labs</p>
                    </div>
                  </div>
                )}
                {initiative.illustration === "impact" && (
                  <div className="space-y-4 text-[#475569]">
                    <div className="rounded-3xl bg-[#ecfccb] p-5">
                      <Leaf className="h-8 w-8 text-[#65a30d]" />
                      <p className="mt-3 text-sm">Local climate resilience drives</p>
                    </div>
                    <div className="rounded-3xl bg-[#ffe4e6] p-5">
                      <HeartHandshake className="h-8 w-8 text-[#db2777]" />
                      <p className="mt-3 text-sm">Community grant fund with customers</p>
                    </div>
                  </div>
                )}
                {initiative.illustration === "sustainability" && (
                  <div className="space-y-4 text-[#475569]">
                    <div className="rounded-3xl bg-[#dcfce7] p-5">
                      <Leaf className="h-8 w-8 text-[#16a34a]" />
                      <p className="mt-3 text-sm">Carbon neutral partner summits</p>
                    </div>
                    <div className="rounded-3xl bg-[#cffafe] p-5">
                      <Globe className="h-8 w-8 text-[#0ea5e9]" />
                      <p className="mt-3 text-sm">Green infrastructure scorecards</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-[40px] border border-[#ffd5eb] bg-gradient-to-r from-[#ffd5eb] via-[#fecdd3] to-[#fde68a] px-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-3xl font-semibold text-[#0f172a]">Leading with purpose and vision</h3>
            <p className="mt-4 text-[#4b5563]">
              Real impact comes from consistent action. We invite every customer, partner, and teammate to shape initiatives that
              uplift communities, protect the planet, and unlock equitable opportunity.
            </p>
          </div>
          <div className="rounded-[28px] border border-[#0f172a]/10 bg-white/80 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ec4899]">Have an idea?</p>
            <p className="mt-3 text-lg text-[#0f172a]">Let’s co-design the next success initiative together.</p>
            <Button asChild className="mt-6 rounded-full bg-[#ff4d8f] text-white hover:bg-[#ff377f]">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

