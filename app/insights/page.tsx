import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

const posts = [
  {
    category: "HATS",
    title: "How to Choose the Right Hat Style for Your Brand",
    excerpt:
      "From structured 5-panels to unstructured dad hats, the silhouette you choose says a lot about your brand.",
  },
  {
    category: "DESIGN",
    title: "Why Your Merch Deserves a Real Designer",
    excerpt:
      "AI tools can generate something. Our team creates something worth keeping.",
  },
  {
    category: "PROCESS",
    title: "From Brief to Delivery: How the OG Process Works",
    excerpt:
      "A transparent look at how we handle every project from first conversation to final shipment.",
  },
  {
    category: "EMBROIDERY",
    title: "Embroidery vs Screen Print: Which Is Right for Your Project?",
    excerpt:
      "Both have their place. Here's how we decide which decoration method to recommend.",
  },
  {
    category: "CLIENTS",
    title: "Custom Merch for Food & Beverage Brands: What Works",
    excerpt:
      "We've worked with some of the best - here's what we've learned about merch for hospitality and CPG.",
  },
  {
    category: "TRENDS",
    title: "What's Working in Custom Merch Right Now",
    excerpt:
      "Retail-quality finishes, tonal embroidery, and the death of the generic polo. Our 2025 take.",
  },
];

export default function InsightsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            The OG Blog
          </p>
          <h1 className="mt-5 text-6xl leading-none text-white md:text-8xl lg:text-9xl">
            INSIGHTS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
            Tips, trends, and behind-the-scenes from the Orange Goods studio.
          </p>
        </div>
      </section>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex min-h-80 flex-col border border-[#0B32A0]/20 bg-white/75 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  {post.category}
                </p>
                <h2 className="mt-5 text-3xl leading-tight text-[var(--og-orange)]">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
                >
                  Read more -&gt;
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you want to make and we'll help shape the right goods for your brand."
        buttonLabel="Start a Project"
        buttonHref="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
      />
    </main>
  );
}
