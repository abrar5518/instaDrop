import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection Terms",
  description:
    "InstaDrop Privacy Policy and UK GDPR data protection guidelines. Learn how we handle customer booking information, live GPS data, and payment security.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">LEGAL POLICIES</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: August 2026 • InstaDrop Courier Services Ltd</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">1. Information We Collect</h2>
            <p>
              InstaDrop Courier Services Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects personal data when you request a quote, place a delivery booking, or contact our dispatch team. This includes your name, company name, email address, telephone number, pickup/delivery postcodes, and recipient contact details.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">2. How We Use Your Data</h2>
            <p>
              We process your personal information to fulfill courier transport services, calculate journey mileage, dispatch dedicated drivers, provide live GPS tracking links, send electronic proof of delivery (POD) notifications, and issue invoices.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">3. Live GPS & Location Data</h2>
            <p>
              Driver GPS tracking data is generated during active delivery assignments to inform senders and recipients of exact vehicle location and estimated arrival times (ETA). Location data is retained strictly for transit verification and POD logs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">4. Data Security & Third Parties</h2>
            <p>
              We enforce strict encryption standards (SSL/TLS) across all online booking forms and credit card processing gateways. We do not sell or rent personal information to third-party marketers. Data is shared strictly with assigned logistics drivers for delivery execution.
            </p>
          </div>

          <div className="space-[#0a192f] space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">5. Your UK GDPR Rights</h2>
            <p>
              Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data held by InstaDrop. For data privacy inquiries, contact our Data Protection Desk at <a href="mailto:privacy@instadrop.co.uk" className="text-[#0066ff] font-bold">privacy@instadrop.co.uk</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
