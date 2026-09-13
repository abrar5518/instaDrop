import { enforceRateLimit, proxyError, proxyJson } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");
const referencePattern = /^[A-Za-z0-9][A-Za-z0-9_-]{2,79}$/;

export async function GET(request: Request, context: RouteContext<"/api/tracking/[trackingNumber]">) {
  const limited = enforceRateLimit(request, "tracking", 30);
  if (limited) return limited;
  const { trackingNumber } = await context.params;
  if (!referencePattern.test(trackingNumber)) {
    return Response.json({ message: "Enter a valid tracking reference." }, { status: 400, headers: { "Cache-Control": "private, no-store" } });
  }
  try {
    return await proxyJson(`${backendUrl}/tracking/${encodeURIComponent(trackingNumber)}`);
  } catch (error) {
    return proxyError(error, "Tracking is temporarily unavailable.");
  }
}
