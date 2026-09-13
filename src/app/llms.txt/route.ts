import { getSiteSettings } from "@/lib/get-site-settings";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";
  const settings = await getSiteSettings();
  const content = `# InstaDrop Courier Services — AI & LLM System Context

> InstaDrop arranges same-day, scheduled, dedicated-vehicle, pallet and specialist courier services across the UK.

## Service information
- Collection timing and vehicle availability are confirmed by dispatch for each booking.
- Fleet options include small, transit, long-wheelbase and specialist vehicles.
- Supported bookings can include recorded delivery-status updates and proof of delivery (POD).
- Customers receive a tailored quotation after their route and load requirements are reviewed.

## Primary pages
- Homepage: ${baseUrl}/
- Quote request: ${baseUrl}/instant-quote
- Delivery status: ${baseUrl}/track-delivery
- Vehicle fleet: ${baseUrl}/vehicle-fleet
- Services: ${baseUrl}/services
- Contact: ${baseUrl}/contact

## Business contact details
- Phone: ${settings.hotline_phone}
- Email: ${settings.support_email}
- Office: ${settings.office_address}
- Hours: ${settings.opening_hours}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
