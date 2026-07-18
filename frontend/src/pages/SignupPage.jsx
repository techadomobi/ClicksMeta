import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  MessageCircle,
  Lock,
  ArrowRight,
  Radio,
  Link2,
  TrendingUp,
} from "lucide-react"
import logo from "../assets/clicksmeta-logo.png"

const fieldWrapClasses = "group relative"

const inputBaseClasses =
  "peer h-14 w-full rounded-xl border border-[#0f1b3d]/10 bg-white pl-11 pr-4 text-[15px] text-[#0f1b3d] placeholder:text-transparent transition-all duration-200 focus:outline-none focus:border-[#1fb6ff] focus:ring-4 focus:ring-[#1fb6ff]/15"

const labelClasses =
  "pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-[15px] text-[#0f1b3d]/40 transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:left-3.5 peer-focus:rounded-full peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-[#1fb6ff] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:rounded-full peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-[#0f1b3d]/60"

const iconClasses =
  "pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#0f1b3d]/30 transition-colors duration-200 peer-focus:text-[#1fb6ff]"

function Field({ icon: Icon, label, type = "text", placeholder, optional }) {
  return (
    <label className={fieldWrapClasses}>
      <Icon className={iconClasses} />
      <input type={type} placeholder={placeholder || label} className={inputBaseClasses} />
      <span className={labelClasses}>
        {label}
        {optional && <span className="text-[#0f1b3d]/30"> (optional)</span>}
      </span>
    </label>
  )
}

function useLiveCounter(start, step, intervalMs) {
  const [value, setValue] = useState(start)
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + step)
    }, intervalMs)
    return () => clearInterval(id)
  }, [step, intervalMs])
  return value
}

function BrandPanel() {
  const clicks = useLiveCounter(184302, 3, 1400)
  const conversions = useLiveCounter(6118, 1, 2600)

  return (
    <aside className="relative hidden overflow-hidden bg-[#070c1f] lg:flex lg:w-[46%] lg:flex-col lg:justify-between">
      {/* ambient network lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 600 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-20 120 L180 220 L420 90 L640 260" stroke="#1fb6ff" strokeWidth="1.5" />
        <path d="M-40 480 L220 400 L360 560 L620 480" stroke="#1fb6ff" strokeWidth="1.5" />
        <path d="M-20 760 L200 700 L380 820 L640 700" stroke="#06b6d4" strokeWidth="1.5" />
        {[
          [180, 220],
          [420, 90],
          [220, 400],
          [360, 560],
          [200, 700],
          [380, 820],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#1fb6ff" />
        ))}
      </svg>

      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #1fb6ff, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
      />

      <div className="relative z-10 px-10 pt-10 xl:px-14 xl:pt-14">
        <img src={logo} alt="ClicksMeta" className="h-8 w-auto brightness-0 invert" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-10 xl:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1fb6ff]">Performance tracking, live</p>
        <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[1.15] tracking-tight text-white xl:text-[2.75rem]">
          Every click, tracked.
          <br />
          Every conversion, counted.
        </h2>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/50">
          Join the marketers running campaigns with real-time attribution, smart offer routing, and reporting that
          never lags behind reality.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/40">
              <Radio className="h-3.5 w-3.5 animate-pulse text-[#1fb6ff]" />
              <span className="text-[11px] font-medium uppercase tracking-wider">Clicks today</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-white">
              {clicks.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/40">
              <TrendingUp className="h-3.5 w-3.5 text-[#06b6d4]" />
              <span className="text-[11px] font-medium uppercase tracking-wider">Conversions</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-white">
              {conversions.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/50 backdrop-blur-sm">
          <Link2 className="h-4 w-4 shrink-0 text-[#1fb6ff]" />
          <span className="text-[13px] leading-relaxed">
            Every link you launch reports back in seconds, not overnight batches.
          </span>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 px-10 py-6 text-[13px] text-white/30 xl:px-14">
        Trusted by performance teams shipping 10,000+ campaigns a month.
      </div>
    </aside>
  )
}

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="flex min-h-screen w-full bg-[#f6faff]">
      <BrandPanel />

      <div className="flex w-full flex-col justify-center px-4 py-10 sm:px-8 lg:w-[54%] lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <img src={logo} alt="ClicksMeta" className="h-8 w-auto" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1fb6ff]">Start today</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f1b3d] sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-2 text-[15px] text-[#0f1b3d]/50">
            Free for 15 days. No card required, cancel anytime.
          </p>

          <form className="mt-9 space-y-8">
            <section className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0f1b3d]/40">
                Personal details
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={User} label="Full name" placeholder=" " />
                <Field icon={Mail} label="Email address" type="email" placeholder=" " />
                <Field icon={Phone} label="Mobile number" type="tel" placeholder=" " />
                <Field icon={Building2} label="Company name" placeholder=" " />
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0f1b3d]/40">
                Business details
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={Globe} label="Website / domain" type="url" placeholder=" " />
                <Field icon={MessageCircle} label="Skype ID" placeholder=" " optional />
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0f1b3d]/40">Security</p>
              <label className={fieldWrapClasses}>
                <Lock className={iconClasses} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" "
                  className={`${inputBaseClasses} pr-11`}
                />
                <span className={labelClasses}>Password</span>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0f1b3d]/30 transition-colors hover:text-[#1fb6ff]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
                </button>
              </label>
              <p className="text-xs text-[#0f1b3d]/35">Use at least 8 characters with a number and a symbol.</p>
            </section>

            <Button
              type="submit"
              className="group h-14 w-full rounded-xl bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-[15px] font-semibold text-white shadow-lg shadow-[#1fb6ff]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#1fb6ff]/35"
            >
              <span className="flex items-center justify-center gap-2">
                Create account
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Button>

            <p className="text-center text-sm text-[#0f1b3d]/50">
              Already a user?{" "}
              <Link to="/login" className="font-semibold text-[#1fb6ff] hover:text-[#0f1b3d]">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}