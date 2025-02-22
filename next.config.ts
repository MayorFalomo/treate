import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["treate.ng"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'treate.ng',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
