import "server-only";
import { cache } from "react";
import type { ManagedPage, ServiceSummary } from "./content-types";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

async function readData<T>(path: string, message: string): Promise<T | null> {
  const response = await fetch(`${backendUrl}${path}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(message);
  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("data" in result)) throw new Error("Invalid content response.");
  return (result as { data: T }).data;
}

export const getServices = cache(async (): Promise<ServiceSummary[]> => {
  const data = await readData<ServiceSummary[]>("/services", "Services could not be loaded.");
  if (!Array.isArray(data)) throw new Error("Invalid services response.");
  return data;
});

export const getServicesSafe = cache(async (): Promise<ServiceSummary[]> => {
  try {
    return await getServices();
  } catch {
    return [];
  }
});

export const getService = cache(async (slug: string): Promise<ManagedPage | null> =>
  readData<ManagedPage>(`/services/${encodeURIComponent(slug)}`, "This service could not be loaded."),
);

export const getManagedPage = cache(async (slug: "services" | "coverage"): Promise<ManagedPage | null> =>
  readData<ManagedPage>(`/managed-pages/${slug}`, "This page could not be loaded."),
);
