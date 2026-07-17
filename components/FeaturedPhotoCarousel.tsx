"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type FeaturedPhoto = {
  title: string;
  detail: string;
  src: string;
  alt: string;
  position?: string;
  activePosition?: string;
  activeScaleClass?: string;
  activeHoverScaleClass?: string;
};

const featuredPhotos: FeaturedPhoto[] = [
  {
    title: "Upcycled Blankets",
    detail: "Jarritos",
    src: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    alt: "Jarritos upcycled blanket by Orange Goods",
    position: "center 44%",
    activePosition: "center 44%",
  },
  {
    title: "Event Kits",
    detail: "Stanford Medicine",
    src: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    alt: "Stanford Medicine branded goods kit by Orange Goods",
    position: "center 52%",
  },
  {
    title: "Drinkware",
    detail: "Verve Coffee x Grateful Dead",
    src: "/images/gallery/drinkware-verve-grateful-dead-mug-034.jpg",
    alt: "Verve Coffee x Grateful Dead custom mug by Orange Goods",
    position: "center 72%",
    activePosition: "center calc(72% + 100px)",
    activeScaleClass: "scale-[1.02]",
    activeHoverScaleClass: "group-hover:scale-[1.045]",
  },
  {
    title: "Tote Bags",
    detail: "Boatsetter",
    src: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    alt: "Boatsetter branded tote bag by Orange Goods",
  },
  {
    title: "Headwear",
    detail: "Leave Her Wilder",
    src: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    alt: "Leave Her Wilder custom hat on an orange truck hood",
    position: "center 56%",
  },
  {
    title: "Outerwear",
    detail: "High Street Deli",
    src: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    alt: "High Street Deli branded puffer jacket by Orange Goods",
    position: "left 46%",
  },
  {
    title: "Apparel",
    detail: "Verve Coffee x Grateful Dead",
    src: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_072.jpg",
    alt: "Verve Coffee x Grateful Dead custom apparel by Orange Goods",
    position: "center",
    activePosition: "center calc(50% + 170px)",
  },
  {
    title: "Beach Towels",
    detail: "Apteka",
    src: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    alt: "Apteka custom beach towel by Orange Goods",
    position: "center 52%",
  },
  {
    title: "Crew Socks",
    detail: "Firestone Walker",
    src: "/images/gallery/socks-firestone-_mg_0175.jpg",
    alt: "Firestone Walker custom socks by Orange Goods",
    position: "center 48%",
  },
];

function getOrderedPhotos(activeIndex: number) {
  return featuredPhotos.map((_, offset) => {
    const index = (activeIndex + offset) % featuredPhotos.length;
    return { index, photo: featuredPhotos[index] };
  });
}

export function FeaturedPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedPhotos = getOrderedPhotos(activeIndex);
  const activePhoto = featuredPhotos[activeIndex];

  function goToNext() {
    setActiveIndex((current) => (current + 1) % featuredPhotos.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + featuredPhotos.length) % featuredPhotos.length);
  }

  return (
    <Reveal className="bg-[#F3EFE7] px-4 pb-[106px] pt-[86px] md:px-8 md:pb-[130px] md:pt-[110px] lg:px-12">
      <section className="mx-auto max-w-6xl" aria-label="Featured Orange Goods work">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div className="relative flex items-start">
            <p className="font-accent pr-10 text-3xl font-normal leading-none text-[#FF4200] md:pr-14 md:text-5xl">
              Recent Projects
            </p>
            <Image
              src="/graphics/stickers/juice-box.svg"
              alt=""
              aria-hidden="true"
              width={136}
              height={136}
              className="pointer-events-none absolute -right-[24px] -top-[37px] hidden w-20 rotate-[9deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] md:block lg:-right-[28px] lg:-top-[41px] lg:w-24"
            />
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
              aria-label="Previous featured photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
              aria-label="Next featured photo"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1.18fr)_minmax(0,1fr)] md:items-stretch md:gap-6">
          <Link
            href="/goods"
            className="group relative block aspect-[16/9] overflow-hidden rounded-[1.25rem] border-[3px] border-white bg-[#E4DFCD] shadow-[7px_7px_0px_#0B32A0] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200] md:rounded-[1.6rem]"
            aria-label={`View all goods from the highlighted ${activePhoto.title} project`}
          >
            <Image
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              priority
              className={`object-cover transition duration-500 ${
                activePhoto.activeScaleClass ?? ""
              } ${activePhoto.activeHoverScaleClass ?? "group-hover:scale-[1.025]"}`}
              style={{ objectPosition: activePhoto.activePosition ?? activePhoto.position ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/78 via-[#1C1C1C]/14 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-7">
              <div>
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)] md:text-sm">
                  {activePhoto.detail}
                </p>
                <h2
                  className="mt-1 text-4xl uppercase leading-none tracking-[0.01em] md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {activePhoto.title}
                </h2>
              </div>
              <span className="pointer-events-auto inline-flex shrink-0 translate-y-2 items-center self-end rounded-full border-[3px] border-[#0B32A0] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#0B32A0] opacity-0 shadow-[3px_3px_0px_#0B32A0] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 hover:bg-[#F3EFE7]">
                See more
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-2 md:h-full md:gap-3">
            {orderedPhotos.slice(1, 3).map(({ index, photo }) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/5] overflow-hidden rounded-[0.75rem] border-[3px] border-[#B8AA8E] bg-[#E4DFCD] text-left transition hover:border-[#0B32A0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200] md:aspect-auto md:h-full md:rounded-[1rem]"
                aria-label={`Feature ${photo.title}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 25vw, 50vw"
                  className={`object-cover transition duration-500 group-hover:scale-105 ${
                    photo.title === "Drinkware" ? "scale-110 group-hover:scale-[1.14]" : ""
                  }`}
                  style={{ objectPosition: photo.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/76 via-[#1C1C1C]/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 text-white md:p-3">
                  <p className="font-noir-alt text-[0.52rem] font-bold uppercase tracking-[0.08em] text-[var(--og-tangerine)] md:text-[0.62rem] md:tracking-[0.1em]">
                    {photo.detail}
                  </p>
                  <p className="font-noir-alt mt-1 text-[0.72rem] font-bold leading-tight md:text-sm">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
