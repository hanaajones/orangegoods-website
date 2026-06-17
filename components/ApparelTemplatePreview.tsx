"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type SizeKey = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";

type ApparelProduct = {
  id: string;
  name: string;
  style: string;
  category: string;
  fit: string;
  weight: string;
  bestFor: string;
  recommendation: string;
  trend: string;
  image: string;
  price: number;
  timeline: string;
  colors: { name: string; value: string }[];
};

const sizes: SizeKey[] = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const products: ApparelProduct[] = [
  {
    id: "comfort-colors-1717",
    name: "Comfort Colors 1717",
    style: "Garment Dyed Tee",
    category: "Tees",
    fit: "Relaxed",
    weight: "6.1 oz",
    bestFor: "Retail merch, coffee shops, tour drops, and easy uniforms.",
    recommendation: "Comfort Colors is the tee we reach for when a customer wants soft, wearable, and familiar without making the order feel generic.",
    trend: "Garment-dyed tees still work because the color feels lived-in from day one. They photograph well, wear in nicely, and make a logo feel more like merch than promo.",
    image: "/images/product/apparel-tshirt-hero.jpg",
    price: 18.25,
    timeline: "2-3 weeks",
    colors: [
      { name: "Ivory", value: "#EEE5D6" },
      { name: "Washed Navy", value: "#2B3E63" },
      { name: "Moss", value: "#6F795C" },
      { name: "Pepper", value: "#55514D" },
    ],
  },
  {
    id: "premium-hoodie",
    name: "Premium Pullover Hoodie",
    style: "Heavy Fleece",
    category: "Fleece",
    fit: "Standard",
    weight: "10 oz",
    bestFor: "Employee gifts, launch kits, team gear, and cooler-weather events.",
    recommendation: "A heavier hoodie is an easy way to make a company gift feel more generous. It has enough weight to feel intentional without getting overly precious.",
    trend: "People keep choosing heavier fleece because it feels closer to retail. If the budget allows it, the upgrade is usually worth it.",
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    price: 42.5,
    timeline: "3-4 weeks",
    colors: [
      { name: "Bone", value: "#E5DED1" },
      { name: "Navy", value: "#182B55" },
      { name: "Forest", value: "#263F34" },
      { name: "Black", value: "#111111" },
    ],
  },
  {
    id: "heavyweight-tee",
    name: "Heavyweight Box Tee",
    style: "Structured Tee",
    category: "Tees",
    fit: "Boxy",
    weight: "7.5 oz",
    bestFor: "Premium uniforms, brand stores, restaurant merch, and style-led drops.",
    recommendation: "This is the move when the fit matters. A boxier tee makes simple artwork feel more current and gives the finished piece more shape.",
    trend: "Thin event tees are easy to ignore. Heavier tees feel more like something someone chose, which is exactly the point.",
    image: "/images/gallery/apparel-verve-gd-tee2.jpg",
    price: 21,
    timeline: "2-3 weeks",
    colors: [
      { name: "Natural", value: "#E7DDC8" },
      { name: "Coffee", value: "#6B4C3A" },
      { name: "Brick", value: "#A15035" },
      { name: "Ink", value: "#1E2433" },
    ],
  },
  {
    id: "workwear-flannel",
    name: "Workwear Overshirt",
    style: "Woven Layer",
    category: "Layers",
    fit: "Easy",
    weight: "Midweight",
    bestFor: "Hospitality teams, office layers, outdoor events, and elevated staff gear.",
    recommendation: "An overshirt is a good answer when a tee is too casual and a jacket feels like too much. It gives a team a uniform layer without looking stiff.",
    trend: "Workwear-inspired layers keep showing up because they are practical, easy to style, and useful after the event.",
    image: "/images/product/apparel-hoodie-front.jpg",
    price: 54,
    timeline: "4-5 weeks",
    colors: [
      { name: "Cream", value: "#EEE0C9" },
      { name: "Slate", value: "#5F6B75" },
      { name: "Olive", value: "#59624B" },
      { name: "Clay", value: "#B66D4E" },
    ],
  },
];

