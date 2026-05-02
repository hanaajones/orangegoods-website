"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type WorkItem = {
  title: string;
  src: string;
  className: string;
};

const selectedWork: WorkItem[] = [
  {
    title: "Hats",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/Hat.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Fulfillment",
    src: "https://orangegoods.co/wp-content/uploads/2025/01/Fullfillment_Small.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Graphic Design",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Screen Printing",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/Screenprinting.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Embroidery",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Name Brands",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Retail Quality",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/RetailQuality.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Beanies",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/Beanies.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Technical Apparel",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/Overseas.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Quick Turns",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/QuickTurnTimes.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Trims",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/Trims.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Hang Tags",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/HangTag.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Packaging",
    src: "https://orangegoods.co/wp-content/uploads/2024/06/Packaging.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Drinkware",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/Drinkware-1.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Stanford Packaging",
    src: "https://orangegoods.co/wp-content/uploads/2025/01/Packaging_Stanford.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Recycled",
    src: "https://orangegoods.co/wp-content/uploads/2024/07/RecycledProgram.jpg",
    className: "md:col-span-1",
  },
];

function fallbackFor(src: string) {
  return src.replace(/\.jpg$/i, "-271x300.jpg");
}

function WorkImage({ item }: { item: WorkItem }) {
  const [src, setSrc] = useState(item.src);
  const isTall = item.className.includes("row-span-2");

  return (
    <figure
      className={`group relative min-h-[18rem] overflow-hidden bg-[var(--og-sand)] ${item.className} ${
        isTall ? "md:min-h-[39rem]" : "md:min-h-[19rem]"
      }`}
    >
      <Image
        src={src}
        alt={item.title}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => {
          const fallback = fallbackFor(item.src);
          setSrc((current) => (current === fallback ? current : fallback));
        }}
        className="object-cover transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-75 transition group-hover:opacity-100" />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
          {item.title}
        </p>
      </figcaption>
    </figure>
  );
}

export function SelectedWork() {
  return (
    <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <section id="gallery" className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl font-semibold leading-none text-[var(--og-blue)] md:text-7xl">
            SELECTED WORK
          </h2>
          <p className="max-w-md text-base leading-7 text-[var(--og-muted)] md:text-lg">
            A closer look at the goods, finishes, packaging, and production
            details brands actually send out into the world
          </p>
        </div>

        <div className="grid auto-rows-[19rem] grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
          {selectedWork.map((item) => (
            <WorkImage key={`${item.title}-${item.src}`} item={item} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
