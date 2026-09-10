import type { Metadata } from "next";
import ServicePage from "@/components/Content/ServicePage";
import { courierServices } from "@/content/siteContent";
export const metadata: Metadata = { title: "Scheduled Delivery", description: courierServices[2].description, alternates:{canonical:"/scheduled-delivery"} };
export default function Page() { return <ServicePage service={courierServices[2]} />; }
