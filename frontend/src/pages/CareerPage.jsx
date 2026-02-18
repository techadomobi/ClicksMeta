import { Button } from "@/components/ui/button"
import { Gift, GraduationCap, Heart, Home, MessageSquareQuote, Sparkles, Users } from "lucide-react"

const benefits = [
    {
        title: "Hybrid work model with flexible hours",
        description: "Design a schedule that supports deep work, collaboration, and life outside of work.",
        icon: Home,
    },
    {
        title: "Culture of recognition & innovation",
        description: "We celebrate big wins, micro-innovations, and bold experiments every week.",
        icon: Sparkles,
    },
    {
        title: "Professional development opportunities",
        description: "From conference passes to internal workshops, your growth has a dedicated budget.",
        icon: GraduationCap,
    },
    {
        title: "Competitive compensation & benefits",
        description: "Transparent pay bands, equity opportunities, and wellness-first benefits.",
        icon: Gift,
    },
    {
        title: "Additional leave & wellness initiatives",
        description: "Recharge with wellness stipends, mental health days, and sabbatical tracks.",
        icon: Heart,
    },
    {
        title: "Inclusive & collaborative team structure",
        description: "Cross-functional squads encourage mentorship and open feedback loops.",
        icon: Users,
    },
]

const testimonials = [
    {
        quote: "ClicksMeta empowers me to take real ownership of ambitious initiatives. I'm backed by mentors, tools, and trust to deliver impactful work.",
        name: "Gagan Gautam",
        role: "Senior Software Engineer",
        avatar: "https://i.pravatar.cc/120?img=67",
    },
]

const cultureHighlights = [
    {
        title: "Leadership Summits",
        body: "Each year we gather in inspiring locations to challenge how we build, lead, and listen. Workshops are designed around empathy, storytelling, and strategic thinking so every leader returns with refreshed playbooks.",
    },
    {
        title: "Learning, Growing, and Leading Together",
        body: "From peer-led labs to global mentorship circles, our culture is anchored in curiosity. We coach each other through experiments, reflect openly, and turn lessons into shared rituals.",
    },
    {
        title: "Inspired by Community",
        body: "We design programs that give back--supporting open-source maintainers, mentoring students, and sponsoring communities that champion inclusive innovation.",
    },
]

