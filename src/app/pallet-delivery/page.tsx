import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { Package, CheckCircle2, ArrowRight, Layers, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pallet Delivery UK — Same-Day Heavy Freight & Luton Tail-Lift Vans",
  description:
    "UK's leading same-day pallet and heavy freight delivery service. Dedicated Luton vans with hydraulic tail-lifts, 60-minute pickup, 1 to 6 pallet capacity, and £50,000 free insurance.",
  keywords: [
    "same day pallet delivery UK",
    "heavy freight courier",
    "luton tail lift pallet delivery",
    "euro pallet same day",
    "warehouse pallet courier",
    "InstaDrop pallet express",
  ],
  openGraph: {
    title: "Pallet Delivery UK | Same-Day Heavy Freight | InstaDrop",
    description:
      "Direct warehouse-to-site pallet transport. Tail-lift Luton vans, 60-minute pickup SLA.",
  },
};

export default function PalletDeliveryPage() {
  const palletTypes = [
    {
      type: "Standard UK Pallet",
      dim: "120cm (L) x 100cm (W) x 150cm (H)",
      weight: "Up to 1,000 kg",
      desc: "Standard UK industrial pallet format used across manufacturing plants and commercial retail hubs.",
    },
    {
      type: "Euro Pallet",
      dim: "120cm (L) x 80cm (W) x 150cm (H)",
      weight: "Up to 800 kg",
      desc: "European standard pallet size for imported machinery, trade goods, and commercial crates.",
    },
    {
      type: "Oversized Heavy Freight",
      dim: "Custom Lengths & Widths",
      weight: "Up to 1,200 kg per load",
      desc: "Industrial machinery, long crates, timber bundles, steel pipes, and non-standard heavy equipment.",
    },
  ];

  const features = [
    { title: "500kg Hydraulic Tail-Lift", desc: "Equipped with power tail-lifts for effortless loading and unloading at sites without fork-lifts." },
    { title: "1 to 6 Pallet Load Capacity", desc: "Luton vans and heavy rigid vehicles accommodate single or multi-pallet consignments direct." },
    { title: "Pallet Trucks & Straps Included", desc: "Drivers carry manual pallet jacks and heavy-duty cargo lashing straps to secure your cargo." },
    { title: "60-Minute Pickup SLA", desc: "Our heavy freight dispatch network collects urgent pallets within 60 minutes nationwide." },
    { title: "£50,000 Insurance Free", desc: "Comprehensive Goods-in-Transit policy covers your palletized goods against loss or damage." },
    { title: "Direct Warehouse-to-Site Drops", desc: "No sorting hub delays. Goods travel directly from factory or warehouse straight to final site." },
  ];

  const workflow = [
    { step: "01", title: "Instant Pallet Quote", desc: "Select pallet dimensions and postcodes in our speedy quote engine to calculate fixed rates." },
    { step: "02", title: "Luton Driver Assigned", desc: "Nearest available tail-lift Luton van driver is dispatched to your pickup location." },
    { step: "03", title: "Tail-Lift Loading", desc: "Pallets loaded using hydraulic tail-lift & pallet truck and strapped down securely." },
    { step: "04", title: "Direct Route Transit", desc: "Express vehicle travels directly to dropoff destination with real-time satellite GPS tracking." },
    { step: "05", title: "Site Unload & Digital POD", desc: "Unloaded directly at recipient bay and electronic proof of delivery emailed instantly." },
  ];

  const faqs = [
    { q: "Do I need a forklift at the pickup or delivery site?", a: "No! Our Luton vans come equipped with 500kg hydraulic tail-lifts and manual pallet trucks, allowing easy loading at ground level." },
    { q: "How many pallets can a Luton van carry?", a: "An Extra Large Luton van can carry up to 4 standard UK pallets or 6 Euro pallets up to a total payload weight of 1,000kg." },
    { q: "How quickly can a pallet be collected?", a: "We guarantee collection within 60 minutes anywhere across mainland UK, 24 hours a day." },
    { q: "Are heavy pallets insured?", a: "Yes, every pallet consignment automatically includes £50,000 Goods-in-Transit insurance completely free." },
    { q: "Do you deliver pallets directly to construction sites?", a: "Yes! Our drivers specialize in direct site deliveries, industrial parks, and distribution warehouses." },
    { q: "Can I track my pallet delivery in real-time?", a: "Yes, you receive a live satellite GPS tracking link to monitor your courier from pickup straight to dropoff." },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Package className="w-4 h-4" />
              <span>SAME-DAY HEAVY FREIGHT & PALLET EXPRESS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Same-Day Pallet Delivery. <br />
              <span className="text-[#c6ff00]">Hydraulic Tail-Lift Luton Vans.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Transport heavy pallets, commercial machinery, and industrial freight door-to-door without depot delays. Pickups within 60 minutes nationwide.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Calculate Pallet Rate</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Supported Pallet Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              PALLET SPECIFICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Supported Pallet & Heavy Freight Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {palletTypes.map((p) => (
              <div key={p.type} className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] font-display">{p.type}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 text-xs font-semibold text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dim:</span>
                    <span>{p.dim}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Max Payload:</span>
                    <span className="font-bold text-[#0066ff]">{p.weight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 6 Key Features */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              FREIGHT CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why InstaDrop Heavy Pallet Delivery Outperforms Hub Networks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-3">
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

      {/* 4. 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              OPERATIONAL WORKFLOW
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Pallet Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflow.map((w) => (
              <div key={w.step} className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 space-y-3 flex flex-col justify-between">
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

      {/* 5. FAQs */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0a192f] text-center font-display">
            Pallet Freight FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2">
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

      {/* 6. CTA Banner */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Need a Tail-Lift Luton Van Picked Up in 60 Minutes?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book online in 30 seconds or call our 24/7 heavy freight dispatch desk.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]">
              Get Pallet Quote
            </Link>
            <a href="tel:08001234455" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15">
              Call 0800 123 4455
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