const projectGallery = [
  {
    title: "Verve retail tee",
    copy: "A soft-hand print on a garment-dyed tee helped the piece feel like something people would actually buy from the shop.",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_040.jpg",
  },
  {
    title: "686 hoodie program",
    copy: "Heavy fleece and clean placement kept the hoodie useful after the launch moment, not just during it.",
    image: "/images/gallery/apparel-686-hoodie-detail.jpg",
  },
  {
    title: "Event staff apparel",
    copy: "Simple sizing and durable decoration kept the order easy to manage and easy to wear again.",
    image: "/images/gallery/apparel-gts-synergy.jpg",
  },
];

const educationBlocks = [
  {
    title: "We help with the details",
    copy: "Logo size, placement, thread color, print method, and blank choice all change how the final piece feels.",
  },
  {
    title: "Real mockups before production",
    copy: "We send mockups so you can see how the artwork sits on the garment before anything gets made.",
  },
  {
    title: "A person is still here",
    copy: "Build online when it is straightforward. Ask us when you want another set of eyes.",
  },
];

const trustStats = [
  { value: "100+", label: "piece minimum" },
  { value: "Free", label: "mockups before production" },
  { value: "Human", label: "help when you need it" },
];

const conversionPaths = [
  {
    title: "Build online",
    copy: "Choose the blank, color, quantity, sizes, decoration, and artwork so you can see the order take shape.",
    action: "Start building",
    href: "#apparel-builder",
  },
  {
    title: "Get a quote",
    copy: "Send us the goal, budget, and timeline. We will help pick the right products and build the quote around it.",
    action: "Request quote",
    href: "/contact?intent=apparel-quote",
  },
  {
    title: "Start from scratch",
    copy: "Have the use case but not the product yet? We can help source, compare, and shape the right mix.",
    action: "Find my goods",
    href: "/contact?intent=find-my-goods",
  },
];

const buyerProof = [
  "Company gifts",
  "Campus merch",
  "Event giveaways",
  "Restaurant crews",
  "Team gear",
  "Retail drops",
];

const decorationOptions = [
  { label: "Screen print", price: 0, note: "Included - best for tees" },
  { label: "Embroidery", price: 3.5, note: "+$3.50 - best for fleece" },
  { label: "Woven label", price: 2.25, note: "+$2.25 - retail detail" },
  { label: "Puff print", price: 1.5, note: "+$1.50 - premium print" },
];

const initialSizes: Record<SizeKey, number> = {
  XS: 10,
  S: 35,
  M: 70,
  L: 75,
  XL: 35,
  "2XL": 15,
  "3XL": 10,
};

function unitPriceForQuantity(basePrice: number, quantity: number) {
  if (quantity >= 1000) return Math.max(basePrice - 2, 1);
  if (quantity >= 500) return Math.max(basePrice - 1.25, 1);
  if (quantity >= 250) return basePrice;
  return basePrice + 1.25;
}

