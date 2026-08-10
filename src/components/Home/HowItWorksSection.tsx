export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell us the journey",
      desc: "Enter postcodes, parcel details, vehicle and timing.",
    },
    {
      num: "02",
      title: "Approve your quote",
      desc: "Review your final tailored price by WhatsApp or email.",
    },
    {
      num: "03",
      title: "Pay securely online",
      desc: "Use your encrypted payment link and receive an invoice.",
    },
    {
      num: "04",
      title: "Follow every mile",
      desc: "Get status updates and proof of delivery automatically.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#f8fafc] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
            SIMPLE BY DESIGN
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display">
            Booked in minutes. Delivered with confidence.
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            A clear four-step journey from request to digital proof of delivery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-white flex items-center justify-center text-xs font-extrabold">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0a192f] font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
