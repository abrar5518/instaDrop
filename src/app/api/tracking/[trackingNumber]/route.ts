const backendUrl = process.env.BACKEND_API_URL ?? "https://admin-instadrop.sahoolat.pk/api/v1";

export async function GET(_request: Request, context: RouteContext<"/api/tracking/[trackingNumber]">) {
  const { trackingNumber } = await context.params;
  try {
    const response = await fetch(`${backendUrl}/tracking/${encodeURIComponent(trackingNumber)}`, { cache: "no-store" });
    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json({ message: "Tracking is temporarily unavailable." }, { status: 502 });
  }
}
