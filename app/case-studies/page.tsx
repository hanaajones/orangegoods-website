import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Case Studies — Orange Goods",
  description: "A closer look at how we've built goods for real brands — from concept to production to delivery.",
};

const caseStudies = [
  {
    slug: "verve-coffee",
    client: "Verve Coffee Roasters",
    category: "Custom Headwear",
    summary:
      "Verve needed headwear that felt as premium as their coffee — nothing from a catalog, nothing generic. We built a custom dad hat line from scratch with their color palette and feel.",
    image: "https://orangegoods.co/wp-content/uploads/2025/04/OrangeGoodsClients_Website_2025_VerveCoffee.avif",
    tags: ["OG Crafted", "Headwear", "Retail"],
  },
  {
    slug: "firestone-walker",
    client: "Firestone Walker Brewing",
    category: "Apparel + Accessories",
    summary:
      "A flagship brewery with a loyal following needed merch that matched their reputation. We handled the full project — design, production, and delivery — for their retail and events program.",
    image: "https://orangegoods.co/wp-content/uploads/2024/10/OrangeGoodsClients_Website_2024-36.png",
    tags: ["OG Crafted", "Apparel", "Events"],
  },
  {
    slug: "stanford-medicine",
    client: "Stanford Medicine",
    category: "Staff + Event Kits",
    summary:
      "Large institution, tight timeline. Stanford needed staff kits and event items that were polished and ready fast. Ready Made delivered.",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/SM_Web_vert_LG.png",
    tags: ["Ready Made", "Staff Kits", "Healthcare"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#0B32A0] px-4 py-16 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Real Work
          </p>
          <h1
            className="mt-4 text-4xl uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Case Studies
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-white/70">
            A closer look at how we build goods for real brands — from brief to delivery.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#1C1C1C]/10 bg-white"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-[#E4DFCD]">
                <Image
                  src={cs.image}
                  alt={cs.client}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7F00]">
                  {cs.category}
                </p>
                <h2
                  className="mt-2 text-xl uppercase leading-tight text-[#FF4200]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cs.client}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#1C1C1C]/70">
                  {cs.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl bg-[#F3EFE7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1C1C]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#FF4200] transition hover:gap-2"
                >
                  Read the story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Coming soon note */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-12 text-center md:px-8">
        <p className="text-base text-[#1C1C1C]/50">
          More case studies being added regularly.{" "}
          <Link href="/contact" className="font-semibold text-[#FF4200] hover:underline">
            Start your project →
          </Link>
        </p>
      </section>
    </main>
  );
}
