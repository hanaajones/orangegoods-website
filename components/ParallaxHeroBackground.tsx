"use client";

import { useEffect, useState } from "react";

export function ParallaxHeroBackground({
  image,
  inset = "-8%",
  position = "center",
  speed = 0.18,
}: {
  image: string;
  inset?: string;
  position?: string;
  speed?: number;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      frame = 0;
      setOffset(window.scrollY * speed);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      className="absolute will-change-transform"
      style={{
        inset,
        backgroundImage: `url('${image}')`,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: `translate3d(0, ${offset}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}
