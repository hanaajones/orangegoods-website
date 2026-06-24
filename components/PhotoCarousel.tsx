"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  {
    company: "GoodOnya",
    quote: "They brought our project to life in a new and unique way",
    person: "Joe K.",
    role: "Field Marketing Manager",
    logo:
      "https://orangegoods.co/wp-content/uploads/2024/06/OrangeGoodsClients_Website_2024-36-3.png",
    src: "/images/gallery/drinkware-goodoonya1.jpg",
    alt: "GoodOnya branded drinkware by Orange Goods",
  },
  {
    company: "Synergy Kombucha",
    quote: "Client testimonial placeholder.",
    person: "Noah C.",
    role: "Graphic Designer",
    logo: "/logos/clients/gts.png",
    src: "/images/gallery/synergy-kombucha-event-2025.jpg",
    alt: "Synergy Kombucha team wearing branded apparel by Orange Goods",
  },
  {
    company: "Red Bull",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/red-bull.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Custom drinkware by Orange Goods",
  },
  {
    company: "Verve Coffee",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/verve-coffee.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    alt: "Branded bags by Orange Goods",
  },
  {
    company: "Google",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/google.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    alt: "Branded accessories by Orange Goods",
  },
  {
    company: "Water Wells for Africa",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/wwa.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    alt: "Custom apparel by Orange Goods",
  },
  {
    company: "High Street",
    quote: "Client testimonial placeholder.",
    person: "Doobie C.",
    role: "Founder, Owner",
    logo: "/logos/clients/high-street.png",
    src: "/images/gallery/high-st-deli-testimonial-0973-4.jpg",
    alt: "High St branded merch spread by Orange Goods",
  },
  {
    company: "Tripadvisor",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/tripadvisor.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    alt: "Branded bags by Orange Goods",
  },
  {
    company: "Channel Islands",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/channel-islands.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    alt: "Branded accessories by Orange Goods",
  },
  {
    company: "Health-Ade",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/health-ade.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    alt: "Custom apparel by Orange Goods",
  },
  {
    company: "Bell",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/bell.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Custom drinkware by Orange Goods",
  },
  {
    company: "Nitro Circus",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/nitro-circus.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    alt: "Branded bags by Orange Goods",
  },
  {
    company: "Field Day Coffee",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/field-day.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    alt: "Branded accessories by Orange Goods",
  },
  {
    company: "South Congress Hotel",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/south-congress-hotel.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    alt: "Custom apparel by Orange Goods",
  },
  {
    company: "Thrasher",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/thrasher.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Custom drinkware by Orange Goods",
  },
  {
    company: "805 Firestone Walker",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/firestone-805.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    alt: "Branded bags by Orange Goods",
  },
  {
    company: "Outerknown",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/outerknown.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    alt: "Branded accessories by Orange Goods",
  },
  {
    company: "Islands",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/islands.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    alt: "Custom apparel by Orange Goods",
  },
  {
    company: "Microsoft",
    quote: "Client testimonial placeholder.",
    person: "First L.",
    role: "Job Title",
    logo: "/logos/clients/microsoft.png",
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Custom drinkware by Orange Goods",
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
            className="mx-auto h-12 max-w-[12rem] object-contain brightness-0 invert md:h-14 md:max-w-[14rem]"
          />
          <div className="mt-4 flex h-[7.25rem] items-center justify-center md:mt-5 md:h-[11rem] lg:h-[12.5rem]">
            <blockquote className="font-display max-w-4xl text-[2rem] font-normal uppercase leading-none tracking-normal text-white md:text-[3.4rem] lg:text-[4.2rem]">
              {photos[current].quote}
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
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        onClick={() => go((current + 1) % photos.length)}
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Next photo"
      >
        ›
      </button>
    </section>
  );
}
