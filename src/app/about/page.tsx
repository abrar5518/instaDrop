import type { Metadata } from "next";
import { Zap, ShieldCheck, Clock, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About InstaDrop — UK's Dedicated Same-Day Courier Network",
  description:
    "Learn about InstaDrop's professional UK same-day courier and dedicated vehicle delivery approach.",
  keywords: [
    "about InstaDrop courier",
    "same day courier company UK",
    "dedicated courier network",
    "urgent courier UK",
    "InstaDrop logistics",
  ],
  openGraph: {
    title: "About InstaDrop — Same-Day Courier UK",
    description:
      "Our mission: Deliver urgent parcels and heavy freight door-to-door within hours across the UK.",
  },
};

export default function AboutPage() {
  const stats = [
    { label: "Service Area", val: "United Kingdom" },
    { label: "Transport", val: "Dedicated" },
    { label: "Booking Support", val: "Dispatch Team" },
    { label: "Delivery Records", val: "POD Available" },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-[#c6ff00]" />
            <span>THE INSTADROP STORY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Built for Deliveries That Can&apos;t Wait
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            InstaDrop was founded with a single mission: to eliminate the delays, lost packages, and sorting-hub headaches of standard parcel networks by providing dedicated door-to-door transport.
          </p>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="py-12 bg-[#051329] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-[#c6ff00] font-display">{s.val}</p>
              <p className="text-xs font-semibold text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              OUR FOUNDING PRINCIPLES
            </p>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">
              Why Businesses Depend on InstaDrop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] font-display">Speed & Precision</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Collection timing is confirmed for each booking based on location, vehicle availability and the required service. Dedicated vehicles travel directly between the agreed addresses.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] font-display">Total Accountability</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Available tracking and proof-of-delivery information is provided according to the confirmed booking and the records captured by dispatch.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] font-display">Smarter Fleet Network</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We leverage smart route optimization and local driver positioning to reduce empty mileage and decrease carbon emissions per delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Ready to Experience the InstaDrop Difference?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get an instant price in 30 seconds or speak with our 24/7 operations team.
          </p>
          <div className="pt-2">
            <Link
              href="/instant-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]"
            >
              <span>Get Speedy Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0a192f]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
