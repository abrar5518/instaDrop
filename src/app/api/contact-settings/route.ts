import { enforceRateLimit, proxyError, proxyJson } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

export async function GET(request: Request) {
  const limited = enforceRateLimit(request, "contact-settings", 60);
  if (limited) return limited;
  try {
    return await proxyJson(`${backendUrl}/settings/public`);
  } catch (error) {
    return proxyError(error, "Contact settings are temporarily unavailable.");
  }
}
