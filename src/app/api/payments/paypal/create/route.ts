import { enforceRateLimit, proxyError, proxyJson, readJsonBody } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

export async function POST(request: Request) {
  const limited = enforceRateLimit(request, "paypal-create", 15, 5 * 60_000);
  if (limited) return limited;
  try {
    const payload = await readJsonBody(request, 8 * 1024);
    return await proxyJson(`${backendUrl}/payments/paypal/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ payment_token: payload.payment_token }),
    });
  } catch (error) {
    return proxyError(error, "PayPal is temporarily unavailable.");
  }
}
