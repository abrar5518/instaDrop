import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SettingsProvider } from "@/context/SettingsContext";
import { ContactSettingsProvider } from "@/components/Contact/ContactSettings";
import TrackingScripts from "@/components/Analytics/TrackingScripts";
import CookieConsent from "@/components/Analytics/CookieConsent";
import { getSiteSettings } from "@/lib/get-site-settings";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "./" },
    title: {
      default: "InstaDrop — Same-Day Courier UK | Fast, Fully Tracked Parcel Delivery",
      template: "%s | InstaDrop Courier Services",
    },
    description:
      "Fast, fully tracked parcel delivery with secure online payment and proof of delivery across the UK. Collection timing is confirmed by dispatch.",
    keywords: [
      "InstaDrop courier",
      "same day courier UK",
      "courier quote UK",
      "dedicated vehicle courier",
      "tracking and POD courier",
    ],
    authors: [{ name: settings.business_name }],
    openGraph: {
      title: "InstaDrop — Same-Day Courier UK",
      description: "From your door to theirs, the same day. Fast, fully tracked parcel delivery across the UK.",
      url: siteUrl,
      siteName: "InstaDrop Courier",
      locale: "en_GB",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "InstaDrop Courier Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "InstaDrop — Same-Day Courier UK",
      description: "Fast, fully tracked parcel delivery across the UK.",
      images: ["/opengraph-image"],
    },
    icons: { icon: settings.branding.favicon_url || "/favicon" },
  };
}

function createJsonLdSchema(settings: Awaited<ReturnType<typeof getSiteSettings>>) {
  const sameAs = Object.values(settings.social_links).filter((value): value is string => Boolean(value));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DeliveryService",
        "@id": `${siteUrl}/#delivery-service`,
        name: settings.business_name,
        url: siteUrl,
        telephone: settings.hotline_phone,
        email: settings.support_email,
        priceRange: "££",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        address: {
          "@type": "PostalAddress",
          streetAddress: settings.office_address,
          addressCountry: "GB",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: settings.business_name,
        legalName: "OXON SERVICES MANAGEMENT LTD",
        identifier: "12346805",
        url: siteUrl,
        logo: settings.branding.header_logo_url || `${siteUrl}/favicon`,
        sameAs,
      },
    ],
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();
  const jsonLdSchema = createJsonLdSchema(settings);

  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#c6ff00] selection:text-[#0a192f]">
        <SettingsProvider initialSettings={settings}>
          <ContactSettingsProvider>
            <TrackingScripts />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </ContactSettingsProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
