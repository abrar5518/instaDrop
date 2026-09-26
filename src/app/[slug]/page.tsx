import { notFound, permanentRedirect } from "next/navigation";
import { getService } from "@/lib/content-pages";

type PageProps = { params: Promise<{ slug: string }> };

export default async function LegacyServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!(await getService(slug))) notFound();
  permanentRedirect(`/services/${encodeURIComponent(slug)}`);
}
