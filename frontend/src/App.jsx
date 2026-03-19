import { Routes, Route } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { SignupPage } from "./pages/SignupPage"
import { LoginPage } from "./pages/LoginPage"
import { DemoRequestPage } from "./pages/DemoRequestPage"
import { PricingPage } from "./pages/PricingPage"
import { FooterInfoPage } from "./pages/FooterInfoPage"
import { CareerPage } from "./pages/CareerPage"
import { BlogPage } from "./pages/BlogPage"
import { EcommercePage } from "./pages/EcommercePage"
import { CustomerSuccessPage } from "./pages/CustomerSuccessPage"
import { SecurityCompliancePage } from "./pages/SecurityCompliancePage"
import { AboutUsPage } from "./pages/AboutUsPage"
import { ExclusiveOfferPage } from "./pages/ExclusiveOfferPage"
import { StarterPlanPage } from "./pages/StarterPlanPage"

function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  })

  return (
    <div className="site-light min-h-screen w-full overflow-x-hidden text-slate-900">
      <div className="site-light-bg" aria-hidden="true" />
      <motion.div
        className="scroll-progress"
        aria-hidden="true"
        style={{ scaleX: progressScale }}
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
      </motion.div>

      <main className="pt-20 md:pt-24">
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
      </main>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
