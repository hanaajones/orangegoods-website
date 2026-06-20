import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type UseCase = {
  title: string;
  image: string;
  alt: string;
  imagePosition?: string;
};

type Logo = {
  name: string;
  image: string;
};

const useCases: UseCase[] = [
  {
    title: "Influencer Gifting",
    image: "/images/gallery/accessories-apteka-towel-267A5255.jpg",
    alt: "Custom Apteka towel detail for an influencer gifting program",
  },
  {
    title: "Corporate Gifting",
    image: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    alt: "Custom Stanford Medicine laptop sleeve for corporate gifting",
  },
  {
    title: "Corporate Events",
    image: "/images/gallery/apparel-bodyglove-tee.jpg",
    alt: "Custom Body Glove apparel for a corporate event",
  },
  {
    title: "Team Gear",
    image: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    alt: "Custom High St Deli outerwear team gear",
  },
  {
    title: "Brand Activations",
    image: "/images/gallery/bags-boatsetter-dscf3242.jpg",
    alt: "Custom Boatsetter tote bags for a brand activation",
  },
  {
    title: "High-Volume Orders",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    alt: "Custom embroidered hats for a high-volume order",
  },
  {
    title: "Retail",
    image: "/images/gallery/socks-firestone-_mg_0156.jpg",
    alt: "Custom Firestone Walker socks for retail merchandise",
    imagePosition: "center 76%",
  },
  {
    title: "Launch Kits",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_040.jpg",
    alt: "Custom Verve launch kit apparel",
  },
];

const logoFrameClass: Record<string, string> = {
  Google: "h-10 w-44",
  "Stanford Medicine": "h-16 w-36",
  "805 Firestone Walker": "h-16 w-36",
  "Verve Coffee": "h-12 w-44",
};

export function UseCaseCarousel({ logos }: { logos: Logo[] }) {
  return (
    <Reveal className="bg-white px-4 pb-0 pt-[46px] md:px-8 md:pb-0 md:pt-[70px] lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {useCases.map((item, index) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-[1.5rem] border-[3px] border-[#0B32A0] bg-[#E7E0D2] shadow-[5px_5px_0px_#081E6F]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                priority={index < 2}
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: item.imagePosition ?? "center" }}
              />
              <div className="absolute inset-0 bg-[#1C1C1C]/30 transition group-hover:bg-[#1C1C1C]/24" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1C1C]/66 via-[#1C1C1C]/24 to-transparent p-4 pt-12">
                <h3 className="font-subtitle-alt text-lg font-medium normal-case leading-tight tracking-normal text-white md:text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden md:mt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/OrangeGoods_Checkers_Orange.svg"
            alt=""
            aria-hidden="true"
            className="h-12 w-full object-cover md:h-16"
          />
        </div>
        <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden bg-white pb-2 pt-6 md:mt-14 md:pb-3">
          <div className="animate-marquee flex w-max items-center gap-20 px-8 md:gap-24 md:px-12">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className={`relative flex-none opacity-[0.76] grayscale transition hover:opacity-100 hover:grayscale-0 ${logoFrameClass[logo.name] ?? "h-12 w-40"}`}
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
