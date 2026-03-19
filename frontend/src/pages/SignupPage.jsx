import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import logo from "../assets/clicksmeta-logo.png"

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-[#1fb6ff]/20 bg-[#e6f0ff] px-4 text-[#0f1b3d] placeholder:text-[#0f1b3d]/40 focus:outline-none focus:ring-2 focus:ring-[#1fb6ff]"

export function SignupPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-6 text-[#0f1b3d] sm:px-6 lg:pb-24 lg:pt-10">
      <header className="space-y-3 text-center">
         <div className="flex justify-center items-center gap-3 text-xl font-bold text-[#0f1b3d] tracking-tight">
          <img
            src={logo}
            alt="ClicksMeta Logo"
            className="h-10 w-auto brightness-0 invert"
          />

        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1fb6ff]">
          Start today
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Create your account</h1>
        <p className="text-base text-[#0f1b3d]/60 md:text-lg">
          Start tracking, optimizing and scaling your campaigns
        </p>
      </header>

      <form className="space-y-8 rounded-3xl border border-[#1fb6ff]/20 bg-[#f0f7ff] p-6 shadow-2xl shadow-[#1fb6ff]/25 backdrop-blur-lg sm:p-8">
        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-[#0f1b3d]">Personal Details</p>
            <p className="text-sm text-[#0f1b3d]/50">Tell us about yourself so we can personalize your workspace.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Full Name
              <input placeholder="Alex Carter" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Email Address
              <input type="email" placeholder="alex@company.com" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Mobile Number
              <input type="tel" placeholder="+1 (555) 123-4567" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Company Name
              <input placeholder="Northwind Media" className={inputClasses} />
            </label>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-[#0f1b3d]">Business Details</p>
            <p className="text-sm text-[#0f1b3d]/50">Let us know where to send performance insights.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Website / Domain
              <input type="url" placeholder="https://clicksmeta.com" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-[#0f1b3d]/70">
              Skype ID (optional)
              <input placeholder="@alexgrowth" className={inputClasses} />
            </label>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-[#0f1b3d]">Security</p>
            <p className="text-sm text-[#0f1b3d]/50">Set a strong password to keep your workspace protected.</p>
          </div>
          <label className="text-sm font-medium text-[#0f1b3d]/70">
            Password
            <input type="password" placeholder="••••••••" className={inputClasses} />
          </label>
        </section>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#1fb6ff] to-[#36d1ff] text-base font-semibold text-[#02121f] shadow-lg shadow-[#1fb6ff]/30 transition hover:from-[#17a9ef] hover:to-[#2fc9fa]"
        >
          Create Account
        </Button>

        <p className="text-center text-sm text-[#0f1b3d]/70">
          Already a user?{" "}
          <Link to="/login" className="font-medium text-[#1fb6ff] hover:text-[#0f1b3d]">
            Log in
          </Link>
        </p>
      </form>
    </section>
  )
}
