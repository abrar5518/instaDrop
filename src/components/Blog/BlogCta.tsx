import Link from "next/link";
import { ArrowUpRight, PackageCheck } from "lucide-react";
export default function BlogCta() { return <section className="journal-container journal-cta-wrap"><div className="journal-cta"><div className="journal-cta-icon"><PackageCheck size={34} /></div><div><span className="journal-eyebrow">LET’S KEEP THINGS MOVING</span><h2>Got something that can’t wait?</h2><p>Tell us what needs moving. We’ll help with the next step.</p></div><Link href="/instant-quote" className="journal-button">Get a speedy quote <ArrowUpRight size={19} /></Link></div></section>; }
