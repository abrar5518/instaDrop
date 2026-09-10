"use client";

export default function BlogError({ reset }: { reset: () => void }) {
  return <section className="mx-auto max-w-3xl px-6 py-24 text-center"><h2 className="text-3xl font-extrabold text-[#0a192f]">We couldn’t load the blog just now.</h2><p className="mt-4 text-slate-600">Please try again in a moment.</p><button onClick={reset} className="mt-7 rounded-full bg-[#0a192f] px-7 py-3 text-sm font-bold text-white">Try again</button></section>;
}
