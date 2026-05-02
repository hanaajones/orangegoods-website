"use client";

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
  const [next, setNext] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNext((current + 1) % photos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (next === null) return;
    const t = setTimeout(() => {
      setCurrent(next);
      setNext(null);
    }, 700);
    return () => clearTimeout(t);
  }, [next]);

  return (
    <div className="absolute inset-0">
      <img
        key={`current-${current}`}
        src={photos[current]}
        alt="Orange Goods custom merch"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {next !== null && (
        <img
          key={`next-${next}`}
          src={photos[next]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            animation: "fadeIn 0.7s ease forwards",
          }}
        />
      )}
    </div>
  );
}
