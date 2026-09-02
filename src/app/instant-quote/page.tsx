import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { ContactPhone } from "@/components/Contact/ContactSettings";
import { Clock, ShieldCheck, Zap, Phone, CheckCircle2, Calculator, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Speedy Quote — Instant Same-Day Courier Price Calculator",
  description:
    "Get an instant, transparent quote for same-day parcel, pallet, and freight delivery across the UK. 60-minute pickup guarantee. Calculate your price in 30 seconds with InstaDrop.",
  keywords: [
    "speedy quote courier",
    "instant same day delivery quote",
    "courier price calculator UK",
    "pallet quote same day",
    "InstaDrop quote",
  ],
  openGraph: {
    title: "Speedy Quote — Instant Same-Day Courier Calculator | InstaDrop",
    description:
      "Calculate your instant same-day parcel and pallet delivery rate in 30 seconds. Pickups within 60 minutes nationwide.",
  },
};

export default function InstantQuotePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>30-Second Speedy Quote Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
              Instant Same-Day Delivery Rates. <br />
              <span className="text-[#c6ff00]">No Hidden Surcharges.</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              Fill out your journey details below to receive a guaranteed fixed price. Dedicated driver collection within 60 minutes anywhere in the UK.
            </p>

            <div className="space-y-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>Zero co-loading — 100% dedicated direct drive</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>£50,000 Goods-in-transit insurance included free</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />
                <span>Live GPS tracking link sent to WhatsApp or email</span>
              </div>
            </div>

            {/* Direct Phone Call Box */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0066ff] text-white flex items-center justify-center font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Prefer to book over the phone?</p>
                <ContactPhone suffix=" (24/7 Desk)" className="text-lg font-black text-[#c6ff00] hover:underline font-display" />
              </div>
            </div>
          </div>

          {/* Right Embedded Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Why Choose InstaDrop Speedy Quote */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              TRANSPARENT PRICING GUARANTEE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why InstaDrop Quotes Beat Competitors
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              We provide fixed, transparent door-to-door delivery costs without post-booking surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066ff] flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">60-Minute Pickup</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                As soon as you approve your quote, our local dispatch engine assigns the nearest dedicated vehicle instantly.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">£50,000 Insured Free</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every quote includes £50,000 Goods-in-Transit insurance at zero added cost to protect your cargo.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">Fixed Upfront Rates</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                No hidden weekend, night, or fuel surcharges. What we quote is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote FAQ Quick Help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <h3 className="text-2xl font-bold text-[#0a192f] text-center font-display">
            Quick Questions About Your Speedy Quote
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 space-y-2">
              <p className="font-bold text-sm text-[#0a192f] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0066ff]" />
                How quickly will I receive my price?
              </p>
              <p className="leading-relaxed">
                Our automated calculator provides live estimates instantly. For custom heavy freight or multi-stop routes, our dispatch desk responds within 5 minutes.
              </p>
            </div>

            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 space-y-2">
              <p className="font-bold text-sm text-[#0a192f] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0066ff]" />
                Do I need an account to book?
              </p>
              <p className="leading-relaxed">
                No account required! You can request quotes and pay via encrypted credit card or pay by invoice for business account holders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
