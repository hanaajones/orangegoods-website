"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    alt: "Custom headwear by Orange Goods",
  },
  {
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    alt: "Custom apparel by Orange Goods",
  },
  {
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    alt: "Custom drinkware by Orange Goods",
  },
  {
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    alt: "Branded bags by Orange Goods",
  },
  {
    src: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    alt: "Branded accessories by Orange Goods",
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
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 55vw, 720px)" }}>
      {/* Photos */}
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
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
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        onClick={() => go((current + 1) % photos.length)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  );
}
