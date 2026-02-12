import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, Users, Zap, Globe2 } from "lucide-react"

const planOptions = [
  {
    id: "starter",
    name: "Starter",
    highlight: "Best for testing",
    desc: "Up to 50K events • core automation",
  },
  {
    id: "growth",
    name: "Growth",
    highlight: "Scaling teams",
    desc: "Multi-team dashboards & fraud rules",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    highlight: "Custom controls",
    desc: "Unlimited events with dedicated support",
  },
]

const reassurance = [
  {
    icon: ShieldCheck,
    title: "Secure platform",
    description: "SOC 2-ready infrastructure and audited data flows.",
  },
  {
    icon: Zap,
    title: "Fast onboarding",
    description: "Go live in as little as 7 days with migration help.",
  },
  {
    icon: Users,
    title: "Global support",
    description: "24×7 WhatsApp & Slack access to customer success.",
  },
]

const initialFormState = {
  name: "",
  email: "",
  mobileNumber: "",
  company: "",
  address: "",
  country: "India",
  plan: planOptions[1].id,
  skypeId: "",
  domain: "",
  password: "",
}

const inputClasses =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#ff6f3c]/60 focus:ring-2 focus:ring-[#ff6f3c]/30 focus:outline-none"

const backendBase =
  (import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "") || ""
const apiEndpoint = `${backendBase}/api/demo-request`

export function DemoRequestPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState({ state: "idle", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetStatus = () => setStatus({ state: "idle", message: "" })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ state: "submitting", message: "Sending your request..." })

    try {
      const selectedPlan = planOptions.find((plan) => plan.id === formData.plan)
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        company: formData.company.trim(),
        address: formData.address.trim(),
        country: formData.country,
        planId: formData.plan,
        planName: selectedPlan?.name,
        skypeId: formData.skypeId.trim(),
        domain: formData.domain.trim(),
        password: formData.password,
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Unable to submit request right now.")
      }

      setStatus({ state: "success", message: "Thanks! Our team will reach out shortly." })
      setFormData(initialFormState)
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong. Please try again in a minute.",
      })
    } finally {
      setTimeout(() => resetStatus(), 8000)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 text-white sm:px-6">
      <div className="mb-10 text-center space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Request Demo
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          One platform to track, optimize & scale your affiliate campaigns
        </h1>
        <p className="text-base text-white/60 md:text-lg">
          Share a few details and we will configure the perfect ClicksMeta experience for you.
        </p>
      </div>

      <div className="grid gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b1630] to-[#050b19] p-6 shadow-2xl shadow-black/30 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50 mb-3">Why teams choose ClicksMeta</p>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Channel-agnostic tracking with fraud intelligence baked in.",
                "Real-time insights with configurable dashboards for every brand or partner.",
                "Modular pricing—pay only for features and volumes you actually use.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8ec5ff]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Pick your plan</p>
            <div className="grid gap-4 md:grid-cols-3">
              {planOptions.map((plan) => (
                <label
                  key={plan.id}
                  className={`rounded-2xl border p-4 transition-all cursor-pointer ${formData.plan === plan.id ? "border-[#ff6f3c] bg-[#ff6f3c]/10" : "border-white/10 bg-white/[0.02] hover:border-white/30"}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={formData.plan === plan.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <p className="text-base font-semibold">{plan.name}</p>
                  <p className="text-xs text-[#ffb995] font-semibold uppercase tracking-wide mt-1">{plan.highlight}</p>
                  <p className="text-sm text-white/60 mt-2">{plan.desc}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {reassurance.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Icon className="h-5 w-5 text-[#8ec5ff]" />
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/50">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20 backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Full name *
              <input
                name="name"
                value={formData.name}
                required
                placeholder="Alex Carter"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
            <label className="text-sm font-medium text-white/70">
              Work email *
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                placeholder="alex@company.com"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
            <label className="text-sm font-medium text-white/70">
              Mobile number *
              <input
                name="mobileNumber"
                value={formData.mobileNumber}
                required
                placeholder="+91 98765 43210"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
            <label className="text-sm font-medium text-white/70">
              Company name *
              <input
                name="company"
                value={formData.company}
                required
                placeholder="Northwind Media"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="text-sm font-medium text-white/70">
            Address *
            <input
              name="address"
              value={formData.address}
              required
              placeholder="221B Baker Street, London"
              className={`${inputClasses} mt-2`}
              onChange={handleChange}
            />
          </label>

          <label className="text-sm font-medium text-white/70">
            Select country *
            <div className="relative mt-2">
              <Globe2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 pl-12 pr-10 text-white focus:border-[#ff6f3c]/60 focus:ring-2 focus:ring-[#ff6f3c]/30"
              >
                {["India", "United States", "United Kingdom", "United Arab Emirates", "Singapore", "Australia"].map((country) => (
                  <option key={country} value={country} className="bg-[#050b19] text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Skype ID
              <input
                name="skypeId"
                value={formData.skypeId}
                placeholder="@growthops"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
            <label className="text-sm font-medium text-white/70">
              Website / Domain
              <input
                name="domain"
                value={formData.domain}
                placeholder="https://clicksmeta.com"
                className={`${inputClasses} mt-2`}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="text-sm font-medium text-white/70">
            Password (for console access)
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              placeholder="••••••••"
              className={`${inputClasses} mt-2`}
              onChange={handleChange}
            />
          </label>

          <Button
            type="submit"
            disabled={status.state === "submitting"}
            className="h-14 w-full rounded-2xl bg-[#ff6f3c] text-base font-semibold text-white shadow-lg shadow-[#ff6f3c]/30 transition hover:bg-[#f65a1e] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status.state === "submitting" ? "Submitting..." : "Request a Live Demo"}
          </Button>

          {status.state === "success" && (
            <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              {status.message}
            </p>
          )}

          {status.state === "error" && (
            <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
