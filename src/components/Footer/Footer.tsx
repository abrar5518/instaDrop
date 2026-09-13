"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";
import BrandLogo from "@/components/Branding/BrandLogo";
import { SocialLinks } from "@/components/Contact/ContactSettings";

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
              <BrandLogo variant="footer" />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dedicated same-day courier services across the UK, with collection timing confirmed by dispatch and delivery-status or POD updates where available.
            </p>
            <p className="max-w-sm text-xs font-bold leading-relaxed text-white">
              InstaDrop is a trade name of OXON SERVICES MANAGEMENT LTD.
              <span className="mt-1 block">
                Company number <span className="text-[#c6ff00]">12346805</span>
              </span>
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
              <SocialLinks className="flex flex-wrap gap-2 pt-2" />
            </div>
          </div>

          {/* QUICK LINKS & TOOLS */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              QUICK LINKS & TOOLS
            </p>
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
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              COURIER SERVICES
            </p>
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
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              VEHICLES & POLICIES
            </p>
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
