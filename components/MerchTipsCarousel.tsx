"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type MerchTip = {
  number: string;
  title: string;
  detail: string;
  proof: string;
  image: string;
  alt: string;
  imagePosition?: string;
  imageClassName?: string;
};

const merchTips: MerchTip[] = [
  {
    number: "01",
    title: "Start with a blank <br> they would actually buy",
    detail:
      "The base piece does most of the work. Better materials, shape, and construction make the logo feel more valuable before anyone reads it.",
    proof: "Quality blank",
    image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
    alt: "Stack of premium blank hoodies in a production space",
  },
  {
    number: "02",
    title: "Go beyond the <br> standard logo hit",
    detail:
      "A generic logo slapped in the obvious spot feels like a giveaway. Scale, placement, thread, patches, and labels make it feel intentional.",
    proof: "Elevated decoration",
    image: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    alt: "Reel Life Gear hat on a boat deck with custom embroidered artwork",
  },
  {
    number: "03",
    title: "Choose colors <br> they already wear",
    detail:
      "Staple colors get pulled from the drawer more often. You know your audience best, so give them what they actually want to wear.",
    proof: "Everyday colors",
    image: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
    alt: "Person in a muted hoodie and black cap in a workshop, showing a wearable neutral merch palette",
  },
  {
    number: "04",
    title: "Upgrade the handfeel",
    detail:
      "Weight, softness, texture, and structure are the parts people notice first. A better handfeel turns simple merch into a favorite piece.",
    proof: "Premium materials",
    image: "/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg",
    alt: "Field Day Coffee canvas tote resting on sand beside a surfboard",
  },
  {
    number: "05",
    title: "Give them details <br> to talk about",
    detail:
      "A custom patch, label, trim, or unexpected product choice gives the piece a reason to live outside the closet.",
    proof: "Thoughtful details",
    image: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
    alt: "Close-up of the inside branded details on a premium Verve Coffee cap",
    imagePosition: "72% center",
    imageClassName: "scale-[1.18]",
  },
];

function getOrderedTips(activeIndex: number) {
  return merchTips.map((_, offset) => {
    const index = (activeIndex + offset) % merchTips.length;
    return { index, tip: merchTips[index] };
  });
}

function renderTitle(title: string) {
  return title.split("<br>").map((part, index, items) => (
    <Fragment key={`${part}-${index}`}>
      {part.trim()}
      {index < items.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

export function MerchTipsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedTips = getOrderedTips(activeIndex);
  const activeTip = merchTips[activeIndex];

  function goToNext() {
    setActiveIndex((current) => (current + 1) % merchTips.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + merchTips.length) % merchTips.length);
  }

  return (
    <Reveal className="bg-[#F7F4ED] px-4 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-[1.8rem] border-[2px] border-[#0B32A0] bg-white p-5 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Make merch worth keeping
            </p>
            <h2
              className="mt-3 max-w-3xl text-3xl uppercase leading-none text-[#0B32A0] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5 ways to keep your merch
              <br />
              out of the goodwill pile
            </h2>
          </div>
          <div className="hidden shrink-0 flex-col items-center gap-3 md:flex">
            <Image
              src="/graphics/stickers/goods-by-nature.svg"
              alt=""
              aria-hidden="true"
              width={152}
              height={152}
              className="pointer-events-none w-24 rotate-[-8deg] select-none drop-shadow-[0_10px_24px_rgba(28,28,28,0.16)] lg:w-28"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                aria-label="Previous merch tip"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                aria-label="Next merch tip"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.24fr)_minmax(18rem,0.76fr)] md:items-stretch md:gap-5">
          <article className="relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border-[3px] border-[#0B32A0] bg-white md:h-[33rem] lg:h-[36rem]">
            <div className="relative h-[18rem] shrink-0 overflow-hidden bg-[#E4DFCD] sm:h-[21rem] md:h-[22rem] lg:h-[24rem]">
              <Image
                key={activeTip.image}
                src={activeTip.image}
                alt={activeTip.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                priority
                className={`object-cover transition duration-500 ${activeTip.imageClassName || ""}`}
                style={activeTip.imagePosition ? { objectPosition: activeTip.imagePosition } : undefined}
              />
              <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7F00] bg-[#FFF7ED]/96 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#0B32A0]">
                  <span className="h-2 w-2 rounded-full bg-[#FF7F00]" />
                  {activeTip.proof}
                </span>
                <p className="font-noir-alt rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0B32A0]">
                  {activeIndex + 1} / {merchTips.length}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="max-w-xl text-[1.8rem] leading-[0.98] text-[#081E6F] md:text-[2.2rem]">
                {renderTitle(activeTip.title)}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-[1.6] text-[#1C1C1C]/68 md:text-[0.98rem]">
                {activeTip.detail}
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            {orderedTips.slice(1, 2).map(({ index, tip }) => (
              <button
                key={tip.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border-[3px] border-[#D8CFBE] bg-white text-left transition hover:border-[#0B32A0] hover:bg-[#FCFAF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200] md:h-[33rem] lg:h-[36rem]"
                aria-label={`Highlight merch tip ${index + 1}`}
              >
                <div className="relative h-[18rem] shrink-0 overflow-hidden bg-[#E4DFCD] sm:h-[21rem] md:h-[22rem] lg:h-[24rem]">
                  <Image
                    src={tip.image}
                    alt={tip.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, 50vw"
                    className={`object-cover transition duration-500 group-hover:scale-[1.03] ${tip.imageClassName || ""}`}
                    style={tip.imagePosition ? { objectPosition: tip.imagePosition } : undefined}
                  />
                  <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7F00] bg-[#FFF7ED]/96 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.11em] text-[#0B32A0]">
                      <span className="h-2 w-2 rounded-full bg-[#FF7F00]" />
                      {tip.proof}
                    </span>
                    <p className="font-noir-alt rounded-full bg-white/92 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#0B32A0]">
                      {index + 1} / {merchTips.length}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="max-w-xl text-[1.8rem] leading-[0.98] text-[#081E6F] md:text-[2.2rem]">
                    {renderTitle(tip.title)}
                  </h3>
                  <span className="mt-auto inline-flex w-fit items-center self-start rounded-full border border-[#0B32A0]/16 bg-white/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#0B32A0]/66 transition group-hover:border-[#0B32A0]/24 group-hover:text-[#0B32A0]">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2 md:hidden">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
            aria-label="Previous merch tip"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
            aria-label="Next merch tip"
          >
            ›
          </button>
        </div>
      </section>
    </Reveal>
  );
}