export function ApparelTemplatePreview() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [selectedDecoration, setSelectedDecoration] = useState(decorationOptions[0]);
  const [sizeBreakdown, setSizeBreakdown] = useState<Record<SizeKey, number>>(initialSizes);
  const [artworkName, setArtworkName] = useState("");

  const quantity = useMemo(
    () => Object.values(sizeBreakdown).reduce((sum, value) => sum + value, 0),
    [sizeBreakdown],
  );
  const baseUnitPrice = unitPriceForQuantity(selectedProduct.price, quantity);
  const unitPrice = baseUnitPrice + selectedDecoration.price;
  const total = unitPrice * quantity;
  const sliderPct = ((Math.min(Math.max(quantity, 100), 1000) - 100) / 900) * 100;

  function selectProduct(product: ApparelProduct) {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
  }

  function updateSize(size: SizeKey, value: string) {
    const nextValue = Math.max(0, Number(value) || 0);
    setSizeBreakdown((current) => ({
      ...current,
      [size]: nextValue,
    }));
  }

  function scaleSizeRun(nextQuantity: number) {
    const safeQuantity = Math.max(100, Math.min(1000, nextQuantity));
    const currentTotal = Math.max(quantity, 1);
    let runningTotal = 0;
    const nextBreakdown = sizes.reduce((acc, size, index) => {
      const nextValue =
        index === sizes.length - 1
          ? safeQuantity - runningTotal
          : Math.round((sizeBreakdown[size] / currentTotal) * safeQuantity);
      runningTotal += nextValue;
      return {
        ...acc,
        [size]: nextValue,
      };
    }, {} as Record<SizeKey, number>);
    setSizeBreakdown(nextBreakdown);
  }

  const questionHref = `/contact?${new URLSearchParams({
    intent: "apparel-template-question",
    product: selectedProduct.name,
    color: selectedColor.name,
    decoration: selectedDecoration.label,
    quantity: String(quantity),
    sizes: sizes.map((size) => `${size}:${sizeBreakdown[size]}`).join(","),
    artwork: artworkName,
  }).toString()}`;

  return (
    <main className="bg-[#F7F4ED] text-[var(--og-off-black)]">
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
              Custom apparel
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-none text-[var(--og-blue)] md:text-6xl">
              Apparel that looks like your brand, not a giveaway.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4b4b4b]">
              Browse recommended blanks, see transparent pricing, and build the order yourself. Bring in our team when the details need a human eye.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {trustStats.map((stat) => (
                <div key={stat.value} className="rounded-lg border border-[#081E6F]/12 bg-[#FAF8F2] p-3">
                  <p className="text-2xl font-semibold leading-none text-[var(--og-orange)]">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-[#5f5f5f]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apparel-builder"
                className="inline-flex min-h-12 items-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
              >
                Start building
              </a>
              <a
                href="#apparel-projects"
                className="inline-flex min-h-12 items-center rounded-lg border border-[var(--og-blue)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:-translate-y-0.5 hover:bg-[var(--og-blue)] hover:text-white"
              >
                View apparel projects
              </a>
              <Link
                href="/contact?intent=apparel-human-help"
                className="inline-flex min-h-12 items-center rounded-lg border border-[#081E6F]/16 bg-[#FAF8F2] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:-translate-y-0.5 hover:border-[var(--og-orange)]"
              >
                Talk to a human
              </Link>
            </div>
          </div>

          <div className="hidden gap-3 sm:grid-cols-2 md:grid">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#E5DED1] sm:col-span-2">
              <Image
                src="/images/gallery/apparel-686-hoodie-front.jpg"
                alt="Custom hoodie front view"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-white sm:block">
              <Image
                src="/images/gallery/apparel-verve-gd-tee2.jpg"
                alt="Custom printed apparel"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-white sm:block">
              <Image
                src="/images/gallery/apparel-686-hoodie-detail.jpg"
                alt="Custom hoodie decoration detail"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                Apparel catalog
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Pick the blank, then build the order.
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-[#4b4b4b] lg:justify-self-end">
              Start with the blank. Each style below is picked for a different kind of order, from soft retail tees to heavier layers for team programs.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className={`rounded-lg border bg-[#FAF8F2] transition ${
                  selectedProduct.id === product.id
                    ? "border-[var(--og-orange)] shadow-[0_18px_55px_rgba(255,66,0,0.13)]"
                    : "border-[#081E6F]/12 hover:border-[var(--og-blue)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => selectProduct(product)}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-square overflow-hidden rounded-t-lg bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7c7c7c]">
                          {product.style}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold leading-tight text-[var(--og-blue)]">
                          {product.name}
                        </h3>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-[var(--og-orange)]">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{product.bestFor}</p>
                    <div className="mt-4 flex items-center gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color.name}
                          title={color.name}
                          className="h-5 w-5 rounded-full border border-[#1C1C1C]/15"
                          style={{ backgroundColor: color.value }}
                        />
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[18rem] bg-[#ECE7DC]">
                <Image
                  src={selectedProduct.image}
                  alt={`${selectedProduct.name} recommendation`}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                  Why we recommend it
                </p>
                <h3 className="mt-2 text-3xl leading-none text-[var(--og-blue)]">
                  {selectedProduct.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">
                  {selectedProduct.recommendation}
                </p>
                <div className="mt-4 rounded-lg border border-[#081E6F]/12 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777]">
                    Trend note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--og-blue)]">
                    {selectedProduct.trend}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[var(--og-blue)]">
                  <span className="rounded-full border border-[#081E6F]/12 bg-white px-3 py-2">
                    {selectedProduct.fit} fit
                  </span>
                  <span className="rounded-full border border-[#081E6F]/12 bg-white px-3 py-2">
                    {selectedProduct.weight}
                  </span>
                  <span className="rounded-full border border-[#081E6F]/12 bg-white px-3 py-2">
                    From ${selectedProduct.price.toFixed(2)}/unit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#081E6F]/10 bg-[#F3EFE7] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {educationBlocks.map((block) => (
            <article key={block.title} className="rounded-lg border border-[#081E6F]/12 bg-white p-5">
              <h2 className="text-2xl leading-none text-[var(--og-blue)]">
                {block.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{block.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="apparel-projects" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                Project proof
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Show the detail that made the project work.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4b4b4b]">
                A good apparel order usually comes down to a few quiet decisions: the blank, the decoration, the placement, and whether the finished piece feels worth keeping.
              </p>
            </div>
            <Link
              href="/gallery?category=apparel"
              className="inline-flex min-h-11 items-center rounded-lg border border-[#081E6F]/18 px-4 text-sm font-semibold text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
            >
              View full apparel gallery
            </Link>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {projectGallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-[#081E6F]/12 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE7DC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 31vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl leading-none text-[var(--og-blue)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F2] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
              Who this is built for
            </p>
            <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
              Taste for cool brands. Trust for bigger buyers.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#4b4b4b]">
              We work best with teams that care about the finished product, whether it is for a restaurant crew, campus department, company event, or retail drop.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {buyerProof.map((item) => (
              <div key={item} className="rounded-lg border border-[#081E6F]/12 bg-white px-4 py-3 text-sm font-semibold text-[var(--og-blue)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apparel-builder" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,360px)]">
          <div className="rounded-lg border border-[#081E6F]/12 bg-white p-5 shadow-[0_18px_55px_rgba(8,30,111,0.07)] md:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                  Build apparel
                </p>
                <h2 className="mt-2 text-4xl leading-none text-[var(--og-blue)]">
                  {selectedProduct.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">
                  {selectedProduct.fit} fit - {selectedProduct.weight} - {selectedProduct.timeline}
                </p>
                <div className="relative mt-5 aspect-square overflow-hidden rounded-lg bg-[#ECE7DC]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Color
                    </p>
                    <p className="text-sm font-semibold text-[var(--og-blue)]">{selectedColor.name}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        title={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`h-8 w-8 rounded-full border transition ${
                          selectedColor.name === color.name
                            ? "border-[var(--og-orange)] ring-2 ring-[var(--og-orange)] ring-offset-2"
                            : "border-[#1C1C1C]/15 hover:border-[var(--og-blue)]"
                        }`}
                        style={{ backgroundColor: color.value }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Quantity
                    </p>
                    <p className="text-sm font-semibold text-[var(--og-blue)]">
                      {quantity.toLocaleString()} units
                    </p>
                  </div>
                  <div className="relative px-1 pt-8">
                    <div
                      className="pointer-events-none absolute top-0 z-10 rounded-lg bg-[var(--og-blue)] px-3 py-1 text-xs font-semibold text-white transition-all"
                      style={{
                        left: `calc(${sliderPct}% * (100% - 28px) / 100% + 14px)`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {quantity >= 1000 ? "1,000+" : quantity}
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={1000}
                      step={10}
                      value={Math.min(Math.max(quantity, 100), 1000)}
                      onChange={(event) => scaleSizeRun(Number(event.target.value))}
                      className="h-2 w-full cursor-pointer accent-[var(--og-orange)]"
                    />
                    <div className="mt-2 flex justify-between text-[11px] font-semibold text-[#8a8a8a]">
                      <span>100</span>
                      <span>250</span>
                      <span>500</span>
                      <span>1,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Size breakdown
                    </p>
                    <p className="text-xs text-[#8a8a8a]">Changes update total units</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                    {sizes.map((size) => (
                      <label key={size} className="rounded-lg border border-[#081E6F]/12 bg-[#FAF8F2] p-2">
                        <span className="block text-[11px] font-semibold text-[var(--og-blue)]">{size}</span>
                        <input
                          type="number"
                          min={0}
                          value={sizeBreakdown[size]}
                          onChange={(event) => updateSize(size, event.target.value)}
                          className="mt-1 h-9 w-full rounded-lg border border-[#081E6F]/12 bg-white px-2 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                    Decoration
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {decorationOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setSelectedDecoration(option)}
                        className={`rounded-lg border p-3 text-left transition ${
                          selectedDecoration.label === option.label
                            ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                            : "border-[#081E6F]/12 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                        }`}
                      >
                        <span className="block text-sm font-semibold">{option.label}</span>
                        <span className={`mt-1 block text-xs ${selectedDecoration.label === option.label ? "text-white/70" : "text-[#8a8a8a]"}`}>
                          {option.note}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-dashed border-[#081E6F]/24 bg-[#FAF8F2] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                    Upload your logo
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <label className="inline-flex min-h-11 cursor-pointer items-center rounded-lg bg-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.1em] text-white">
                      Upload artwork
                      <input
                        type="file"
                        className="sr-only"
                        onChange={(event) => setArtworkName(event.target.files?.[0]?.name || "")}
                      />
                    </label>
                    <Link
                      href="/design"
                      className="inline-flex min-h-11 items-center rounded-lg border border-[#081E6F]/18 px-4 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)]"
                    >
                      Need artwork?
                    </Link>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#777]">
                    Not sure your artwork is right? Upload what you&apos;ve got, and we&apos;ll check it out for free.
                  </p>
                  {artworkName ? (
                    <p className="mt-2 text-xs font-semibold text-[var(--og-blue)]">
                      Uploaded: {artworkName}
                    </p>
                  ) : null}
                </div>

                <div className="rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Want to feel it first?
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
                        Order a blank sample in your size and color before committing to the full run.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-[var(--og-blue)] bg-white px-4 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
                    >
                      Order blank sample
                    </button>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#777]">
                    Helpful when you are comparing fit, weight, color, or a few different brands before the order starts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="xl:sticky xl:top-32 xl:self-start">
            <div className="rounded-lg border border-[#081E6F]/12 bg-white p-5 shadow-[0_18px_55px_rgba(8,30,111,0.09)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                Live price summary
              </p>
              <h3 className="mt-2 text-2xl leading-none text-[var(--og-blue)]">{selectedProduct.name}</h3>
              <div className="mt-5 space-y-3 text-sm">
                {[
                  ["Color", selectedColor.name],
                  ["Units", quantity.toLocaleString()],
                  ["Sizes", sizes.map((size) => `${size} ${sizeBreakdown[size]}`).join(" / ")],
                  ["Base price", `$${baseUnitPrice.toFixed(2)}/unit`],
                  ["Decoration", selectedDecoration.price > 0 ? `+$${selectedDecoration.price.toFixed(2)}/unit` : "Included"],
                  ["Turnaround", selectedProduct.timeline],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 border-b border-[#081E6F]/10 pb-3">
                    <span className="w-24 shrink-0 text-[#777]">{label}</span>
                    <span className="font-semibold text-[var(--og-blue)]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-[#F7F4ED] p-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777]">Estimated total</p>
                    <p className="mt-1 text-4xl font-semibold leading-none text-[var(--og-orange)]">
                      ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <p className="text-right text-sm font-semibold text-[var(--og-blue)]">
                    ${unitPrice.toFixed(2)}/unit
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                >
                  Build order
                </button>
                <Link
                  href={`/contact?${new URLSearchParams({
                    intent: "apparel-quote",
                    product: selectedProduct.name,
                    color: selectedColor.name,
                    decoration: selectedDecoration.label,
                    quantity: String(quantity),
                  }).toString()}`}
                  className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--og-blue)] px-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5"
                >
                  Get a quote
                </Link>
              </div>
              <Link
                href={questionHref}
                className="mt-3 flex min-h-11 w-full items-center justify-center rounded-lg border border-[#081E6F]/18 px-4 text-center text-sm font-semibold text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
              >
                Have Questions? Talk to our team.
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                Choose your path
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                One category page, multiple ways to start.
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-[#4b4b4b] lg:justify-self-end">
              Some orders are ready to price online. Others need sourcing, samples, design help, or a more hands-on quote.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {conversionPaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-[#081E6F]/12 bg-[#FAF8F2] p-5">
                <h3 className="text-2xl leading-none text-[var(--og-blue)]">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{path.copy}</p>
                <Link
                  href={path.href}
                  className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-[#081E6F]/18 bg-white px-4 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                >
                  {path.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
