"use client"

import { useState, useEffect } from "react"
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
      { label: "Marketing Analytics", icon: BarChart3 },
      { label: "Automated Invoicing", icon: Receipt },
      { label: "Campaign Management", icon: Megaphone },
      { label: "Marketing Automation", icon: Bot },
      { label: "Fraud Prevention", icon: ShieldCheck },
    ],
  },
  {
    title: "Built for You",
    items: [
      { label: "E-Commerce", icon: ShoppingBag },
      { label: "Banking", icon: Banknote },
      { label: "Fintech", icon: CreditCard },
      { label: "Travel", icon: Plane },
      { label: "Media & Networks", icon: Radio },
      { label: "SaaS", icon: Cloud },
    ],
  },
]

const platformSpotlight = [
  { label: "Performance Marketing Software", icon: Target },
  { label: "Affiliate Tracking Software", icon: Share2 },
  { label: "Partner Ecosystem", icon: Users },
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
      { label: "Blog", href: "/#features" },
      { label: "Case Studies", href: "/#testimonials" },
      { label: "Documentation", href: "/contact" },
    ],
  },
  {
    label: "Why ClicksMeta",
    type: "list",
    items: [
      { label: "Customer Success", href: "/#testimonials" },
      { label: "Security & Compliance", href: "/#features" },
      { label: "About Us", href: "/contact" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0a1628]/95 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/10 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold text-white tracking-tight">
            <img src={logo} alt="Clicksmeta Logo" className="h-8 w-auto brightness-0 invert" />
          </span>
        </Link>

        <div className="relative hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const isMega = item.type === "mega"
            const isList = item.type === "list"
            const hasDropdown = isMega || isList

            return (
              <div
                key={item.label}
                className={isMega ? "" : "relative"}
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}

                {openDropdown === item.label && isMega && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3 animate-scale-in"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="grid min-w-[960px] max-w-[960px] grid-cols-[1.35fr_1.35fr_0.9fr] gap-8 rounded-[42px] border border-[#f0e9da] bg-white px-10 py-8 text-[#0f1a3d] shadow-[0_28px_70px_rgba(5,10,29,0.35)]">
                      {[0, 1].map((col) => (
                        <div key={col}>
                          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8d91b0]">
                            {item.sections[col].title}
                          </p>
                          <div className="space-y-3">
                            {item.sections[col].items.map(({ label, icon: Icon }) => (
                              <a
                                key={label}
                                href="#"
                                className="flex items-center gap-4 rounded-[26px] border border-transparent bg-[#f5f6ff] px-4 py-3 text-sm font-semibold text-[#152046] transition hover:-translate-y-0.5 hover:border-[#ebedff]"
                              >
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-inner shadow-white/70">
                                  <Icon className="h-5 w-5 text-[#0f1a3d]" />
                                </span>
                                {label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="rounded-[36px] bg-gradient-to-b from-[#fefeff] via-[#f5f7ff] to-[#eef3ff] p-5">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8d91b0]">Best in Class</p>
                        <div className="space-y-4">
                          {item.spotlight.map(({ label, icon: Icon }) => (
                            <a
                              key={label}
                              href="#"
                              className="flex items-center justify-between rounded-[30px] bg-white px-4 py-4 text-sm font-semibold text-[#101735] shadow-[0_20px_50px_rgba(16,25,66,0.15)] transition hover:-translate-y-0.5"
                            >
                              <span className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dfebff] text-[#0f2f88]">
                                  <Icon className="h-5 w-5" />
                                </span>
                                {label}
                              </span>
                              <ArrowRight className="h-4.5 w-4.5 text-[#6b76a9]" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openDropdown === item.label && isList && (
                  <div className="absolute left-0 top-full pt-3 animate-scale-in" style={{ transformOrigin: "top left" }}>
                    <div className="min-w-[220px] rounded-2xl border border-white/10 bg-[#0f1f3d]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                      {item.items.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 px-6 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            <Link to="/demorequest">Request Demo</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-[#1fb6ff] px-6 text-sm font-semibold text-[#031124] shadow-lg shadow-[#1fb6ff]/30 transition hover:bg-[#17a9ef]"
          >
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-white/5 bg-[#0a1628]/98 px-4 pb-6 pt-2 backdrop-blur-2xl sm:px-6">
          {navItems.map((item) => {
            const hasDropdown = item.type === "mega" || item.type === "list"
            return (
              <div key={item.label} className="border-b border-white/5 py-3">
                {hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-sm font-medium text-white/80"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-3 space-y-4 pl-3">
                        {item.type === "mega" ? (
                          <>
                            {item.sections.map((section) => (
                              <div key={section.title}>
                                <p className="text-xs font-semibold uppercase tracking-wide text-white/40">{section.title}</p>
                                <div className="mt-2 space-y-1.5">
                                  {section.items.map(({ label }) => (
                                    <p key={label} className="text-sm text-white/60">
                                      {label}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Best in Class</p>
                              <div className="mt-2 space-y-1.5">
                                {item.spotlight.map(({ label }) => (
                                  <p key={label} className="text-sm text-white/60">
                                    {label}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          item.items.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={closeMobile}
                              className="block text-sm text-white/60"
                            >
                              {child.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-white/80"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10"
              onClick={closeMobile}
            >
              <Link to="/demorequest">Request Demo</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-[#1fb6ff] text-[#031124] hover:bg-[#17a9ef]"
              onClick={closeMobile}
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
