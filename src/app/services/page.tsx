import type { Metadata } from "next";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { Zap, Briefcase, Package, Activity, FileText, Clock, ArrowRight, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Same-Day Courier Services — Dedicated Van, Pallet & Urgent Logistics",
  description:
    "Explore InstaDrop's same-day dedicated courier services: Express parcel delivery, heavy pallet freight, GDP medical transport, confidential legal documents, and wait & return service across the UK.",
  keywords: [
    "same day courier services",
    "dedicated van delivery",
    "pallet freight same day",
    "medical courier service UK",
    "legal document courier",
    "wait and return courier",
  ],
  openGraph: {
    title: "Same-Day Courier Services — Dedicated Van & Freight | InstaDrop",
    description:
      "Direct door-to-door same-day courier services across the UK. 60-minute pickup guarantee, £50k insurance included.",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.co.uk";

const servicesSchema = {
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
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Same-Day Dedicated Courier Services",
      "provider": {
        "@type": "DeliveryService",
        "name": "InstaDrop Courier Services",
        "url": siteUrl
      },
      "areaServed": "United Kingdom",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Courier Services Directory",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Same-Day Dedicated Express"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heavy Pallet & Freight Express"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medical & Bio-Specimen Logistics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legal & Confidential Documents"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wait & Return Courier Service"
            }
          }
        ]
      }
    }
  ]
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "sameday",
      title: "Same-Day Dedicated Express",
      badge: "60-Min Pickup SLA",
      icon: Zap,
      href: "/same-day-delivery",
      subtitle: "Direct door-to-door transport with zero co-loading or intermediate hub stops.",
      description:
        "When an urgent parcel or part must arrive today without exception, our Same-Day Dedicated Express is the fastest solution. Your consignment travels in an exclusive vehicle straight from pickup to delivery.",
      specs: [
        "Nationwide pickup within 60 minutes guaranteed",
        "Exclusive dedicated driver — zero co-loading",
        "Real-time satellite GPS tracking link sent to phone/email",
        "£50,000 Goods-in-transit insurance policy included free",
        "Instant electronic signature proof of delivery (POD)",
      ],
    },
    {
      id: "business",
      title: "Business & Contract Courier Accounts",
      badge: "30-Day Net Terms",
      icon: Briefcase,
      href: "/business-accounts",
      subtitle: "Scalable logistics support for companies with regular or daily time-critical needs.",
      description:
        "Streamline your corporate supply chain with dedicated courier accounts. Get preferential volume rates, monthly consolidated invoicing, priority driver dispatch, and a dedicated account manager.",
      specs: [
        "Monthly invoice & flexible 30-day net credit terms",
        "Dedicated corporate account coordinator & SLA guarantees",
        "Multi-user employee booking portal & CSV bulk import",
        "Tiered volume discounts saving up to 25% on mileage",
        "Enhanced transit insurance options up to £250,000",
      ],
    },
    {
      id: "pallet",
      title: "Heavy Pallet & Freight Express",
      badge: "500kg Tail-Lift",
      icon: Package,
      href: "/pallet-delivery",
      subtitle: "Tail-lift Luton vans and heavy cargo vehicles for single or multi-pallet loads.",
      description:
        "Need to transport heavy machinery, raw materials, or commercial pallet loads today? Our Luton vans equipped with hydraulic tail lifts and pallet trucks handle heavy freight safely and efficiently.",
      specs: [
        "500kg hydraulic tail-lift equipped vehicles",
        "1 to 6 standard pallet load capacity (up to 1,200kg)",
        "Pallet truck & cargo lashing straps provided",
        "Direct warehouse-to-construction-site drops",
        "Timed appointment delivery windows across mainland UK",
      ],
    },
    {
      id: "medical",
      title: "Medical & Bio-Specimen Logistics",
      badge: "GDP Compliant",
      icon: Activity,
      href: "/medical-courier",
      subtitle: "Compliant transport for pharmaceutical samples, bloods, organs, and hospital gear.",
      description:
        "Time-critical medical transport requires rigorous care. Our trained couriers follow strict GDP guidelines, tamper-evident handling protocols, and urgent emergency hospital drops.",
      specs: [
        "GDP compliant trained drivers & bio-hazard safety",
        "Serialized tamper-evident security pouches",
        "Emergency NHS laboratory & pathology hospital drops",
        "Complete chain-of-custody documentation trail",
        "Direct point-to-point express without depot stops",
      ],
    },
    {
      id: "legal",
      title: "Legal & Confidential Documents",
      badge: "High Security",
      icon: FileText,
      href: "/legal-courier",
      subtitle: "Hand-to-hand signature delivery for court briefs, contracts, deeds, and tenders.",
      description:
        "Ensure confidential legal briefs, court filings, original contracts, and passports are delivered directly into the recipient's hands with sealed tamper bags and instant electronic signatures.",
      specs: [
        "Sealed serialized tamper-evident security pouches",
        "Hand-to-hand named recipient signature requirement",
        "Court submission deadline delivery SLA guarantee",
        "Immediate timestamped PDF POD notification emailed",
        "Discreet direct vehicle courier — zero multi-drop delays",
      ],
    },
    {
      id: "wait-return",
      title: "Wait & Return Courier Service",
      badge: "50% Return Fare Off",
      icon: Clock,
      href: "/wait-and-return",
      subtitle: "Driver waits on site while contracts are signed or parts exchanged, then returns.",
      description:
        "Save time and money with our Wait & Return service. Our courier delivers your documents or parts, waits on-site up to 2 hours while signatures or tests are completed, and immediately returns them to you.",
      specs: [
        "Up to 2 hours on-site waiting time included as standard",
        "Heavily discounted return leg fare saving up to 50%",
        "Ideal for signed contracts, tenders & warranty part swaps",
        "Same dedicated driver and vehicle throughout whole journey",
        "Continuous live satellite GPS tracking both ways",
      ],
    },
  ];

  const faqs = [
    { q: "What courier services does InstaDrop provide?", a: "We provide dedicated same-day parcel delivery, heavy pallet freight, GDP medical specimen transport, confidential legal document delivery, wait & return courier service, and corporate business accounts." },
    { q: "How fast is collection across the UK?", a: "We guarantee collection within 60 minutes nationwide from the moment your booking is confirmed." },
    { q: "Are all services delivered using dedicated vehicles?", a: "Yes! 100% of our services operate on exclusive dedicated direct vehicles with zero co-loading or sorting depot stops." },
    { q: "What is the insurance coverage per delivery?", a: "Every booking automatically includes £50,000 Goods-in-Transit insurance completely free of charge." },
    { q: "How do I calculate a price for my courier service?", a: "You can enter your pickup and dropoff postcodes in our speedy quote engine to calculate instant upfront rates in 30 seconds." },
    { q: "Can I open a corporate credit account for my company?", a: "Yes, business credit account applications take 2 minutes online and offer 30-day invoice terms and volume discounts up to 25%." },
  ];

  return (
    <div className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* 1. Hero Banner */}
      <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-[#c6ff00]" />
              <span>COMPREHENSIVE UK SAME-DAY SOLUTIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Dedicated Courier Services. <br />
              <span className="text-[#c6ff00]">Tailored For Every Cargo.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              From urgent legal briefs to heavy 6-pallet freight and GDP medical samples, InstaDrop delivers door-to-door across mainland UK with 60-minute pickup SLAs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md"
              >
                <span>Get Speedy Quote Now</span>
                <ArrowRight className="w-4 h-4 text-[#0a192f]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Full Service Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              EXPRESS SOLUTIONS DIRECTORY
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display">
              Specialized Courier Services
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              Select a specialized courier service below to view detailed vehicle specifications, SLAs, and pricing models.
            </p>
          </div>

          <div className="space-y-12">
            {serviceList.map((service, index) => {
              const IconComp = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border ${
                    isEven ? "bg-[#f8fafc] border-slate-200/80" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#c6ff00] text-[#0a192f]">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] font-display">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#0066ff] mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700 pt-2">
                      {service.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a192f] hover:bg-[#051329] text-white text-xs font-bold transition-all shadow-sm group"
                      >
                        <span>Learn More & Book {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#c6ff00] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#0a192f] text-white rounded-2xl p-8 space-y-6 border border-[#0a192f]">
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-[#c6ff00] uppercase tracking-wider">
                        Operational Guarantee
                      </p>
                      <h4 className="text-xl font-bold text-white font-display">
                        Direct Vehicle Dispatch
                      </h4>
                    </div>

                    <div className="space-y-3 text-xs text-slate-300">
                      <div className="flex justify-between py-2 border-b border-slate-800">
                        <span>Pickup SLA:</span>
                        <span className="font-bold text-[#c6ff00]">Within 60 Mins</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-800">
                        <span>Depot Sorting Stops:</span>
                        <span className="font-bold text-white">0 Stops (Direct Drive)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-800">
                        <span>Goods Insurance:</span>
                        <span className="font-bold text-emerald-400">Up to £50,000 Free</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Live Tracking:</span>
                        <span className="font-bold text-[#0066ff]">Satellite GPS Link</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              THE INSTADROP DIFFERENCE
            </p>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">
              InstaDrop vs Traditional Postal Networks
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-xs">
            <div className="grid grid-cols-3 bg-[#0a192f] text-white p-4 font-bold text-sm">
              <div>Feature</div>
              <div className="text-[#c6ff00]">InstaDrop Dedicated Courier</div>
              <div className="text-slate-400">Standard Overnight / Parcel Hubs</div>
            </div>

            <div className="divide-y divide-slate-100 font-semibold text-slate-700">
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Pickup SLA</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Collection in 60 minutes</span>
                <span className="text-slate-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400" /> All-day window (9am-6pm)</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Sorting Depots</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 0 Hub Stops (Direct A to B)</span>
                <span className="text-slate-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400" /> 3-5 Automated sorting depots</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Risk of Damage</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero (Dedicated exclusive vehicle)</span>
                <span className="text-slate-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400" /> High risk on automated belts</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span>Tracking</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Live GPS update every second</span>
                <span className="text-slate-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400" /> Delayed barcode scan updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-[#0a192f] text-center font-display">
            Services FAQs
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

      {/* 5. CTA */}
      <section className="py-16 bg-[#0a192f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-display">
            Need an Urgent Dedicated Courier Dispatch?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book online in 30 seconds or speak directly to our 24/7 dispatch desk.
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
