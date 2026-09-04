import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/Content/IndustryPage";
import { industries } from "@/content/siteContent";
export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> { const { slug } = await params; const industry = industries.find((item) => item.slug === slug); return industry ? { title: `${industry.title} Courier Services`, description: industry.consignments } : {}; }
export default async function Page({ params }: PageProps<"/industries/[slug]">) { const { slug } = await params; const industry = industries.find((item) => item.slug === slug); if (!industry) notFound(); return <IndustryPage industry={industry} />; }
