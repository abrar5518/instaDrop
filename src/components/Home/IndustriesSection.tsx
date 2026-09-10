import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/content/siteContent";

export default function IndustriesSection() {
  return (
    <section className="bg-[#0a192f] text-white px-4 py-20 sm:px-8 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c6ff00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
            SPECIALIZED SECTOR LOGISTICS
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
            Courier expertise customers recognise
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Sector-specific delivery support for urgent, valuable and operationally important consignments across mainland UK.
          </p>
        </div>

        {/* Enhanced 3D Glassmorphic Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#112444] hover:to-[#0a192f] hover:border-[#c6ff00] hover:shadow-[0_20px_50px_rgba(198,255,0,0.12)] overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />

                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#c6ff00] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] group-hover:shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#c6ff00]">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                    {industry.consignments}
                  </p>
                </div>

                {/* View Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#c6ff00] transition-colors duration-300">
                  <span className="text-slate-300 group-hover:text-white transition-colors">Explore Industry</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4 text-[#c6ff00]" />
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
