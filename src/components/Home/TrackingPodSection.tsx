import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrackingPodSection() {
  return (
    <section id="tracking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Tracking Mockup (6 cols) */}
          <div className="lg:col-span-6 bg-[#e8f2ff] rounded-3xl p-6 sm:p-10 flex items-center justify-center border border-blue-100">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl space-y-5 border border-slate-100">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE DELIVERY
                </span>
                <span className="text-slate-400 text-xs">•••</span>
              </div>

              {/* Title & Driver */}
              <div>
                <h4 className="text-lg font-bold text-[#0a192f] font-display">
                  Your delivery is on the way
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Driver: Marcus • Medium van
                </p>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4 text-xs relative pl-6 border-l-2 border-slate-200">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-[#0066ff] border-2 border-white" />
                  <p className="font-bold text-slate-800">Collected</p>
                  <p className="text-slate-500 text-[11px]">Manchester • 09:42</p>
                </div>

                <div className="relative pt-2">
                  <div className="absolute -left-[31px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#c6ff00] border-2 border-[#0a192f]" />
                  <p className="font-bold text-slate-800">Delivering to</p>
                  <p className="text-slate-500 text-[11px]">London • ETA 13:55</p>
                </div>
              </div>

              {/* ETA Pill */}
              <div className="pt-2">
                <div className="bg-[#0a192f] text-white px-4 py-3 rounded-xl flex items-center justify-between text-xs font-bold shadow-md">
                  <span>Estimated arrival</span>
                  <span className="text-base text-[#c6ff00]">1h 24m</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              ALWAYS IN THE LOOP
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display leading-tight">
              Complete visibility, from collection to POD
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              No chasing. No guessing. Receive clear updates through your preferred channel, plus digital proof the moment delivery is complete.
            </p>

            {/* Check Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c6ff00] text-[#0a192f] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a192f]">Updates where you want them</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Choose WhatsApp or email when requesting your quote.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c6ff00] text-[#0a192f] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a192f]">Secure invoice and payment</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Review your invoice and pay through an encrypted link.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c6ff00] text-[#0a192f] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a192f]">Digital proof of delivery</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receive POD automatically as soon as your parcel arrives.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0a192f] hover:bg-[#051329] text-white text-sm font-bold transition-all shadow-sm"
              >
                <span>Track a delivery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
