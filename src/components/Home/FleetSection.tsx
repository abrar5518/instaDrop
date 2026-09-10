import { Car, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FleetSection() {
  const vehicles = [
    {
      name: "Courier car",
      icon: Car,
      desc: "Documents, keys and small urgent parcels.",
      capacity: "Up to 25 kg",
      href: "/vehicle-fleet#courier-car",
    },
    {
      name: "Small van",
      icon: Truck,
      desc: "Boxes, equipment and everyday business delivery.",
      capacity: "Up to 450 kg",
      href: "/vehicle-fleet#small-van",
    },
    {
      name: "Medium van",
      icon: Truck,
      desc: "Bulkier items, stock and multiple parcels.",
      capacity: "Up to 900 kg",
      href: "/vehicle-fleet#medium-van",
    },
    {
      name: "Large van",
      icon: Truck,
      desc: "Pallets, freight and commercial consignments.",
      capacity: "Up to 1,200 kg",
      href: "/vehicle-fleet#large-van",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
            RIGHT VEHICLE, EVERY TIME
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            A dedicated fleet for every delivery
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Your parcel travels directly in the vehicle that fits it best—no sorting hubs, no unnecessary stops.
          </p>
        </div>

        {/* 4 Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v) => {
            const IconComp = v.icon;
            return (
              <Link
                key={v.name}
                href={v.href}
                className="bg-white/5 rounded-3xl p-7 border border-white/10 hover:border-[#c6ff00]/50 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#c6ff00] flex items-center justify-center group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {v.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c6ff00] group-hover:text-white transition-colors pt-2">
                  <span>{v.capacity}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
