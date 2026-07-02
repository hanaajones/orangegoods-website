"use client";

import { useEffect, useRef, useState } from "react";

type TestimonialPhoto = {
  company: string;
  quote: string;
  person: string;
  role: string;
  logo: string;
  src: string;
  alt: string;
  logoClass?: string;
  preserveLogoDetail?: boolean;
};

const photos: TestimonialPhoto[] = [
  {
    company: "High Street Deli",
    quote: "The OG team just gets it.",
    person: "Doobie C.",
    role: "Founder, Owner",
    logo: "/logos/clients/high-street.png",
    src: "/images/testimonials/high-street-deli-rotated-fullwidth.jpg",
    alt: "High Street Deli branded merch spread by Orange Goods",
    logoClass: "scale-110 md:scale-125",
  },
  {
    company: "Stanford Medicine",
    quote: "Our go-to for curated event giveaways and team swag",
    person: "Robin D.",
    role: "Director, Strategic Initiatives",
    logo: "/logos/clients/stanford-medicine.svg",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Stanford Medicine branded backpacks by Orange Goods",
    preserveLogoDetail: true,
  },
  {
    company: "Synergy Kombucha",
    quote: "OG has come through for us for years.",
    person: "Noah C.",
    role: "Graphic Designer",
    logo: "/logos/clients/synergy-kombucha.svg",
    src: "/images/testimonials/synergy-kombucha-shirt-press-fullwidth.jpg",
    alt: "Synergy Kombucha branded shirt being pressed by Orange Goods",
    logoClass: "scale-125 md:scale-[1.35]",
  },
  {
    company: "Verve Coffee",
    quote: "The swag partner that does it all.",
    person: "Sophia P.",
    role: "Marketing Ops Manager",
    logo: "/logos/clients/verve-coffee.png",
    src: "/images/gallery/drinkware-verve-milk-glass-mug.jpg",
    alt: "Verve Coffee branded drinkware by Orange Goods",
    logoClass: "scale-125 md:scale-[1.35]",
  },
  {
    company: "Red Bull",
    quote: "OG turned a loose idea into gear our team was excited to wear.",
    person: "Joe K.",
    role: "Field Marketing Manager",
    logo: "/logos/clients/red-bull.svg",
    src: "/images/testimonials/red-bull-girl-widescreen.jpg",
    alt: "Red Bull branded jacket by Orange Goods",
  },
];

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 3500);
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function go(idx: number) {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(360px, 55vw, 720px)" }}
      aria-label="Client testimonials"
    >
      {/* Photos */}
      {photos.map((photo, i) => (
        <div
          key={`${photo.company}-${photo.src}`}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/10" />
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[current].logo}
            alt={photos[current].company}
            className={`mx-auto h-[5.6rem] max-w-[22.4rem] object-contain md:h-[7rem] md:max-w-[28rem] ${
              photos[current].preserveLogoDetail
                ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                : "brightness-0 invert"
            } ${photos[current].logoClass ?? ""}`}
          />
          <div className="mt-4 flex h-[7.25rem] items-center justify-center md:mt-5 md:h-[11rem] lg:h-[12.5rem]">
            <blockquote className="font-display mx-auto max-w-4xl text-center text-[2rem] font-normal uppercase leading-none tracking-normal text-white md:text-[3.4rem] lg:text-[4.2rem]">
              &ldquo;{photos[current].quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-3 min-h-[3.75rem] md:mt-4">
            <p className="font-noir-alt text-sm font-bold uppercase tracking-[0.14em] text-white md:text-base">
              {photos[current].person}
            </p>
            <p className="font-noir-alt mt-1 text-sm font-medium text-white/72 md:text-base">
              {photos[current].role}
            </p>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go((current - 1 + photos.length) % photos.length)}
        className="absolute left-9 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        onClick={() => go((current + 1) % photos.length)}
        className="absolute right-9 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
        aria-label="Next photo"
      >
        ›
      </button>
    </section>
  );
}
