import Image from "next/image";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { Reveal } from "@/components/Reveal";
import {
  ProductCategoryFaqSection,
  ProductCategoryPage,
} from "../_components/ProductCategoryPage";

const sockProducts = [
  {
    title: "Crew Socks",
    description:
      "The easiest place to start for gifting, retail, uniforms, and everyday merch programs.",
  },
  {
    title: "Quarter Socks",
    description:
      "A cleaner athletic cut for active brands, summer kits, and event programs that want a lighter feel.",
  },
  {
    title: "No-Show Socks",
    description:
      "Low-profile pairs that shift more of the brand moment into the knit details and packaging.",
  },
  {
    title: "Plush Socks",
    description:
      "Soft, gift-forward builds that work well for hospitality, seasonal drops, and comfort-led kits.",
  },
  {
    title: "Graphic Knit Socks",
    description:
      "Pattern-heavy directions with room for bold leg graphics, stripes, cuff hits, and sole messages.",
  },
  {
    title: "Gift Sets",
    description:
      "Multi-pair sock programs for onboarding, retail bundles, mailers, and more finished gifting moments.",
  },
];

const sockCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Graphic Crew Socks",
    detail: "Verve Coffee",
    src: "/images/gallery/socks-verve-gd.jpg",
    alt: "Graphic custom Verve Coffee socks laid out as a branded product shot",
    position: "center 44%",
    activeScaleClass: "scale-[1.08]",
    thumbnailScaleClass: "scale-[1.05]",
    activeHoverScaleClass: "group-hover:scale-[1.12]",
  },
  {
    title: "Packaged Gift Set",
    detail: "Verve Coffee",
    src: "/images/gallery/socks-verve-gd-dscf4863.jpg",
    alt: "Custom Verve Coffee socks photographed in branded packaging",
    position: "center 48%",
    activeScaleClass: "scale-[1.04]",
  },
  {
    title: "Can Socks",
    detail: "Firestone Walker",
    src: "/images/gallery/socks-firestone-_mg_0156.jpg",
    alt: "Firestone Walker custom socks photographed as a retail-ready product",
    position: "center 50%",
  },
  {
    title: "Quarter Socks",
    detail: "Firestone Walker",
    src: "/images/gallery/socks-firestone-_mg_0158.jpg",
    alt: "Firestone Walker socks shown as a quarter-cut product shot",
    position: "center 48%",
  },
  {
    title: "Plush Socks",
    detail: "Beachly",
    src: "/images/gallery/socks-beachly.jpg",
    alt: "Beachly plush custom socks styled as a soft lifestyle gift item",
    position: "center 52%",
    activeScaleClass: "scale-[1.02]",
  },
  {
    title: "Gift Pairing",
    detail: "Verve Coffee",
    src: "/images/gallery/socks-verve-gd-dscf4861.jpg",
    alt: "Two pairs of Verve Coffee socks grouped together in a styled product shot",
    position: "center 46%",
  },
  {
    title: "Packaging Detail",
    detail: "Orange Goods",
    src: "/images/gallery/accessories-greatful-dead-socks-packaging.jpg",
    alt: "Sock packaging detail showing how a branded pair can feel more premium",
    position: "center 46%",
    activeScaleClass: "scale-[1.02]",
  },
  {
    title: "Sand Flatlay",
    detail: "Orange Goods",
    src: "/images/gallery/accessories-socks-sand-flatlay.jpg",
    alt: "Custom socks styled in a sand flatlay to show a more lifestyle-driven product direction",
    position: "center 44%",
  },
];

const introSection = {
  eyebrow: "Best For",
  title: "Socks that feel easy to keep around",
  description:
    "Socks work when you want something softer than a throwaway promo item but easier to distribute than heavier apparel. The category works best when the knit, fit, and packaging all support the same use case.",
  items: [
    {
      title: "Welcome Kits + Gifting",
      description:
        "Useful pairs that tuck easily into onboarding kits, mailers, retreats, and seasonal gifts without getting too operationally heavy.",
      imageSrc: "/images/gallery/socks-verve-gd-dscf4863.jpg",
      imageAlt: "Branded socks shown in packaging for a gift-ready presentation",
      imagePosition: "center 48%",
    },
    {
      title: "Retail + Hospitality",
      description:
        "A strong lane for coffee shops, breweries, hotels, and lifestyle brands that want a product people will actually grab again.",
      imageSrc: "/images/gallery/socks-firestone-_mg_0175.jpg",
      imageAlt: "Retail-oriented custom socks photographed for a hospitality-style brand program",
      imagePosition: "center 48%",
    },
    {
      title: "Events + Everyday Merch",
      description:
        "An easy category when you want repeat wear, solid perceived value, and more knit real estate than people expect.",
      imageSrc: "/images/gallery/socks-verve-gd-dscf4860.jpg",
      imageAlt: "Custom socks styled as an everyday merch piece",
      imagePosition: "center 50%",
    },
  ],
} as const;

