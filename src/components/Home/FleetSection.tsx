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
      badge: "Fastest Pickup",
    },
    {
      name: "Small van",
      icon: Truck,
      desc: "Boxes, equipment and everyday business delivery.",
      capacity: "Up to 450 kg",
      href: "/vehicle-fleet#small-van",
      badge: "Popular Fleet",
    },
    {
      name: "Medium van",
      icon: Truck,
      desc: "Bulkier items, stock and multiple parcels.",
      capacity: "Up to 900 kg",
      href: "/vehicle-fleet#medium-van",
      badge: "High Capacity",
    },
    {
      name: "Large van",
      icon: Truck,
      desc: "Pallets, freight and commercial consignments.",
      capacity: "Up to 1,200 kg",
      href: "/vehicle-fleet#large-van",
      badge: "Heavy Freight",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-[#0a192f] text-white overflow-hidden relative">
      {/* Background Decorative Accent Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0066ff]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#c6ff00]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
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

        {/* 4 Enhanced Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v) => {
            const IconComp = v.icon;
            return (
              <Link
                key={v.name}
                href={v.href}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#112444] hover:to-[#0a192f] hover:border-[#c6ff00] hover:shadow-[0_20px_50px_rgba(198,255,0,0.12)] flex flex-col justify-between space-y-6"
              >
                {/* Top Badge Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#c6ff00] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] group-hover:shadow-lg">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10 group-hover:bg-[#c6ff00]/20 group-hover:text-[#c6ff00] group-hover:border-[#c6ff00]/30 transition-all">
                    {v.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white font-display transition-colors duration-300 group-hover:text-[#c6ff00]">
                    {v.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#c6ff00] transition-colors duration-300">
                  <span className="text-slate-300 group-hover:text-white transition-colors">{v.capacity}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
