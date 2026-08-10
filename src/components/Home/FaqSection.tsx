"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can a courier pick up my parcel?",
      answer: "We guarantee door-to-door pickup within 60 minutes anywhere across mainland UK. Our automated dispatch system immediately assigns your job to the nearest dedicated driver in our network of over 120 UK logistics hubs.",
    },
    {
      question: "Are my goods insured during transport?",
      answer: "Yes! Every single shipment automatically includes £50,000 Goods-in-Transit insurance completely free of charge. For ultra high-value cargo (e.g. art, luxury goods, expensive electronics), higher coverage can be arranged upon request.",
    },
    {
      question: "Is my delivery a dedicated direct vehicle?",
      answer: "Absolutely. We specialize in dedicated direct drive transport. Once your driver collects your consignment, it goes straight to the dropoff destination with zero co-loading or intermediate hub stops.",
    },
    {
      question: "How do I track my delivery in real-time?",
      answer: "As soon as your driver is dispatched, you will receive an SMS and email with a live GPS tracking link. You can view the driver's exact location on a map from collection point straight to delivery.",
    },
    {
      question: "What UK areas do you cover?",
      answer: "We cover 100% of mainland UK including Greater London, Birmingham, Manchester, Leeds, Glasgow, Edinburgh, Bristol, Newcastle, Liverpool, Cardiff, and all rural industrial parks.",
    },
    {
      question: "How do I get proof of delivery (POD)?",
      answer: "Upon delivery, the recipient signs electronically on the courier's device. An automated email with timestamped signature, recipient name, and photo POD is immediately sent to you.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about our same-day courier pickup, rates, and guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-base sm:text-lg text-slate-900 flex items-center justify-between gap-4 focus:outline-none hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
