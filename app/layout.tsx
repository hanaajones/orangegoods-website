import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Orange Goods",
  description:
    "Custom branded goods and designs crafted to be kept and loved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-[family-name:var(--font-figtree)] antialiased`}>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,66,0,0.18),transparent_60%)]" />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
