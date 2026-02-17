import { Button } from "@/components/ui/button"
import { Globe2, Mail, PhoneCall } from "lucide-react"

const contactMethods = [
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
    value: "7055275529",
    href: "tel:7055275529",
    icon: PhoneCall,
    accent: "from-[#7c4dff] to-[#5c6bc0]",
  },
]

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-[#e3e7ff] bg-white px-4 text-[#0d1b3d] placeholder:text-[#97a0c3] shadow-[0_8px_30px_rgba(15,31,67,0.08)] focus:border-[#5b72f5] focus:outline-none focus:ring-2 focus:ring-[#cad4ff]"
const textareaClasses =
  "mt-2 w-full rounded-3xl border border-[#e3e7ff] bg-white px-4 py-3 text-[#0d1b3d] placeholder:text-[#97a0c3] shadow-[0_8px_30px_rgba(15,31,67,0.08)] focus:border-[#5b72f5] focus:outline-none focus:ring-2 focus:ring-[#cad4ff]"

export function ContactPage() {
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
            {contactMethods.map(({ title, description, value, href, icon: Icon, accent }) => (
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

        <form className="flex-1 space-y-5 rounded-[36px] border border-white bg-white/90 p-6 shadow-[0_25px_80px_rgba(34,54,114,0.18)] backdrop-blur-md sm:p-8">
          <div>
            <p className="text-2xl font-semibold text-[#17214a]">Send us a message</p>
            <p className="mt-2 text-sm text-[#8991b5]">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-[#4d597b]">
              Full Name *
              <input placeholder="Enter your full name" required className={inputClasses} />
            </label>
            <label className="text-sm font-semibold text-[#4d597b]">
              Email Address *
              <input type="email" placeholder="your@email.com" required className={inputClasses} />
            </label>
            <label className="text-sm font-semibold text-[#4d597b]">
              Phone Number (Optional)
              <input type="tel" placeholder="+1 (555) 123-4567" className={inputClasses} />
            </label>
            <label className="text-sm font-semibold text-[#4d597b]">
              Country *
              <div className="relative mt-2">
                <Globe2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#97a0c3]" />
                <select
                  className="h-14 w-full appearance-none rounded-2xl border border-[#e3e7ff] bg-white pl-12 pr-10 text-[#0d1b3d] shadow-[0_8px_30px_rgba(15,31,67,0.08)] focus:border-[#5b72f5] focus:outline-none focus:ring-2 focus:ring-[#cad4ff]"
                  defaultValue="United States"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>India</option>
                </select>
              </div>
            </label>
          </div>

          <label className="text-sm font-semibold text-[#4d597b]">
            Your Message *
            <textarea
              rows={4}
              className={textareaClasses}
              placeholder="Tell us about your project or how we can help you..."
              required
            />
          </label>

          <Button
            type="submit"
            className="mt-2 h-14 w-full rounded-full bg-gradient-to-r from-[#3956ff] via-[#4d5cd8] to-[#7c4dff] text-base font-semibold text-white shadow-[0_18px_40px_rgba(79,96,255,0.35)] transition hover:brightness-110"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
