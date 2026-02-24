import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import logo from "../assets/clicksmeta-logo.png"
import { footerNav } from "@/data/footerContent"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/clicksmeta", icon: Linkedin },
  { name: "X (Twitter)", href: "https://x.com/clicks_meta", icon: Twitter },
  { name: "Facebook", href: "https://www.facebook.com/getclicksmeta/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/clicksmeta", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@ClicksMeta", icon: Youtube },
]

const contactItems = [
  { icon: Mail, label: "support@clicksmeta.com" },
  { icon: Phone, label: "+1 (555) 000-0000" },
  { icon: MapPin, label: "New York • Dubai • Bengaluru" },
]

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-[#e4e8ff] bg-white text-[#0f172a]">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eef2ff] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="relative -mt-24 mb-16 rounded-[40px] border border-[#d3dbff] bg-gradient-to-br from-[#fdf3ff] via-[#f1f7ff] to-[#ecfdf5] p-8 shadow-[0_40px_120px_rgba(8,18,68,0.12)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="section-tag bg-white/70 text-xs text-[#6366f1]">Let&apos;s collaborate</p>
              <h3 className="mt-4 text-3xl font-semibold text-[#050b1d]">Plan your OffersMeta-grade experience</h3>
              <p className="mt-3 text-base text-[#4b5877]">
                Share your targets, and we&apos;ll map a ClicksMeta workspace that mirrors OffersMeta&apos;s polished buying journey from hero to conversion.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild className="h-12 flex-1 rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ec4899] text-base font-semibold shadow-[0_25px_60px_rgba(79,70,229,0.25)]">
                <Link to="/demorequest">Book a strategy call</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 flex-1 rounded-2xl border-[#b5c2ff] text-base font-semibold text-[#050b1d]">
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-[#e4e8ff] pb-10 sm:grid-cols-[1.1fr_1.2fr]">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="ClicksMeta" className="h-10 w-auto" />
              <span className="text-lg font-semibold text-[#050b1d]">ClicksMeta</span>
            </Link>
            <p className="text-sm text-[#4b5877]">
              Intelligent partner marketing OS for brands, agencies, and networks. We mirror the clarity, speed, and craft you admire on OffersMeta across every page of your own customer journey.
            </p>
            <div className="space-y-2">
              {contactItems.map(({ icon: Icon, label }) => (
                <p key={label} className="flex items-center gap-2 text-sm text-[#4b5877]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef2ff] text-[#4f46e5]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e8ff] text-[#4b5877] transition hover:border-[#c7cff8] hover:text-[#050b1d]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerNav.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">{column.title}</p>
                <ul className="space-y-2">
                  {column.links.map((link) => {
                    const linkKey = link.slug || link.href || link.label
                    const destination = link.href || (link.slug ? `/${link.slug}` : "#")
                    return (
                      <li key={linkKey}>
                        <Link to={destination} className="text-sm font-semibold text-[#050b1d] transition hover:text-[#4f46e5]">
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-[#4b5877] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ClicksMeta. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="transition hover:text-[#4f46e5]">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="transition hover:text-[#4f46e5]">
              Terms
            </Link>
            <Link to="/security-compliance" className="transition hover:text-[#4f46e5]">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
