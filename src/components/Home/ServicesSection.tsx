import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { courierServices } from "@/content/siteContent";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
            DELIVERY SERVICES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display">
            Built for deliveries that can’t wait
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Five clear ways to move urgent documents, parcels, equipment, pallets and commercial goods across the UK.
          </p>
        </div>

        {/* Enhanced Interactive Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {courierServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#0a192f] hover:border-[#c6ff00]/40 hover:shadow-[0_20px_40px_rgba(10,25,47,0.25)] cursor-pointer overflow-hidden"
              >
                {/* Subtle Background Glow Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />

                <div>
                  {/* Icon Container */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] group-hover:shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-extrabold text-[#0a192f] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                    {service.short}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-[#0066ff] transition-colors duration-300 group-hover:text-[#c6ff00]">
                  <span>Explore service</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
