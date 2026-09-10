import type { Metadata } from "next";
import ServicePage from "@/components/Content/ServicePage";
import { courierServices } from "@/content/siteContent";
export const metadata: Metadata = { title: "Dedicated Vehicle Delivery", description: courierServices[1].description, alternates:{canonical:"/dedicated-vehicle-delivery"} };
export default function Page() { return <ServicePage service={courierServices[1]} />; }
