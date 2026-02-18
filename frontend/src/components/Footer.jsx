import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import logo from "../assets/clicksmeta-logo.png"
import { footerNav } from "@/data/footerContent"

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/clicksmeta", icon: Linkedin },
    { name: "X (Twitter)", href: "https://x.com/offers_meta", icon: Twitter },
    { name: "Facebook", href: "https://www.facebook.com/getclicksmeta/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/clicksmeta", icon: Instagram },
    { name: "YouTube", href: "https://www.youtube.com/@ClicksMeta", icon: Youtube },
]

export function Footer() {
    return (
        <footer className="bg-[#060e1a] border-t border-white/5 relative overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#2563eb]/[0.04] rounded-full blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                {/* Newsletter strip */}
                <div className="py-12 border-b border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Stay up to date</h3>
                            <p className="text-sm text-white/35">Get the latest news and insights delivered to your inbox.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-1 sm:w-72 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-all"
                            />
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white border-0 rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="py-16">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center gap-2.5">
                                <span className="text-xl font-bold text-white tracking-tight">
                                    <img src={logo} alt="Clicksmeta Logo" className="h-8 w-auto brightness-0 invert" />
                                </span>
                            </Link>
                            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
                                Powerful analytics & tracking platform for advertisers, affiliates, and agencies. One platform to manage all your campaigns.
                            </p>
                            <div className="flex flex-col gap-3.5">
                                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    support@clicksmeta.com
                                </a>
                                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <Phone className="w-3.5 h-3.5" />
                                    </div>
                                    +1 (555) 000-0000
                                </a>
                                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <MapPin className="w-3.5 h-3.5" />
                                    </div>
                                    San Francisco, CA
                                </a>
                            </div>
                        </div>

                        {/* Link columns */}
                        {footerNav.map((col) => (
                            <div key={col.title}>
                                <h4 className="text-white font-semibold text-sm mb-5">{col.title}</h4>
                                <ul className="flex flex-col gap-3">
                                    {col.links.map((link) => {
                                        const linkKey = link.slug || link.href || link.label
                                        const destination = link.href || (link.slug ? `/${link.slug}` : "#")
                                        return (
                                            <li key={linkKey}>
                                                <Link to={destination} className="text-sm text-white/35 hover:text-white/60 transition-colors">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/25">
                        {new Date().getFullYear()} ClicksMeta. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                                aria-label={name}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

