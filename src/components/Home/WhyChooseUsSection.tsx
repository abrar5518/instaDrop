import { Clock, ShieldCheck, Zap, Headphones, MapPin, CheckCircle2 } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: "Responsive Dispatch",
      desc: "Our dispatch team checks nearby vehicle availability and confirms an expected collection window for your route.",
    },
    {
      icon: Zap,
      title: "Dedicated Direct Drive",
      desc: "Your consignment goes straight into a dedicated vehicle with zero stops or co-loading with other parcels, preventing damage or delays.",
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured Goods-in-Transit",
      desc: "Goods-in-Transit cover and limits are confirmed for the declared goods and agreed booking terms.",
    },
    {
      icon: Headphones,
      title: "24/7/365 Live Operations Desk",
      desc: "No call centers or chatbots. Speak directly to an experienced logistics coordinator anytime day, night, weekend, or bank holiday.",
    },
    {
      icon: MapPin,
      title: "Real-Time GPS Vehicle Tracking",
      desc: "Receive a live tracking link to watch your courier’s real-time progress on a map from collection point straight to dropoff.",
    },
    {
      icon: CheckCircle2,
      title: "Instant Electronic POD",
      desc: "The moment your package is delivered, an electronic signature and timestamped photo POD is emailed directly to your desk.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
            Unrivalled Service & Reliability
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display">
            Why Businesses Choose Express Courier
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver total peace of mind for mission-critical logistics, high-value freight, and urgent same-day time-critical deliveries.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
