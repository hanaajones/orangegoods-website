import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Merch Quiz — Find the Right Custom Goods",
  description:
    "Take the Orange Goods merch quiz to narrow the right product direction, production path, and next step for your brand.",
  path: "/quiz",
  image: "/images/gallery/quiz-heavyweight-hoodie-merch-drop-2025-7.jpg",
  imageAlt: "Orange Goods merch quiz product examples",
});

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
