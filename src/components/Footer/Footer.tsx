"use client";

import Link from "next/link";
import { Zap, Phone, Mail } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

export default function Footer() {
  const settings = useSettings();

  return (
    <footer className="bg-[#051329] text-slate-300 border-t border-slate-800/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-black border border-[#c6ff00]/40">
                <Zap className="w-6 h-6 text-[#c6ff00] fill-[#c6ff00]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                Insta<span className="text-[#c6ff00]">Drop</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              UK’s fastest dedicated same-day courier service. Door-to-door pickups within 60 minutes nationwide with real-time satellite GPS tracking and instant digital proof of delivery.
            </p>
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
                <a href={`tel:${settings.hotline_phone.replace(/\s+/g, '')}`} className="hover:text-white font-bold text-white">
                  {settings.hotline_phone} (24/7 Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c6ff00]" />
                <a href={`mailto:${settings.support_email}`} className="hover:text-white">
                  {settings.support_email}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                📍 {settings.office_address}
              </p>
            </div>
          </div>

          {/* QUICK LINKS & TOOLS */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              QUICK LINKS & TOOLS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link href="/instant-quote" className="hover:text-white transition-colors text-[#c6ff00]">Speedy Quote Portal</Link></li>
              <li><Link href="/track-delivery" className="hover:text-white transition-colors">Track Delivery & POD</Link></li>
              <li><Link href="/coverage" className="hover:text-white transition-colors">UK Coverage Hubs</Link></li>
              <li><Link href="/business-accounts" className="hover:text-white transition-colors">Corporate Accounts</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About InstaDrop</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact 24/7 Desk</Link></li>
            </ul>
          </div>

          {/* COURIER SERVICES */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              COURIER SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="/same-day-delivery" className="hover:text-white transition-colors">Same-Day Express</Link></li>
              <li><Link href="/pallet-delivery" className="hover:text-white transition-colors">Pallets & Heavy Freight</Link></li>
              <li><Link href="/medical-courier" className="hover:text-white transition-colors text-emerald-400">Medical GDP Courier</Link></li>
              <li><Link href="/legal-courier" className="hover:text-white transition-colors">Legal & Court Briefs</Link></li>
              <li><Link href="/wait-and-return" className="hover:text-white transition-colors">Wait & Return Courier</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Services Directory</Link></li>
            </ul>
          </div>

          {/* VEHICLES & POLICIES */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              VEHICLES & POLICIES
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="/vehicle-fleet" className="hover:text-white transition-colors">Vehicle Fleet Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs & Help Centre</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions#insurance" className="hover:text-white transition-colors">Goods-in-Transit Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {settings.business_name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="hover:text-white transition-colors">Help Centre</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