export function CareerPage() {
    return (
        <div className="bg-white text-[#111322]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#fdeef6]">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row">
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ea3c7c]">Careers</p>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#151942] md:text-5xl">
                            Build a Career
                            <br />
                            with Purpose at ClicksMeta
                        </h1>
                        <p className="mt-6 text-lg text-[#4b4e6a]">
                            Join a team that values innovation, accountability, and continuous learning. Together, we design bold
                            products and the culture that sustains them.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button asChild className="h-12 rounded-full hover:bg-[#f53c7f] px-8 text-base font-semibold shadow-lg shadow-[#f53c7f]/30 bg-[#151942]">
                                <a href="https://www.linkedin.com/company/clicksmeta/jobs" target="_blank" rel="noreferrer">
                                    Explore Opportunities
                                </a>
                            </Button>
                            <button
                                type="button"
                                className="h-12 rounded-full border border-transparent hover:border-blue-950 bg-white/70 px-8 text-base font-semibold text-[#f53c7f] shadow-md shadow-white  hover:bg-white"
                            >
                                Meet the Team
                            </button>
                        </div>
                    </div>

                    <div className="relative flex flex-1 items-center justify-center">
                        <div className="absolute inset-y-0 left-16 hidden h-72 w-72 rounded-[32px] bg-gradient-to-b from-[#fff4f9] to-white blur-2xl lg:block" />
                        <div className="relative z-10 grid gap-4">
                            <div className="rounded-[32px] border border-[#ffd7e8] bg-white/90 p-6 shadow-[0_35px_70px_rgba(241,115,173,0.25)] backdrop-blur">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fef1f7]">
                                        <MessageSquareQuote className="h-7 w-7 text-[#ff5ea8]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#151942]">4.8 / 5</p>
                                        <p className="text-xs text-[#767891]">Team Sentiment</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg font-semibold text-[#151942]">"The energy here is contagious!"</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-1 flex-col gap-4 rounded-[28px] border border-[#c4d5ff] bg-[#eff4ff] p-5 shadow-[0_25px_45px_rgba(47,87,255,0.15)]">
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4a58b1]">Growth</p>
                                    <p className="text-lg font-semibold text-[#141e47]">Leadership Labs</p>
                                    <p className="text-sm text-[#4f5678]">Monthly forums where builders share practices for experimentation and focus.</p>
                                </div>
                                <div className="flex flex-1 flex-col gap-4 rounded-[28px] border border-[#c9ffee] bg-[#e9fffa] p-5 shadow-[0_25px_45px_rgba(13,199,158,0.2)]">
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#11a88a]">Belonging</p>
                                    <p className="text-lg font-semibold text-[#134240]">Employee Pods</p>
                                    <p className="text-sm text-[#29655d]">Micro-communities that champion inclusivity, wellness, and creativity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ea3c7c]">Why Work at ClicksMeta?</p>
                    <h2 className="mt-3 text-3xl font-semibold text-[#14193c]">A brief but impactful introduction to life at ClicksMeta</h2>
                    <p className="mt-3 text-base text-[#4e567a]">
                        Thoughtfully curated benefits so you can focus on building solutions that truly matter.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={benefit.title}
                                className={`group rounded-3xl border bg-white p-6 shadow-[0_20px_45px_rgba(15,23,36,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff4b8a] hover:bg-[#fff6fb] ${benefit.highlight ? "border-[#ff6fa6]" : "border-[#ebeef7]"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${benefit.highlight ? "bg-[#ffe5f0] text-[#f53c7f]" : "bg-[#eef1ff] text-[#3c47a1] group-hover:bg-[#ffe5f0] group-hover:text-[#f53c7f]"}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className={`text-lg font-semibold transition-colors ${benefit.highlight ? "text-[#f53c7f]" : "text-[#1a1d3d] group-hover:text-[#f53c7f]"}`}>
                                        {benefit.title}
                                    </h3>
                                </div>
                                <p className="mt-4 text-sm text-[#4c5277]">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-[#f1f7ff]">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#3b82f6]">Hear from Our Team</p>
                        <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">Stories about ownership, impact, and support</h2>
                    </div>
                    <div className="mt-10 space-y-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="flex flex-col gap-8 rounded-[40px] bg-white/80 p-10 text-left shadow-[0_30px_60px_rgba(59,130,246,0.15)] md:flex-row md:items-center"
                            >
                                <div className="flex-1">
                                    <p className="text-xl font-medium text-[#0f172a]">{testimonial.quote}</p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="h-16 w-16 rounded-full object-cover" />
                                        <div>
                                            <p className="text-base font-semibold text-[#0f172a]">{testimonial.name}</p>
                                            <p className="text-sm text-[#5c6385]">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center rounded-3xl border border-[#d6e3ff] bg-[#f4f7ff] px-6 py-6 text-center">
                                    <div className="flex items-center gap-1 text-[#10b981]">
                                        {[...Array(4)].map((_, index) => (
                                            <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2.25l2.31 6.58h6.92l-5.62 4.08 2.14 6.6L12 15.81l-5.75 3.7 2.14-6.6-5.62-4.08h6.92L12 2.25z" />
                                            </svg>
                                        ))}
                                        <svg className="h-5 w-5 text-[#94a3b8]" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2.25l2.31 6.58h6.92l-5.62 4.08 2.14 6.6L12 15.81V2.25z"
                                                className="fill-current"
                                            />
                                            <path
                                                d="M12 2.25v13.56l-5.75 3.7 2.14-6.6-5.62-4.08h6.92L12 2.25z"
                                                className="stroke-[#cbd5f5]"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mt-4 text-sm font-semibold text-[#0f172a]">4.5 / 5</p>
                                    <p className="text-xs text-[#64748b]">Culture score</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture */}
            <section className="mx-auto max-w-5xl px-6 py-20">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#111828]">Company Culture</p>
                    <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">Learning, Growing, and Leading Together</h2>
                </div>
                <div className="mt-10 space-y-8 rounded-[36px] bg-[#f7f9ff] p-10 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                    {cultureHighlights.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-white/60 bg-white/80 px-6 py-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#0f172a]">{item.title}</h3>
                            <p className="mt-3 text-base text-[#4b4e6a]">{item.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-5xl rounded-[40px] bg-[#03082c] px-8 py-16 text-center text-white shadow-[0_45px_90px_rgba(3,8,44,0.6)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#9ca5ff]">Your ClicksMeta Journey Starts Here</p>
                    <h2 className="mt-4 text-3xl font-semibold">Be part of something meaningful</h2>
                    <p className="mt-3 text-base text-white/70">
                        Apply today and take the next step in your career with ClicksMeta. We&apos;re excited to meet you.
                    </p>
                    <Button asChild className="mt-8 h-12 rounded-full bg-[#f53c7f] px-8 text-base font-semibold shadow-[0_25px_45px_rgba(245,60,127,0.4)] hover:bg-[#e93072]">
                        <a href="mailto:careers@clicksmeta.com">Apply Now</a>
                    </Button>
                </div>
            </section>
        </div>
    )
}
