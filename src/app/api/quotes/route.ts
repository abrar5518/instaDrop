import { enforceRateLimit, proxyError, proxyJson, readJsonBody } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

export async function POST(request: Request) {
  const limited = enforceRateLimit(request, "quotes", 5);
  if (limited) return limited;
  try {
    const payload = await readJsonBody(request);
    return await proxyJson(`${backendUrl}/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    return proxyError(error, "Unable to submit your quote right now. Please try again.");
  }
}
