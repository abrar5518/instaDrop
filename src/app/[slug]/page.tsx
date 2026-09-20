import type { Metadata } from "next";
import { getService } from "@/lib/content-pages";
import { contentMetadata } from "@/lib/content-metadata";
import DynamicServicePage from "@/components/Content/DynamicServicePage";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return contentMetadata(await getService(slug), `/${slug}`);
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  return <DynamicServicePage slug={slug} />;
}
