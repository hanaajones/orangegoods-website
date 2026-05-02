"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type GalleryItem = {
  title: string;
  image: string;
};

type GalleryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

export function Gallery({
  id,
  eyebrow,
  title,
  description,
  items,
}: GalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section id={id} className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
            {description}
          </p>
        </div>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {items.map((item) => (
            <motion.button
              key={`${item.title}-${item.image}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              type="button"
              onClick={() => setActiveImage(item)}
              className="group relative min-h-[20rem] min-w-[17rem] snap-start overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[#eadaca] text-left shadow-[0_12px_40px_rgba(8,30,111,0.08)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(0,0,0,0.66)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {activeImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setActiveImage(null)}
              className="absolute inset-0 bg-black/80"
            />
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem]">
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-[var(--og-blue)]"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] bg-[#1a1512]">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </Reveal>
  );
}
