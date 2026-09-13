import { ArrowRight, Truck } from "lucide-react";
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
      name: "Transit Type Van",
      desc: "2 standard or 3 Euro pallets / 900kg Max. Medium trade cargo and pallet loads.",
      capacity: "Up to 900 kg",
      href: "/vehicle-fleet#transit-van",
      badge: "Up to 3 Euro Pallets",
    },
    {
      name: "LWB Van (Long Wheelbase)",
      desc: "3 Pallets / 1100kg Max. Long materials up to 3.4m & heavy goods.",
      capacity: "Up to 1,100 kg",
      href: "/vehicle-fleet#long-wheelbase-van",
      badge: "3 Pallets",
    },
    {
      name: "XLWB Van (Extra Long)",
      desc: "4 Pallets / 1100kg Max. Oversized cargo & 4.2m bed length.",
      capacity: "Up to 1,100 kg",
      href: "/vehicle-fleet#extra-long-wheelbase-van",
      badge: "4 Pallets",
    },
    {
      name: "Luton Box Van with Tail Lift",
      desc: "Up to 6 pallets and approximately 1,000–1,200kg. Fully enclosed with a 500kg tail lift.",
      capacity: "Up to 1,000 kg",
      href: "/vehicle-fleet#luton-box-tail-lift",
      badge: "6 Pallets",
    },
    {
      name: "Curtain-Side Luton with Tail Lift",
      desc: "Up to 6 pallets and approximately 1,000–1,100kg. Side loading plus a 500kg tail lift.",
      capacity: "Up to 1,000 kg",
      href: "/vehicle-fleet#luton-curtain-tail-lift",
      badge: "6 Pallets",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-[#0a192f] text-white overflow-hidden relative">
      {/* Background Decorative Accent Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0066ff]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#c6ff00]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
            RIGHT VEHICLE, EVERY TIME
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            A dedicated fleet for every delivery
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Your parcel travels directly in the vehicle that fits it best—no sorting hubs, no unnecessary stops.
          </p>
        </div>

        {/* 6 Vehicle Cards Grid - Executive Clean Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <Link
              key={v.name}
              href={v.href}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#112444] hover:border-[#c6ff00] hover:shadow-[0_20px_40px_rgba(198,255,0,0.15)] flex flex-col justify-between space-y-5 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />

              {/* Top Badge Tag & Icon */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30">
                    {v.badge}
                  </span>
                  <div className="p-2 rounded-xl bg-white/10 text-[#c6ff00] group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] transition-colors">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white font-display transition-colors duration-300 group-hover:text-[#c6ff00]">
                  {v.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                {v.desc}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-[#c6ff00] transition-colors duration-300">
                <span className="text-slate-300 group-hover:text-white transition-colors">{v.capacity}</span>
                <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                  <span>View Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
