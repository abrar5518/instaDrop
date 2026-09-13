import type { Metadata } from "next";
import PayPalCheckout from "@/components/Payments/PayPalCheckout";

export const metadata: Metadata = {
  title: "Secure Invoice Payment",
  description: "Securely review and pay an InstaDrop invoice.",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

export default async function PaymentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <section className="min-h-[70vh] bg-[#f8fafc] px-4 py-16"><PayPalCheckout token={token} /></section>;
}
