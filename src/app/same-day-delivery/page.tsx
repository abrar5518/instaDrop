import type { Metadata } from "next";
import DynamicServicePage from "@/components/Content/DynamicServicePage";
import { contentMetadata } from "@/lib/content-metadata";
import { getService } from "@/lib/content-pages";

const slug = "same-day-delivery";
export async function generateMetadata(): Promise<Metadata> { return contentMetadata(await getService(slug), `/${slug}`); }
export default function Page() { return <DynamicServicePage slug={slug} />; }
