import Image from "next/image";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { Reveal } from "@/components/Reveal";
import {
  ProductCategoryFaqSection,
  ProductCategoryPage,
} from "../_components/ProductCategoryPage";

const accessoryProducts = [
  {
    title: "Bandanas",
    description: "Print-forward pieces for restaurants, events, pets, retail shelves, and brand worlds that need pattern.",
  },
  {
    title: "Towels",
    description: "Beach, golf, gym, and hospitality towels that can stretch a program without feeling like filler.",
  },
  {
    title: "Laptop Sleeves",
    description: "Higher-value soft goods for team kits, gifting programs, and useful everyday carry pieces.",
  },
  {
    title: "Patches",
    description: "Woven, embroidered, felt, and PVC formats that add texture to hats, jackets, bags, and uniforms.",
  },
  {
    title: "Socks",
    description: "Knitted pairs that can land as club merch, retail extras, hospitality goods, or useful soft-gift pieces.",
  },
  {
    title: "Games + Recreation",
    description: "Pickleball paddles and activity-led pieces that feel more intentional than another default giveaway.",
  },
];

const accessoryCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Laptop Sleeves",
    detail: "Stanford Medicine",
    src: "/images/gallery/accessories-stanford-medicine-laptop-sleeve-black.jpg",
    alt: "Stanford Medicine branded black padded laptop sleeve laid out on gravel",
    position: "center 50%",
    activePosition: "center 50%",
  },
  {
    title: "Bandanas",
    detail: "Verve Culture",
    src: "/images/gallery/accessories-bandana-verve-culture-yellow.webp",
    alt: "Verve Culture yellow custom bandana styled over a cap in an outdoor portrait",
    position: "center 42%",
    activePosition: "center 42%",
  },
  {
    title: "Crew Socks",
    detail: "Firestone Walker",
    src: "/images/gallery/accessories-firestone-socks-lifestyle.jpg",
    alt: "Firestone Walker branded crew socks merch set photographed outdoors with cans",
    position: "center 56%",
  },
  {
    title: "Pickleball Paddles",
    detail: "Islands 2025",
    src: "/images/gallery/accessories-islands-pickleball-paddles.jpg",
    alt: "Two custom pickleball paddles with bright Islands 2025 graphics",
    position: "center 46%",
  },
  {
    title: "Boat Towels",
    detail: "Boatsetter",
    src: "/images/gallery/accessories-boatsetter-towel.jpg",
    alt: "Boatsetter branded towel folded and styled outdoors",
    position: "center 54%",
  },
  {
    title: "Embroidered Patches",
    detail: "Nitro Circus",
    src: "/images/gallery/accessories-nitro-circus-patch-black.jpg",
    alt: "Nitro Circus embroidered black patches arranged in a close-up grid",
    position: "center 56%",
  },
  {
    title: "Travel Pouches",
    detail: "Aloha Collection",
    src: "/images/gallery/accessories-aloha-pouch-stanford.jpg",
    alt: "Stanford Medicine branded Aloha pouch laid flat on gravel with hang tag",
    position: "center 50%",
    activeScaleClass: "scale-[1.02]",
    activeHoverScaleClass: "group-hover:scale-[1.05]",
  },
  {
    title: "Skate Decks",
    detail: "Low Brow Burgers",
    src: "/images/gallery/accessories-low-brow-burger-board.jpg",
    alt: "Illustrated Low Brow Burgers skateboard deck shown in close-up",
    position: "center 50%",
  },
];

const introSection = {
  eyebrow: "Best For",
  title: "Accessories that finish the program",
  description:
    "The right accessory usually makes the bigger merch idea feel more complete. It can add texture to a kit, extend a retail mix, or give an event piece people actually keep using.",
  items: [
    {
      title: "Gifting + Team Kits",
      description: "Sleeves, socks, and useful soft goods that add real utility to onboarding kits, client gifts, and internal launches.",
      imageSrc: "/images/gallery/accessories-greatful-dead-socks-packaging.jpg",
      imageAlt: "Greatful Dead branded crew socks in bright pink retail packaging",
      imagePosition: "center 44%",
    },
    {
      title: "Events + Hospitality",
      description: "Bandanas, hankies, socks, and easy handout pieces that feel tied to the moment instead of throwaway swag.",
      imageSrc: "/images/gallery/accessories-bandana-black-duo.png",
      imageAlt: "Two women wearing light blue custom bandanas at an outdoor event",
      imagePosition: "center 35%",
    },
    {
      title: "Club + Recreation",
      description: "Paddles, decks, and other branded pieces that feel chosen for the audience instead of added at the end.",
      imageSrc: "/images/gallery/accessories-freeedge-deck-stack.jpg",
      imageAlt: "Colorful Free Edge skateboard decks stacked together as a recreation-focused accessory product",
      imagePosition: "center 50%",
    },
  ],
} as const;

