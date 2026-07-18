"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Zap,
  MousePointerClick,
  Radio,
} from "lucide-react"

const stats = [
  { icon: TrendingUp, label: "Referrals", value: 1250, suffix: "", change: "+12%" },
  { icon: Target, label: "Campaigns", value: 340, suffix: "", change: "+8%" },
  { icon: DollarSign, label: "Revenue", value: 312.5, suffix: "k", prefix: "$", change: "+23%" },
  { icon: Users, label: "Leads", value: 399, suffix: "", change: "+15%" },
]

const rotatingWords = [
  { label: "Affiliate", gradient: "from-[#0ea5e9] via-[#2563eb] to-[#4f46e5]" },
  { label: "Performance", gradient: "from-[#ec4899] via-[#f97316] to-[#eab308]" },
  { label: "Marketing", gradient: "from-[#10b981] via-[#14b8a6] to-[#06b6d4]" },
]

const tickerItems = [
  { icon: MousePointerClick, text: "12,480 clicks tracked in the last hour" },
  { icon: Target, text: "340 campaigns live right now" },
  { icon: DollarSign, text: "$18,204 revenue attributed today" },
  { icon: TrendingUp, text: "49.9% average conversion rate" },
]

const trustMetrics = [
  { value: "10,000+", label: "Marketers" },
  { value: "50M+", label: "Clicks tracked / mo" },
  { value: "99.9%", label: "Uptime" },
]

