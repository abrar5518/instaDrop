type RateEntry = { count: number; resetAt: number };

declare global {
  var instadropRateLimits: Map<string, RateEntry> | undefined;
}

const rateLimits = globalThis.instadropRateLimits ?? new Map<string, RateEntry>();
globalThis.instadropRateLimits = rateLimits;

export class RequestError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

export function enforceRateLimit(request: Request, bucket: string, limit: number, windowMs = 60_000) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const current = rateLimits.get(key);

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + windowMs });
    return null;
  }

  current.count += 1;
  if (current.count <= limit) return null;

  const retryAfter = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
  return Response.json(
    { message: "Too many requests. Please wait a moment and try again." },
    { status: 429, headers: { "Cache-Control": "private, no-store", "Retry-After": String(retryAfter) } },
  );
}

export async function readJsonBody(request: Request, maxBytes = 64 * 1024): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type")?.toLowerCase() || "";
  if (!contentType.startsWith("application/json")) throw new RequestError("Content-Type must be application/json.", 415);

  const declaredSize = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredSize) && declaredSize > maxBytes) throw new RequestError("Request body is too large.", 413);

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) throw new RequestError("Request body is too large.", 413);

  try {
    const value = JSON.parse(text);
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value;
  } catch {
    throw new RequestError("Request body must contain a valid JSON object.", 400);
  }
}

export async function proxyJson(url: string, init: RequestInit = {}) {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
  });
  const text = await response.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: response.ok ? "The service returned an invalid response." : "The service could not complete the request." };
  }

  return Response.json(data, {
    status: response.status,
    headers: { "Cache-Control": "private, no-store" },
  });
}

export function proxyError(error: unknown, fallback: string) {
  if (error instanceof RequestError) {
    return Response.json({ message: error.message }, { status: error.status, headers: { "Cache-Control": "private, no-store" } });
  }
  const timedOut = error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError");
  return Response.json(
    { message: timedOut ? "The service took too long to respond. Please try again." : fallback },
    { status: timedOut ? 504 : 502, headers: { "Cache-Control": "private, no-store" } },
  );
}
