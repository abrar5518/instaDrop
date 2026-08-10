import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { Clock, RefreshCw, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wait & Return Courier Service UK — On-Site Driver Waiting",
  description:
    "InstaDrop's Wait & Return courier service across the UK. Our dedicated driver delivers your item, waits on-site up to 2 hours for contract signing or part exchanges, and immediately returns to you.",
  keywords: [
    "wait and return courier UK",
    "courier wait on site",
    "contract signing courier",
    "exchange part courier same day",
    "InstaDrop wait and return",
  ],
  openGraph: {
    title: "Wait & Return Courier Service UK | InstaDrop",
    description:
      "Driver delivers, waits on-site up to 2 hours, and returns items directly back to you.",
  },
};

export default function WaitAndReturnPage() {
  const features = [
    { title: "2 Hours On-Site Waiting Included", desc: "Our driver remains parked on site up to 2 hours while documents are signed or parts inspected." },
    { title: "50% Return Leg Discount", desc: "Save heavily compared to booking two separate one-way courier journeys for return deliveries." },
    { title: "Same Driver Both Ways", desc: "Zero risk of lost items or driver confusion. The exact same dedicated courier handles both directions." },
    { title: "60-Minute Pickup SLA", desc: "Collection guaranteed within 60 minutes nationwide to initiate your wait and return journey." },
    { title: "Real-Time Satellite GPS", desc: "Monitor both the outward journey and return journey in real-time on an interactive satellite map." },
    { title: "£50,000 Goods Insurance", desc: "Full Goods-in-Transit insurance coverage applies during outward transit, waiting time, and return transit." },
  ];

  const workflow = [
    { step: "01", title: "Wait & Return Request", desc: "Select Wait & Return in our speedy quote calculator or specify on-site waiting time needed." },
    { step: "02", title: "Driver Dispatch", desc: "Nearest dedicated courier is assigned to collect your documents or equipment within 60 mins." },
    { step: "03", title: "Outward Express Drive", desc: "Driver travels directly to recipient site with live GPS tracking updates." },
    { step: "04", title: "On-Site Waiting & Exchange", desc: "Driver waits on site while contracts are signed, goods inspected, or parts swapped." },
    { step: "05", title: "Return Journey & POD", desc: "Driver immediately returns to your door with executed originals or exchanged parts." },
  ];

  const useCases = [
    { title: "Commercial Contract Signing", desc: "Delivering multi-million pound contracts for instant director signature and immediate return." },
    { title: "Defective Warranty Part Exchanges", desc: "Delivering a new replacement part and bringing back the defective component for analysis." },
    { title: "Auditing & Compliance Papers", desc: "Submitting confidential financial binders for auditor stamp and immediate safe return." },
    { title: "Trade Show Equipment Returns", desc: "Transporting exhibition banners, waiting for trade show conclusion, and returning gear." },
  ];

  const faqs = [
    { q: "How much waiting time is included in the service?", a: "We include up to 2 hours of on-site driver waiting time as standard. Additional waiting time can be extended at a low hourly rate." },
    { q: "How much do I save compared to two separate bookings?", a: "By booking a Wait & Return journey, you save up to 50% on the return leg fare compared to booking two separate one-way couriers." },
    { q: "Will the same driver handle both the outward and return legs?", a: "Yes! The exact same dedicated driver and vehicle remain with your consignment throughout the entire journey." },
    { q: "What happens if the recipient takes longer than 2 hours?", a: "Your driver will inform our dispatch desk. We will notify you immediately and extend the on-site waiting time at a clear hourly rate." },
    { q: "Is the return journey tracked on GPS?", a: "Yes, your live GPS tracking link stays active during both the outward drive, on-site wait, and return drive back to your desk." },
    { q: "How quickly can a Wait & Return courier be collected?", a: "Collection is guaranteed within 60 minutes anywhere across mainland UK, 24 hours a day." },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>SAME DEDICATED DRIVER BOTH WAYS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Wait & Return Courier. <br />
              <span className="text-[#c6ff00]">Delivered & Brought Back.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Our driver delivers your consignment, waits on site for signatures or part exchanges, and brings the returned items straight back to your desk.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Get Wait & Return Rate</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              SMART RETURN LOGISTICS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why Businesses Use Wait & Return
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
              4-STEP WORKFLOW
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Wait & Return Process
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

      {/* 4. Use Cases */}
      <section className="py-20 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              SERVICE SCENARIOS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Ideal Applications for Wait & Return
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#c6ff00] text-[#0a192f] flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
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
            Wait & Return FAQs
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
            Book a Wait & Return Courier Today
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Save up to 50% on return leg costs compared to two separate bookings.
          </p>
          <div className="pt-2">
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]">
              Get Wait & Return Rate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
