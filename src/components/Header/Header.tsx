import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderServicesDropdown from "./HeaderServicesDropdown";
import HeaderIndustriesDropdown from "./HeaderIndustriesDropdown";
import { ContactEmail, ContactPhone } from "@/components/Contact/ContactSettings";
import BrandLogo from "@/components/Branding/BrandLogo";

export default function Header() {
  const topNavLinks = [
    { name: "Home", href: "/" },
    { name: "Get Quote", href: "/instant-quote" },
  ];

  const rightNavLinks = [
    { name: "Fleet", href: "/vehicle-fleet" },
    { name: "Coverage", href: "/coverage" },
    { name: "Track POD", href: "/track-delivery" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-xs">
      {/* 1. Top Utility Bar */}
      <div className="bg-[#051329] text-slate-300 text-xs py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium tracking-wide">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff00]"></span>
            </span>
            <span className="font-bold text-white">INSTADROP 24/7 DISPATCH</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">UK SAME-DAY COURIER SUPPORT</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 font-semibold">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
              <ContactPhone />
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c6ff00]" />
              <ContactEmail />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo: InstaDrop */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <BrandLogo variant="header" />
        </Link>

        {/* Streamlined Desktop Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-700">
          {topNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#0a192f] transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}

          {/* Interactive Services Dropdown Component */}
          <HeaderServicesDropdown />
          <HeaderIndustriesDropdown />

          {rightNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#0a192f] transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <Link
            href="/instant-quote"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a192f] hover:bg-[#051329] text-white text-xs font-bold transition-all shadow-sm group"
          >
            <span>Speedy Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c6ff00] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu */}
        <HeaderMobileMenu />
      </div>
    </header>
  );
}
