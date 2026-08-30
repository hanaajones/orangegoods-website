"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HomepageGoodsSlide = {
  src: string;
  position?: string;
  scale?: number;
};

export function HomepageGoodsSlideshow({
  slides,
  intervalMs = 2000,
  transitionMs = 400,
}: {
  slides: HomepageGoodsSlide[];
  intervalMs?: number;
  transitionMs?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, slides.length]);

  return (
    <div className="absolute inset-0 h-full w-full">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: index === current ? 1 : 0,
            objectPosition: slide.position ?? "center",
            transform: `scale(${slide.scale ?? 1})`,
            transformOrigin: "center",
            transition: `opacity ${transitionMs}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
