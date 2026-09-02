import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ContactSettingsProvider } from "@/components/Contact/ContactSettings";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftly.co.uk"),
  title: {
    default: "Swiftly — Same-Day Courier UK | Fast, Fully Tracked Parcel Delivery",
    template: "%s | Swiftly Courier Services",
  },
  description:
    "Fast, fully tracked parcel delivery with secure online payment and proof of delivery—wherever it needs to go across the UK. Collection from 60 mins.",
  keywords: [
    "Swiftly courier",
    "same day courier UK",
    "speedy quote courier",
    "dedicated vehicle courier",
    "tracking and POD courier",
  ],
  authors: [{ name: "Swiftly Courier Services" }],
  openGraph: {
    title: "Swiftly — Same-Day Courier UK",
    description:
      "From your door to theirs, the same day. Fast, fully tracked parcel delivery across the UK.",
    url: "https://swiftly.co.uk",
    siteName: "Swiftly Courier",
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
        <ContactSettingsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ContactSettingsProvider>
      </body>
    </html>
  );
}
