import { Routes, Route } from "react-router-dom"
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

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">
      <Navbar />

      <main className="pt-20 md:pt-24">
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
          <Route path="/:slug" element={<FooterInfoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
