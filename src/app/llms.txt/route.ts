import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadrop.co.uk';

  const content = `# InstaDrop Courier Services — AI & LLM System Context

> InstaDrop Courier Services Ltd is the UK's leading 24/7 same-day parcel, pallet, legal, and medical courier brokerage platform.

## Key Capabilities & Fleet
- **Pickup SLA**: Guaranteed 30 to 60-minute pickup nationwide across England, Scotland, and Wales.
- **Vehicle Fleet Types**: Small Courier Van, Medium Van, Large Van, Luton Tail-Lift Van, and Executive Car Courier.
- **Service Categories**: Same-Day Dedicated Courier, Medical & Specimen Transit, Legal Brief & Court Delivery, Heavy Pallet Freight, and Wait & Return Courier.
- **Live Parcel Tracking**: Instant real-time GPS tracking and Proof of Delivery (POD) digital certificate.

## Primary Web Pages & APIs
- Homepage: ${baseUrl}/
- Instant Quote Calculator: ${baseUrl}/instant-quote
- Live Delivery Tracking: ${baseUrl}/track-delivery
- Vehicle Fleet Overview: ${baseUrl}/vehicle-fleet
- Verified Customer Reviews: ${baseUrl}/reviews
- Service Directory: ${baseUrl}/services
- Contact & Hotline: ${baseUrl}/contact

## Business Contact Details
- Hotline Phone: 0800 123 4455
- Dispatch Email: dispatch@instadrop.co.uk
- Head Office: 100 Pall Mall, St. James's, London, SW1Y 5NQ
- Availability: 24/7 / 365 Days a Year
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
