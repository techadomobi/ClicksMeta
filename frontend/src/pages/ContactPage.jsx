import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, PhoneCall } from "lucide-react"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ""

const defaultContactMethods = [
  {
    title: "Email Us",
    description: "Get in touch via email",
    value: "support@clicksmeta.com",
    href: "mailto:support@clicksmeta.com",
    icon: Mail,
    accent: "from-[#5c6bc0] to-[#7c4dff]",
  },
  {
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
    icon: PhoneCall,
    accent: "from-[#7c4dff] to-[#5c6bc0]",
  },
]

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-[#e3e7ff] bg-white px-4 text-[#0d1b3d] placeholder:text-[#97a0c3] shadow-[0_8px_30px_rgba(15,31,67,0.08)] focus:border-[#5b72f5] focus:outline-none focus:ring-2 focus:ring-[#cad4ff]"
const textareaClasses =
  "mt-2 w-full rounded-3xl border border-[#e3e7ff] bg-white px-4 py-3 text-[#0d1b3d] placeholder:text-[#97a0c3] shadow-[0_8px_30px_rgba(15,31,67,0.08)] focus:border-[#5b72f5] focus:outline-none focus:ring-2 focus:ring-[#cad4ff]"

export function ContactPage() {
  const [contactInfo, setContactInfo] = useState(null)
  const [infoError, setInfoError] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ type: null, message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadContactInfo() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, { signal: controller.signal })
        if (!response.ok) throw new Error("Failed to load contact details.")
        const data = await response.json()
        setContactInfo(data)
      } catch (error) {
        if (error.name !== "AbortError") {
          setInfoError(error.message || "Unable to fetch contact information right now.")
        }
      }
    }

    loadContactInfo()

    return () => controller.abort()
  }, [])

  const resolvedContactMethods = contactInfo
    ? [
        {
          title: "Email Us",
          description: "Get in touch via email",
          value: contactInfo.supportEmail,
          href: `mailto:${contactInfo.supportEmail}`,
          icon: Mail,
          accent: "from-[#5c6bc0] to-[#7c4dff]",
        },
        {
          title: "Call Us",
          description: "Speak directly with our team",
          value: contactInfo.phone,
          href: `tel:${contactInfo.phone?.replace(/[^+\\d]/g, "")}`,
          icon: PhoneCall,
          accent: "from-[#7c4dff] to-[#5c6bc0]",
        },
      ]
    : defaultContactMethods

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: null, message: "" })
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const body = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(body?.error || "Unable to send your message right now.")

      setStatus({ type: "success", message: body?.message || "Thanks! We will reply shortly." })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#fdfdff] via-[#eef3ff] to-[#d9e6ff] py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 text-[#0d1b3d] sm:px-6 lg:flex-row">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe4ff] bg-white px-5 py-2 text-sm font-semibold text-[#4d5cd8] shadow-[0_10px_30px_rgba(77,92,216,0.15)]">
            Contact Us
          </span>
          <div>
            <p className="text-4xl font-bold leading-tight text-[#142152] sm:text-5xl">
              Let&apos;s Create Something Amazing Together
            </p>
            <p className="mt-4 text-lg text-[#566181]">
              Ready to transform your ideas into reality? We&apos;re here to help you every step of the way.
              <a href="mailto:support@clicksmeta.com" className="ml-1 text-[#4d5cd8] underline decoration-dotted">
                Let&apos;s start the conversation.
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {resolvedContactMethods.map(({ title, description, value, href, icon: Icon, accent }) => (
              <a
                key={title}
                href={href}
                className="flex items-center gap-4 rounded-[28px] border border-white bg-white p-6 shadow-[0_25px_60px_rgba(26,39,89,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(26,39,89,0.16)]"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-[#5c6bc0]/30`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#172658]">{title}</p>
                  <p className="text-sm text-[#7d88ad]">{description}</p>
                  <p className="mt-1 text-base font-semibold text-[#3267ff]">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-5 rounded-[36px] border border-white bg-white/90 p-6 shadow-[0_25px_80px_rgba(34,54,114,0.18)] backdrop-blur-md sm:p-8"
        >
          <div>
            <p className="text-2xl font-semibold text-[#17214a]">Send us a message</p>
            <p className="mt-2 text-sm text-[#8991b5]">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          </div>
          {infoError && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{infoError}</p>}
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-[#4d597b]">
              Full Name *
              <input
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </label>
            <label className="text-sm font-semibold text-[#4d597b]">
              Email Address *
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </label>
          </div>

          <label className="text-sm font-semibold text-[#4d597b]">
            Your Message *
            <textarea
              rows={5}
              name="message"
              className={textareaClasses}
              placeholder={contactInfo?.sampleMessage || "Tell us about your project or how we can help you..."}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          {status.message && (
            <p
              className={`rounded-3xl px-4 py-3 text-sm ${
                status.type === "success" ? "bg-[#e5fbef] text-[#1a7f43]" : "bg-[#ffe6e6] text-[#b42318]"
              }`}
            >
              {status.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-14 w-full rounded-full bg-gradient-to-r from-[#3956ff] via-[#4d5cd8] to-[#7c4dff] text-base font-semibold text-white shadow-[0_18px_40px_rgba(79,96,255,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
