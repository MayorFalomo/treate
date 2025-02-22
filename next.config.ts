import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["treate.ng", "flowbite.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'treate.ng',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
