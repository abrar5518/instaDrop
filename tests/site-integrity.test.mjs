import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("contact form submits through the protected same-origin route", async () => {
  const [page, form] = await Promise.all([read("src/app/contact/page.tsx"), read("src/components/Forms/ContactForm.tsx")]);
  assert.match(page, /<ContactForm\s*\/>/);
  assert.match(form, /fetch\("\/api\/inquiries"/);
  assert.doesNotMatch(page, /alert\(/);
});

test("tracking page contains no fabricated delivery data", async () => {
  const page = await read("src/app/track-delivery/page.tsx");
  assert.match(page, /\/api\/tracking\//);
  assert.doesNotMatch(page, /Sarah Mitchell|13:55|Birmingham Depot/);
});

test("payment pages are private and optional analytics require consent", async () => {
  const [payment, checkout, captureRoute, tracking] = await Promise.all([
    read("src/app/pay/[token]/page.tsx"),
    read("src/components/Payments/PayPalCheckout.tsx"),
    read("src/app/api/payments/paypal/capture/route.ts"),
    read("src/components/Analytics/TrackingScripts.tsx"),
  ]);
  assert.match(payment, /index:\s*false/);
  assert.match(payment, /referrer:\s*"no-referrer"/);
  assert.match(checkout, /reconcilePaymentStatus/);
  assert.match(captureRoute, /45_000/);
  assert.match(tracking, /useCookieConsent/);
  assert.match(tracking, /pathname\.startsWith\("\/pay\/"\)/);
});

test("sitemap reads every published indexable blog and service at request time", async () => {
  const sitemap = await read("src/app/sitemap.ts");
  assert.match(sitemap, /dynamic\s*=\s*"force-dynamic"/);
  assert.match(sitemap, /await getServices\(\)/);
  assert.match(sitemap, /await getBlogs\(\)/);
  assert.match(sitemap, /!service\.seo\.noindex/);
  assert.match(sitemap, /!post\.noindex/);
  assert.match(sitemap, /\$\{baseUrl\}\/services\/\$\{service\.slug\}/);
});

test("service pages use the canonical nested route and preserve legacy URLs", async () => {
  const [page, legacyPage, directory] = await Promise.all([
    read("src/app/services/[slug]/page.tsx"),
    read("src/app/[slug]/page.tsx"),
    read("src/app/services/page.tsx"),
  ]);
  assert.match(page, /`\/services\/\$\{slug\}`/);
  assert.match(legacyPage, /permanentRedirect\(`\/services\/\$\{encodeURIComponent\(slug\)\}`\)/);
  assert.match(directory, /href=\{`\/services\/\$\{service\.slug\}`\}/);
});

test("single-service pages are not duplicated as static route folders", async () => {
  const legacyFolders = [
    "same-day-delivery",
    "dedicated-vehicle-delivery",
    "scheduled-delivery",
    "pallet-delivery",
    "wait-and-return",
    "medical-courier",
    "legal-courier",
  ];

  await Promise.all(legacyFolders.map(async (slug) => {
    await assert.rejects(access(new URL(`../src/app/${slug}/page.tsx`, import.meta.url)));
  }));
});
