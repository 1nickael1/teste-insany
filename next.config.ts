import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL('https://images.unsplash.com/**')],
    // domains: ['images.unsplash.com'],
  }
};

export default nextConfig;
