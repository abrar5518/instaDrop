import type { Metadata } from "next";
import { Car, Truck, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/vehicle-fleet" },
  title: "Vehicle Fleet Guide — Small, Medium, Large & Luton Vans",
  description:
    "View InstaDrop's same-day courier vehicle fleet. Payload capacities from 25kg to 1,200kg, cargo dimensions, pallet limits, and Luton tail-lift specifications across the UK.",
  keywords: [
    "courier vehicle fleet",
    "small van courier capacity",
    "medium van pallet size",
    "large van payload UK",
    "luton tail lift courier",
    "InstaDrop fleet guide",
  ],
  openGraph: {
    title: "Vehicle Fleet Guide — Courier Payload & Pallet Sizes | InstaDrop",
    description:
      "Find the exact vehicle size for your parcel, pallet, or heavy freight delivery.",
  },
};

export default function VehicleFleetPage() {
  const fleetData = [
    {
      name: "Courier Car",
      id: "courier-car",
      icon: Car,
      payload: "Up to 25 kg",
      dimensions: "40cm (L) x 30cm (W) x 20cm (H)",
      pallets: "Small Parcels / Envelopes",
      ideal: "Passports, urgent legal files, keys, small medical scripts",
      badge: "City Express",
      features: ["Lowest mileage rate", "Fast urban maneuverability", "Hand-to-hand signature", "Instant dispatch"],
    },
    {
      name: "Small Van",
      id: "small-van",
      icon: Truck,
      payload: "Up to 450 kg",
      dimensions: "1.5m (L) x 1.2m (W) x 1.1m (H)",
      pallets: "1 Standard Pallet (Up to 1.1m high)",
      ideal: "Boxes, IT equipment, small machinery replacement parts",
      badge: "Popular Business",
      features: ["Fits 1 Euro or UK pallet", "Sliding side door access", "Ideal for daily trade drops", "Direct delivery available"],
    },
    {
      name: "Medium Van (SWB)",
      id: "medium-van",
      icon: Truck,
      payload: "Up to 900 kg",
      dimensions: "2.4m (L) x 1.4m (W) x 1.4m (H)",
      pallets: "2 Standard Pallets",
      ideal: "Multiple trade crates, exhibition displays, medium freight",
      badge: "High Versatility",
      features: ["Fits 2 standard pallets", "Full standing loading clearance", "Cargo lashing straps", "Direct drive express"],
    },
    {
      name: "Large Van (LWB)",
      id: "large-van",
      icon: Truck,
      payload: "Up to 1,200 kg",
      dimensions: "3.4m (L) x 1.7m (W) x 1.7m (H)",
      pallets: "3 Standard Pallets",
      ideal: "Long timber/pipes, heavy machinery, multi-box office moves",
      badge: "Heavy Freight",
      features: ["Fits 3 standard pallets", "Long cargo loading length", "High payload clearance", "Dedicated direct transport"],
    },
    {
      name: "Extra Large Luton (Tail Lift)",
      id: "luton-tail-lift",
      icon: Truck,
      payload: "Up to 1,000 kg",
      dimensions: "4.0m (L) x 2.0m (W) x 2.0m (H)",
      pallets: "4 to 6 Standard Pallets",
      ideal: "Heavy warehouse pallets, bulky equipment requiring tail-lift",
      badge: "Hydraulic Tail-Lift",
      features: ["500kg hydraulic tail-lift", "Box body with maximum volume", "Pallet truck equipped driver", "Direct warehouse drop"],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
            RIGHT VEHICLE FOR EVERY LOAD
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            InstaDrop Fleet Guide
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Select the exact vehicle size for your cargo. No paying for unused space, and no delays due to under-sized vehicles.
          </p>
        </div>
      </section>

      {/* 2. Fleet Cards List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.name}
                  id={v.id}
                  className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/90 hover:border-[#0066ff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-6">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0a192f] bg-[#c6ff00] px-3 py-1 rounded-full">
                        {v.badge}
                      </span>
                    </div>

                    {/* Title & Ideal Use */}
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#0a192f] font-display">
                        {v.name}
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Best for: <span className="text-slate-800 font-semibold">{v.ideal}</span>
                      </p>
                    </div>

                    {/* Specs Box */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2 text-xs font-semibold text-slate-700">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-400">Max Payload:</span>
                        <span className="font-bold text-[#0a192f]">{v.payload}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-400">Cargo Dimensions:</span>
                        <span className="font-semibold text-slate-800">{v.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Pallet Limit:</span>
                        <span className="font-bold text-[#0066ff]">{v.pallets}</span>
                      </div>
                    </div>

                    {/* Bullet features */}
                    <ul className="space-y-2 text-xs font-semibold text-slate-600">
                      {v.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href="/instant-quote"
                      className="w-full py-3 px-4 rounded-xl bg-[#0a192f] hover:bg-[#051329] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors group-hover:bg-[#0066ff]"
                    >
                      <span>Select {v.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#c6ff00]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Fleet Selection Help Banner */}
      <section className="py-16 bg-[#0a192f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <Zap className="w-10 h-10 text-[#c6ff00] mx-auto" />
          <h2 className="text-3xl font-extrabold text-white font-display">
            Not Sure Which Vehicle Size You Need?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our dispatch team can help you choose the most cost-effective vehicle size based on your exact parcel dimensions or pallet count.
          </p>
          <div className="pt-2">
            <Link
              href="/instant-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-sm hover:bg-[#b2e600] transition-all"
            >
              <span>Get Advice & Price</span>
              <ArrowRight className="w-4 h-4 text-[#0a192f]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
