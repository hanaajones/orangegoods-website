import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../data";

type InsightPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: InsightPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Orange Goods`,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({
  params,
}: InsightPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pb-24 md:pb-0">
      {/* Hero — photo replaces blue header */}
      <section className="relative h-[480px] w-full overflow-hidden md:h-[560px]">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: post.cropPosition ?? "center 40%" }}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-12 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {post.category}
          </p>
          <h1 className="mt-4 text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="bg-[var(--og-warm-grey)] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-[#0B32A0]/20 pb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]">
            <span>{post.date}</span>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          <div
            className="insight-content mt-10 text-lg leading-8 text-[var(--og-off-black)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Explore More carousel */}
      {(() => {
        const others = posts.filter(p => p.slug !== post.slug);
        return others.length > 0 ? (
          <section className="border-t border-[#1C1C1C]/8 bg-white px-4 py-12 md:px-8 lg:px-12">
            <h2 className="mb-6 text-center text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40">Explore More</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {others.map(p => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group w-72 shrink-0 flex flex-col overflow-hidden rounded-[1.5rem] border border-[#1C1C1C]/8 bg-[#F5F0E8] transition hover:border-[#0B32A0]"
                >
                  {p.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="288px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">{p.category}</p>
                    <p className="text-sm font-semibold text-[#1C1C1C] leading-5">{p.title}</p>
                    <p className="text-xs text-[#1C1C1C]/40">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null;
      })()}

      <section className="bg-[var(--og-orange)] px-4 py-14 text-white md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl leading-none text-white md:text-6xl">
            READY TO MAKE SOMETHING?
          </h2>
          <Link href="/contact" className="btn-og-white">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
