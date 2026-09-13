import type { Metadata } from "next";
import "./globals.css";
import { LeadAttributionTracker } from "@/components/LeadAttributionTracker";
import { StructuredData } from "@/components/StructuredData";
import { SiteChrome } from "@/components/SiteChrome";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  buildMetadata,
  organizationStructuredData,
  websiteStructuredData,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://orangegoods.co"),
  ...buildMetadata({
    title: "Orange Goods — Custom Branded Merchandise, Los Angeles",
    description: DEFAULT_DESCRIPTION,
    path: "/",
    image: DEFAULT_OG_IMAGE,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ogr4tvs.css" />
        <StructuredData id="orange-goods-org" data={organizationStructuredData} />
        <StructuredData id="orange-goods-website" data={websiteStructuredData} />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-body, 'NoirPro', sans-serif)" }}>
        <LeadAttributionTracker />
        <div className="relative min-h-screen overflow-x-clip">
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
