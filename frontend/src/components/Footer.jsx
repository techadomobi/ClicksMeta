import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import logo from "../assets/clicksmeta-logo.png"
import { footerNav } from "@/data/footerContent"

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/clicksmeta", icon: Linkedin },
    { name: "X (Twitter)", href: "https://x.com/clicks_meta", icon: Twitter },
    { name: "Facebook", href: "https://www.facebook.com/getclicksmeta/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/clicksmeta", icon: Instagram },
    { name: "YouTube", href: "https://www.youtube.com/@ClicksMeta", icon: Youtube },
]

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[#d7e4ff] bg-linear-to-b from-[#f4f8ff] to-[#eaf1ff]">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-55 w-170 rounded-full bg-[#60a5fa]/15 blur-[110px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                {/* Newsletter strip */}
                <div className="border-b border-[#d7e4ff] py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="mb-1 text-lg font-semibold text-[#10244d]">Stay up to date</h3>
                            <p className="text-sm text-[#5a719a]">Get the latest news and insights delivered to your inbox.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-full border border-[#c7d9ff] bg-white px-5 py-3 text-sm text-[#1d3361] placeholder:text-[#87a0c7] transition-all focus:border-[#2563eb]/50 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/30 sm:w-72 sm:flex-1"
                            />
                            <Button className="w-full whitespace-nowrap rounded-full border-0 bg-linear-to-r from-[#2563eb] to-[#06b6d4] px-6 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/35 sm:w-auto">
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
                                <span className="text-xl font-bold tracking-tight text-[#10244d]">
                                    <img src={logo} alt="Clicksmeta Logo" className="h-8 w-auto" />
                                </span>
                            </Link>
                            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[#5a719a]">
                                Powerful analytics & tracking platform for advertisers, affiliates, and agencies. One platform to manage all your campaigns.
                            </p>
                            <div className="flex flex-col gap-3.5">
                                <a href="#" className="group flex items-center gap-2.5 text-sm text-[#4f668f] transition-colors hover:text-[#243f73]">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f1ff] transition-colors group-hover:bg-[#d9e9ff]">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    support@clicksmeta.com
                                </a>
                                <a href="#" className="group flex items-center gap-2.5 text-sm text-[#4f668f] transition-colors hover:text-[#243f73]">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f1ff] transition-colors group-hover:bg-[#d9e9ff]">
                                        <Phone className="w-3.5 h-3.5" />
                                    </div>
                                    +1 (555) 000-0000
                                </a>
                                <a href="#" className="group flex items-center gap-2.5 text-sm text-[#4f668f] transition-colors hover:text-[#243f73]">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f1ff] transition-colors group-hover:bg-[#d9e9ff]">
                                        <MapPin className="w-3.5 h-3.5" />
                                    </div>
                                    San Francisco, CA
                                </a>
                            </div>
                        </div>

                        {/* Link columns */}
                        {footerNav.map((col) => (
                            <div key={col.title}>
                                <h4 className="mb-5 text-sm font-semibold text-[#10244d]">{col.title}</h4>
                                <ul className="flex flex-col gap-3">
                                    {col.links.map((link) => {
                                        const linkKey = link.slug || link.href || link.label
                                        const destination = link.href || (link.slug ? `/${link.slug}` : "#")
                                        return (
                                            <li key={linkKey}>
                                                <Link to={destination} className="text-sm text-[#5a719a] transition-colors hover:text-[#234278]">
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
                <div className="flex flex-col items-center justify-between gap-4 border-t border-[#d7e4ff] py-8 md:flex-row">
                    <p className="text-sm text-[#6c82a8]">
                        {new Date().getFullYear()} ClicksMeta. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1ff] text-[#43608d] transition-all hover:bg-[#d6e8ff] hover:text-[#1f3f78]"
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

