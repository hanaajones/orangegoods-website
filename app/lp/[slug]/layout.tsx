import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return buildMetadata({
    title: `${slug} — Landing Page Template · Orange Goods`,
    description: "Placeholder landing-page scaffold for future Orange Goods campaign pages.",
    path: `/lp/${slug}`,
    noIndex: true,
  });
}

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