const brandSection = {
  eyebrow: "Popular Accessory Lanes",
  title: "Small goods work best with a job to do",
  description:
    "Accessories land when they support the bigger idea. That might mean utility for a team, a softer event piece, a patch-and-trim system, or a recreation-led product that people actually choose to keep using.",
  backgroundImage: "/images/gallery/accessories-freeedge-deck-stack.jpg",
  backgroundPosition: "center 56%",
  brands: [
    {
      name: "Knits + Sewn",
      textClassName: "font-display text-3xl uppercase leading-none text-[var(--og-blue)] md:text-4xl",
    },
    {
      name: "Patch + Trim",
      textClassName: "font-display text-3xl uppercase leading-none text-[var(--og-blue)] md:text-4xl",
    },
    {
      name: "Recreation",
      textClassName: "font-display text-3xl uppercase leading-none text-[var(--og-blue)] md:text-4xl",
    },
  ],
  footer:
    "Some projects need one hero piece. Others need the smaller extras that make the whole assortment feel more thought through. We can help sort out which accessory lane actually supports the program.",
} as const;

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes an accessory program click",
  description:
    "The best results usually come from picking a clear use case, keeping the scale practical, and choosing a format that adds something the core product does not already do.",
  itemTone: "light",
  items: [
    {
      title: "Start with the role",
      description: "A towel, sleeve, sock, hanky, paddle, deck, or patch all solve different problems, so the job comes before the format.",
    },
    {
      title: "Keep the add-on useful",
      description: "The smaller the item, the more important it is that it still feels functional, giftable, or easy to keep around.",
    },
    {
      title: "Let texture do some work",
      description: "Woven, knitted, printed, embroidered, and sewn finishes can all shift the same accessory from giveaway territory into something that feels more considered.",
    },
  ],
  backgroundImage: "/images/gallery/accessories-nitro-circus-patch-gold.jpg",
  backgroundPosition: "center 52%",
} as const;

const accessoryFaqs = [
  {
    question: "What is the MOQ for custom accessories?",
    answer: "Most accessory programs start at 100 pieces total, though exact minimums depend on the item, construction, and decoration method.",
  },
  {
    question: "Can you help decide which accessory fits the program best?",
    answer: "Yes. That is usually the first step when the goal could go a few directions like bandanas, hankies, towels, sleeves, socks, paddles, decks, patches, or smaller add-ons.",
  },
  {
    question: "How long do accessory projects take?",
    answer: "Most accessory projects land in the 3-5 week range after product direction and proof approval, with more custom sewn programs sometimes running longer.",
  },
  {
    question: "Can accessories be part of a larger merch kit?",
    answer: "Yes. Accessories often work best as part of a fuller kit, gifting program, event setup, or retail assortment instead of standing alone.",
  },
] as const;

export default function AccessoriesPage() {
  return (
    <>
      <ProductCategoryPage
        title="Custom Accessories"
        subhead="Bandanas, hankies, towels, socks, sleeves, patches, paddles, and smaller-format goods built to support the bigger idea without feeling like filler."
        image="/images/gallery/accessories-bandana-verve-culture-yellow.webp"
        imageAlt="Verve Culture yellow custom bandana styled over a cap in an outdoor portrait"
        heroEyebrow="Small Format Goods"
        heroImagePosition="center 34%"
        heroSubnote={null}
        introSection={introSection}
        brandSection={brandSection}
        products={accessoryProducts}
        productSectionEyebrow="What We Make"
        productSectionTitle="Accessories worth adding in"
        productSectionDescription="A quick photo-led look at the accessory types this page is really about, without turning the section into a giant catalog."
        productSnapCarouselItems={accessoryCarouselItems}
        detailSection={detailSection}
        showBottomCta={false}
        faqs={[...accessoryFaqs]}
        showFaqSection={false}
      />
      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src="/images/gallery/accessories-bandana-lalo-trio.png"
              alt="Three women wearing custom light blue bandanas in a mountain resort setting"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 28%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.26)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right accessory?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the product, quantity, and any artwork context so we can point you toward
                the right format faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended products, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What accessories are you looking for?"
            projectPlaceholder="Tell us what you want to make: towels, bandanas, hankies, socks, paddles, sleeves, patches, deck-adjacent goods, quantity split, artwork notes, or anything else that helps us quote the right format."
            hiddenFields={{
              source: "accessories-page",
              product: "accessories",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get an Accessories Quote"
            showPhone={false}
            showTimeline={false}
            showDesignHelp={false}
            showArtworkUpload
          />
        </section>
      </Reveal>
      <ProductCategoryFaqSection
        faqs={[...accessoryFaqs]}
        className="bg-[var(--og-cream)] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
      />
    </>
  );
}
