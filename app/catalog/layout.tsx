import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Custom Apparel Pricing Catalog — Orange Goods",
  description:
    "Compare blank apparel styles and estimated decorated pricing across tees, hoodies, fleece, outerwear, headwear, and socks.",
  path: "/catalog",
  image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
  imageAlt: "Premium blank apparel for custom merch pricing",
});

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
