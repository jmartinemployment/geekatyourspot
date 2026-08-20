import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  // Host canonicalization lives in Vercel (Settings > Domains), not here. Having both caused a
  // redirect loop: this file sent apex -> www while the dashboard sent www -> apex.
};

export default nextConfig;
