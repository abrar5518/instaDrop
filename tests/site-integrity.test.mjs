import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  const [payment, tracking] = await Promise.all([read("src/app/pay/[token]/page.tsx"), read("src/components/Analytics/TrackingScripts.tsx")]);
  assert.match(payment, /index:\s*false/);
  assert.match(payment, /referrer:\s*"no-referrer"/);
  assert.match(tracking, /COOKIE_CONSENT_KEY/);
  assert.match(tracking, /pathname\.startsWith\("\/pay\/"\)/);
});
