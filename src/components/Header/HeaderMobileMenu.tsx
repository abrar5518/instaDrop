"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { courierServices, industries } from "@/content/siteContent";

export default function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[110px] z-50 bg-slate-950/60 backdrop-blur-xs" onClick={() => setIsOpen(false)}>
          <div id="mobile-navigation" className="bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl max-h-[calc(100vh-110px)] overflow-y-auto" onClick={(event) => event.stopPropagation()}>
            {/* Live Dispatch Badge */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs font-bold text-[#0a192f]">
                InstaDrop UK Dispatch
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                Home
              </Link>

              <Link
                href="/instant-quote"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-blue-600 py-2 border-b border-slate-100"
              >
                Get Speedy Quote
              </Link>

              {/* Services Collapsible Mobile Section */}
              <div className="border-b border-slate-100 py-2">
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  aria-expanded={servicesExpanded}
                  aria-controls="mobile-services-menu"
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-blue-600 focus:outline-none"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${servicesExpanded ? "rotate-180" : ""}`} />
                </button>
                {servicesExpanded && (
                  <div id="mobile-services-menu" className="pl-4 pt-2 space-y-2 text-xs font-medium text-slate-600">
                    {courierServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block py-1.5 hover:text-[#0066ff]"
                      >
                        • {s.title}
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setIsOpen(false)} className="block py-1.5 font-bold text-[#0066ff]">All courier services</Link>
                  </div>
                )}
              </div>

              <div className="border-b border-slate-100 py-2">
                <button onClick={() => setIndustriesExpanded(!industriesExpanded)} aria-expanded={industriesExpanded} aria-controls="mobile-industries-menu" className="flex w-full items-center justify-between text-sm font-semibold text-slate-800"><span>Industries</span><ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${industriesExpanded ? "rotate-180" : ""}`} /></button>
                {industriesExpanded && <div id="mobile-industries-menu" className="space-y-2 pl-4 pt-2 text-xs font-medium text-slate-600">{industries.map((industry) => <Link key={industry.slug} href={`/industries/${industry.slug}`} onClick={() => setIsOpen(false)} className="block py-1.5 hover:text-[#0066ff]">• {industry.title}</Link>)}<Link href="/industries" onClick={() => setIsOpen(false)} className="block py-1.5 font-bold text-[#0066ff]">All industries</Link></div>}
              </div>

              <Link
                href="/vehicle-fleet"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                Vehicle Fleet
              </Link>

              <Link
                href="/coverage"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                UK Coverage
              </Link>

              <Link
                href="/track-delivery"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                Track POD
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                About Us
              </Link>

              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100">Blog</Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                Contact 24/7
              </Link>
            </nav>

            <div className="pt-2">
              <Link
                href="/instant-quote"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#0a192f] text-white font-semibold text-sm hover:bg-[#051329] transition-colors"
              >
                <span>Get Speedy Quote</span>
                <ArrowRight className="w-4 h-4 text-[#c6ff00]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
