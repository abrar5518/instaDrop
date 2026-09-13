import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { ContactPhone } from "@/components/Contact/ContactSettings";
import { FileText, Lock, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/industries/legal-document-delivery" },
  title: "Legal Document Courier UK — Confidential Court Briefs & Passports",
  description:
    "InstaDrop provides high-security legal courier services across the UK. Confidential court filings, legal tenders, contracts, deeds, and passports delivered hand-to-hand with instant electronic POD.",
  keywords: [
    "legal document courier UK",
    "court brief courier same day",
    "confidential contract delivery",
    "passport courier UK",
    "InstaDrop legal courier",
  ],
  openGraph: {
    title: "Legal Document Courier UK | High Security Delivery | InstaDrop",
    description:
      "Hand-to-hand named recipient signature for legal briefs, court tenders, and confidential documents.",
  },
};

export default function LegalCourierPage() {
  const features = [
    { title: "Hand-to-Hand Named Signature", desc: "Delivered strictly into the hands of named solicitors, court clerks, or company directors." },
    { title: "Serialized Tamper-Evident Bags", desc: "Security pouches and reference numbers can be requested where suitable; confidentiality also depends on the agreed handling process." },
    { title: "Court Filing Deadline SLA", desc: "Direct vehicle dispatch ensures your legal briefs arrive at court chambers prior to strict cutoff times." },
    { title: "Instant Electronic POD Email", desc: "Receive timestamped signature and recipient confirmation emailed directly to your desk." },
    { title: "Discreet Direct Transport", desc: "Zero multi-drop detours. Your confidential documents travel in an exclusive dedicated vehicle." },
    { title: "Goods-in-Transit Cover", desc: "Applicable cover for valuable originals and tenders is confirmed from the declared contents, value and booking terms." },
  ];

  const workflow = [
    { step: "01", title: "Legal Request", desc: "Enter pickup law firm & court postcodes in our 30-second quote calculator or call our desk." },
    { step: "02", title: "Driver Assigned", desc: "Dedicated courier driver is assigned to collect your confidential documents within 60 mins." },
    { step: "03", title: "Tamper Pouch Sealing", desc: "Briefs enclosed in a serialized tamper-evident pouch in the presence of your clerk." },
    { step: "04", title: "Direct Drive Express", desc: "Where dedicated service is booked, the driver travels directly to the agreed destination with status updates where supported." },
    { step: "05", title: "Hand Handover & POD", desc: "Handed to named recipient with electronic POD signature sent instantly to your inbox." },
  ];

  const useCases = [
    { title: "High Court & Civil Justice Filings", desc: "Urgent court bundles, witness statements, and injunction documents delivered prior to filing deadlines." },
    { title: "Commercial Tender Submissions", desc: "High-value corporate tenders and bid documents requiring strict hand delivery." },
    { title: "Property Deeds & Land Registry", desc: "Original title deeds, mortgage contracts, and completion paperwork between conveyancers." },
    { title: "Passports & Consular Visas", desc: "Urgent passport, visa, and diplomatic document transport to embassy desks." },
  ];

  const faqs = [
    { q: "Will the courier hand the document directly to a specific person?", a: "Yes! We specialize in named recipient hand-to-hand deliveries. We will not leave legal briefs at generic reception desks without your explicit instruction." },
    { q: "How quickly can legal documents be picked up?", a: "Dispatch confirms an expected collection window based on location, vehicle availability and the required deadline." },
    { q: "Are the documents kept confidential?", a: "100% confidential. Documents are placed in serialized tamper-evident security pouches and travel in an exclusive vehicle." },
    { q: "Do you deliver directly to High Court chambers?", a: "Yes, our couriers regularly deliver to the Royal Courts of Justice, Rolls Building, and regional Civil Justice Centres." },
    { q: "How do I get proof of delivery for court records?", a: "The second the recipient signs electronically, an automated PDF with exact timestamp, signature, and name is emailed to you." },
    { q: "Can I book a Wait & Return service for signed contracts?", a: "Yes! Our driver can deliver the contract, wait up to 2 hours for signatures, and return the executed original straight back to your desk." },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>HIGH-SECURITY CONFIDENTIAL LEGAL COURIER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Legal & Court Courier. <br />
              <span className="text-[#c6ff00]">Hand-to-Hand Delivery.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Ultra-secure transport for legal court bundles, original contracts, land deeds, tenders, passports, and confidential briefs across the UK.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Book Legal Courier</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
              <ContactPhone prefix="Call Legal Desk: " className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/15" />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              CONFIDENTIALITY PROTOCOLS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why UK Law Firms Trust InstaDrop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] font-display">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-Step Process */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              HANDOVER WORKFLOW
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Legal Courier Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflow.map((w) => (
              <div key={w.step} className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold text-xs">
                  {w.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0a192f] font-display">{w.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="py-20 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              DOCUMENT APPLICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Legal & Court Transport Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#c6ff00] text-[#0a192f] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">{u.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0a192f] text-center font-display">
            Legal Courier FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 space-y-2">
                <h3 className="font-bold text-base text-[#0a192f] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0066ff] shrink-0" />
                  {f.q}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Need Legal Briefs Delivered Before Court Close?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Ask dispatch to confirm availability, handling requirements and the expected collection window for your legal consignment.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]">
              Get Legal Quote
            </Link>
            <ContactPhone prefix="Call " className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15" />
          </div>
        </div>
      </section>
    </div>
  );
}
