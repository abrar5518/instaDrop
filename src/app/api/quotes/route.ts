const backendUrl = process.env.BACKEND_API_URL ?? "https://admin-instadrop.sahoolat.pk/api/v1";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const response = await fetch(`${backendUrl}/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json({ message: "Unable to submit your quote right now. Please try again." }, { status: 502 });
  }
}
