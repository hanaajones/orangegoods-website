"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type UseCase = {
  title: string;
  kicker: string;
  copy: string;
  examples: string[];
  image: string;
  alt: string;
};

const useCases: UseCase[] = [
  {
    title: "Corporate gifting",
    kicker: "Useful gifts, not desk clutter",
    copy: "Premium apparel, drinkware, bags, and kits for clients, employees, launches, and thank-you moments.",
    examples: ["Client gifts", "Employee kits", "Launch boxes"],
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    alt: "Custom branded drinkware for gifting",
  },
  {
    title: "Event merch",
    kicker: "Made to land on time",
    copy: "Shirts, hats, totes, socks, towels, and giveaways that feel organized before, during, and after the event.",
    examples: ["Conferences", "Pop-ups", "Giveaways"],
    image: "/images/gallery/apparel-gts-synergy.jpg",
    alt: "Custom apparel for an event merch program",
  },
  {
    title: "Staff apparel",
    kicker: "Uniforms people will wear",
    copy: "Comfortable tees, hoodies, hats, and layers for restaurants, coffee shops, hospitality teams, and offices.",
    examples: ["Team tees", "Work layers", "Service hats"],
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    alt: "Custom staff hoodie on a hanger",
  },
  {
    title: "Sponsorships",
    kicker: "Make the brand moment feel real",
    copy: "Merch for races, festivals, sports partnerships, community programs, and sponsor activations.",
    examples: ["Run clubs", "Festivals", "Brand booths"],
    image: "/images/gallery/hat-boatsetter-boat.jpg",
    alt: "Custom hat photographed during an outdoor activation",
  },
  {
    title: "Bulk production",
    kicker: "Bigger runs without going faceless",
    copy: "Reliable production for 100-piece orders, 10,000-piece programs, and the reorders that come after.",
    examples: ["100+ units", "Multi-item runs", "Reorders"],
    image: "/images/gallery/bags-boatsetter-dscf3242.jpg",
    alt: "Custom branded tote bags in production",
  },
  {
    title: "Influencer gifting",
    kicker: "A send they want to open",
    copy: "Thoughtful product picks, packaging, and details that make seeded gifts feel personal instead of mass-produced.",
    examples: ["PR kits", "Creator sends", "Product drops"],
    image: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    alt: "Custom towel detail for a gifting program",
  },
];

export function UseCaseCarousel() {
  const [current, setCurrent] = useState(0);
  const activeUseCase = useCases[current];

  function goTo(index: number) {
    setCurrent((index + useCases.length) % useCases.length);
  }

  return (
    <Reveal className="bg-[#F3EFE7] px-4 py-14 md:px-8 md:py-18 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
              What Orange Goods is good for
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              The right goods for the moment.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--og-muted)]">
            Start with the use case. We will help narrow the products, decoration, timeline, and budget from there.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-[#0B32A0]/15 bg-white shadow-[0_20px_70px_rgba(8,30,111,0.08)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[21rem] bg-[#E4DFCD] md:min-h-[30rem]">
            {useCases.map((item, index) => (
              <Image
                key={item.title}
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority={index === 0}
                className={`object-cover transition duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col justify-between p-5 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                {activeUseCase.kicker}
              </p>
              <h3 className="mt-3 font-body text-3xl font-semibold normal-case leading-tight tracking-normal text-[var(--og-blue)] md:text-5xl">
                {activeUseCase.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#1C1C1C]/70 md:text-lg">
                {activeUseCase.copy}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeUseCase.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-[#0B32A0]/14 bg-[#F3EFE7] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {useCases.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.12em] transition ${
                      index === current
                        ? "border-[var(--og-orange)] bg-[var(--og-orange)] text-white"
                        : "border-[#0B32A0]/14 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  aria-label="Previous use case"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B32A0]/20 text-2xl leading-none text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo(current + 1)}
                  aria-label="Next use case"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B32A0]/20 text-2xl leading-none text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>

            <Link
              href="/contact?intent=use-case"
              className="mt-6 inline-flex min-h-12 w-fit items-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
            >
              Start with your use case
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
