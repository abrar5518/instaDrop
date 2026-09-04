import type { Metadata } from "next";
import ServicePage from "@/components/Content/ServicePage";
import { courierServices } from "@/content/siteContent";
export const metadata: Metadata = { title: "Wait & Return Courier", description: courierServices[4].description };
export default function Page() { return <ServicePage service={courierServices[4]} />; }
