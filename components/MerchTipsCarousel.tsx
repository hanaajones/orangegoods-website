"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type MerchTip = {
  number: string;
  title: string;
  detail: string;
  proof: string;
  image: string;
  alt: string;
};

const merchTips: MerchTip[] = [
  {
    number: "01",
    title: "Start with a blank people would buy",
    detail:
      "The base garment does most of the work. Better fit, fabric, and construction make the logo feel more valuable before anyone reads it.",
    proof: "Quality blank",
    image: "/images/gallery/apparel-686-hoodie-detail.jpg",
    alt: "Close-up detail of a custom hoodie",
  },
  {
    number: "02",
    title: "Make the branding feel designed",
    detail:
      "A generic logo slapped in the obvious spot feels like a giveaway. Scale, placement, thread, patches, and labels make it feel intentional.",
    proof: "Designed decoration",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    alt: "Custom patch hat detail",
  },
  {
    number: "03",
    title: "Choose a color people already wear",
    detail:
      "Staple colors get pulled from the drawer more often. Use bold colors when they are part of the brand story, not just because they are loud.",
    proof: "Wearable palette",
    image: "/images/gallery/apparel-verve-gd-tee.jpg",
    alt: "Custom printed T-shirt on a neutral apparel blank",
  },
  {
    number: "04",
    title: "Upgrade the handfeel",
    detail:
      "Weight, softness, texture, and structure are the parts people notice first. A better handfeel turns simple merch into a favorite piece.",
    proof: "Better fabric",
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    alt: "Premium custom hoodie front",
  },
  {
    number: "05",
    title: "Give them one detail to talk about",
    detail:
      "A custom patch, label, trim, or unexpected product choice gives the piece a reason to live outside the closet.",
    proof: "Memorable detail",
    image: "/images/gallery/hat-og-patch-lifestyle.jpg",
    alt: "Lifestyle photo of a custom Orange Goods patch hat",
  },
];

export function MerchTipsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeTip = merchTips[current];

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((index) => (index + 1) % merchTips.length);
    }, 5200);
  }, [clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [clearTimer, startTimer]);

  function goTo(index: number) {
    setCurrent(index);
    startTimer();
  }

  function goNext() {
    goTo((current + 1) % merchTips.length);
  }

  function goPrevious() {
    goTo((current - 1 + merchTips.length) % merchTips.length);
  }

  return (
    <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/15 bg-white shadow-[0_20px_80px_rgba(11,50,160,0.08)]">
        <div className="grid min-h-[34rem] md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[22rem] overflow-hidden bg-[#E4DFCD] md:min-h-full">
            {merchTips.map((tip, index) => (
              <Image
                key={tip.image}
                src={tip.image}
                alt={tip.alt}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                priority={index === 0}
                className={`object-cover transition duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081E6F]/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-lg bg-white px-4 py-3 text-[#0B32A0] shadow-lg">
              <p className="text-xs font-semibold uppercase text-[#1C1C1C]/45">Tip</p>
              <p className="text-3xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
                {activeTip.number}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Make merch worth keeping
              </p>
              <h2
                className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Five ways to keep merch out of the Goodwill pile
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#1C1C1C]/60 md:text-lg">
                Small choices change whether a piece gets worn, shared, and talked about or disappears after the event.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-[#0B32A0]/12 bg-[#F3EFE7] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                {activeTip.proof}
              </p>
              <h3 className="mt-3 text-2xl leading-tight text-[#081E6F] md:text-3xl">
                {activeTip.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/65 md:text-base">
                {activeTip.detail}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2">
                {merchTips.map((tip, index) => (
                  <button
                    key={tip.number}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show merch tip ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === current ? "w-9 bg-[#FF4200]" : "w-2.5 bg-[#0B32A0]/20 hover:bg-[#0B32A0]/45"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous merch tip"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B32A0]/20 text-2xl leading-none text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#0B32A0] hover:text-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next merch tip"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B32A0]/20 text-2xl leading-none text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#0B32A0] hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
