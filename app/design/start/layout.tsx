import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start a Design Project — Orange Goods",
  description:
    "Start a merch-first design project with Orange Goods for graphics, packaging, trims, mockups, and production-ready artwork.",
  path: "/design/start",
  image: "/images/gallery/design-built-production-dscf1585.jpg",
  imageAlt: "Orange Goods design work prepared for production",
});

export default function DesignStartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
