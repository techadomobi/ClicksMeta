"use client"

import { useEffect, useRef, useState } from "react"
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
  const [logoError, setLogoError] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-2xl border-b border-[#1fb6ff]/25 shadow-lg shadow-[#1fb6ff]/10 py-2"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
         <Link to="/" className="flex items-center gap-2.5">
          {logoError ? (
            <span className="text-xl font-bold tracking-tight text-[#0f1b3d]">ClicksMeta</span>
          ) : (
            <img
              src={logo}
              alt="Clicksmeta Logo"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
              onError={() => setLogoError(true)}
            />
          )}
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
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-[#0f1b3d]/80 transition-colors hover:bg-[#e6f0ff] hover:text-[#0f1b3d]"
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-[#0f1b3d]/80 transition-colors hover:bg-[#e6f0ff] hover:text-[#0f1b3d]"
                  >
                    {item.label}
                  </Link>
                )}

                {openDropdown === item.label && isMega && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="grid min-w-[960px] max-w-[960px] grid-cols-[1.35fr_1.35fr_0.9fr] gap-8 rounded-[42px] border border-[#f0e9da] bg-white px-10 py-8 text-[#0f1a3d] shadow-[0_28px_70px_rgba(5,10,29,0.35)]">
                      {[0, 1].map((col) => (
                        <div key={col}>
                          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8d91b0]">
                            {item.sections[col].title}
                          </p>
                          <div className="space-y-3">
                            {item.sections[col].items.map(({ label, icon: Icon, href }) => (
                              <Link
                                key={label}
                                to={href}
                                onClick={() => setOpenDropdown(null)}
                                className="flex items-center gap-4 rounded-[26px] border border-transparent bg-[#f5f6ff] px-4 py-3 text-sm font-semibold text-[#152046] hover:border-[#ebedff]"
                              >
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-inner shadow-white/70">
                                  <Icon className="h-5 w-5 text-[#0f1a3d]" />
                                </span>
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="rounded-[36px] bg-gradient-to-b from-[#fefeff] via-[#f5f7ff] to-[#eef3ff] p-5">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8d91b0]">Best in Class</p>
                        <div className="space-y-4">
                          {item.spotlight.map(({ label, icon: Icon, href }) => (
                            <Link
                              key={label}
                              to={href}
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-center justify-between rounded-[30px] bg-white px-4 py-4 text-sm font-semibold text-[#101735] shadow-[0_20px_50px_rgba(16,25,66,0.15)]"
                            >
                              <span className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dfebff] text-[#0f2f88]">
                                  <Icon className="h-5 w-5" />
                                </span>
                                {label}
                              </span>
                              <ArrowRight className="h-4.5 w-4.5 text-[#6b76a9]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openDropdown === item.label && isList && (
                  <div className="absolute left-0 top-full pt-2" style={{ transformOrigin: "top left" }}>
                    <div className="min-w-[220px] rounded-2xl border border-white/10 bg-[#0f1f3d]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                      {item.items.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-xl px-4 py-2.5 text-sm text-white/60 hover:bg-white/5 hover:text-white"
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
            className="rounded-full border-[#1fb6ff]/30 bg-[#f0f7ff] px-6 text-sm font-medium text-[#0f1b3d]/80 hover:bg-[#e6f0ff] hover:text-[#0f1b3d]"
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
          className="rounded-lg p-2 text-[#0f1b3d] transition-colors hover:bg-[#e6f0ff] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
      <div className="absolute left-0 right-0 top-full z-50 lg:hidden">
      <div className="max-h-[calc(100vh-66px)] min-h-[calc(100vh-66px)] overflow-y-auto border-t border-[#1fb6ff]/20 bg-[#f8fbff] px-4 pb-8 pt-3 backdrop-blur-2xl sm:px-6">
          {navItems.map((item) => {
            const hasDropdown = item.type === "mega" || item.type === "list"
            return (
              <div key={item.label} className="border-b border-[#1fb6ff]/20 py-4">
                {hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-[15px] font-semibold leading-tight tracking-[-0.01em] text-[#0f1b3d]/90"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-4 space-y-4 rounded-2xl bg-white/70 px-3 py-3 shadow-sm ring-1 ring-[#1fb6ff]/15">
                        {item.type === "mega" ? (
                          <>
                            {item.sections.map((section) => (
                              <div key={section.title}>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f1b3d]/55">{section.title}</p>
                                <div className="mt-2 space-y-1.5">
                                  {section.items.map(({ label, href }) => (
                                    <Link
                                      key={label}
                                      to={href}
                                      onClick={closeMobile}
                                      className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[#0f1b3d]/82 transition-colors hover:bg-[#e8f5ff] hover:text-[#0f1b3d]"
                                    >
                                      {label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f1b3d]/55">Best in Class</p>
                              <div className="mt-2 space-y-1.5">
                                {item.spotlight.map(({ label, href }) => (
                                  <Link
                                    key={label}
                                    to={href}
                                    onClick={closeMobile}
                                    className="block rounded-xl bg-[#f1f8ff] px-3 py-2 text-[14px] font-medium text-[#0f1b3d]/82 transition-colors hover:bg-[#def0ff] hover:text-[#0f1b3d]"
                                  >
                                    {label}
                                  </Link>
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
                              className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[#0f1b3d]/82 transition-colors hover:bg-[#e8f5ff] hover:text-[#0f1b3d]"
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
                    className="block text-[15px] font-semibold leading-tight tracking-[-0.01em] text-[#0f1b3d]/90"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}
          <div className="sticky bottom-0 mt-5 flex flex-col gap-3 border-t border-[#1fb6ff]/20 bg-[#f8fbff] pt-4">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[#1fb6ff]/35 bg-white text-base font-medium text-[#0f1b3d] hover:bg-[#e6f0ff]"
              onClick={closeMobile}
            >
              <Link to="/demorequest">Request Demo</Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-full bg-[#1fb6ff] text-base font-semibold text-[#031124] shadow-lg shadow-[#1fb6ff]/30 hover:bg-[#17a9ef]"
              onClick={closeMobile}
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
      )}
    </nav>
  )
}
