import type { Metadata } from "next";
import { CATALOG_PRODUCTS } from "@/data/catalog";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = CATALOG_PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return buildMetadata({
      title: "Catalog Product — Orange Goods",
      description: "Explore custom apparel and merch pricing through the Orange Goods catalog.",
      path: `/catalog/${slug}`,
    });
  }

  return buildMetadata({
    title: `${product.fullName} — Custom Apparel Pricing · Orange Goods`,
    description: product.description,
    path: `/catalog/${product.slug}`,
    image: "/images/gallery/apparel-686-hoodie-detail.jpg",
    imageAlt: product.fullName,
  });
}

export default function CatalogProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
