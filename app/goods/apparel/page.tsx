import Image from "next/image";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { Reveal } from "@/components/Reveal";
import { logos } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export const metadata = buildMetadata({
  title: "Custom Apparel — Orange Goods",
  description:
    "Premium custom apparel programs across tees, hoodies, fleece, uniforms, and retail-style branded merchandise that people actually want to wear.",
  path: "/goods/apparel",
  image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
  imageAlt: "Premium blank apparel for custom merch",
});

const introSection = {
  eyebrow: "Best For",
  title: "Apparel worth keeping",
  description:
    "The best apparel programs start with the right blank, the right decoration, and a clear use case. That is what keeps the finished piece from feeling like another default giveaway.",
  items: [
    {
      title: "Retail-feeling merch",
      description:
        "Heavyweight tees, fleece, and better color palettes when the goal is something people would actually choose off a rack.",
      imageSrc: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
      imageAlt: "Stack of premium blank apparel shown as a retail-feeling merch example",
      imagePosition: "center 54%",
    },
    {
      title: "Teams + uniforms",
      description:
        "Cleaner apparel systems for staff kits, hospitality programs, office gear, and recurring internal orders.",
      imageSrc: "/images/gallery/apparel-gts-synergy.jpg",
      imageAlt: "Finished team apparel shown in a branded event setting",
      imagePosition: "center 46%",
    },
    {
      title: "Launches + gifting",
      description:
        "Premium hoodies, tees, and layers when the apparel has to feel generous enough for gifting and strong enough for a drop.",
      imageSrc: "/images/gallery/apparel-686-hoodie-front.jpg",
      imageAlt: "686 custom hoodie shown as a gifting and launch apparel example",
      imagePosition: "center 38%",
    },
  ],
};

const photoSection = {
  eyebrow: "Recent Apparel",
  title: "Recent apparel programs",
  description:
    "A quick visual pass across the apparel lane, from graphic tees and heavy fleece to cleaner embroidered uniform pieces.",
  photos: [
    {
      src: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
      alt: "Verve Coffee x Grateful Dead tee shown as a finished custom apparel example",
      position: "center 48%",
    },
    {
      src: "/images/gallery/apparel-686-hoodie-back.jpg",
      alt: "Back view of a custom 686 hoodie with printed artwork",
      position: "center 40%",
    },
    {
      src: "/images/gallery/embroidery-k1-apparel-embroidery.jpg",
      alt: "K1 embroidered crewneck shown as an apparel embroidery example",
      position: "center 34%",
    },
    {
      src: "/images/gallery/apparel-bodyglove-tee.jpg",
      alt: "Body Glove tee shown as a finished apparel program example",
      position: "center 42%",
    },
  ],
};

const brandSection = {
  eyebrow: "Premium Blanks",
  title: "We start with the good stuff",
  description:
    "AS Colour, Lane Seven, and Los Angeles Apparel are a few of the premium blank lines we use often, not the full list. The point is simple: start with the right weight, fit, and feel.",
  backgroundImage: "/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg",
  backgroundPosition: "center 52%",
  brands: [
    {
      name: "AS Colour",
      src: "/logos/blank-brands/ascolour-white.svg",
      width: 220,
      height: 44,
      wrapClassName: "bg-white",
      imageClassName: "h-10 w-auto invert",
    },
    {
      name: "Lane Seven",
      src: "/logos/blank-brands/lane-seven-header-logo.svg",
      width: 298,
      height: 43,
      wrapClassName: "bg-white",
      imageClassName: "h-9 w-auto",
    },
    {
      name: "Los Angeles Apparel",
      src: "/logos/blank-brands/los-angeles-apparel-header-logo.svg",
      width: 360,
      height: 16,
      wrapClassName: "bg-white",
      imageClassName: "h-6 w-auto",
    },
  ],
  footer:
    "We also source from other manufacturers depending on the garment, budget, use case, and timeline. If you already know the blank, great. If not, we can help narrow the right tee, fleece, polo, or layer.",
};

