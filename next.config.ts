import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: {
    // Only run ESLint during development, not during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
