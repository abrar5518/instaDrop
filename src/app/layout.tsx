import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SettingsProvider } from "@/context/SettingsContext";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "InstaDrop — Same-Day Courier UK | Fast, Fully Tracked Parcel Delivery",
    template: "%s | InstaDrop Courier Services",
  },
  description:
    "Fast, fully tracked parcel delivery with secure online payment and proof of delivery—wherever it needs to go across the UK. Collection from 60 mins.",
  keywords: [
    "InstaDrop courier",
    "same day courier UK",
    "speedy quote courier",
    "dedicated vehicle courier",
    "tracking and POD courier",
  ],
  authors: [{ name: "InstaDrop Courier Services" }],
  openGraph: {
    title: "InstaDrop — Same-Day Courier UK",
    description:
      "From your door to theirs, the same day. Fast, fully tracked parcel delivery across the UK.",
    url: siteUrl,
    siteName: "InstaDrop Courier",
    locale: "en_GB",
    type: "website",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DeliveryService",
      "@id": `${siteUrl}/#delivery-service`,
      "name": "InstaDrop Courier Services",
      "url": siteUrl,
      "telephone": "0800 123 4455",
      "email": "dispatch@instadrop.co.uk",
      "priceRange": "££",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Pall Mall, St. James's",
        "addressLocality": "London",
        "postalCode": "SW1Y 5NQ",
        "addressCountry": "GB"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "InstaDrop Courier Services Ltd",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "sameAs": [
        "https://twitter.com/instadrop",
        "https://linkedin.com/company/instadrop"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#c6ff00] selection:text-[#0a192f]">
        <SettingsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
