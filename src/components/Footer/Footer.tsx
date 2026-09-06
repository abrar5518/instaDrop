import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { ContactEmail, ContactPhone, SocialLinks } from "@/components/Contact/ContactSettings";
import { courierServices } from "@/content/siteContent";
import BrandLogo from "@/components/Branding/BrandLogo";

export default function Footer() {
  return <footer className="border-t border-slate-800/60 bg-[#051329] pb-10 pt-16 text-slate-300"><div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
    <div className="grid gap-10 border-b border-slate-800/80 pb-12 md:grid-cols-3">
      <div className="space-y-4"><Link href="/" className="flex items-center gap-3"><BrandLogo variant="footer" /></Link><p className="max-w-sm text-xs leading-relaxed text-slate-400">Professional UK same-day courier and freight services for urgent documents, parcels, equipment, pallets and commercial goods.</p><div className="space-y-2 pt-2 text-xs"><p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#c6ff00]" /><ContactPhone className="font-bold text-white hover:text-[#c6ff00]" /></p><p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#c6ff00]" /><ContactEmail className="hover:text-white" /></p></div></div>
      <div><h2 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Courier services</h2><ul className="space-y-2.5 text-xs font-semibold">{courierServices.map((service) => <li key={service.slug}><Link href={`/${service.slug}`} className="hover:text-white">{service.title}</Link></li>)}<li><Link href="/services" className="font-bold text-[#c6ff00]">All courier services</Link></li></ul></div>
      <div><h2 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Essential</h2><ul className="space-y-2.5 text-xs font-semibold"><li><Link href="/instant-quote" className="text-[#c6ff00]">Get a Quote</Link></li><li><Link href="/vehicle-fleet" className="hover:text-white">Vehicle Fleet</Link></li><li><Link href="/track-delivery" className="hover:text-white">Track Delivery / POD</Link></li><li><Link href="/industries" className="hover:text-white">Industries</Link></li><li><Link href="/blog" className="hover:text-white">Courier Guides</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul><SocialLinks className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-[#c6ff00]"/></div>
    </div>
    <div className="flex flex-col items-center justify-between gap-4 text-[11px] text-slate-400 sm:flex-row"><p>© {new Date().getFullYear()} InstaDrop Courier Services Ltd. All rights reserved.</p><div className="flex gap-6"><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></div></div>
  </div></footer>;
}
