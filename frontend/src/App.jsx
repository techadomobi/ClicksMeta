import { Suspense, lazy, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"

const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })))
const SignupPage = lazy(() => import("./pages/SignupPage").then((m) => ({ default: m.SignupPage })))
const LoginPage = lazy(() => import("./pages/LoginPage").then((m) => ({ default: m.LoginPage })))
const DemoRequestPage = lazy(() => import("./pages/DemoRequestPage").then((m) => ({ default: m.DemoRequestPage })))
const PricingPage = lazy(() => import("./pages/PricingPage").then((m) => ({ default: m.PricingPage })))
const FooterInfoPage = lazy(() => import("./pages/FooterInfoPage").then((m) => ({ default: m.FooterInfoPage })))
const CareerPage = lazy(() => import("./pages/CareerPage").then((m) => ({ default: m.CareerPage })))
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })))
const EcommercePage = lazy(() => import("./pages/EcommercePage").then((m) => ({ default: m.EcommercePage })))
const CustomerSuccessPage = lazy(() => import("./pages/CustomerSuccessPage").then((m) => ({ default: m.CustomerSuccessPage })))
const SecurityCompliancePage = lazy(() => import("./pages/SecurityCompliancePage").then((m) => ({ default: m.SecurityCompliancePage })))
const AboutUsPage = lazy(() => import("./pages/AboutUsPage").then((m) => ({ default: m.AboutUsPage })))
const ExclusiveOfferPage = lazy(() => import("./pages/ExclusiveOfferPage").then((m) => ({ default: m.ExclusiveOfferPage })))
const StarterPlanPage = lazy(() => import("./pages/StarterPlanPage").then((m) => ({ default: m.StarterPlanPage })))

function RouteFallback() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      Loading page...
    </div>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const warmUp = () => {
      import("./pages/ContactPage")
      import("./pages/DemoRequestPage")
      import("./pages/PricingPage")
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmUp, { timeout: 1500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timer = window.setTimeout(warmUp, 600)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="site-light min-h-screen w-full overflow-x-hidden text-slate-900">
      <div className="site-light-bg" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <div>
        <Navbar />
      </div>

      <main className="pt-20 md:pt-24">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/exclusive-offer" element={<ExclusiveOfferPage />} />
            <Route path="/starter-plan" element={<StarterPlanPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demorequest" element={<DemoRequestPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/customer-success" element={<CustomerSuccessPage />} />
            <Route path="/security-compliance" element={<SecurityCompliancePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/:slug" element={<FooterInfoPage />} />
          </Routes>
        </Suspense>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
