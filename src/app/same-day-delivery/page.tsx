import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Truck, Phone, Building2, HelpCircle, XCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Same-Day Delivery UK — Guaranteed 60-Minute Direct Pickup",
  description:
    "UK's leading dedicated same-day delivery service. Guaranteed door-to-door pickup within 60 minutes nationwide. Direct drive parcels, urgent parts & pallets with 24/7 live tracking and £50,000 free insurance.",
  keywords: [
    "same day delivery UK",
    "60 minute parcel pickup",
    "urgent same day courier",
    "direct drive courier UK",
    "dedicated van same day",
    "InstaDrop same day delivery",
  ],
  openGraph: {
    title: "Same-Day Delivery UK | 60-Minute Direct Pickup | InstaDrop",
    description:
      "Direct door-to-door same-day parcel delivery across mainland UK. 60-minute pickup guarantee, £50k insurance included.",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.co.uk";

const faqs = [
  {
    q: "How fast can a courier pick up my parcel?",
    a: "We guarantee collection within 60 minutes anywhere across mainland UK. Our automated dispatch system immediately assigns your job to the nearest available dedicated driver.",
  },
  {
    q: "Is my delivery a dedicated direct vehicle?",
    a: "Yes! 100% of our same-day deliveries travel in an exclusive dedicated vehicle straight from A to B with zero co-loading or depot stops.",
  },
  {
    q: "Are my goods insured during transport?",
    a: "Yes, every single shipment includes £50,000 Goods-in-Transit insurance completely free of charge. Additional coverage up to £250,000 can be arranged.",
  },
  {
    q: "How do I receive proof of delivery?",
    a: "The second your recipient signs for the package on our driver's device, an automated email with signature and timestamped POD is sent to you.",
  },
  {
    q: "What areas in the UK do you cover?",
    a: "We cover 100% of mainland UK including London, Birmingham, Manchester, Leeds, Glasgow, Bristol, Newcastle, Liverpool, and all regional industrial hubs.",
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
      "description": "Guaranteed door-to-door pickup within 60 minutes nationwide. Direct drive parcels, urgent parts & pallets with 24/7 live tracking."
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
      title: "60-Minute Pickup Guarantee",
      desc: "Our automated dispatch algorithm locates the closest active driver in our network of over 120 UK logistics hubs, ensuring collection within 60 minutes.",
    },
    {
      title: "100% Dedicated Direct Drive",
      desc: "Your consignment is loaded into an exclusive vehicle traveling directly from pickup to delivery. Zero co-loading, zero sorting depots, zero detours.",
    },
    {
      title: "£50,000 Goods-in-Transit Insurance",
      desc: "Every single booking automatically includes £50,000 Goods-in-Transit insurance completely free of charge for full financial peace of mind.",
    },
    {
      title: "Real-Time Satellite GPS Tracking",
      desc: "Receive a live tracking link to monitor your driver's exact location on an interactive map from the instant of collection to final dropoff.",
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
    { step: "02", title: "60-Min Driver Dispatch", desc: "Our dispatch desk assigns the nearest dedicated vehicle driver to collect your parcel immediately." },
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
              <span className="text-[#c6ff00]">Collected Within 60 Minutes.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              When standard overnight postal networks are too slow or risky, InstaDrop provides dedicated door-to-door direct drive transport across the UK. 24/7 live tracking and £50,000 free insurance included.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Get Speedy Quote Now</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
              <a
                href="tel:08001234455"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
                <span>24/7 Hotline: 0800 123 4455</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c6ff00]" />
                <span>60-Min Pickup SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>£50,000 Insured Free</span>
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
                <li className="flex items-center gap-2">• Driver picked up within 60 minutes nationwide</li>
                <li className="flex items-center gap-2">• Live GPS tracking link update every second</li>
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
              Every same-day consignment is backed by our strict operational guarantees.
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
              100% UK MAINLAND COVERAGE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] font-display">
              Active Same-Day Dispatch Hubs
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs font-semibold text-slate-700">
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">London & M25</p>
              <p className="text-slate-400 mt-1">Pickup in 30-45 mins</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Birmingham & Midlands</p>
              <p className="text-slate-400 mt-1">Pickup in 45 mins</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Manchester & North West</p>
              <p className="text-slate-400 mt-1">Pickup in 45 mins</p>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200">
              <p className="font-bold text-sm text-[#0a192f]">Leeds & Yorkshire</p>
              <p className="text-slate-400 mt-1">Pickup in 45 mins</p>
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
                <span className="text-emerald-700 font-bold">Within 60 Mins</span>
                <span className="text-slate-400">Next Business Day</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Vehicle Dedication</span>
                <span className="text-emerald-700 font-bold">100% Exclusive Vehicle</span>
                <span className="text-slate-400">Shared Co-Loaded Truck</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Insurance Included</span>
                <span className="text-emerald-700 font-bold">£50,000 Policy Free</span>
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
            <a href="tel:08001234455" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/15">
              Call 0800 123 4455
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
