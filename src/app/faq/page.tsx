"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ContactPhone } from "@/components/Contact/ContactSettings";

const faqList = [
  {
    cat: "pickup",
    question: "How fast can an InstaDrop courier pick up my parcel?",
    answer: "Collection timing depends on vehicle availability, location and traffic. Dispatch confirms the expected collection window for each booking before it is accepted.",
  },
  {
    cat: "rates",
    question: "How are same-day courier prices calculated?",
    answer: "Rates are based on the route, vehicle size, timing, load and any special handling. Your tailored quote sets out the price and applicable charges before booking.",
  },
  {
    cat: "insurance",
    question: "Are my goods insured during transport?",
    answer: "Goods-in-Transit cover and any limits depend on the booking, goods and agreed terms. Tell us the contents and value so dispatch can confirm the applicable cover before collection.",
  },
  {
    cat: "tracking",
    question: "How do I track my delivery in real-time?",
    answer: "Supported bookings receive status updates and a tracking reference. The detail available can vary by assigned courier; dispatch can provide the latest recorded update.",
  },
  {
    cat: "service",
    question: "Is my delivery a dedicated direct vehicle?",
    answer: "A dedicated direct vehicle is available when selected and confirmed in your quote. Other service types may follow different routing arrangements.",
  },
  {
    cat: "business",
    question: "How do I set up a corporate business credit account?",
    answer: "You can apply online. Credit terms, service levels and any volume pricing are subject to review and are confirmed in the account agreement.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqList.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaqs = activeCategory === "all" ? faqList : faqList.filter(f => f.cat === activeCategory);

  return (
    <div className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>KNOWLEDGE BASE & SUPPORT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical information about InstaDrop collections, quotes, cover, tracking and vehicle options.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pb-4">
            <button
              onClick={() => { setActiveCategory("all"); setOpenIndex(null); }}
              aria-pressed={activeCategory === "all"}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "all" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Questions
            </button>
            <button
              onClick={() => { setActiveCategory("pickup"); setOpenIndex(null); }}
              aria-pressed={activeCategory === "pickup"}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "pickup" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Pickup & Times
            </button>
            <button
              onClick={() => { setActiveCategory("rates"); setOpenIndex(null); }}
              aria-pressed={activeCategory === "rates"}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "rates" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Rates & Quote
            </button>
            <button
              onClick={() => { setActiveCategory("insurance"); setOpenIndex(null); }}
              aria-pressed={activeCategory === "insurance"}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "insurance" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Insurance & POD
            </button>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="bg-[#f8fafc] border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="w-full p-6 text-left font-bold text-base text-[#0a192f] flex items-center justify-between gap-4 focus:outline-none hover:text-[#0066ff]"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0066ff] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#0066ff]" : ""}`} />
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${index}`} role="region" className="px-6 pb-6 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Still Have Questions? Call Our 24/7 Desk
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our experienced logistics coordinators are live right now to answer any custom transport inquiries.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <ContactPhone prefix="Call " className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs" />
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
