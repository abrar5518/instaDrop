import type { Metadata } from "next";
import ServicePage from "@/components/Content/ServicePage";
import { courierServices } from "@/content/siteContent";
export const metadata: Metadata = { title: "Pallet & Heavy Freight Delivery", description: courierServices[3].description, alternates:{canonical:"/pallet-delivery"} };
export default function Page() { return <ServicePage service={courierServices[3]} />; }
