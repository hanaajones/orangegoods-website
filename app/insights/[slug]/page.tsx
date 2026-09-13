import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { buildArticleStructuredData, buildMetadata } from "@/lib/seo";
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

  return buildMetadata({
    title: `${post.title} | Orange Goods`,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    imageAlt: post.title,
    type: "article",
  });
}

export default async function InsightPostPage({
  params,
}: InsightPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleStructuredData = buildArticleStructuredData({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    articleSection: post.category,
  });

  return (
    <main className="pb-24 md:pb-0">
      <StructuredData id={`insight-${post.slug}`} data={articleStructuredData} />
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
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
        <div className="absolute inset-0 bg-[#1C1C1C]/36" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/42 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            {post.category}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
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
            className="mt-10 text-lg leading-8 text-[var(--og-off-black)] insight-content insight-content--noir-sample"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Explore More carousel */}
      {(() => {
        const others = posts.filter(p => p.slug !== post.slug);
        return others.length > 0 ? (
          <section className="border-t border-[#1C1C1C]/8 bg-white px-4 py-12 md:px-8 lg:px-12">
            <h2 className="font-noir-alt mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/48">
              Explore More
            </h2>
            <div className="flex gap-5 overflow-x-auto overflow-y-visible pb-2 pt-3">
              {others.map(p => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group w-80 shrink-0 flex flex-col overflow-hidden rounded-[1.65rem] border-[3px] border-[#0B32A0] bg-white transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#0B32A0] md:w-[24rem]"
                >
                  {p.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 320px, 384px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">{p.category}</p>
                    <p className="text-base font-semibold text-[#1C1C1C] leading-6">{p.title}</p>
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
            READY TO START A CUSTOM ORDER?
          </h2>
          <Link href="/contact" className="btn-og-white">
            Start a Custom Order
          </Link>
        </div>
      </section>
    </main>
  );
}
