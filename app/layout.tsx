import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://orangegoods.co"),
  title: "Orange Goods — Custom Branded Merchandise, Los Angeles",
  description:
    "Premium custom merch for brands. Hats, apparel, drinkware, accessories — designed, produced, and delivered by our Southern California team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orange Goods — Custom Branded Merchandise, Los Angeles",
    description:
      "Premium custom merch for brands. Hats, apparel, drinkware, accessories — designed, produced, and delivered by our Southern California team",
    url: "https://orangegoods.co",
    siteName: "Orange Goods",
    images: [
      {
        url: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
        width: 1200,
        height: 630,
        alt: "Orange Goods custom branded merchandise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Goods — Custom Branded Merchandise, Los Angeles",
    description:
      "Premium custom merch for brands. Hats, apparel, drinkware, accessories — designed, produced, and delivered by our Southern California team",
    images: ["https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "var(--font-body, 'NoirPro', sans-serif)" }}>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,66,0,0.18),transparent_60%)]" />
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
