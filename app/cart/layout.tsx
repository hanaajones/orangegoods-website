import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Project Cart — Orange Goods",
  description:
    "Review the Orange Goods project cart before sending one combined custom merch request.",
  path: "/cart",
  noIndex: true,
});

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
