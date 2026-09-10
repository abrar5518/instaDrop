const backendUrl = process.env.BACKEND_API_URL ?? "https://admin-instadrop.sahoolat.pk/api/v1";

export async function GET(_request: Request, context: RouteContext<"/api/invoices/[token]">) {
  const { token } = await context.params;
  try {
    const response = await fetch(`${backendUrl}/invoices/${encodeURIComponent(token)}`, { cache: "no-store" });
    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json({ message: "Invoice service is temporarily unavailable." }, { status: 502 });
  }
}
