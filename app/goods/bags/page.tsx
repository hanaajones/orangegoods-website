import Image from "next/image";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { Reveal } from "@/components/Reveal";
import {
  ProductCategoryFaqSection,
  ProductCategoryPage,
} from "../_components/ProductCategoryPage";

const bagProducts = [
  {
    title: "Canvas Totes",
    description: "Everyday carry bags for cafes, retail, gifting, and branded programs that need real reuse.",
  },
  {
    title: "Boat Totes",
    description: "Heavier retail-leaning builds with structure, trim, and more room for premium branded details.",
  },
  {
    title: "Market Bags",
    description: "Lighter open-top bags for events, mailers, shops, and quick-grab everyday use.",
  },
  {
    title: "Backpacks",
    description: "A stronger lane for teams, onboarding, travel, and programs that need longer-term utility.",
  },
  {
    title: "Welcome Bags",
    description: "Event, hospitality, and launch bags designed around the goods that need to live inside them.",
  },
  {
    title: "Custom Carryalls",
    description: "When the proportions, handles, trim, or finish need to feel more specific to the brand.",
  },
];

const bagCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Boat Tote",
    detail: "Boatsetter",
    src: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    alt: "Custom Boatsetter boat tote holding a striped towel",
    position: "center 54%",
    activePosition: "center 54%",
    activeScaleClass: "scale-[1.03]",
    activeHoverScaleClass: "group-hover:scale-[1.06]",
  },
  {
    title: "Retail Tote",
    detail: "Solid State Coffee",
    src: "/images/gallery/bags-solid-state-coffee-stairs.jpg",
    alt: "Solid State Coffee tote bag resting on brown outdoor steps",
    position: "center 58%",
    activePosition: "center 58%",
  },
  {
    title: "Graphic Totes",
    detail: "There Does Not Exist Brewery",
    src: "/images/gallery/bags-third-does-not-exist-graphic-tote.jpg",
    alt: "Black There Does Not Exist Brewery tote bag carried on shoulder",
    position: "center 50%",
  },
  {
    title: "Mini Tote",
    detail: "Verve Coffee",
    src: "/images/gallery/merch-graphics-verve-tokyo-tote-024.jpg",
    alt: "Verve Coffee tote bag hanging from a hand with branded keychain",
    position: "center 44%",
    activePosition: "center 44%",
  },
  {
    title: "Backpacks",
    detail: "Stanford Medicine",
    src: "/images/gallery/bags-stanford-medicine-thule-backpack-on-body.jpg",
    alt: "Person wearing a Stanford Medicine backpack outdoors",
    position: "center 52%",
  },
  {
    title: "Cooler Tote",
    detail: "Stanford Medicine",
    src: "/images/gallery/bags-stanford-medicine-rtic-cooler-tote.jpg",
    alt: "Stanford Medicine RTIC cooler tote photographed in snow",
    position: "center 54%",
    activePosition: "center 54%",
  },
];

const introSection = {
  eyebrow: "Best For",
  title: "Bags that stay in rotation",
  description:
    "A good bag keeps working after the first handoff. The right shape, fabric, and decoration make it feel useful before it ever feels branded.",
  items: [
    {
      title: "Retail + Cafe",
      description: "Totes that can live on a merch shelf, carry daily essentials, and still feel like real product.",
      imageSrc: "/images/gallery/bags-solid-state-coffee-stairs.jpg",
      imageAlt: "Solid State Coffee tote bag resting on brown outdoor steps",
      imagePosition: "center 44%",
    },
    {
      title: "Events + Welcome Kits",
      description: "Carry goods that help stage the whole handoff, whether the bag holds drinkware, towels, apparel, or inserts.",
      imageSrc: "/images/gallery/bags-stanford-medicine-rtic-cooler-tote.jpg",
      imageAlt: "Stanford Medicine RTIC cooler tote photographed in snow",
      imagePosition: "center 52%",
      imageScaleClass: "scale-[1.02]",
    },
    {
      title: "Teams + Travel",
      description: "Backpacks and more structured bags for onboarding, conferences, staff gear, and longer-term use.",
      imageSrc: "/images/gallery/bags-stanford-medicine-thule-backpack-on-body.jpg",
      imageAlt: "Person wearing a Stanford Medicine backpack outdoors",
      imagePosition: "center 52%",
    },
  ],
} as const;

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes a bag feel worth keeping",
  description:
    "The strongest bag programs usually get specific early: what it needs to carry, how it should feel, and how branded the final piece should be.",
  itemTone: "light",
  items: [
    {
      title: "Start with the job",
      description: "A retail tote, welcome bag, backpack, or event handout all need different proportions, structure, and carrying behavior.",
    },
    {
      title: "Construction matters",
      description: "Fabric weight, gusset depth, handle length, pockets, and trim can change the whole feel before decoration even starts.",
    },
    {
      title: "Branding can go beyond print",
      description: "Embroidery, woven labels, patches, and custom details help a bag feel more considered than a generic blank with a logo.",
    },
  ],
  backgroundImage: "/images/gallery/bags-solid-state-coffee-stairs.jpg",
  backgroundPosition: "center 60%",
} as const;