/** Lightweight count-up: animates once the element scrolls into view. */
function useCountUp(target, { duration = 1400 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(target * eased)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}

function StatValue({ stat }) {
  const [value, ref] = useCountUp(stat.value)
  const display = Number.isInteger(stat.value) ? Math.round(value).toLocaleString() : value.toFixed(1)

  return (
    <p ref={ref} className="text-xl font-bold text-[#0f1b3d] font-mono tabular-nums">
      {stat.prefix}
      {display}
      {stat.suffix}
    </p>
  )
}

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => {
      cancelAnimationFrame(frame)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#f0f7ff] to-[#eef4ff]">
      <style>{`
        @keyframes cm-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563eb]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#7c3aed]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#eef5ff_78%)]" />
      </div>

      {/* Live activity ticker — the product's own signature: real-time attribution, made visible */}
      <div className="relative z-10 border-b border-[#1fb6ff]/15 bg-[#0a1330]">
        <div className="flex overflow-hidden py-2.5">
          <div className="flex shrink-0 items-center gap-10 pr-10" style={{ animation: "cm-marquee 26s linear infinite" }}>
            {[...tickerItems, ...tickerItems].map(({ icon: Icon, text }, i) => (
              <span key={i} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-white/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1fb6ff] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1fb6ff]" />
                </span>
                <Icon className="h-3.5 w-3.5 text-[#1fb6ff]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pt-10 pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 xl:pt-16 xl:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#e6f0ff] border border-[#1fb6ff]/20 mb-8 backdrop-blur-sm">
              <span className="text-sm text-[#0f1b3d]/65 font-medium">Performance Marketing Platform</span>
              <Zap className="w-3.5 h-3.5 text-[#1fb6ff]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0f1b3d] leading-[1.1] tracking-tight space-y-2">
              <span className="text-balance block">
                Track. Optimize.
                <br className="hidden sm:block" />
                Scale Your
              </span>
              <span className="block">
                <span
                  key={currentWord}
                  className={`bg-gradient-to-r ${rotatingWords[currentWord].gradient} bg-clip-text text-transparent animate-fade-in-up inline-block min-h-[1em]`}
                >
                  {rotatingWords[currentWord].label}
                </span>
              </span>
              <span className="block">Campaigns.</span>
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-[#0f1b3d]/72 leading-relaxed max-w-lg">
              Powerful analytics & tracking platform for advertisers, affiliates, and agencies. One platform to
              manage, track, and optimize all your campaigns.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#1fb6ff] to-[#6366f1] hover:from-[#17a9ef] hover:to-[#5b57f0] text-white border-0 rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-[#1fb6ff]/25 hover:shadow-[#1fb6ff]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/signup" className="flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#1fb6ff]/20 text-[#0f1b3d] hover:bg-[#1fb6ff]/10 rounded-full px-8 py-6 text-base font-semibold bg-transparent backdrop-blur-sm hover:border-[#1fb6ff]/30 transition-all duration-300"
              >
                <a href="https://www.clicksmeta.com/demorequest" className="flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2 fill-[#0f1b3d]" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust metrics — concrete numbers instead of decorative star rating */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5">
              {trustMetrics.map((metric, i) => (
                <div key={metric.label} className={`flex items-center gap-8 ${i > 0 ? "border-l border-[#0f1b3d]/10 pl-8" : ""}`}>
                  <div>
                    <p className="text-2xl font-bold text-[#0f1b3d] font-mono tabular-nums">{metric.value}</p>
                    <p className="text-xs text-[#0f1b3d]/45 font-medium mt-0.5">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className={`transition-all duration-700 ease-out delay-150 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 rounded-3xl blur-2xl opacity-50" />

              <div className="hero-dashboard relative glass rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-[#0f1b3d]/30 font-mono">dashboard.clicksmeta.com</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="hero-stat-block bg-[#e6f0ff] rounded-xl p-4 border border-[#1fb6ff]/35 hover:bg-[#d9e6ff] hover:border-[#1fb6ff]/50 transition-all duration-300 group cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1fb6ff]/20 to-[#6366f1]/20 flex items-center justify-center group-hover:from-[#1fb6ff]/30 group-hover:to-[#6366f1]/30 transition-colors">
                          <stat.icon className="w-3.5 h-3.5 text-[#1fb6ff]" />
                        </div>
                        <span className="text-[11px] text-[#0f1b3d]/40 font-medium">{stat.label}</span>
                      </div>
                      <StatValue stat={stat} />
                      <span className="text-xs text-emerald-600 font-medium">{stat.change}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-stat-block mt-4 bg-[#e6f0ff] rounded-xl p-4 border border-[#1fb6ff]/35">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#0f1b3d]/40 font-medium">Revenue Trend</span>
                    <span className="text-xs text-emerald-600 font-medium">+23.5%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#1fb6ff] to-[#6366f1] transition-all duration-300 hover:brightness-125 cursor-default"
                        style={{
                          height: mounted ? `${h}%` : "0%",
                          transition: `height 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="hero-stat-block mt-4 flex items-center justify-between bg-[#e6f0ff] rounded-xl p-4 border border-[#1fb6ff]/35">
                  <div>
                    <p className="text-[11px] text-[#0f1b3d]/40 font-medium">Conversion Rate</p>
                    <p className="text-2xl font-bold text-[#0f1b3d] mt-0.5 font-mono tabular-nums">49.9%</p>
                  </div>
                  <div className="relative w-14 h-14">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(15,27,61,0.05)" strokeWidth="4" />
                      <circle
                        cx="28"
                        cy="28"
                        r="22"
                        fill="none"
                        stroke="url(#progressGrad)"
                        strokeWidth="4"
                        strokeDasharray="138"
                        strokeDashoffset="69"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1fb6ff" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#1fb6ff]">A+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single live-sync badge — replaces two redundant floating cards that repeated grid data */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3.5 py-2.5 shadow-lg shadow-[#1fb6ff]/20">
                <div className="flex items-center gap-2">
                  <Radio className="h-3.5 w-3.5 text-[#1fb6ff] animate-pulse" />
                  <div>
                    <p className="text-[10px] text-[#0f1b3d]/40 font-medium leading-none">Live sync</p>
                    <p className="text-xs font-bold text-[#0f1b3d] mt-0.5">Updated 2s ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}