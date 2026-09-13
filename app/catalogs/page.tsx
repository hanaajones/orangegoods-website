import Image from "next/image";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Catalogs - Orange Goods",
  description:
    "Browse Orange Goods catalogs and guides, then open or download the PDFs that match your project.",
  path: "/catalogs",
  image: "/images/gallery/goods-hero-misc-dscf4876.jpg",
  imageAlt: "Orange Goods catalogs and guides",
});

const catalogs = [
  {
    name: "Fresh Picks Guide",
    eyebrow: "Recent goods",
    description:
      "A broader product guide covering hats, apparel, drinkware, blankets, bags, and more current Orange Goods directions.",
    href: "https://orangegoods.co/wp-content/uploads/2025/01/OrangeGoods_FreshPicks.pdf",
    image: "/images/gallery/goods-hero-misc-dscf4876.jpg",
    imagePosition: "center 46%",
    tags: ["Hats", "Apparel", "Drinkware", "Bags"],
  },
  {
    name: "Design Deck",
    eyebrow: "Creative support",
    description:
      "Packaging, merch graphics, patterns, illustrations, and in-house design support built to become real goods.",
    href: "https://orangegoods.co/wp-content/uploads/2025/01/OrangeGoods_DesignDeck.pdf",
    image: "/images/gallery/design-hero-ocean-ocean-hoodie.jpg",
    imagePosition: "center 34%",
    tags: ["Graphics", "Packaging", "Patterns", "Illustration"],
  },
];

export default function CatalogsPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/accessories-boatsetter-towel.jpg"
          position="center 48%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/68 via-[#1C1C1C]/48 to-[#1C1C1C]/16" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Catalogs + Guides
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Browse the Decks
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Open the PDFs, skim the product mix, and download the decks that help you get moving faster.
          </p>
        </div>
      </section>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-accent text-sm font-normal uppercase tracking-[0.2em] text-[#FF4200]">
              Ready to open
            </p>
            <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
              Catalogs you can actually use.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#1C1C1C]/68 md:text-base">
              Start with the broader guide if you need ideas, then move into the design deck if you want help shaping the creative side too.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {catalogs.map((catalog) => (
              <article
                key={catalog.name}
                className="overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-white shadow-[8px_8px_0px_#0B32A0]"
              >
                <div className="relative aspect-[16/10] bg-[#E4DFCD]">
                  <Image
                    src={catalog.image}
                    alt={catalog.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: catalog.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/78 via-[#1C1C1C]/24 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB07A]">
                      {catalog.eyebrow}
                    </p>
                    <h3 className="mt-2 font-noir-alt text-3xl font-bold leading-none text-white md:text-4xl">
                      {catalog.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-sm leading-7 text-[#1C1C1C]/68 md:text-base">
                    {catalog.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {catalog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0B32A0]/15 bg-[#F7F4ED] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={catalog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-og inline-flex"
                    >
                      Open catalog
                    </a>
                    <a
                      href={catalog.href}
                      download
                      className="btn-og-white inline-flex"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 md:p-10">
              <p className="font-accent text-sm font-normal uppercase tracking-[0.2em] text-[#FF4200]">
                Need something specific?
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Need a hats-only or apparel-only direction?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#1C1C1C]/68 md:text-base">
                Start with the decks above, then send us what you are leaning toward. We can point you toward the right category faster instead of making you dig through every option alone.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/goods" className="btn-og inline-flex">
                  View goods
                </Link>
                <Link href="/contact" className="btn-og-white inline-flex">
                  Start a project
                </Link>
              </div>
            </div>

            <div className="relative min-h-[18rem] bg-[#E4DFCD]">
              <Image
                src="/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg"
                alt="Orange Goods apparel and merch details"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 34%" }}
              />
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
