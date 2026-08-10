import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0066ff] rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Ready to get it moving?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl">
              Tell us where it&apos;s going and receive your tailored quote.
            </p>
          </div>

          <Link
            href="#quote-form"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md hover:scale-102"
          >
            <span>Get a fast quote</span>
            <ArrowRight className="w-4 h-4 text-[#0a192f]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