const apparelProducts = [
  {
    title: "Tees",
    description:
      "Soft basics, heavier retail-feeling blanks, and graphic tees for launches, cafes, hospitality, and brand merch.",
      imageSrc: "/images/gallery/apparel-verve-gd-tee2.jpg",
      imageAlt: "Printed graphic tee shown as a custom apparel tee option",
      imagePosition: "center 48%",
  },
  {
    title: "Hoodies + Fleece",
    description:
      "Pullover hoodies, zip fleece, and crewnecks that can carry a larger graphic or a cleaner embroidered hit.",
      imageSrc: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
      imageAlt: "Branded hoodie shown as a fleece option",
      imagePosition: "center 48%",
  },
  {
    title: "Sweatpants",
    description:
      "A strong add-on when the program wants matching fleece bottoms, a fuller set, or a more retail-feeling apparel mix.",
      imageSrc: "/images/gallery/screen-printing-high-st-deli-sweatpants-hsd-baywood-127-2.jpg",
      imageAlt: "Printed green sweatpants shown as a custom apparel option",
      imagePosition: "center 52%",
  },
  {
    title: "Long Sleeves",
    description:
      "Good when the order needs more than a tee without stepping all the way into heavier outerwear.",
      imageSrc: "/images/gallery/screen-printing-waterbased-ink-bgxhj-18.jpg",
      imageAlt: "Printed long-sleeve tee shown as a custom apparel option",
      imagePosition: "center 42%",
  },
  {
    title: "Polos + Work Shirts",
    description:
      "A stronger lane for hospitality, employee uniforms, and brand programs that need a cleaner presentation.",
      imageSrc: "/images/gallery/apparel-polos-work-shirts-edible-slo-boh-mason-bar.jpg",
      imageAlt: "Printed short-sleeve button-up shown as a polos and work shirts apparel example",
      imagePosition: "center 28%",
  },
  {
    title: "Construction Apparel",
    description:
      "Crew tees, harder-wearing layers, and branded workwear that still feels clean enough for a real team program.",
      imageSrc: "/images/gallery/apparel-construction-tli08604-2.jpg",
      imageAlt: "Construction company back-print tee shown as a custom construction apparel example",
      imagePosition: "center 42%",
  },
  {
    title: "Outerwear + Layers",
    description:
      "Jackets, overshirts, and warmer pieces for staff kits, gifting, cooler-weather drops, and premium brand programs.",
      imageSrc: "/images/gallery/embroidery-red-bull-jacket.jpg",
      imageAlt: "Red Bull embroidered jacket shown as an outerwear example",
      imagePosition: "center 38%",
  },
  {
    title: "Mixed Apparel Runs",
    description:
      "When the same art system needs to spread across tees, hoodies, hats, and softer add-on apparel without feeling disconnected.",
      imageSrc: "/images/gallery/apparel-gts-synergy.jpg",
      imageAlt: "Mixed apparel run shown in a branded event setting",
      imagePosition: "center 46%",
  },
];

const apparelCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Tees",
    detail: "Retail-feeling merch",
    src: "/images/gallery/apparel-verve-gd-tee2.jpg",
    alt: "Printed graphic tee shown as a custom apparel tee option",
    position: "center 48%",
    activeScaleClass: "scale-[1.02]",
    activeHoverScaleClass: "group-hover:scale-[1.05]",
  },
  {
    title: "Hoodies + Fleece",
    detail: "Launches + gifting",
    src: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
    alt: "Branded hoodie shown as a fleece option",
    position: "center 48%",
  },
  {
    title: "Sweatpants",
    detail: "Sets + add-ons",
    src: "/images/gallery/screen-printing-high-st-deli-sweatpants-hsd-baywood-127-2.jpg",
    alt: "Printed green sweatpants shown as a custom apparel option",
    position: "center 52%",
  },
  {
    title: "Long Sleeves",
    detail: "Everyday layers",
    src: "/images/gallery/screen-printing-waterbased-ink-bgxhj-18.jpg",
    alt: "Printed long-sleeve tee shown as a custom apparel option",
    position: "center 42%",
  },
  {
    title: "Polos + Work Shirts",
    detail: "Teams + uniforms",
    src: "/images/gallery/apparel-polos-work-shirts-edible-slo-boh-mason-bar.jpg",
    alt: "Printed short-sleeve button-up shown as a polos and work shirts apparel example",
    position: "center 28%",
  },
  {
    title: "Construction Apparel",
    detail: "Crews + trades",
    src: "/images/gallery/apparel-construction-tli08604-2.jpg",
    alt: "Construction company back-print tee shown as a custom construction apparel example",
    position: "center 42%",
  },
  {
    title: "Outerwear + Layers",
    detail: "Premium layers",
    src: "/images/gallery/embroidery-red-bull-jacket.jpg",
    alt: "Red Bull embroidered jacket shown as an outerwear example",
    position: "center 38%",
  },
  {
    title: "Mixed Apparel Runs",
    detail: "Multi-piece programs",
    src: "/images/gallery/apparel-gts-synergy.jpg",
    alt: "Mixed apparel run shown in a branded event setting",
    position: "center 46%",
  },
];

