"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HomepageGoodsSlide = {
  src: string;
  position?: string;
};

export function HomepageGoodsSlideshow({ slides }: { slides: HomepageGoodsSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
