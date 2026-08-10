"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const services = [
    { title: "Same-Day Express", href: "/same-day-delivery" },
    { title: "Pallets & Freight", href: "/pallet-delivery" },
    { title: "Medical GDP Courier", href: "/medical-courier" },
    { title: "Legal & Court Briefs", href: "/legal-courier" },
    { title: "Wait & Return Courier", href: "/wait-and-return" },
    { title: "All Services Directory", href: "/services" },
  ];

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[110px] z-50 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl max-h-[calc(100vh-110px)] overflow-y-auto">
            {/* Live Dispatch Badge */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs font-bold text-[#0a192f]">
                InstaDrop 60-Min Live Dispatch
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
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-blue-600 focus:outline-none"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${servicesExpanded ? "rotate-180" : ""}`} />
                </button>
                {servicesExpanded && (
                  <div className="pl-4 pt-2 space-y-2 text-xs font-medium text-slate-600">
                    {services.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1.5 hover:text-[#0066ff]"
                      >
                        • {s.title}
                      </Link>
                    ))}
                  </div>
                )}
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
                href="/business-accounts"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                Corporate Accounts
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                About Us
              </Link>

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
