import type { Metadata } from "next";
import ServicePage from "@/components/Content/ServicePage";
import { courierServices } from "@/content/siteContent";
export const metadata: Metadata = { title: "Same-Day & Urgent Courier", description: courierServices[0].description };
export default function Page() { return <ServicePage service={courierServices[0]} />; }
