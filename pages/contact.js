import { useEffect, useState } from "react"

const initialFormState = { name: "", email: "", message: "" }

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState({ type: null, message: "" })
  const [contactInfo, setContactInfo] = useState(null)
  const [infoError, setInfoError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchContactInfo() {
      try {
        const res = await fetch("/api/contact", { signal: controller.signal })
        if (!res.ok) {
          throw new Error("Could not load contact information.")
        }
        const data = await res.json()
        setContactInfo(data)
      } catch (error) {
        if (error.name !== "AbortError") {
          setInfoError(error.message || "Failed to fetch contact information.")
        }
      }
    }

    fetchContactInfo()

    return () => controller.abort()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: null, message: "" })
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const body = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(body?.error || "Unable to send your message right now.")
      }

      setStatus({ type: "success", message: body?.message || "Thanks for contacting us!" })
      setFormData(initialFormState)
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-16">
      <section className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-slate-300">
          Have a question or need help? Send us a note and we will reply within one business day.
        </p>

        {contactInfo && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm">
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/60">Email</p>
              <p className="text-base font-medium">{contactInfo.supportEmail}</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/60">Hours</p>
              <p className="text-base font-medium">{contactInfo.hours}</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/60">Phone</p>
              <p className="text-base font-medium">{contactInfo.phone}</p>
            </div>
          </div>
        )}

        {infoError && <p className="mt-6 rounded-md bg-red-500/20 px-4 py-2 text-sm text-red-200">{infoError}</p>}

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none"
              placeholder="Jordan Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-400 focus:outline-none"
              placeholder={contactInfo?.sampleMessage || "Tell us how we can help"}
            />
          </div>

          {status.message && (
            <p
              className={`rounded-xl px-4 py-3 text-sm ${
                status.type === "success" ? "bg-emerald-500/20 text-emerald-200" : "bg-red-500/20 text-red-200"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  )
}
