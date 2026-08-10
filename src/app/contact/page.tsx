import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact 24/7 Dispatch Desk — Hotline & Support",
  description:
    "Contact InstaDrop's 24/7 same-day courier dispatch desk. Call freephone hotline 0800 123 4455 or submit an urgent booking request online. Head office & regional hub support.",
  keywords: [
    "contact same day courier",
    "courier helpline 24/7",
    "InstaDrop phone number",
    "emergency courier phone number",
    "same day courier contact desk",
  ],
  openGraph: {
    title: "Contact 24/7 Dispatch Desk | InstaDrop Courier",
    description:
      "Call 0800 123 4455 for emergency 60-minute pickup or contact our dispatch team online.",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-[#c6ff00] border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
            <span>24/7/365 LIVE DISPATCH DESK ACTIVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Contact InstaDrop Operations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Need an immediate pickup or have an inquiry about a booking? Speak directly to our experienced logistics coordinators 24 hours a day.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Call Box */}
              <div className="bg-[#0a192f] text-white rounded-3xl p-8 border border-[#0a192f] space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0066ff] text-white flex items-center justify-center font-bold">
                    <Phone className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#c6ff00] uppercase tracking-wider">
                      Freephone 24/7 Hotline
                    </p>
                    <a href="tel:08001234455" className="text-2xl font-black text-white hover:text-[#c6ff00] font-display">
                      0800 123 4455
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call for emergency same-day pickups. A courier can be at your door within 60 minutes anywhere in the UK.
                </p>
              </div>

              {/* Email Box */}
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0066ff] text-white flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Dispatch Email</p>
                    <a href="mailto:dispatch@instadrop.co.uk" className="text-sm font-bold text-[#0a192f] hover:text-[#0066ff]">
                      dispatch@instadrop.co.uk
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Email us for corporate account setups, tender requests, or custom freight quotes. Average reply time: 5 mins.
                </p>
              </div>

              {/* Head Office Address Box */}
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-bold uppercase">Head Office Hub</p>
                    <p className="text-sm font-bold text-[#0a192f]">
                      InstaDrop Logistics House
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Central Logistics Park, M25 Hub Highway, London UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0a192f] font-display">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Our customer service team is online and ready to assist you.
                </p>
              </div>

              <form className="space-y-4 text-xs font-semibold">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07 1234 56789"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.uk"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      INQUIRY TYPE *
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]">
                      <option>General Support / Inquiry</option>
                      <option>Corporate Account Application</option>
                      <option>Existing Delivery Update</option>
                      <option>Invoice / Billing Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our dispatch team help you today?"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] text-white font-bold text-sm shadow-md transition-colors"
                >
                  Send Message to Operations Desk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
