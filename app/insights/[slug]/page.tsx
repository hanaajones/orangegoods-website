import Link from "next/link";
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
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {post.category}
          </p>
          <h1 className="mt-5 text-5xl leading-none text-white md:text-7xl lg:text-8xl">
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

      <section className="bg-[var(--og-orange)] px-4 py-14 text-white md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl leading-none text-white md:text-6xl">
            READY TO MAKE SOMETHING?
          </h2>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit items-center rounded-xl bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:bg-[var(--og-warm-grey)]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
