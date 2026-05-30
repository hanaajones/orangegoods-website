import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { posts } from "./data";

export default function InsightsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl leading-none text-white md:text-6xl lg:text-7xl">
            INSIGHTS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
            Our take on custom merch, design, and building a brand
          </p>
        </div>
      </section>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex min-h-80 flex-col border border-[#0B32A0]/20 bg-white/75 p-6"
              >
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
                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
