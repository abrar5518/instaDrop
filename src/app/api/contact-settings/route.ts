const backendUrl = process.env.BACKEND_API_URL ?? "https://admin-instadrop.sahoolat.pk/api/v1";

export async function GET() {
  try {
    const response = await fetch(`${backendUrl}/settings/public`, { cache: "no-store" });
    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json({ message: "Contact settings are temporarily unavailable." }, { status: 502 });
  }
}
