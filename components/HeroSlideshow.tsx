"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/images/gallery/267A5393.jpg" },
  { src: "/images/homepage/milk-glass-mug-1-exposure-plus-015.jpg", position: "center 42%" },
  { src: "/images/gallery/DSCF3148.jpg" },
  { src: "/images/gallery/_MG_0147.jpg", position: "center 82%" },
  { src: "/images/gallery/mcalister-016_2.jpg" },
  { src: "/images/gallery/apparel-verve-gd-tee.jpg", position: "center 12%" },
  { src: "/images/gallery/BGxHJ-6.jpg", position: "center 37%" },
  { src: "/images/gallery/HighStDeli_Jenjoi_June20240420.jpg", position: "center 28%" },
  { src: "/images/gallery/DSCF1176.jpg" },
  { src: "/images/gallery/DSCF3128.jpg" },
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
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={i === 0 ? "Custom Apteka towel detail" : ""}
          aria-hidden={i !== 0}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            objectPosition: photo.position ?? "center",
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
