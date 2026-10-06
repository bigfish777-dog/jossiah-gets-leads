import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The homepage is parked behind the audit offer until it's reworked
  // (Fish, 6 Oct 2026). Temporary redirect, so it's easy to undo.
  async redirects() {
    return [{ source: "/", destination: "/audit", permanent: false }];
  },
};

export default nextConfig;
