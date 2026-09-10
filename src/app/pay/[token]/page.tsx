import PayPalCheckout from "@/components/Payments/PayPalCheckout";

export default async function PaymentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <section className="min-h-[70vh] bg-[#f8fafc] px-4 py-16"><PayPalCheckout token={token} /></section>;
}
