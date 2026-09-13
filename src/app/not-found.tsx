import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-20 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#0066ff]">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#0a192f]">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">The address may be incorrect or the page may have moved.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-[#0a192f] px-7 py-3 text-sm font-bold text-white">Return home</Link>
      </div>
    </section>
  );
}
