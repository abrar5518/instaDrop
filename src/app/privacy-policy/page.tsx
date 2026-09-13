import type { Metadata } from "next";
import Link from "next/link";
import { getSiteSettings } from "@/lib/get-site-settings";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy & Data Protection",
  description: "How InstaDrop collects, uses, shares, protects and retains personal information.",
};

const sectionClass = "space-y-3";
const headingClass = "font-display text-lg font-bold text-[#0a192f]";

export default async function PrivacyPolicyPage() {
  const settings = await getSiteSettings();
  return <div className="w-full bg-white">
    <section className="bg-[#0a192f] px-4 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">Legal policies</p>
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: 13 September 2026</p>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm leading-7 text-slate-600 sm:px-8">
        <div className={sectionClass}>
          <h2 className={headingClass}>1. Who controls your information</h2>
          <p>InstaDrop is a trading name of OXON SERVICES MANAGEMENT LTD (company number 12346805), registered at {settings.office_address}. For privacy questions, email <a className="font-bold text-[#0066ff]" href={`mailto:${settings.support_email}`}>{settings.support_email}</a>.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>2. Information we collect</h2>
          <p>We collect information you provide in quote, contact, business-account and booking forms, including names, company details, email addresses, telephone numbers, collection and delivery details, consignment information and communication preferences.</p>
          <p>For confirmed work we may also process recipient details, driver and vehicle updates, timestamps, delivery location records, signatures, photographs, proof-of-delivery records, invoice details and payment status. PayPal processes card or funding details; InstaDrop does not receive full card details.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>3. Why we use it and our lawful bases</h2>
          <p>We use information to prepare quotes, take steps requested before a contract, perform courier bookings, coordinate collections and deliveries, provide status and POD records, process payments, handle support and maintain accounting records.</p>
          <p>Our lawful bases are contract or steps before a contract, compliance with legal obligations, and legitimate interests such as service security, fraud prevention, customer support and improving operations. Where consent is required for non-essential analytics or marketing, we rely on consent and you may withdraw it at any time.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>4. Who we share information with</h2>
          <p>We share only what is necessary with assigned couriers and logistics partners, hosting and IT providers, communications providers, professional advisers, payment providers such as PayPal, and public authorities where legally required. We do not sell personal information.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>5. International transfers</h2>
          <p>Some technology or payment providers may process information outside the UK. Where this occurs, we require an applicable adequacy decision, UK International Data Transfer Agreement, UK Addendum or another lawful safeguard. Contact us for details relevant to a specific provider.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>6. Retention</h2>
          <p>Unsuccessful quote and general enquiry records are normally retained for up to 24 months. Booking, invoice, payment-status and POD records are normally retained for up to six years where needed for tax, contract, insurance or legal claims. Operational location updates are kept only as long as needed for delivery, POD, security and claims records. We delete or anonymise information when it is no longer required.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>7. Cookies and analytics</h2>
          <p>Essential storage may be used for security and your privacy choices. Optional analytics or advertising technologies are not loaded until you accept them. You can change or withdraw your choice using the cookie settings control on the website.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>8. Security</h2>
          <p>We use encrypted HTTPS connections, access controls, request limits and operational safeguards designed to protect personal information. No online service is completely risk-free, so we also limit the information collected to what is needed.</p>
        </div>
        <div className={sectionClass}>
          <h2 className={headingClass}>9. Your rights</h2>
          <p>Depending on the circumstances, you may request access, correction, erasure, restriction, portability or object to processing. You may withdraw consent without affecting earlier lawful processing. We may need to verify your identity before completing a request.</p>
          <p>You can contact us through the <Link href="/contact#contact-form" className="font-bold text-[#0066ff]">contact form</Link>. You may also complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0066ff]">Information Commissioner’s Office</a>.</p>
        </div>
      </div>
    </section>
  </div>;
}
