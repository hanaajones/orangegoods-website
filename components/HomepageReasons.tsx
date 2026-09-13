"use client";

import Image from "next/image";
import { useState } from "react";

const reasons = [
  {
    title: "Full Service Partner",
    mobileLabel: "Full Service",
    copy:
      "No vendor juggling. We handle the goods, sourcing, decoration, packaging, kitting, and delivery in one place, so the whole project stays under one roof from start to finish.",
    iconWrapClassName: "h-12 w-12",
    iconSrc: "/graphics/homepage/full-service-partner.svg",
    iconWidth: 183,
    iconHeight: 238,
    iconClassName: "h-14 w-auto",
  },
  {
    title: "True Design Support",
    mobileLabel: "Design Support",
    copy:
      "We're designers by nature, not just logo placers. We can shape the concept, guide the design direction, and support the goods-making process through the whole project.",
    iconWrapClassName: "h-[4.4rem] w-[4.4rem]",
    iconSrc: "/graphics/homepage/true-design-support.svg",
    iconWidth: 265,
    iconHeight: 159,
    iconClassName: "h-16 w-auto",
  },
  {
    title: "Talk to Experts",
    mobileLabel: "Priority Comms",
    copy:
      "You can text, call, or email us directly, and we keep you posted from first mockup to final delivery so you always know what is moving and what is next.",
    iconWrapClassName: "h-12 w-12",
    iconSrc: "/graphics/homepage/easy-communication.svg",
    iconWidth: 217,
    iconHeight: 236,
    iconClassName: "h-[4.125rem] w-auto",
  },
] as const;

export function HomepageReasons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReason = reasons[activeIndex];

  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:hidden">
        {reasons.map((reason, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={reason.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex min-h-[7.5rem] flex-col items-center justify-center rounded-[1.1rem] border-2 px-2 py-3 text-center shadow-[3px_3px_0px_#0B32A0] transition ${
                isActive
                  ? "border-[#0B32A0] bg-[#F7F4ED] text-[#0B32A0]"
                  : "border-[#B8AA8E] bg-white/90 text-[#081E6F]"
              }`}
              aria-pressed={isActive}
            >
              <div
                className={`flex scale-[0.68] items-center justify-center text-[#FF4200] ${reason.iconWrapClassName}`}
              >
                <Image
                  src={reason.iconSrc}
                  alt=""
                  aria-hidden="true"
                  width={reason.iconWidth}
                  height={reason.iconHeight}
                  loading="eager"
                  unoptimized
                  className={reason.iconClassName}
                />
              </div>
              <span className="mt-1 text-[0.88rem] font-medium leading-[1.02] tracking-normal text-current">
                {reason.mobileLabel}
              </span>
            </button>
          );
        })}
      </div>

      <article className="mt-3 rounded-[1.35rem] border-2 border-[#B8AA8E] bg-[#F7F4ED] p-4 text-center text-[#081E6F] shadow-[3px_3px_0px_#0B32A0] md:hidden">
        <h3 className="font-display text-[1.35rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0]">
          {activeReason.title}
        </h3>
        <p className="font-noir-alt mt-3 text-[0.98rem] font-medium leading-6 text-[#1C1C1C]/72">
          {activeReason.copy}
        </p>
      </article>

      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="flex min-h-[18rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-[#F7F4ED] p-8 pt-10 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0]"
          >
            <div
              className={`flex items-center justify-center text-[#FF4200] ${reason.iconWrapClassName}`}
            >
              <Image
                src={reason.iconSrc}
                alt=""
                aria-hidden="true"
                width={reason.iconWidth}
                height={reason.iconHeight}
                loading="eager"
                unoptimized
                className={reason.iconClassName}
              />
            </div>
            <h3 className="font-display mt-6 flex min-h-[4.7rem] max-w-full items-center justify-center text-[1.9rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0] lg:text-[2.1rem]">
              {reason.title}
            </h3>
            <p className="font-noir-alt mt-4 max-w-sm text-base font-medium leading-7 text-[#1C1C1C]/70">
              {reason.copy}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
