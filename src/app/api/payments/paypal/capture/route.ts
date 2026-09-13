import { enforceRateLimit, proxyError, proxyJson, readJsonBody } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

export async function POST(request: Request) {
  const limited = enforceRateLimit(request, "paypal-capture", 20, 5 * 60_000);
  if (limited) return limited;
  try {
    const payload = await readJsonBody(request, 8 * 1024);
    return await proxyJson(`${backendUrl}/payments/paypal/capture`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ payment_token: payload.payment_token, paypal_order_id: payload.paypal_order_id }),
    });
  } catch (error) {
    return proxyError(error, "PayPal payment confirmation is temporarily unavailable.");
  }
}
