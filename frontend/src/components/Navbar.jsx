import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  BarChart3,
  Receipt,
  Megaphone,
  Bot,
  ShieldCheck,
  ShoppingBag,
  Banknote,
  CreditCard,
  Plane,
  Radio,
  Cloud,
  Target,
  Share2,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../assets/clicksmeta-logo.png"

const platformSections = [
  {
    title: "Essential Suite",
    items: [
      { label: "Marketing Analytics", icon: BarChart3, href: "/marketing-analytics" },
      { label: "Automated Invoicing", icon: Receipt, href: "/automated-payout" },
      { label: "Campaign Management", icon: Megaphone, href: "/campaign-management" },
      { label: "Marketing Automation", icon: Bot, href: "/easy-automation" },
      { label: "Fraud Prevention", icon: ShieldCheck, href: "/fraud-detection" },
    ],
  },
  {
    title: "Built for You",
    items: [
      { label: "E-Commerce", icon: ShoppingBag, href: "/ecommerce" },
      { label: "Banking", icon: Banknote, href: "/banking" },
      { label: "Fintech", icon: CreditCard, href: "/fintech" },
      { label: "Travel", icon: Plane, href: "/travel" },
      { label: "Media & Networks", icon: Radio, href: "/media-network" },
      { label: "SaaS", icon: Cloud, href: "/saas" },
    ],
  },
]

const platformSpotlight = [
  { label: "Performance Marketing Software", icon: Target, href: "/campaign-management" },
  { label: "Affiliate Tracking Software", icon: Share2, href: "/automated-payout" },
  { label: "Partner Ecosystem", icon: Users, href: "/case-studies" },
]

const navItems = [
  {
    label: "Platform",
    type: "mega",
    sections: platformSections,
    spotlight: platformSpotlight,
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    type: "list",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Help Center", href: "/help-center" },
    ],
  },
  {
    label: "Why ClicksMeta",
    type: "list",
    items: [
      { label: "Customer Success", href: "/customer-success" },
      { label: "Security & Compliance", href: "/security-compliance" },
      { label: "About Us", href: "/about-us" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pb-4 pt-4 sm:px-6">
      <div
        className={`pointer-events-auto flex w-full max-w-6xl items-center gap-4 rounded-[30px] border border-[#e4e8ff] transition-all duration-500 ${scrolled ? "bg-white/95 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl" : "bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-lg"}`}
      >
        <div className="flex flex-1 items-center gap-3 px-4 py-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Clicksmeta Logo" className="h-9 w-auto" />
            <span className="hidden text-base font-semibold tracking-tight text-[#050b1d] sm:inline">ClicksMeta</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isMega = item.type === "mega"
              const isList = item.type === "list"
              const hasDropdown = isMega || isList

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-[#4b5877] transition hover:bg-[#eef2ff] hover:text-[#050b1d]"
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="rounded-full px-4 py-2 text-sm font-semibold text-[#4b5877] transition hover:bg-[#eef2ff] hover:text-[#050b1d]"
                    >
                      {item.label}
                    </Link>
                  )}

                  {openDropdown === item.label && isMega && (
                    <div className="absolute left-1/2 top-[calc(100%+0.5rem)] -translate-x-1/2">
                      <div className="grid min-w-[940px] grid-cols-[1.25fr_1.25fr_0.9fr] gap-6 rounded-[36px] border border-[#e4e8ff] bg-white p-8 shadow-[0_35px_120px_rgba(8,18,68,0.12)]">
                        {[0, 1].map((index) => (
                          <div key={index}>
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{item.sections[index].title}</p>
                            <div className="mt-4 space-y-3">
                              {item.sections[index].items.map(({ label, icon: Icon, href }) => (
                                <Link
                                  key={label}
                                  to={href}
                                  className="flex items-center gap-3 rounded-[26px] border border-transparent bg-[#f6f8ff] px-4 py-3 text-sm font-semibold text-[#0f172a] transition hover:-translate-y-0.5 hover:border-[#dfe5ff]"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
                                    <Icon className="h-5 w-5 text-[#3b82f6]" />
                                  </span>
                                  {label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="rounded-[30px] bg-gradient-to-br from-[#fef9f5] via-[#f5f7ff] to-[#f3fbff] p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Spotlight</p>
                          <div className="mt-4 space-y-4">
                            {item.spotlight.map(({ label, icon: Icon, href }) => (
                              <Link
                                key={label}
                                to={href}
                                className="flex items-center justify-between rounded-[28px] bg-white px-4 py-4 text-sm font-semibold text-[#0f172a] shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#6366f1]">
                                    <Icon className="h-5 w-5" />
                                  </span>
                                  {label}
                                </span>
                                <ArrowRight className="h-4 w-4 text-[#94a3b8]" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {openDropdown === item.label && isList && (
                    <div className="absolute left-1/2 top-[calc(100%+0.5rem)] -translate-x-1/2">
                      <div className="rounded-3xl border border-[#e4e7ec] bg-white p-4 shadow-[0_25px_100px_rgba(8,18,68,0.12)]">
                        <div className="grid gap-2">
                          {item.items.map((link) => (
                            <Link
                              key={link.label}
                              to={link.href}
                              className="rounded-2xl px-4 py-2 text-sm font-semibold text-[#0f172a] transition hover:bg-[#eef2ff]"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 pr-4 lg:flex">
            <Link to="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-[#4b5877] hover:bg-[#eef2ff] hover:text-[#050b1d]">
              Log in
            </Link>
            <Button asChild className="rounded-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ec4899] px-5 text-sm font-semibold shadow-lg shadow-[#4f46e5]/25">
              <Link to="/demorequest">Book a demo</Link>
            </Button>
          </div>

          <button
            type="button"
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e4e7ec] text-[#050b1d] lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="pointer-events-auto absolute inset-x-4 top-[calc(100%+0.5rem)] rounded-[26px] border border-[#e4e7ec] bg-white p-5 shadow-[0_25px_90px_rgba(8,18,68,0.12)] lg:hidden">
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-2xl bg-[#f6f8ff] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#050b1d]">{item.label}</p>
                  {(item.type === "mega" || item.type === "list") && (
                    <button
                      type="button"
                      className="rounded-full p-1 text-[#4b5877]"
                      onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                    >
                      <ChevronDown className={`h-4 w-4 transition ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.type === "mega" && openDropdown === item.label && (
                  <div className="mt-3 space-y-4 text-sm font-medium text-[#4b5877]">
                    {item.sections.flatMap((section) =>
                      section.items.map(({ label, href }) => (
                        <Link key={label} to={href} className="block rounded-xl bg-white px-3 py-2" onClick={closeMobile}>
                          {label}
                        </Link>
                      )),
                    )}
                  </div>
                )}
                {item.type === "list" && openDropdown === item.label && (
                  <div className="mt-3 space-y-2 text-sm font-medium text-[#4b5877]">
                    {item.items.map(({ label, href }) => (
                      <Link key={label} to={href} className="block rounded-xl bg-white px-3 py-2" onClick={closeMobile}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
                {!item.type && (
                  <Link to={item.href} className="mt-3 inline-flex text-sm font-semibold text-[#4f46e5]" onClick={closeMobile}>
                    Visit
                  </Link>
                )}
              </div>
            ))}
            <div className="grid gap-3 border-t border-[#e4e7ec] pt-4">
              <Button asChild variant="outline" className="rounded-2xl border-[#d7dbec] text-[#050b1d]" onClick={closeMobile}>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild className="rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#ec4899] text-white" onClick={closeMobile}>
                <Link to="/demorequest">Book a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
