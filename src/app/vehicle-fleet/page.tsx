import type { Metadata } from "next";
import { Truck, ArrowRight, CheckCircle2, Zap, Package, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuoteWidget from "@/components/Home/QuoteWidget";

export const metadata: Metadata = {
  alternates: { canonical: "/vehicle-fleet" },
  title: "Speedy Vehicle Fleet — Small, SWB, LWB, XLWB & Luton Box Vans",
  description:
    "Explore InstaDrop's dedicated courier vehicle fleet: Small Vans (1 Pallet), SWB Vans (2 Pallets), LWB Vans (3 Pallets), XLWB Vans (4 Pallets), Luton Box Vans with Tail Lift (6 Pallets), and HGVs across the UK.",
  keywords: [
    "courier vehicle fleet UK",
    "small van courier 400kg",
    "SWB van 2 pallets",
    "LWB van 3 pallets",
    "XLWB van 4 pallets",
    "Luton tail lift van 6 pallets",
    "heavy freight HGVs UK",
  ],
  openGraph: {
    title: "Speedy Vehicle Fleet — Dedicated Couriers Nationwide | InstaDrop",
    description:
      "Find the exact vehicle size for your parcel, pallet, or heavy freight delivery.",
  },
};

export default function VehicleFleetPage() {
  const fleetData = [
    {
      name: "Small Van",
      slug: "small-van",
      badge: "1 Pallet / 400kg Max",
      tagline: "Ideal for urgent parcels, small boxes, and single Euro pallets.",
      payload: "400 kg",
      pallets: "1 Standard / Euro Pallet",
      length: "1.2 m",
      width: "1.2 m",
      height: "1.1 m",
      volume: "2.0 m³",
      ideal: "Small machinery replacement parts, urgent trade tools, IT hardware, single pallet, legal briefs.",
      features: [
        "Nationwide pickup within 60 minutes",
        "Direct door-to-door transit — zero co-loading",
        "Sliding side loading door + rear doors",
        "£50,000 Goods-in-Transit insurance included free",
      ],
      image: "/images/fleet/small-van.jpg"
    },
    {
      name: "Short Wheelbase Van (SWB)",
      slug: "swb-van",
      badge: "2 Pallets / 900kg Max",
      tagline: "Perfect for multiple boxes, medium trade cargo, and 2 standard pallets.",
      payload: "900 kg",
      pallets: "2 Standard / Euro Pallets",
      length: "2.4 m",
      width: "1.4 m",
      height: "1.4 m",
      volume: "6.0 m³",
      ideal: "Trade crates, 2 standard pallets, exhibition displays, commercial stock drops.",
      features: [
        "Fits 2 standard UK or Euro pallets",
        "Full standing cargo loading clearance",
        "Heavy-duty internal lashing points & straps",
        "Real-time satellite GPS tracking link",
      ],
      image: "/images/fleet/swb-van.jpg"
    },
    {
      name: "Long Wheelbase Van (LWB)",
      slug: "lwb-van",
      badge: "3 Pallets / 1100kg Max",
      tagline: "Designed for 3 standard pallets, long piping, and heavy commercial freight.",
      payload: "1,100 kg",
      pallets: "3 Standard / Euro Pallets",
      length: "3.4 m",
      width: "1.4 m",
      height: "1.7 m",
      volume: "10.5 m³",
      ideal: "Long timber & metal piping up to 3.4m, 3 pallets, heavy industrial parts.",
      features: [
        "Fits 3 standard pallets with ease",
        "High payload loading capacity up to 1.1 tonnes",
        "Side sliding door for forklift loading",
        "Instant electronic proof of delivery (POD)",
      ],
      image: "/images/fleet/lwb-van.jpg"
    },
    {
      name: "Extra Long Wheelbase Van (XLWB)",
      slug: "xlwb-van",
      badge: "4 Pallets / 1100kg Max",
      tagline: "Maximum cargo length up to 4.2m for 4 standard pallets and oversized freight.",
      payload: "1,100 kg",
      pallets: "4 Standard / Euro Pallets",
      length: "4.2 m",
      width: "1.4 m",
      height: "1.7 m",
      volume: "14.0 m³",
      ideal: "4 standard pallets, extra long materials, trade show stands, large factory moves.",
      features: [
        "Fits 4 standard pallets in line",
        "4.2m internal cargo bed length",
        "High roof standing clearance",
        "Direct A to B express drive nationwide",
      ],
      image: "/images/fleet/xlwb-van.jpg"
    },
    {
      name: "Luton Box Van with Hydraulic Tail Lift",
      slug: "luton-van",
      badge: "6 Pallets / 1000kg Max",
      tagline: "Box body with 500kg hydraulic tail-lift & pallet truck for 6 pallets.",
      payload: "1,000 kg",
      pallets: "6 Standard / Euro Pallets",
      length: "4.2 m",
      width: "2.0 m",
      height: "2.0 m",
      volume: "18.0 m³",
      ideal: "6 Euro pallets, heavy warehouse machinery, bulky furniture, construction drops.",
      features: [
        "500kg hydraulic tail-lift for ground loading",
        "Pallet truck & cargo lashing straps provided",
        "Fits 6 standard Euro pallets",
        "Box body maximum width & square loading volume",
      ],
      image: "/images/fleet/luton-van.jpg"
    },
    {
      name: "Something Bigger (Heavy Freight & HGVs)",
      slug: "something-bigger",
      badge: "8-26 Pallets / 1.5t to 26t",
      tagline: "7.5t, 18t & 26t curtainside HGVs for full truckloads (FTL) and heavy machinery.",
      payload: "1,500 kg to 26,000 kg",
      pallets: "8 to 26 Standard Pallets",
      length: "6.0m to 13.6m",
      width: "2.4 m",
      height: "2.4 m",
      volume: "35m³ to 90m³",
      ideal: "Factory relocations, full truckload freight (FTL), heavy steel/construction loads.",
      features: [
        "7.5t Box/Curtainside, 18t Rigid, 26t Articulated Trucks",
        "Moffett lorry-mounted forklift options available",
        "Dedicated transport manager assignment",
        "Custom UK & European transit insurance up to £250,000",
      ],
      image: "/images/fleet/hgv-truck.jpg"
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-12 lg:py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#c6ff00]" />
              <span>SPEEDY VEHICLE FLEET DIRECTORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              Speedy Vehicles. <br />
              <span className="text-[#c6ff00]">Dedicated Nationwide Fleet.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
              Complete fleet of dedicated same-day delivery vehicles—from Small Vans (1 Pallet) to 26t HGVs. Direct door-to-door drive with zero co-loading stops.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#c6ff00]" />
                <span>60-Min SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>£50k Insured Free</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#0066ff]" />
                <span>1 to 26 Pallets</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* 2. Compact Fleet Cards Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              EXACT SPECIFICATIONS & PALLET LIMITS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] font-display">
              Choose the Right Vehicle Size
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Match your parcel weight, dimensions, or pallet count below for immediate 60-minute dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fleetData.map((v) => (
              <div
                key={v.name}
                id={v.slug}
                className="group bg-[#0a192f] text-white rounded-2xl p-5 border border-white/10 hover:border-[#c6ff00]/60 hover:shadow-[0_15px_35px_rgba(10,25,47,0.25)] transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />

                <div className="space-y-3.5">
                  {/* Top Badge & Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#0a192f] bg-[#c6ff00] px-2.5 py-0.5 rounded-full mb-1.5">
                        {v.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white font-display group-hover:text-[#c6ff00] transition-colors leading-snug">
                        {v.name}
                      </h3>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:border-[#c6ff00]/40 transition-colors">
                      <Truck className="w-5 h-5 text-[#c6ff00]" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-normal">
                    {v.tagline}
                  </p>

                  {/* Dimensions & Specs Grid Table - Compact 2 Column */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px]">
                    <div>
                      <div className="text-slate-400 text-[10px]">Payload:</div>
                      <div className="font-extrabold text-[#c6ff00]">{v.payload}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Pallet Limit:</div>
                      <div className="font-bold text-white truncate">{v.pallets.split('/')[0]}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Dimensions (LxW):</div>
                      <div className="font-medium text-slate-200">{v.length} x {v.width}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px]">Load Volume:</div>
                      <div className="font-bold text-[#0066ff]">{v.volume}</div>
                    </div>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 text-[11px] text-slate-300 font-medium">
                    {v.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instant Quote Button */}
                <div className="pt-3 border-t border-white/10">
                  <Link
                    href="/instant-quote"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Get Quote for {v.name.split(' ')[0]} Van</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0a192f]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hotline Assistance Banner */}
      <section className="py-12 bg-[#0a192f] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <Truck className="w-10 h-10 text-[#c6ff00] mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Need Advice on Vehicle Sizing or Heavy Freight?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Our experienced logistics coordinators are live 24/7 to analyze your cargo specs and provide the exact vehicle size at the best rate.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/instant-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-xs hover:bg-[#b2e600] transition-all shadow-md"
            >
              <span>Get Speedy Quote Online</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0a192f]" />
            </Link>
            <a
              href="tel:08001234455"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-extrabold text-xs hover:bg-white/20 border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
              <span>Call 0800 123 4455</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
