import { GalleryBoard } from "@/components/GalleryBoard";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery-data";

export const metadata = {
  title: "Gallery — Orange Goods",
  description: "A look at the custom goods we've made for brands across the country.",
};

export default function GalleryPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="border-t border-[#081E6F]/10 bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Our Work
              </p>
              <h1 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                The goods.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/60">
                Hats, tees, totes, socks, accessories, and the projects that show how Orange Goods works in the real world.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <GalleryBoard items={galleryItems} />

      <section className="px-6 py-12 text-center">
        <p className="text-base text-[var(--og-muted)]">
          Like what you see?{" "}
          <a href="/contact" className="font-semibold text-[var(--og-orange)] hover:underline">
            Start a project →
          </a>
        </p>
      </section>
    </main>
  );
}