const buildPathSection = {
  eyebrow: "Build Paths",
  title: "Start with a blank or build further",
  description:
    "Most apparel orders are strongest when we start with the right blank and decorate it well. When the garment itself needs to feel more proprietary, we can push the build further.",
  cards: [
    {
      title: "Quick Turn",
      description:
        "This is the faster path when timing matters more than re-engineering the garment from scratch.",
      bullets: [
        "Start with strong blanks across tees, fleece, polos, and layers",
        "Add screen print, embroidery, labels, or finishing details locally",
        "Best for events, team gear, gifting, and faster campaign windows",
      ],
      detail: "100+ pieces · 2-3 weeks",
      href: "/goods/apparel/quick-turn",
      ctaLabel: "See apparel styles",
      imageSrc: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
      imageAlt: "Premium blank apparel shown as a quick-turn apparel direction",
      imagePosition: "center 54%",
      logoSrc: "/graphics/services/quick-turn.svg",
      logoAlt: "Quick Turn logo",
      logoWidth: 188,
      logoHeight: 46,
      logoClassName: "h-10 w-auto md:h-12",
      accent: "blue" as const,
    },
    {
      title: "Full Custom",
      description:
        "This is the lane when the silhouette, garment color, labels, trims, or construction details need to feel more specific to the brand.",
      bullets: [
        "Custom colors, labels, trims, and fit direction",
        "Best for retail drops, uniforms, and apparel that needs more ownability",
        "Stronger choice when the garment itself matters as much as the logo",
      ],
      detail: "300+ pieces · 8-12 weeks",
      href: "/create/apparel/full-custom",
      ctaLabel: "Start full custom",
      imageSrc: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
      imageAlt: "Wearable apparel palette shown as a full custom apparel direction",
      imagePosition: "center 44%",
      logoSrc: "/graphics/services/full-custom-orange.svg",
      logoAlt: "Full Custom logo",
      logoWidth: 196,
      logoHeight: 48,
      logoClassName: "h-10 w-auto md:h-12",
      accent: "orange" as const,
    },
  ],
};

const services = [
  {
    title: "Screen Print",
    description:
      "Best for larger graphics, more color, front-and-back layouts, and graphic tees or fleece where the artwork is the hero.",
    imageSrc: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    imageAlt: "Screen printed tee shown as an apparel decoration example",
    imagePosition: "center 48%",
  },
  {
    title: "Embroidery",
    description:
      "Best for cleaner left-chest hits, hats, fleece, outerwear, and premium logo placements that need more texture.",
    imageSrc: "/images/gallery/embroidery-k1-apparel-embroidery.jpg",
    imageAlt: "Embroidered crewneck shown as an apparel embroidery example",
    imagePosition: "center 34%",
  },
  {
    title: "Labels + Finishing",
    description:
      "Hem labels, printed neck labels, hang tags, and other finishing details when the apparel needs to feel more retail-ready.",
    imageSrc: "/images/gallery/screen-printing-woven-label-mg-5846.jpg",
    imageAlt: "Woven label shown as an apparel finishing example",
    imagePosition: "36% 58%",
  },
  {
    title: "Patches + Mixed Decoration",
    description:
      "Good when the apparel system needs layered branding details instead of relying on one front print alone.",
    imageSrc: "/images/gallery/apparel-green-bottle-patch-pocket.jpg",
    imageAlt: "Green Bottle patch sewn onto an apparel pocket as a mixed-decoration example",
    imagePosition: "center 58%",
    imageScaleClass: "scale-[1.15]",
  },
];

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes apparel worth wearing",
  description:
    "Good apparel starts with the right blank, the right decoration, and a fit that feels natural.",
  itemTone: "light" as const,
  items: [
    {
      title: "Start with the right blank",
      description:
        "Weight, fit, fabric, and color do a lot of the work before the logo ever shows up.",
    },
    {
      title: "Match the decoration to the garment",
      description:
        "Tees, fleece, polos, and work shirts do not all want the same treatment.",
    },
    {
      title: "Keep it simple",
      description:
        "One strong placement and a wearable piece usually win.",
    },
  ],
  featurePhoto: {
    src: "/images/gallery/apparel-686-hoodie-back.jpg",
    alt: "Custom hoodie shown as a stronger apparel photo for the guidance section",
    position: "center 40%",
  },
};

