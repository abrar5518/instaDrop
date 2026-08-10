"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function QuoteWidget() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div id="quote-form" className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border border-slate-100">
      {/* Form Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] font-display">
          Get your speedy quote
        </h3>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          SECURE
        </span>
      </div>
      <p className="text-xs sm:text-sm text-slate-500 mb-6">
        Tell us about your delivery. We&apos;ll confirm the tailored price.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-slate-900">Quote Request Received!</h4>
          <p className="text-xs text-slate-600">
            Our dispatch team is calculating your route. We will contact you within 5 minutes.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                FIRST NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                LAST NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mitchell"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.co.uk"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                PHONE *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 07 1234 56789"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                CONTACT PREFERENCE *
              </label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium">
                <option>Please Email Me</option>
                <option>Please Call Me</option>
                <option>WhatsApp Message</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                COLLECTION POSTCODE *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. M1 1AE"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                DELIVERY POSTCODE *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. SW1A 1AA"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                VEHICLE TYPE *
              </label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium">
                <option>Select vehicle</option>
                <option>Courier Car (Up to 25kg)</option>
                <option>Small Van (Up to 450kg)</option>
                <option>Medium Van (Up to 900kg)</option>
                <option>Large Van (Up to 1,200kg)</option>
              </select>
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                TIMESCALES *
              </label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium">
                <option>Select timescale</option>
                <option>ASAP (Within 60 mins)</option>
                <option>Same Day Express</option>
                <option>Scheduled Delivery</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                TYPE OF ENQUIRY *
              </label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium">
                <option>Business</option>
                <option>Personal / One-off</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              ANY OTHER INFORMATION
            </label>
            <textarea
              rows={2}
              placeholder="Parcel details, size, weight, access notes or special handling..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group mt-2"
          >
            <span>Request my quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Footnote */}
          <p className="text-[10px] text-center text-slate-500 pt-1">
            No account or payment required. Your details are securely protected.
          </p>
        </form>
      )}
    </div>
  );
}
