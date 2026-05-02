import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
      <body className="antialiased" style={{ fontFamily: "var(--font-body, 'NoirPro', sans-serif)" }}>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,66,0,0.18),transparent_60%)]" />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
