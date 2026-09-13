import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.toUpperCase() === "OG" ? "OG" : `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = labelFromSlug(slug);

  return buildMetadata({
    title: `${label} — Shop OG · Orange Goods`,
    description:
      "Shop Orange Goods branded hats, socks, and other in-house pieces directly from the studio.",
    path: `/shop/${slug}`,
    image: "/images/gallery/hat-og-patch-yosemite.jpg",
    imageAlt: label,
  });
}

export default function ShopProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
