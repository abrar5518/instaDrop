import type { Metadata } from "next";
import { Briefcase, CreditCard, Users, ShieldCheck, Zap, ArrowRight, CheckCircle2, FileText, Award } from "lucide-react";
import BusinessAccountForm from "@/components/Forms/BusinessAccountForm";
import { ContactPhone } from "@/components/Contact/ContactSettings";

export const metadata: Metadata = {
  title: "Corporate & Business Courier Accounts — 30-Day Credit Terms",
  description:
    "Open a business courier account with InstaDrop. Benefit from 30-day monthly invoice terms, tiered volume discounts, priority driver dispatch, multi-user portal access, and dedicated account management across the UK.",
  keywords: [
    "business courier account UK",
    "corporate courier account",
    "courier monthly invoice credit",
    "business same day delivery rates",
    "InstaDrop business accounts",
  ],
  openGraph: {
    title: "Corporate & Business Courier Accounts | InstaDrop",
    description:
      "Scalable logistics support for companies with regular or time-critical same-day delivery needs.",
  },
};

export default function BusinessAccountsPage() {
  const accountFeatures = [
    {
      icon: CreditCard,
      title: "30-Day Monthly Credit Terms",
      desc: "No paying per transaction with corporate cards. Receive consolidated itemized monthly invoices with flexible 30-day credit terms.",
    },
    {
      icon: Zap,
      title: "Priority 30-Min Dispatch",
      desc: "Business account bookings automatically skip the queue and receive priority vehicle assignment within 30-45 minutes.",
    },
    {
      icon: Users,
      title: "Dedicated Account Coordinator",
      desc: "Direct telephone access to a named logistics manager who understands your business needs, branches, and custom SLAs.",
    },
    {
      icon: FileText,
      title: "Multi-User Booking Portal",
      desc: "Allow employees across different branches or departments to book couriers while maintaining central administrative oversight and budget controls.",
    },
    {
      icon: Award,
      title: "Tiered Volume Discounts",
      desc: "Save up to 25% on standard mileage rates as your monthly delivery volume grows across UK routes.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Insurance Cover",
      desc: "Customized Goods-in-Transit insurance options up to £250,000 for high-value corporate shipments, prototypes, and tenders.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>SCALABLE CORPORATE LOGISTICS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Corporate Courier Accounts. <br />
              <span className="text-[#c6ff00]">30-Day Monthly Terms.</span>
            </h1>

            <p className="text-base text-slate-300 max-w-xl leading-relaxed">
              Simplify company logistics with itemized monthly invoicing, volume discounts, priority driver dispatch, and dedicated account management.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#apply-form"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Apply for Account in 2 Mins</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </a>
              <ContactPhone prefix="Speak to Corporate Desk: " className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/15" />
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4 text-xs text-slate-200 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white font-display">
              Corporate Account Perks
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>30-day net credit payment terms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>Up to 25% tiered volume rate discount</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>Consolidated monthly PDF invoices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>Custom API integration & CSV bulk import</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Account Benefits Grid */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              BUILT FOR BUSINESS
            </p>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">
              Corporate Account Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountFeatures.map((f) => {
              const IconComp = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] font-display">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Account Application Form */}
      <section id="apply-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 bg-[#f8fafc] rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-[#0a192f] font-display">
              Apply for an InstaDrop Corporate Account
            </h2>
            <p className="text-xs text-slate-500">
              Complete the quick application below. Credit accounts are approved within 2 hours.
            </p>
          </div>

          <BusinessAccountForm />
          <div className="hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  COMPANY NAME *
                </label>
                <input type="text" required placeholder="e.g. Apex Legal Ltd" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  COMPANY REG NUMBER *
                </label>
                <input type="text" required placeholder="e.g. 12345678" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  CONTACT NAME *
                </label>
                <input type="text" required placeholder="e.g. Sarah Mitchell" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  WORK EMAIL *
                </label>
                <input type="email" required placeholder="sarah@company.co.uk" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  TELEPHONE NUMBER *
                </label>
                <input type="tel" required placeholder="e.g. 020 1234 5678" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  ESTIMATED MONTHLY DELIVERIES
                </label>
                <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]">
                  <option>1 - 10 deliveries / month</option>
                  <option>10 - 50 deliveries / month</option>
                  <option>50 - 200 deliveries / month</option>
                  <option>200+ deliveries / month</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-4 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] text-white font-bold text-sm shadow-md transition-colors">
              Submit Corporate Account Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
