import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  // Apex → www, 308 permanent. Both hostnames resolve to Vercel and both served 200, so the same
  // page existed at two URLs. rel=canonical already declares www as authoritative; this makes the
  // redirect match the declaration so nothing crawls the duplicate in the first place.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'geekatyourspot.com' }],
        destination: 'https://www.geekatyourspot.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
