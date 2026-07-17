"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";

const categories = [
  {
    name: "Influencer Gifting",
    description: "Launch-ready kits that feel considered, camera-friendly, and worth posting.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  },
  {
    name: "Corporate Gifting",
    description: "Premium gifts for clients, partners, and internal teams that people actually keep.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Corporate Events",
    description: "Event merch, welcome goods, and leave-behinds built for the full experience.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
  {
    name: "Team Gear",
    description: "Polished apparel, headwear, and everyday goods for teams that want to look aligned.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  },
  {
    name: "Brand Activations",
    description: "Giveaways, pop-up moments, and event goods that make the brand feel tangible.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Retail",
    description: "Merch collections with the quality, details, and finish to sit on a real shelf.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Launch Kits",
    description: "Coordinated product drops, press kits, and campaign boxes built around the moment.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Employee Onboarding",
    description: "Starter kits and team goods that make day one feel organized and intentional.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  },
  {
    name: "Trade Shows",
    description: "Booth-ready goods, uniforms, handouts, and follow-up gifts that feel useful.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
  },
  {
    name: "VIP Mailers",
    description: "High-touch mailers for customers, press, creators, and key accounts.",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
];

const CARD_WIDTH = 365; // approx card width + gap
const AUTO_INTERVAL = 1800; // ms between auto-advances

export function ProductCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Snap to next card
  const advance = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const next = el.scrollLeft + CARD_WIDTH;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  // Infinite loop: jump when near edges
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const third = el.scrollWidth / 3;
    if (el.scrollLeft < third * 0.05) {
      el.scrollLeft += third;
    } else if (el.scrollLeft > third * 1.95) {
      el.scrollLeft -= third;
    }
  }, []);

  // Init scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto-advance interval
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused.current) advance();
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  // Drag-to-scroll handlers
  function onMouseDown(e: React.MouseEvent) {
    isDown.current = true;
    isPaused.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  }

  function onMouseLeave() {
    isDown.current = false;
    isPaused.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }

  function onMouseUp() {
    isDown.current = false;
    isPaused.current = false;
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
    <Reveal className="py-9">
      <section>
        {/* Header */}
        <div className="mb-10 px-4 text-center md:px-8 lg:px-12">
          <h2
            className="font-display text-3xl font-normal uppercase leading-none tracking-normal text-[#FF4200] md:text-5xl"
          >
            We Handle It All
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#1C1C1C]/60">
            Merch for launches, events, teams, gifting, activations, retail, and the moments in between.
          </p>
        </div>

        {/* Snap carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pl-4 pr-4 select-none md:pl-8 md:pr-8 lg:pl-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
            scrollSnapType: "x mandatory",
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseOut={() => { if (!isDown.current) isPaused.current = false; }}
        >
          {[...categories, ...categories, ...categories].map((cat, idx) => (
            <Link
              key={`${cat.name}-${idx}`}
              href={cat.href}
              draggable={false}
              className="group relative shrink-0 overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0]"
              style={{
                width: "clamp(260px, 38vw, 360px)",
                height: "400px",
                boxShadow: "8px 8px 0px #081E6F",
                scrollSnapAlign: "start",
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
                  className="font-noir-alt text-xl font-semibold normal-case tracking-normal text-white md:text-2xl"
                >
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-white/70">{cat.description}</p>
                <span
                  className="font-noir-alt mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-white/10 px-3 py-1.5 text-xs font-medium normal-case tracking-normal text-white backdrop-blur-sm transition group-hover:border-white group-hover:bg-white group-hover:text-[#FF4200]"
                >
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
