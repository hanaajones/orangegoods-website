import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { buildMetadata } from "@/lib/seo";
import { posts } from "./data";

const POSTS_PER_PAGE = 8;

type InsightsPageProps = {
  searchParams?: Promise<{ page?: string }>;
};

export const dynamic = "force-dynamic";

function getPageHref(page: number) {
  return page <= 1 ? "/insights" : `/insights?page=${page}`;
}

export async function generateMetadata({
  searchParams,
}: InsightsPageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const parsedPage = Number(resolvedSearchParams?.page);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 1 ? parsedPage : 1;

  return buildMetadata({
    title: currentPage > 1 ? `Insights — Page ${currentPage} · Orange Goods` : "Insights — Orange Goods",
    description:
      "Orange Goods insights on custom hats, apparel, drinkware, accessories, merch strategy, product decisions, and production-minded branded goods.",
    path: currentPage > 1 ? `/insights?page=${currentPage}` : "/insights",
    image: "/images/gallery/design-built-production-dscf1585.jpg",
    imageAlt: "Orange Goods insights and merch strategy content",
  });
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawPage = resolvedSearchParams?.page;
  const parsedPage = Number(rawPage);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0
    ? Math.min(parsedPage, totalPages)
    : 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-built-production-dscf1585.jpg"
          position="center 42%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Orange Goods Journal
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Insights
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Our take on custom merch, design, and building a brand that people actually want to
            wear.
          </p>
        </div>
      </section>

      <div className="-mt-2 bg-white px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            {visiblePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/20 bg-white/75 transition hover:border-[var(--og-orange)] hover:shadow-md"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      style={{ objectPosition: post.cropPosition ?? "center center" }}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  <span className="text-[var(--og-orange)]">
                    {post.category}
                  </span>
                  <span className="text-[var(--og-muted)]">{post.date}</span>
                </div>
                <h2 className="mt-5 text-3xl leading-tight text-[var(--og-blue)] md:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition group-hover:text-[var(--og-orange)]">
                  Read more →
                </span>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 ? (
            <div className="mt-12 flex flex-col items-center gap-5">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {currentPage > 1 ? (
                  <Link
                    href={getPageHref(currentPage - 1)}
                    aria-label="Previous page"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                  >
                    <span aria-hidden="true">‹</span>
                  </Link>
                ) : null}

                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = page === currentPage;

                  return (
                    <Link
                      key={page}
                      href={getPageHref(page)}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold uppercase tracking-[0.12em] transition ${
                        isActive
                          ? "border-[var(--og-orange)] bg-[var(--og-orange)] text-white"
                          : "border-[#0B32A0]/18 text-[var(--og-blue)] hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                      }`}
                    >
                      {page}
                    </Link>
                  );
                })}

                {currentPage < totalPages ? (
                  <Link
                    href={getPageHref(currentPage + 1)}
                    aria-label="Next page"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                  >
                    <span aria-hidden="true">›</span>
                  </Link>
                ) : null}
              </div>

              <p className="text-sm text-[var(--og-muted)]">
                Showing {startIndex + 1}-{Math.min(startIndex + POSTS_PER_PAGE, posts.length)} of{" "}
                {posts.length} posts
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
