import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { ContactPhone } from "@/components/Contact/ContactSettings";
import { Activity, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Medical Courier UK — GDP Compliant Bio-Specimen & Pharmacy Express",
  description:
    "InstaDrop provides GDP compliant medical courier services across the UK. 60-minute pickup for pharmaceuticals, bloods, laboratory samples, medical devices, and urgent NHS hospital drops.",
  keywords: [
    "medical courier UK",
    "GDP compliant courier",
    "blood sample courier same day",
    "pharmaceutical express delivery",
    "NHS hospital courier",
    "InstaDrop medical logistics",
  ],
  openGraph: {
    title: "Medical Courier UK | GDP Compliant Specimen Transport | InstaDrop",
    description:
      "Time-critical medical transport with GDP trained drivers, tamper-evident handling, and 60-minute pickup.",
  },
};

export default function MedicalCourierPage() {
  const features = [
    { title: "GDP Trained Drivers", desc: "Drivers trained under Good Distribution Practice (GDP) protocols for biological samples, pharmaceuticals, and vaccines." },
    { title: "Tamper-Evident Security Seals", desc: "Every specimen pouch features serialized tamper-evident security locks to protect sample integrity." },
    { title: "Point-to-Point Direct Drive", desc: "Zero intermediate depot stops. Samples go straight from clinic or pharmacy to pathology labs or hospital wards." },
    { title: "Emergency 60-Min Pickup SLA", desc: "Available 24/7/365 for urgent bloods, organs, tissues, or critical ICU pharmaceutical dispatches." },
    { title: "Chain-of-Custody Documentation", desc: "Complete timestamped hand-to-hand signature trail from collecting doctor to lab technician." },
    { title: "£50,000 Goods Insurance Included", desc: "Full Goods-in-Transit protection included for high-value medical diagnostic equipment and trial drugs." },
  ];

  const workflow = [
    { step: "01", title: "Urgent Medical Request", desc: "Enter pickup hospital & lab postcodes in our speedy quote engine or call our 24/7 desk." },
    { step: "02", title: "GDP Driver Assigned", desc: "Nearest certified medical courier driver is dispatched immediately to your clinic." },
    { step: "03", title: "Tamper Bag Sealing", desc: "Samples loaded into serialized tamper-proof thermal bags with chain-of-custody log." },
    { step: "04", title: "Direct Point-to-Point Transit", desc: "Driver travels directly to lab with live satellite GPS tracking updates." },
    { step: "05", title: "Lab Handover & POD", desc: "Handed to named laboratory technician with electronic POD signature sent instantly." },
  ];

  const useCases = [
    { title: "NHS Pathology & Laboratory Samples", desc: "Urgent transport of bloods, urine, tissue biopsies, and microbiology cultures for diagnostic testing." },
    { title: "Clinical Trial Pharmaceuticals", desc: "Temperature-monitored distribution of trial drugs and active pharmaceutical ingredients (APIs)." },
    { title: "Emergency Blood & Tissue Transplants", desc: "Time-critical delivery of blood bags, plasma, and organ tissues straight to surgical ICUs." },
    { title: "Medical Equipment & Surgical Devices", desc: "Express delivery of surgical trays, sterilizers, and diagnostic machinery between healthcare hubs." },
  ];

  const faqs = [
    { q: "Are your medical couriers GDP compliant?", a: "Yes! Our drivers undergo rigorous Good Distribution Practice (GDP) training regarding temperature monitoring, bio-hazard safety, and chain-of-custody protocols." },
    { q: "How fast can a medical sample be collected?", a: "We guarantee collection within 60 minutes anywhere across mainland UK, 24 hours a day." },
    { q: "Are samples kept temperature-stable during transit?", a: "Yes, we utilize certified thermal transport bags and temperature-monitored vehicles to maintain sample viability." },
    { q: "Do you deliver directly to NHS pathology laboratories?", a: "Yes, our couriers deliver directly to named lab technicians, pathology receiving desks, and hospital wards." },
    { q: "Can I track the courier's location during transport?", a: "Yes, you receive a real-time satellite GPS tracking link to monitor the driver from hospital pickup to lab handover." },
    { q: "Is chain-of-custody documentation provided?", a: "A complete electronic signature trail with timestamps and recipient names is emailed to your desk the second handover is complete." },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-[#c6ff00] border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>GDP COMPLIANT MEDICAL LOGISTICS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Medical Courier UK. <br />
              <span className="text-[#c6ff00]">Collected Within 60 Minutes.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Fast, compliant transport for biological samples, bloods, pharmaceuticals, medical equipment, and NHS laboratory supplies across the United Kingdom.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Book Medical Courier</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
              <ContactPhone prefix="Emergency Medical Desk: " className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/15" />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Medical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              HEALTHCARE STANDARDS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why NHS & Healthcare Hubs Trust InstaDrop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
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
              CHAIN OF CUSTODY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Medical Transport Workflow
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

      {/* 4. Healthcare Use Cases */}
      <section className="py-20 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              CLINICAL APPLICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Medical & Laboratory Transport Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#c6ff00] text-[#0a192f] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
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
            Medical Courier FAQs
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
            Need Emergency Medical Transport Right Now?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our 24/7 medical dispatch desk is live. Call freephone <ContactPhone className="font-bold" /> or book online.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]">
              Get Medical Quote
            </Link>
            <ContactPhone prefix="Call " className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15" />
          </div>
        </div>
      </section>
    </div>
  );
}
