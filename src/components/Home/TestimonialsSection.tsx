import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Metrics & Header (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              CUSTOMER STORIES
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display leading-tight">
              Trusted when timing matters most.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Businesses and individuals rely on InstaDrop for urgent deliveries across the United Kingdom.
            </p>

            {/* Rating Summary */}
            <div className="pt-2 space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-[#0a192f] font-display">4.9</span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Based on 1,200+ verified deliveries
              </p>
            </div>
          </div>

          {/* Right Column: 2 Testimonial Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  &quot;We needed legal documents in London before close of business. Collection was quick, updates were excellent, and the POD arrived instantly.&quot;
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0a192f] font-display">
                  Sarah Mitchell
                </p>
                <p className="text-[11px] text-slate-400">
                  Operations Director
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  &quot;The quote and payment process was refreshingly simple. Our equipment arrived safely and exactly when promised.&quot;
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0a192f] font-display">
                  Daniel Brooks
                </p>
                <p className="text-[11px] text-slate-400">
                  Studio Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