const faqs = [
  {
    question: "What is the MOQ for custom apparel?",
    answer:
      "Most quick-turn apparel programs start at 100 pieces total. Full custom apparel usually starts at 300 pieces because the garment itself is being built out more specifically.",
  },
  {
    question: "Can I mix tees, hoodies, and other apparel in one order?",
    answer:
      "Yes. Mixed apparel runs are common, especially when one logo system needs to live across tees, fleece, hats, or softer add-on pieces.",
  },
  {
    question: "How long does custom apparel take?",
    answer:
      "Quick-turn blank-based apparel programs usually land in about 2-3 weeks after direction and proof approval. More full custom apparel builds usually run about 8-12 weeks depending on the garment and level of development.",
  },
  {
    question: "Can you help choose the right blank?",
    answer:
      "Yes. That is usually one of the most useful parts of the process, especially when you know the vibe, budget, and timeline but not the exact tee, fleece, or layer yet.",
  },
  {
    question: "How do I decide between screen print and embroidery?",
    answer:
      "Screen print is usually better for larger graphics and fuller artwork moments. Embroidery is usually stronger for smaller premium placements, fleece, hats, and outerwear.",
  },
];

export default function ApparelPage() {
  return (
    <>
      <ProductCategoryPage
        title="Custom Apparel"
        subhead="Tees, fleece, polos, outerwear, and branded layers built to feel wearable first, branded second."
        image="/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg"
        imageAlt="Premium blank apparel shown as the hero for the custom apparel page"
        startProjectHref="/create/apparel/full-custom"
        heroEyebrow="Wearable Goods"
        heroImagePosition="center 54%"
        heroSubnote={null}
        introSection={introSection}
        photoSection={photoSection}
        brandSection={brandSection}
        buildPathSection={buildPathSection}
        products={apparelProducts}
        services={services}
        servicesSectionTitle="Apparel decoration methods"
        servicesSectionTitleClassName="md:whitespace-nowrap"
        productSectionEyebrow="What We Make"
        productSectionTitle="Core apparel categories"
        productSectionTitleClassName="md:whitespace-nowrap"
        productSectionDescription="Start with the garment family first. Then we can narrow the blank, fit, decoration, and finishing details around the job it needs to do."
        productSnapCarouselItems={apparelCarouselItems}
        detailSection={detailSection}
        faqs={faqs}
        showBottomCta={false}
      />

      <Reveal className="bg-[#F7F4ED] px-4 py-0 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <ClientLogoMarquee
            logos={logos}
            label="Trusted by teams we have built for"
            className="rounded-[1.8rem] border border-[#0B32A0]/10"
          />
        </section>
      </Reveal>

      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src="/images/gallery/apparel-686-hoodie-back.jpg"
              alt="Custom hoodie shown as the closing image for the apparel page"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.26)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right apparel program?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the garment direction, quantity, timeline, and artwork context. We will
                help narrow the right blanks and decoration path from there.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended blanks, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What apparel are you looking for?"
            projectPlaceholder="Tell us what you want to make: tees, fleece, polos, outerwear, mixed apparel run, decoration ideas, quantity split, artwork notes, or anything else that will help us quote it right."
            hiddenFields={{
              source: "apparel-page",
              product: "apparel",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get an Apparel Quote"
            showPhone={false}
            showTimeline
            showDesignHelp={false}
            showProductTypeField
            productTypeLabel="What are you interested in?"
            productTypeOptions={[
              "Tees",
              "Hoodies / Fleece",
              "Sweatpants",
              "Polos / Work Shirts",
              "Outerwear",
              "Mixed apparel run",
              "Not sure yet",
            ]}
            showBlankDirectionField
            blankDirectionLabel="Apparel direction"
            showDecorationMethodField
            decorationMethodLabel="Decoration method"
            showArtworkUpload
          />
        </section>
      </Reveal>
    </>
  );
}
