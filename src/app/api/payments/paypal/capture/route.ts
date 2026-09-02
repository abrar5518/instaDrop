const backendUrl = process.env.BACKEND_API_URL ?? "https://admin-instadrop.sahoolat.pk/api/v1";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const response = await fetch(`${backendUrl}/payments/paypal/capture`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body, cache: "no-store" });
    return Response.json(await response.json(), { status: response.status });
  } catch {
    return Response.json({ message: "PayPal payment confirmation is temporarily unavailable." }, { status: 502 });
  }
}
