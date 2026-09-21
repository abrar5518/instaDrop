import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? "" : " 'unsafe-eval'"} https://www.paypal.com https://www.paypalobjects.com https://www.googletagmanager.com https://connect.facebook.net`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://admin.instadrop.uk https://admin-instadrop.sahoolat.pk https://www.facebook.com https://www.paypalobjects.com",
  "font-src 'self' data:",
  "connect-src 'self' https://admin.instadrop.uk https://admin-instadrop.sahoolat.pk https://www.google-analytics.com https://region1.google-analytics.com https://connect.facebook.net https://www.facebook.com https://www.paypal.com",
  "frame-src 'self' https://www.paypal.com https://www.sandbox.paypal.com https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://www.paypal.com",
  "frame-ancestors 'none'",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(self)" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "admin-instadrop.sahoolat.pk", pathname: "/storage/blogs/**" },
      { protocol: "https", hostname: "admin.instadrop.uk", pathname: "/storage/blogs/**" },
      { protocol: "https", hostname: "admin.instadrop.uk", pathname: "/storage/branding/**" },
      { protocol: "https", hostname: "admin.instadrop.uk", pathname: "/media/branding/**" },
      { protocol: "https", hostname: "admin.instadrop.uk", pathname: "/storage/content-pages/**" },
      { protocol: "https", hostname: "admin-instadrop.sahoolat.pk", pathname: "/storage/content-pages/**" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
