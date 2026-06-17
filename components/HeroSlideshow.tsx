"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2-271x300.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Screenprinting-271x300.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/01/Packaging_Stanford-271x300.jpg",
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full">
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? "Orange Goods custom merch" : ""}
          aria-hidden={i !== 0}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
