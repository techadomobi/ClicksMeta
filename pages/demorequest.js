import { useEffect, useState } from "react"

const initialState = {
  name: "",
  email: "",
  mobileNumber: "",
  company: "",
  address: "",
  country: "United States",
  planId: "",
  message: "",
}

export default function DemoRequestPage() {
  const [formData, setFormData] = useState(initialState)
  const [plans, setPlans] = useState([])
  const [loadingPlans, setLoadingPlans] = useState(true)
  const [status, setStatus] = useState({ type: null, message: "" })

  useEffect(() => {
    const controller = new AbortController()
    async function fetchPlans() {
      try {
        setLoadingPlans(true)
        const res = await fetch("/api/demo-request", { signal: controller.signal })
        if (!res.ok) throw new Error("Could not load plans")
        const data = await res.json()
        setPlans(data.plans)
        setFormData((prev) => ({ ...prev, planId: data.plans?.[0]?.id || "" }))
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus({ type: "error", message: error.message || "Failed to load plan data." })
        }
      } finally {
        setLoadingPlans(false)
      }
    }

    fetchPlans()
    return () => controller.abort()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const body = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(body?.error || "Unable to submit request")

      setStatus({ type: "success", message: body?.message || "Thanks! We will reach out shortly." })
      setFormData(initialState)
      setPlans((prev) => prev)
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." })
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-12">
      <section className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <div className="mb-10 text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Request Demo</p>
          <h1 className="text-3xl font-semibold">Let us configure the perfect plan for you</h1>
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            Share your basic details and our solutions engineer will reach out within one business day with a tailored walkthrough.
          </p>
        </div>

        {status.message && (
          <div
            className={`mb-6 rounded-2xl px-4 py-3 text-sm ${
              status.type === "success" ? "bg-emerald-500/15 text-emerald-200" : "bg-red-500/15 text-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm">
              Full Name *
              <input
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Carter"
              />
            </label>
            <label className="text-sm">
              Work Email *
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                placeholder="alex@company.com"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm">
              Mobile Number *
              <input
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                placeholder="+1 (415) 555-0101"
              />
            </label>
            <label className="text-sm">
              Company *
              <input
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                placeholder="Northwind Media"
              />
            </label>
          </div>

          <label className="text-sm">
            Office Address *
            <input
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
              placeholder="221B Baker Street, London"
            />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm">
              Country *
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white focus:border-sky-400 focus:outline-none"
              >
                {["United States", "Canada", "India", "United Kingdom", "Australia"].map((country) => (
                  <option key={country} value={country} className="bg-slate-900 text-white">
                    {country}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              Select Plan *
              <select
                name="planId"
                required
                disabled={loadingPlans}
                value={formData.planId}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-white focus:border-sky-400 focus:outline-none disabled:opacity-60"
              >
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id} className="bg-slate-900 text-white">
                    {plan.name}
                  </option>
                ))}
              </select>
              {loadingPlans && <p className="mt-1 text-xs text-white/40">Loading plans…</p>}
            </label>
          </div>

          <label className="text-sm">
            Message (optional)
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
              placeholder="Share any extra context or goals."
            />
          </label>

          <Button
            type="submit"
            disabled={status.type === "submitting"}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-4 text-base font-semibold shadow-lg shadow-sky-500/30 hover:brightness-110"
          >
            Send Request
          </Button>
        </form>
      </section>
    </main>
  )
}
