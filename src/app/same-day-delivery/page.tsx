import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Truck, Building2, HelpCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { ContactPhone } from "@/components/Contact/ContactSettings";

export const metadata: Metadata = {
  title: "Same-Day Delivery UK — Dedicated Direct Courier",
  description:
    "Dedicated same-day delivery for urgent parcels, parts and pallets across the UK, with collection timing, tracking options and cover confirmed for each booking.",
  keywords: [
    "same day delivery UK",
    "60 minute parcel pickup",
    "urgent same day courier",
    "direct drive courier UK",
    "dedicated van same day",
    "InstaDrop same day delivery",
  ],
  openGraph: {
    title: "Same-Day Delivery UK | Dedicated Direct Courier | InstaDrop",
    description:
      "Direct door-to-door same-day parcel delivery across mainland UK, subject to vehicle availability and confirmed booking terms.",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";

const faqs = [
  {
    q: "How fast can a courier pick up my parcel?",
    a: "Dispatch confirms an expected collection window after checking the route, traffic and suitable vehicle availability.",
  },
  {
    q: "Is my delivery a dedicated direct vehicle?",
    a: "A dedicated direct vehicle is used when that service is selected and confirmed in your quote.",
  },
  {
    q: "Are my goods insured during transport?",
    a: "Goods-in-Transit cover and limits depend on the declared contents, value and agreed booking terms. Dispatch confirms the applicable cover before collection.",
  },
  {
    q: "How do I receive proof of delivery?",
    a: "Where POD is supported, recipient and timestamp details are made available after the delivery is completed.",
  },
  {
    q: "What areas in the UK do you cover?",
    a: "We arrange collections across mainland UK, subject to postcode, route and vehicle availability. Dispatch confirms coverage before booking.",
  },
  {
    q: "Can I book a same-day courier outside normal business hours?",
    a: "Absolutely. Our dispatch desk and dedicated driver fleet operate 24 hours a day, 7 days a week, 365 days a year including weekends and bank holidays.",
  },
];

const pageSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${siteUrl}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Same-Day Delivery UK",
          "item": `${siteUrl}/same-day-delivery`
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Same-Day Dedicated Delivery UK",
      "serviceType": "Same-Day Courier Express",
      "provider": {
        "@type": "DeliveryService",
        "name": "InstaDrop Courier Services",
        "url": siteUrl
      },
      "areaServed": "United Kingdom",
      "description": "Dedicated door-to-door same-day transport for urgent parcels, parts and pallets, subject to vehicle availability and agreed booking terms."
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
};

export default function SameDayDeliveryPage() {
  const features = [
    {
      title: "Responsive Dispatch",
      desc: "Dispatch checks suitable vehicle availability and confirms an expected collection window for your route.",
    },
    {
      title: "100% Dedicated Direct Drive",
      desc: "Your consignment is loaded into an exclusive vehicle traveling directly from pickup to delivery. Zero co-loading, zero sorting depots, zero detours.",
    },
    {
      title: "Goods-in-Transit Cover",
      desc: "Applicable cover and limits are confirmed for the declared goods and agreed booking terms.",
    },
    {
      title: "Delivery-Status Updates",
      desc: "Supported bookings provide status updates; the level of tracking detail depends on the assigned courier.",
    },
    {
      title: "Instant Electronic POD",
      desc: "Upon delivery, an electronic signature and timestamped photo proof of delivery (POD) is automatically emailed to your desk.",
    },
    {
      title: "24/7/365 Live Operations Desk",
      desc: "No automated chatbots. Speak directly with experienced UK logistics coordinators 24 hours a day, 365 days a year.",
    },
  ];

  const workflow = [
    { step: "01", title: "Instant Quote Request", desc: "Enter your pickup & dropoff postcodes in our 30-second quote calculator to receive a fixed upfront price." },
    { step: "02", title: "Driver Dispatch", desc: "Our dispatch desk confirms the expected collection window and assigns a suitable vehicle." },
    { step: "03", title: "Secure Vehicle Loading", desc: "Your consignment is inspected, strapped, and loaded into an exclusive dedicated car or van." },
    { step: "04", title: "Direct GPS Transit", desc: "Your driver travels directly to the destination with live location updates sent to your email or WhatsApp." },
    { step: "05", title: "Instant POD Confirmation", desc: "Recipient signs electronically on the courier device and your digital POD is generated instantly." },
  ];

  const useCases = [
    { title: "Automotive & Manufacturing Line Breakdowns", desc: "Emergency delivery of replacement machine components to prevent costly factory downtime." },
    { title: "Aircraft AOG Parts & Maritime Logistics", desc: "Time-critical delivery of aircraft-on-ground components straight to airport cargo aprons." },
    { title: "Legal Court Filings & Confidential Documents", desc: "High-security tender briefs delivered hand-to-hand prior to strict court deadlines." },
    { title: "High-Value Electronics & Prototype Goods", desc: "Exclusive direct drive transit for fragile technology without automated sorting belts." },
    { title: "Healthcare & Emergency Medical Supplies", desc: "Compliant transport for biological samples, pharmaceuticals, and hospital equipment." },
    { title: "Corporate Event & Exhibition Displays", desc: "On-time delivery of trade show stands and promotional materials straight to event halls." },
  ];

  return (
    <div className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      {/* 1. Hero Section */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-[#c6ff00]" />
              <span>UK’S PREMIER SAME-DAY EXPRESS LOGISTICS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Dedicated Same-Day Delivery. <br />
              <span className="text-[#c6ff00]">Collection Confirmed by Dispatch.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              When standard overnight networks do not fit the deadline, InstaDrop can arrange dedicated door-to-door transport across the UK. Timing, status updates and applicable cover are confirmed for each booking.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Get Speedy Quote Now</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
              <ContactPhone prefix="24/7 Hotline: " className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/15" />
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c6ff00]" />
                <span>Confirmed Collection Window</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cover Confirmed Before Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0066ff]" />
                <span>Direct Dedicated Vehicle</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Context */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              THE DIRECT DRIVE ADVANTAGE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Why Traditional Postal Networks Fail Time-Critical Deliveries
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Standard overnight couriers pass your consignment through multiple automated sorting hubs, conveyor belts, and multi-drop delivery vans. One missed connection leads to delayed operations and lost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100 space-y-4">
              <div className="flex items-center gap-3 text-red-700 font-bold text-base">
                <XCircle className="w-6 h-6 text-red-500" />
                <span>Standard Multi-Drop Couriers</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Passes through 3 to 5 automated sorting hubs</li>
                <li className="flex items-center gap-2">• Parcels mixed with thousands of co-loaded items</li>
                <li className="flex items-center gap-2">• High risk of crushed boxes or misrouted tags</li>
                <li className="flex items-center gap-2">• Vague all-day delivery time windows</li>
              </ul>
            </div>

            <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 space-y-4">
              <div className="flex items-center gap-3 text-emerald-900 font-bold text-base">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <span>InstaDrop Dedicated Same-Day</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">• Exclusive vehicle goes directly from A to B</li>
                <li className="flex items-center gap-2">• Zero co-loading or depot belt handling</li>
                <li className="flex items-center gap-2">• Collection window confirmed by dispatch</li>
                <li className="flex items-center gap-2">• Delivery-status updates where supported</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 Key Features Grid */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              SERVICE SPECIFICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Built for Speed, Security & Precision
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Each same-day consignment is handled according to the service details confirmed in your booking.
            </p>
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

      {/* 4. 5-Step Operational Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              TRANSPARENT PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              How Same-Day Express Booking Works
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

      {/* 5. Industry Use Cases */}
      <section className="py-20 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              MISSION-CRITICAL LOGISTICS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Industries Relying on Same-Day Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#c6ff00] text-[#0a192f] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">{u.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UK Regional Hubs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              UK MAINLAND SERVICE AREA
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Active Same-Day Dispatch Hubs
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs font-semibold text-slate-700">
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">London & M25</p>
              <p className="text-slate-400 mt-1">Timing confirmed by dispatch</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Birmingham & Midlands</p>
              <p className="text-slate-400 mt-1">Timing confirmed by dispatch</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Manchester & North West</p>
              <p className="text-slate-400 mt-1">Timing confirmed by dispatch</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Leeds & Yorkshire</p>
              <p className="text-slate-400 mt-1">Timing confirmed by dispatch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comparison Table */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0a192f] text-center font-display">
            Direct Drive Comparison Matrix
          </h2>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden text-xs">
            <div className="grid grid-cols-3 bg-[#0a192f] text-white p-4 font-bold text-sm">
              <div>Metric</div>
              <div className="text-[#c6ff00]">InstaDrop Same-Day</div>
              <div className="text-slate-400">Standard Hub Couriers</div>
            </div>
            <div className="divide-y divide-slate-100 font-semibold text-slate-700">
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Collection Time</span>
                <span className="text-emerald-700 font-bold">Confirmed by Dispatch</span>
                <span className="text-slate-400">Next Business Day</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Vehicle Dedication</span>
                <span className="text-emerald-700 font-bold">100% Exclusive Vehicle</span>
                <span className="text-slate-400">Shared Co-Loaded Truck</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Insurance Included</span>
                <span className="text-emerald-700 font-bold">Confirmed for Declared Goods</span>
                <span className="text-slate-400">£50 Basic Cover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">GOT QUESTIONS?</p>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">
              Same-Day Delivery FAQs
            </h2>
          </div>

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

      {/* 9. CTA Banner */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Need Urgent Pickup Within 60 Minutes?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book online in 30 seconds or call our 24/7 operations desk.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/instant-quote" className="px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600]">
              Get Instant Quote
            </Link>
            <ContactPhone prefix="Call " className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15" />
          </div>
        </div>
      </section>
    </div>
  );
}
