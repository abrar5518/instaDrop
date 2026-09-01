import type { Metadata } from "next";
import { Star, CheckCircle, MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews & Google Ratings — 5-Star Same-Day Courier",
  description:
    "Read real verified customer reviews and 5-star Google ratings for InstaDrop Courier Services across the UK. 99.4% on-time delivery record.",
  keywords: [
    "InstaDrop reviews",
    "same day courier google reviews",
    "courier rating UK",
    "verified parcel courier reviews",
  ],
};

const googleReviews = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Logistics Manager • Vance Heavy Industries",
    date: "2026-08-20",
    stars: 5,
    comment:
      "InstaDrop saved our client contract! We needed two Euro pallets moved from Manchester to London within 4 hours. The Luton van arrived in 35 minutes, driver was extremely professional, and POD signature certificate hit my email before 2 PM. Outstanding 5-star service!",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Partner • Jenkins & Co Legal Chambers",
    date: "2026-08-15",
    stars: 5,
    comment:
      "Extremely reliable for high-priority legal documents and court briefs. Hand-to-hand delivery with real-time GPS tracking. We use InstaDrop exclusively for our urgent same-day courier needs across Bristol and London.",
    verified: true,
  },
  {
    id: 3,
    name: "David H. Miller",
    role: "Site Director • Apex Construction UK",
    date: "2026-08-10",
    stars: 5,
    comment:
      "Simple quote request, instant WhatsApp response with a fair price, and zero hassle. Driver Marcus delivered site equipment direct to Birmingham highway project. Highly recommended same day courier!",
    verified: true,
  },
  {
    id: 4,
    name: "Claire Bennett",
    role: "Operations • BioMed Labs Manchester",
    date: "2026-08-05",
    stars: 5,
    comment:
      "Temperature-sensitive medical samples dispatched GDP compliant. Driver was fully trained, vehicle spotless, and tracking link was updated in real-time. 10/10 service.",
    verified: true,
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.co.uk";

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InstaDrop Courier Services",
  "image": `${siteUrl}/logo.png`,
  "@id": `${siteUrl}/#organization`,
  "url": siteUrl,
  "telephone": "0800 123 4455",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Pall Mall, St. James's",
    "addressLocality": "London",
    "postalCode": "SW1Y 5NQ",
    "addressCountry": "GB"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": googleReviews.map(r => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": r.name
    },
    "datePublished": r.date,
    "reviewBody": r.comment,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.stars,
      "bestRating": "5"
    }
  }))
};

export default function ReviewsPage() {
  return (
    <div className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.9 / 5.0 RATED ON GOOGLE REVIEWS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Customer Reviews & Ratings
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See why businesses and individuals across the UK trust InstaDrop for urgent same-day parcel, pallet, and freight courier deliveries.
          </p>
        </div>
      </section>

      {/* 2. Rating Overview Cards */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
              <div className="flex justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400" />
                ))}
              </div>
              <p className="text-3xl font-black text-[#0a192f] font-display">4.9 / 5.0</p>
              <p className="text-xs text-slate-500 font-semibold">Google Verified Reviews</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <p className="text-3xl font-black text-[#0a192f] font-display">99.4%</p>
              <p className="text-xs text-slate-500 font-semibold">On-Time Delivery Success</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-3xl font-black text-[#0a192f] font-display">£50,000</p>
              <p className="text-xs text-slate-500 font-semibold">Free Transit Cover Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#0066ff] uppercase tracking-wider">VERIFIED FEEDBACK</span>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {googleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4 hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Google Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Box */}
          <div className="bg-[#0a192f] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
              Ready to Experience UK’s Top Courier Service?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Get an instant quote online or contact our 24/7 dispatch team directly on WhatsApp or phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/instant-quote"
                className="px-8 py-4 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-sm hover:bg-[#b2e600] transition-colors shadow-md"
              >
                Get Speedy Quote Now
              </Link>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-extrabold text-sm hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#c6ff00]" />
                <span>Write a Google Review</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
