"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can a courier pick up my parcel?",
      answer: "Collection timing depends on vehicle availability, location and traffic. Dispatch confirms the expected collection window for each booking.",
    },
    {
      question: "Are my goods insured during transport?",
      answer: "Cover and limits depend on the goods and booking terms. Declare the contents and value so the applicable Goods-in-Transit cover can be confirmed before collection.",
    },
    {
      question: "Is my delivery a dedicated direct vehicle?",
      answer: "A dedicated direct vehicle is available when selected and confirmed in your quote. Other service types may use different routing arrangements.",
    },
    {
      question: "How do I track my delivery in real-time?",
      answer: "Supported bookings receive status updates and a tracking reference. The tracking detail available can vary by assigned courier.",
    },
    {
      question: "What UK areas do you cover?",
      answer: "We arrange collections across mainland UK, subject to vehicle availability and route requirements. Dispatch confirms coverage for your postcodes.",
    },
    {
      question: "How do I get proof of delivery (POD)?",
      answer: "Where POD is supported, delivery details such as the recipient name, timestamp, signature or photograph are made available after completion.",
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
            Everything you need to know about same-day collections, quotes and service options.
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
                  aria-controls={`home-faq-panel-${index}`}
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
                  <div id={`home-faq-panel-${index}`} role="region" className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-150">
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
