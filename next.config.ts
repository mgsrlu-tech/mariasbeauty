import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shooshbeauty.shop",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};

export default nextConfig;
