import type { Metadata } from "next";
import Link from "next/link";
import { ProductCategories } from "@/components/ProductCategories";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
import { logos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unused Sections | Orange Goods Draft",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnusedSectionsPage() {
  return (
    <main className="min-h-screen bg-white pb-20 text-[#1C1C1C]">
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        <Link
          href="/"
          className="font-noir-alt text-xs font-bold uppercase tracking-[0.16em] text-[#0B32A0]"
        >
          Back to homepage
        </Link>
        <p className="font-display mt-8 text-4xl uppercase leading-none text-[#FF4200] md:text-6xl">
          Unused Sections
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#1C1C1C]/60">
          A private draft page for homepage sections we want to keep around while editing.
        </p>
      </section>

      <section className="border-y-[3px] border-[#1C1C1C] bg-[#F7F4ED] px-4 py-4 md:px-8">
        <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.16em] text-[#1C1C1C]/45">
          Parked homepage use-case grid
        </p>
      </section>
      <UseCaseCarousel logos={logos} />

      <section className="border-y-[3px] border-[#1C1C1C] bg-[#F7F4ED] px-4 py-4 md:px-8">
        <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.16em] text-[#1C1C1C]/45">
          Parked homepage moment carousel
        </p>
      </section>
      <ProductCategories />
    </main>
  );
}