const buildPathSection = {
  eyebrow: "Build Paths",
  title: "Build it from scratch or start with a blank",
  description:
    "Some programs need a fully custom bag. Others are stronger and faster when we start with the right blank and decorate it cleanly.",
  cards: [
    {
      title: "Full Custom",
      description:
        "This is the lane when the bag itself needs to feel proprietary, not just branded.",
      bullets: [
        "Custom shape, pockets, handles, trim, and proportions",
        "Fabric, color, labels, hardware, and packaging dialed to the brand",
        "Best for retail programs, premium gifting, and bags that need their own identity",
      ],
      detail: "100+ pieces · 5-7 weeks",
      imageSrc: "/images/gallery/bags-fabric-swatches-mg-9430.jpg",
      imageAlt: "Fabric swatch book showing color and material options for a fully custom bag build",
      imagePosition: "center 52%",
      logoSrc: "/graphics/services/full-custom-orange.svg",
      logoAlt: "Full Custom logo",
      logoWidth: 172,
      logoHeight: 40,
      accent: "orange",
    },
    {
      title: "Quick Turn",
      description:
        "This is the faster path when the decoration is the hero and timing matters more than custom construction.",
      bullets: [
        "Start with strong blank totes, bags, or backpacks",
        "Add screen print, embroidery, patches, or labels locally",
        "Best for events, staff kits, launches, and tighter timelines",
      ],
      detail: "100+ pieces · 2-3 weeks",
      imageSrc: "/images/gallery/screen-printing-field-day-coffee-totes.jpg",
      imageAlt: "Field Day Coffee totes shown with screen printed branding",
      imagePosition: "center 50%",
      logoSrc: "/graphics/services/quick-turn.svg",
      logoAlt: "Quick Turn logo",
      logoWidth: 164,
      logoHeight: 40,
      accent: "blue",
    },
  ],
} as const;

const bagFaqs = [
  {
    question: "What is the MOQ for custom bags and totes?",
    answer: "Most bag and tote programs start at 100 pieces total, though the exact minimum depends on the bag type and how custom the build is.",
  },
  {
    question: "Can you help choose the right bag format?",
    answer: "Yes. That is usually the first conversation, especially when you are deciding between a tote, backpack, event bag, or something more custom.",
  },
  {
    question: "Can you add labels, patches, or custom details?",
    answer: "Yes. Depending on the project, we can incorporate woven labels, patches, upgraded trim, and other brand-specific finishing details.",
  },
  {
    question: "How long do bag projects take?",
    answer: "Blank bags usually take 2-3 weeks. Full custom projects usually take 5-7 weeks after the direction and proof are approved.",
  },
] as const;

export default function BagsPage() {
  return (
    <>
      <div id="as-colour-totes" />
      <ProductCategoryPage
        title="Custom Bags + Totes"
        subhead="Canvas totes, boat totes, backpacks, and carry goods built to feel useful, specific, and worth keeping beyond the first handoff."
        image="/images/gallery/quiz-canvas-tote-img-1172.jpg"
        imageAlt="Field Day Coffee canvas tote set on sand beside a surfboard"
        heroEyebrow="Carry Goods"
        heroImagePosition="74% 52%"
        heroSubnote={null}
        introSection={introSection}
        buildPathSection={buildPathSection}
        products={bagProducts}
        services={[
          {
            title: "Screen Print",
            description: "Great for larger graphics, cleaner retail reads, and simpler tote programs.",
            imageSrc: "/images/gallery/screen-printing-field-day-coffee-totes.jpg",
            imageAlt: "Field Day Coffee totes shown with screen printed branding",
            imagePosition: "center 50%",
          },
          {
            title: "Embroidery",
            description: "A stronger fit for backpacks, heavier totes, and premium smaller logo moments.",
            imageSrc: "/images/gallery/embroidery-stanford-medicine-backpacks.jpg",
            imageAlt: "Stanford Medicine backpacks with embroidered branding",
            imagePosition: "center 52%",
          },
          {
            title: "Patches + Labels",
            description: "Good when the bag needs extra brand detail without relying on one big front hit.",
            imageSrc: "/images/gallery/patches-og-oval-quality-logo-dscf2869.jpg",
            imageAlt: "Orange Goods oval patch shown as a patches and labels example",
            imagePosition: "center 48%",
            imageScaleClass: "scale-[1.04]",
          },
          {
            title: "Custom Build",
            description: "For projects that need specific materials, proportions, trim, or construction details.",
            imageSrc: "/images/gallery/bags-boatsetter-tote-detail.jpg",
            imageAlt: "Boatsetter tote detail showing custom construction and trim",
            imagePosition: "center 54%",
          },
        ]}
        productSectionEyebrow="What We Make"
        productSectionTitle="Bags built around real use"
        productSectionDescription="A quick look at the kinds of bag formats this page is really about, from blank-based tote programs to more custom carry pieces."
        productSnapCarouselItems={bagCarouselItems}
        detailSection={detailSection}
        showBottomCta={false}
        faqs={[...bagFaqs]}
        showFaqSection={false}
      />
      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src="/images/gallery/bags-third-does-not-exist-graphic-tote.jpg"
              alt="Black There Does Not Exist Brewery tote bag carried on shoulder"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 48%" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right bag?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the use case, quantity, and any logo or artwork context so we can point you
                toward the right bag format faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended bag styles, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What kind of bag or tote are you looking for?"
            projectPlaceholder="Tell us what you want to make: totes, backpacks, welcome bags, quantity split, decoration ideas, or anything else that helps us quote the right direction."
            hiddenFields={{
              source: "bags-page",
              product: "bags",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get a Quote"
            showPhone={false}
            showTimeline={false}
            showDesignHelp={false}
            showArtworkUpload
          />
        </section>
      </Reveal>
      <ProductCategoryFaqSection
        faqs={[...bagFaqs]}
        className="bg-[var(--og-cream)] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
      />
    </>
  );
}
