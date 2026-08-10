export default function ClientLogos() {
  const logos = [
    "NORTH & CO.",
    "BRIGHTON LABS",
    "FORM & FIELD",
    "KINSHIP",
    "ARCHWAY",
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 shrink-0">
          TRUSTED BY TEAMS AT
        </span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 text-sm font-extrabold tracking-wider text-slate-800/70">
          {logos.map((logo) => (
            <span key={logo} className="hover:text-slate-900 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
