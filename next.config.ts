import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "admin-instadrop.sahoolat.pk", pathname: "/storage/blogs/**" }],
  },
};

export default nextConfig;
