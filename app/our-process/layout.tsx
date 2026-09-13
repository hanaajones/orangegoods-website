import type { Metadata } from "next";
import { metadata as servicesMetadata } from "../services/page";

export const metadata: Metadata = servicesMetadata;

export default function OurProcessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
