export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell us the journey",
      desc: "Enter postcodes, parcel details, vehicle and timing in our 30-sec quote tool.",
    },
    {
      num: "02",
      title: "Approve your quote",
      desc: "Review your final tailored price guarantee via instant WhatsApp or email.",
    },
    {
      num: "03",
      title: "Pay securely online",
      desc: "Use your encrypted payment link and receive instant tax PDF invoice.",
    },
    {
      num: "04",
      title: "Follow every mile",
      desc: "Get real-time satellite GPS tracking updates and digital POD proof automatically.",
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

        {/* 4 Interactive Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#0a192f] hover:border-[#c6ff00]/40 hover:shadow-[0_20px_40px_rgba(10,25,47,0.25)] flex flex-col justify-between space-y-6 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />

              <div className="w-12 h-12 rounded-2xl bg-[#0a192f] text-white flex items-center justify-center text-sm font-black transition-all duration-300 group-hover:bg-[#c6ff00] group-hover:text-[#0a192f] group-hover:scale-110 group-hover:shadow-md">
                {step.num}
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[#0a192f] font-display transition-colors duration-300 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
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
