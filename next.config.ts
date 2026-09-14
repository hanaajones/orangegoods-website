import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const LEGACY_SIGNATURE_REDIRECTS = [
  {
    source: "/wp-content/uploads/2026/02/OrangeGoods_Website-1.png",
    destination: "https://www.orangegoods.co/logos/OrangeGoods_Website.png",
  },
  {
    source: "/wp-content/uploads/2024/09/OrangeGoods_Instagram.png",
    destination: "https://www.orangegoods.co/logos/Instagram_New_EJ.png",
  },
  {
    source: "/wp-content/uploads/2026/02/OrangeGoods_Instagram-1.png",
    destination: "https://www.orangegoods.co/logos/Instagram_New_EJ.png",
  },
  {
    source: "/wp-content/uploads/2024/09/OrangeGoods_Logo_Email.png",
    destination: "https://www.orangegoods.co/logos/OrangeGoods_Logo_Email.png",
  },
  {
    source: "/wp-content/uploads/2025/01/OrangeGoods_DesignDeck.pdf",
    destination: "https://www.orangegoods.co/wp-content/uploads/2025/01/OrangeGoods_DesignDeck.pdf",
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_SIGNATURE_REDIRECTS.map((route) => ({
      ...route,
      permanent: true,
    }));
  },
  images: {
    unoptimized: isDev,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orangegoods.co",
      },
      {
        protocol: "https",
        hostname: "www.orangegoods.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "cdn.ssactivewear.com",
      },
    ],
  },
};

export default nextConfig;