const brandSection = {
  eyebrow: "Program Shapes",
  title: "There is more than one good sock lane",
  description:
    "Some sock projects want to feel retail-ready. Others just need a strong giftable add-on. The right direction usually comes down to cut, yarn feel, and whether the packaging needs to do some of the heavy lifting.",
  backgroundImage: "/images/gallery/socks-firestone-_mg_0188.jpg",
  backgroundPosition: "center 46%",
  brands: [
    {
      name: "Crew",
    },
    {
      name: "Quarter",
    },
    {
      name: "Gift Set",
    },
  ],
  footer:
    "The category can lean simple or more elevated. We usually sort that out early so the knit, packaging, and quantity all point in the same direction.",
} as const;

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes a sock program work",
  description:
    "The strongest sock programs usually narrow the silhouette early, simplify the knit approach, and use packaging to finish the product instead of overcomplicating the pair itself.",
  itemTone: "light",
  items: [
    {
      title: "Start with the cut",
      description:
        "Crew, quarter, no-show, or plush each point toward a different use case, so that choice usually comes before the artwork.",
    },
    {
      title: "Keep the knit intentional",
      description:
        "Jacquard graphics, cuff stripes, heel and toe blocking, and sole messages can do a lot without forcing the sock to feel busy.",
    },
    {
      title: "Packaging can elevate it fast",
      description:
        "Header cards, belly bands, and simple gift pairings often do more for perceived value than adding too much extra detail to the sock itself.",
    },
  ],
  backgroundImage: "/images/gallery/accessories-plush-socks-blue.jpg",
  backgroundPosition: "center 46%",
} as const;

const sockFaqs = [
  {
    question: "What is the MOQ for custom socks?",
    answer:
      "Most custom sock programs start at 100 pairs total, though the best pricing usually comes once the quantity climbs beyond that.",
  },
  {
    question: "How long do custom socks take?",
    answer:
      "Most sock programs are better planned in the 6 to 8 week range after proof approval, especially if packaging or multiple pairings are involved.",
  },
  {
    question: "Can you help choose the right sock style?",
    answer:
      "Yes. We usually help narrow the cut first, then shape the knit direction and packaging around the real use case.",
  },
  {
    question: "Can socks be packed into kits or gift sets?",
    answer:
      "Yes. Socks are a strong fit for onboarding kits, mailers, hospitality gifting, and small retail sets when the presentation is part of the plan.",
  },
] as const;

export default function SocksPage() {
  return (
    <>
      <ProductCategoryPage
        title="Custom Socks"
        subhead="Knit socks built for gifting, retail, hospitality, and everyday merch programs that feel useful first and branded in the right way."
        image="/images/gallery/socks-verve-gd.jpg"
        imageAlt="Graphic custom socks used as the hero image for the socks category page"
        heroEyebrow="Full Custom"
        heroImagePosition="center 44%"
        heroSubnote="100+ pairs. Usually 6-8 weeks from proof approval."
        introSection={introSection}
        brandSection={brandSection}
        products={sockProducts}
        productSectionEyebrow="What We Make"
        productSectionTitle="Sock programs worth building out"
        productSectionDescription="A quick photo-led look at the kinds of sock directions this page is really about, without turning the section into a giant catalog."
        productSnapCarouselItems={sockCarouselItems}
        detailSection={detailSection}
        faqs={[...sockFaqs]}
        showBottomCta={false}
        showFaqSection={false}
      />
      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src="/images/gallery/socks-verve-gd-dscf4863.jpg"
              alt="Packaged custom socks styled as a polished merch program"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 48%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.24)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right sock program?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the quantity, timing, and how polished the program needs
                to feel, and we will point you toward the right build faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended sock directions, packaging options, and a clear next step."
            projectDefault=""
            projectLabel="What kind of socks are you looking for?"
            projectPlaceholder="Tell us what you want to make: crew, quarter, no-show, plush, gifting, retail, quantity split, packaging notes, or anything else that helps us quote the right direction."
            hiddenFields={{
              source: "socks-page",
              product: "socks",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get a Socks Quote"
            showPhone={false}
            showTimeline={false}
            showDesignHelp={false}
            showArtworkUpload
          />
        </section>
      </Reveal>
      <ProductCategoryFaqSection
        faqs={[...sockFaqs]}
        className="bg-[var(--og-cream)] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
      />
    </>
  );
}
