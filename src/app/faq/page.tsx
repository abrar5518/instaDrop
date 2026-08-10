"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqList = [
    {
      cat: "pickup",
      question: "How fast can an InstaDrop courier pick up my parcel?",
      answer: "We guarantee door-to-door collection within 60 minutes anywhere across mainland UK. Our automated dispatch system immediately assigns your booking to the nearest available driver in our network of 120+ logistics hubs.",
    },
    {
      cat: "rates",
      question: "How are same-day courier prices calculated?",
      answer: "Our rates are based strictly on journey mileage from pickup postcode to delivery postcode and the chosen vehicle size (Courier Car, Small Van, Medium Van, Large Van, Luton Tail-Lift). We operate on transparent fixed pricing with zero hidden surcharges.",
    },
    {
      cat: "insurance",
      question: "Are my goods insured during transport?",
      answer: "Yes! Every booking automatically includes £50,000 Goods-in-Transit insurance completely free of charge. For ultra high-value cargo or tenders, custom coverage up to £250,000 can be arranged upon request.",
    },
    {
      cat: "tracking",
      question: "How do I track my delivery in real-time?",
      answer: "As soon as your driver is dispatched, you receive a live GPS tracking link via email or WhatsApp. You can watch your courier’s real-time progress on a map from collection point straight to dropoff.",
    },
    {
      cat: "service",
      question: "Is my delivery a dedicated direct vehicle?",
      answer: "100% yes. Once your driver collects your consignment, it goes straight to the dropoff destination with zero co-loading or intermediate hub stops.",
    },
    {
      cat: "business",
      question: "How do I set up a corporate business credit account?",
      answer: "You can apply for a business account online in 2 minutes. Account holders receive 30-day net monthly invoice terms, priority dispatch, and tiered volume discounts up to 25%.",
    },
  ];

  const filteredFaqs = activeCategory === "all" ? faqList : faqList.filter(f => f.cat === activeCategory);

  return (
    <div className="w-full bg-white">
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
            Everything you need to know about InstaDrop same-day pickups, pricing guarantees, insurance policy, and vehicle options.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pb-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "all" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Questions
            </button>
            <button
              onClick={() => setActiveCategory("pickup")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "pickup" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Pickup & Times
            </button>
            <button
              onClick={() => setActiveCategory("rates")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === "rates" ? "bg-[#0a192f] text-[#c6ff00]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Rates & Quote
            </button>
            <button
              onClick={() => setActiveCategory("insurance")}
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
                    className="w-full p-6 text-left font-bold text-base text-[#0a192f] flex items-center justify-between gap-4 focus:outline-none hover:text-[#0066ff]"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0066ff] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#0066ff]" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60">
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
            <a href="tel:08001234455" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs">
              Call 0800 123 4455
            </a>
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
