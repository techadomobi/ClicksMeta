import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Atmosphere } from "./components/Atmosphere"
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

function App() {
  return (
    <Atmosphere>
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden text-[#050b1d]">
        <Navbar />

        <main className="flex-1 pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
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

        <Footer />
      </div>
    </Atmosphere>
  )
}

export default App
