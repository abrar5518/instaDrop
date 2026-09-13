import { enforceRateLimit, proxyError, proxyJson } from "@/lib/api-proxy";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");
const tokenPattern = /^[A-Za-z0-9_-]{16,200}$/;

export async function GET(request: Request, context: RouteContext<"/api/invoices/[token]">) {
  const limited = enforceRateLimit(request, "invoices", 30);
  if (limited) return limited;
  const { token } = await context.params;
  if (!tokenPattern.test(token)) {
    return Response.json({ message: "Invoice not found." }, { status: 404, headers: { "Cache-Control": "private, no-store" } });
  }
  try {
    return await proxyJson(`${backendUrl}/invoices/${encodeURIComponent(token)}`);
  } catch (error) {
    return proxyError(error, "Invoice service is temporarily unavailable.");
  }
}
