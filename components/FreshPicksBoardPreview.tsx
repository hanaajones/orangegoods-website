"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type TrendTile = {
  title: string;
  note: string;
  image: string;
  category: string;
  tags: string[];
  action: string;
  href: string;
  size: "small" | "medium" | "large";
};

const filters = [
  "All",
  "Apparel",
  "Hats",
  "Bags",
  "Drinkware",
  "Graphics",
  "Events",
  "Gifting",
  "Restaurants",
  "Outdoor",
];

const trendTiles: TrendTile[] = [
  {
    title: "Heavy tees, simple art",
    note: "A heavier blank makes even a one-color print feel more like a retail piece.",
    image: "/images/gallery/apparel-verve-gd-tee.jpg",
    category: "Apparel",
    tags: ["Premium basics", "Retail feel"],
    action: "Build a tee",
    href: "/goods/apparel",
    size: "large",
  },
  {
    title: "Tonal embroidery",
    note: "Quiet thread colors can make hats and fleece feel premium without shouting.",
    image: "/images/gallery/hat-feb-img_7550.jpg",
    category: "Hats",
    tags: ["Embroidery", "Subtle"],
    action: "See hats",
    href: "/goods/hats",
    size: "medium",
  },
  {
    title: "Gift kits that do not feel corporate",
    note: "One useful product, one wearable piece, and one small detail usually beats a box full of filler.",
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    category: "Gifting",
    tags: ["Corporate gifting", "Kits"],
    action: "Plan a kit",
    href: "/contact?intent=gift-kit",
    size: "small",
  },
  {
    title: "Canvas totes are still working",
    note: "A tote is only boring when the blank, print size, and use case are boring.",
    image: "/images/gallery/bags-boatsetter-tote.jpg",
    category: "Bags",
    tags: ["Totes", "Events"],
    action: "See bags",
    href: "/goods/bags",
    size: "medium",
  },
  {
    title: "Soft camo hats",
    note: "Camo is coming back softer: washed, faded, and paired with clean embroidery or a small patch.",
    image: "/images/gallery/hat-client-bucket-brown.jpg",
    category: "Hats",
    tags: ["Camo", "Outdoor"],
    action: "Source this",
    href: "/contact?intent=source-soft-camo-hats",
    size: "large",
  },
  {
    title: "Restaurant staff merch",
    note: "The best staff apparel feels like something the team would wear off shift too.",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    category: "Restaurants",
    tags: ["Staff apparel", "Coffee"],
    action: "Build apparel",
    href: "/goods/apparel",
    size: "medium",
  },
  {
    title: "Rope hats for outdoor brands",
    note: "A rope detail gives a cap a little more personality without making the whole hat loud.",
    image: "/images/product/hats/as-colour/1123-rope-cap-front.jpg",
    category: "Outdoor",
    tags: ["Hats", "Rope detail"],
    action: "See rope caps",
    href: "/goods/hats/ready-made/1123",
    size: "small",
  },
  {
    title: "Graphic-first merch",
    note: "Sometimes the product is simple because the graphic is doing the heavy lifting.",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_072.jpg",
    category: "Graphics",
    tags: ["Graphics", "Retail merch"],
    action: "Need artwork?",
    href: "/design",
    size: "medium",
  },
  {
    title: "Towels for summer drops",
    note: "A towel gives a brand more surface area, better photos, and a reason to leave the house.",
    image: "/images/gallery/accessories-boatsetter-towel.jpg",
    category: "Outdoor",
    tags: ["Towels", "Summer"],
    action: "Ask us to source",
    href: "/contact?intent=source-towels",
    size: "large",
  },
  {
    title: "Socks as the small gift",
    note: "Socks are a good add-on when you need something easy to size and easy to mail.",
    image: "/images/gallery/socks-verve-gd-dscf4863.jpg",
    category: "Gifting",
    tags: ["Socks", "Mailers"],
    action: "See socks",
    href: "/goods/socks",
    size: "small",
  },
  {
    title: "Event merch people keep",
    note: "The order works harder when the piece still makes sense after the event ends.",
    image: "/images/gallery/apparel-gts-synergy.jpg",
    category: "Events",
    tags: ["Events", "Staff gear"],
    action: "Start an event order",
    href: "/contact?intent=event-merch",
    size: "medium",
  },
  {
    title: "Patch details",
    note: "A patch can make a simple cap feel more designed, especially when the colors are dialed in.",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    category: "Hats",
    tags: ["Patches", "Detail"],
    action: "Compare decoration",
    href: "/insights/decoration-options-guide",
    size: "small",
  },
];

function tileHeight(size: TrendTile["size"]) {
  if (size === "large") return "h-[27rem]";
  if (size === "medium") return "h-[22rem]";
  return "h-[17rem]";
}

export function FreshPicksBoardPreview() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleTiles = useMemo(() => {
    if (activeFilter === "All") return trendTiles;
    return trendTiles.filter((tile) => tile.category === activeFilter || tile.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="bg-[#F7F4ED] text-[var(--og-off-black)]">
      <section className="border-t border-[#081E6F]/10 bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Fresh Picks
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Our monthly fresh picks, on trend and always moving.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/60">
                Product ideas, graphics, and goods we would actually recommend.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              Start a project
            </Link>
            <Link
              href="/catalog"
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              See full catalog
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#081E6F]/10 bg-[#F3EFE7] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                activeFilter === filter
                  ? "border-[#FF7F00] bg-[#FF7F00] text-white"
                  : "border-[#081E6F]/14 bg-white text-[var(--og-blue)] hover:border-[#FF7F00] hover:text-[#FF7F00]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {visibleTiles.map((tile) => (
              <article
                key={tile.title}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-[#081E6F]/12 bg-white shadow-[0_18px_50px_rgba(8,30,111,0.07)]"
              >
                <div className={`relative ${tileHeight(tile.size)} bg-[#E4DFCD]`}>
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#FF7F00] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {tile.category}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-2xl leading-none text-[var(--og-blue)]">{tile.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{tile.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tile.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#081E6F]/10 bg-[#F7F4ED] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={tile.href}
                    className="mt-4 inline-flex min-h-10 items-center rounded-lg border border-[#FF7F00] px-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#FF7F00] transition hover:bg-[#FF7F00] hover:text-white"
                  >
                    {tile.action}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
