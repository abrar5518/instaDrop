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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">{courierServices.map((service) => { const Icon = service.icon; return <div key={service.slug} className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-6 hover:shadow-lg"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0066ff]"><Icon className="h-5 w-5" /></div><h3 className="font-display text-lg font-bold text-[#0a192f]">{service.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{service.short}</p><Link href={`/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#0066ff]">Explore service <ArrowRight className="h-3.5 w-3.5" /></Link></div>; })}</div>
      </div>
    </section>
  );
}
