"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-20 text-center">
      <div className="max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Temporary problem</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">This page could not be loaded</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">Please try again. If the problem continues, contact the dispatch team.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="rounded-full bg-[#0a192f] px-6 py-3 text-sm font-bold text-white">Try again</button>
          <Link href="/contact" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-[#0a192f]">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
