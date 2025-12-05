import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Resim çektiğimiz site
        port: '',
        pathname: '/**',
      },
    ],
  },
  // i18n redirect ayarların varsa buraya devam eder...
};

export default nextConfig;