import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ContactSettingsProvider } from "@/components/Contact/ContactSettings";
import TrackingScripts from "@/components/Analytics/TrackingScripts";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://instadrop.sahoolat.pk"),
  title: {
    default: "InstaDrop | UK Same-Day Courier & Freight Services",
    template: "%s | InstaDrop Courier Services",
  },
  description:
    "Professional UK same-day courier and freight services for urgent parcels, documents, equipment, pallets and scheduled deliveries.",
  keywords: [
    "InstaDrop courier",
    "same day courier UK",
    "speedy quote courier",
    "dedicated vehicle courier",
    "tracking and POD courier",
  ],
  authors: [{ name: "InstaDrop Courier Services" }],
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  openGraph: {
    title: "InstaDrop — UK Same-Day Courier & Freight Services",
    description:
      "Professional same-day, dedicated vehicle, scheduled and freight delivery services across the UK.",
    url: "https://instadrop.sahoolat.pk",
    siteName: "InstaDrop Courier Services",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#c6ff00] selection:text-[#0a192f]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "InstaDrop Courier Services",
          url: "https://instadrop.sahoolat.pk",
          areaServed: { "@type": "Country", name: "United Kingdom" },
          serviceType: ["Same-day courier", "Dedicated vehicle delivery", "Scheduled delivery", "Pallet and freight delivery"],
        }) }} />
        <ContactSettingsProvider>
          <TrackingScripts />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ContactSettingsProvider>
      </body>
    </html>
  );
}
