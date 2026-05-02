"use client";

import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

const categories = [
  {
    name: "Custom Headwear",
    description: "Structured caps, beanies, dad hats, bucket hats — fully custom from brim to button",
    href: "/goods/hats",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  },
  {
    name: "Custom Apparel",
    description: "Tees, polos, hoodies, flannels, outerwear — built for your brand, not the clearance bin",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Drinkware",
    description: "Bottles, mugs, tumblers — the merch people actually use every single day",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
  {
    name: "Bags + Totes",
    description: "Totes, backpacks, duffels — branded carry that doesn't look like a trade-show giveaway",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  },
  {
    name: "Accessories",
    description: "Socks, patches, keychains, lanyards, and more — the details that tie a brand kit together",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Outerwear",
    description: "Jackets, coaches, flannels, quarter-zips — premium layering with your brand built in",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Socks",
    description: "Custom knit socks — the most talked-about giveaway item we make. Everyone takes them",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Packaging + Kits",
    description: "Retail-ready boxes, tissue, tags, and full gift kits. The unbox moment, done right",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  },
  {
    name: "Custom Labels",
    description: "Woven labels, heat transfers, hang tags, neck labels — the inside details that matter",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
  },
  {
    name: "Technical Apparel",
    description: "Performance fabrics, athletic cuts, moisture-wicking — made to move with your brand",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
];

export function ProductCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  }

  function onMouseLeave() {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }

  function onMouseUp() {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <Reveal className="py-14">
      <section>
        {/* Header */}
        <div className="mb-10 px-4 text-center md:px-8 lg:px-12">
          <h2
            className="text-3xl font-extrabold uppercase tracking-tight text-[#FF4200] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We handle it all
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#1C1C1C]/60">
            Unlimited capabilities — from hats to hoodies, drinkware to kits, and everything in between
          </p>
        </div>

        {/* Drag-to-scroll carousel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-4 pr-4 select-none md:pl-8 md:pr-8 lg:pl-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              draggable={false}
              className="group relative shrink-0 snap-start overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0]"
              style={{
                width: "clamp(260px, 38vw, 360px)",
                height: "400px",
                boxShadow: "8px 8px 0px #081E6F",
              }}
            >
              {/* Background photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-white/70">{cat.description}</p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#FF4200] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-white group-hover:text-[#FF4200]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  EXPLORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
