import { Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FleetSection() {
  const vehicles = [
    {
      name: "Small Van",
      desc: "1 Pallet / 400kg Max. Urgent parcels, tools and small boxes.",
      capacity: "Up to 400 kg",
      href: "/vehicle-fleet#small-van",
      badge: "1 Pallet",
    },
    {
      name: "SWB Van (Short Wheelbase)",
      desc: "2 Pallets / 900kg Max. Medium trade cargo & 2 standard pallets.",
      capacity: "Up to 900 kg",
      href: "/vehicle-fleet#swb-van",
      badge: "2 Pallets",
    },
    {
      name: "LWB Van (Long Wheelbase)",
      desc: "3 Pallets / 1100kg Max. Long materials up to 3.4m & heavy goods.",
      capacity: "Up to 1,100 kg",
      href: "/vehicle-fleet#lwb-van",
      badge: "3 Pallets",
    },
    {
      name: "XLWB Van (Extra Long)",
      desc: "4 Pallets / 1100kg Max. Oversized cargo & 4.2m bed length.",
      capacity: "Up to 1,100 kg",
      href: "/vehicle-fleet#xlwb-van",
      badge: "4 Pallets",
    },
    {
      name: "Luton Van (Tail Lift)",
      desc: "6 Pallets / 1000kg Max. Box body with 500kg hydraulic tail-lift.",
      capacity: "Up to 1,000 kg",
      href: "/vehicle-fleet#luton-van",
      badge: "6 Pallets",
    },
    {
      name: "Something Bigger",
      desc: "8 to 26 Pallets. 7.5t, 18t & 26t HGVs for full truckloads.",
      capacity: "1.5t to 26t",
      href: "/vehicle-fleet#something-bigger",
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

        {/* 6 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <Link
              key={v.name}
              href={v.href}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-7 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#112444] hover:to-[#0a192f] hover:border-[#c6ff00] hover:shadow-[0_20px_50px_rgba(198,255,0,0.12)] flex flex-col justify-between space-y-6"
            >
              {/* Top Badge Tag */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#c6ff00] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] group-hover:shadow-lg">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30 transition-all">
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
                  <span>View Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
