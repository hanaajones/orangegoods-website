import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Orange Goods — Start Your Custom Merch Project",
  description:
    "Talk with Orange Goods about custom hats, apparel, drinkware, bags, gifting, or a broader branded goods project.",
  path: "/contact",
  image: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
  imageAlt: "Orange Goods branded laptop sleeves and custom goods",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
