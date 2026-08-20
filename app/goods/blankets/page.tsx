import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { Reveal } from "@/components/Reveal";
import {
  ProductCategoryFaqSection,
  ProductCategoryPage,
} from "../_components/ProductCategoryPage";

const blanketProducts = [
  {
    title: "Woven Blankets",
    description: "Heavier textile pieces with more visual texture, stronger gifting value, and a more retail feel.",
  },
  {
    title: "Plush Throws",
    description: "Softer home-leaning blankets for hospitality, donor gifts, winter kits, and lifestyle programs.",
  },
  {
    title: "Picnic Blankets",
    description: "Outdoor formats for events, parks, beach programs, and branded goods that need a bigger footprint.",
  },
  {
    title: "Beach Towels",
    description: "A strong warm-weather lane for coastal brands, hotels, beverage launches, and summer drops.",
  },
  {
    title: "Golf + Gym Towels",
    description: "Smaller-format textiles that work for fitness, hospitality, team kits, and utility-first moments.",
  },
  {
    title: "Giftable Textile Sets",
    description: "Programs where the blanket or towel is the anchor piece and the rest of the goods build around it.",
  },
];

const blanketCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Gift Blankets",
    detail: "Stanford Medicine",
    src: "/images/gallery/blankets-stanford-medicine-snow-1175.jpg",
    alt: "Stanford Medicine woven blanket held up outdoors in the snow",
    position: "center 62%",
    activePosition: "center 62%",
  },
  {
    title: "Plush Throws",
    detail: "Daisy Fleece",
    src: "/images/gallery/blankets-daisy-fuzzy-latte.jpg",
    alt: "Soft daisy-pattern fleece blanket folded on a warm neutral backdrop",
    position: "center 52%",
    activePosition: "center 52%",
  },
  {
    title: "Woven Details",
    detail: "Google GenAI",
    src: "/images/gallery/blankets-google-genai-lotus-closeup-1193.jpg",
    alt: "Google GenAI woven blanket closeup with lotus artwork and fringe detail",
    position: "center 48%",
    activePosition: "center 48%",
  },
  {
    title: "Coastal Blankets",
    detail: "Mineragua",
    src: "/images/gallery/blankets-mineragua-coastal-wrap-067.jpg",
    alt: "Mineragua coastal blanket worn outdoors on the rocks",
    position: "center 32%",
    activePosition: "center 32%",
  },
  {
    title: "Beach Towels",
    detail: "Sunrise",
    src: "/images/gallery/blankets-sunrise-lifestyle-3.png",
    alt: "Sunrise striped towel shown as a beach lifestyle piece",
    position: "center 28%",
    activePosition: "center 28%",
  },
  {
    title: "Turkish Towels",
    detail: "Herringbone",
    src: "/images/gallery/blankets-turkish-towel-herringbone.avif",
    alt: "Folded black and cream herringbone Turkish towel with fringe detail on a white background",
    position: "center 56%",
    activePosition: "center 56%",
  },
];

const introSection = {
  eyebrow: "Best For",
  title: "Textiles that feel like real product",
  description:
    "Blankets and towels work when they feel useful, generous, and specific to the setting. The right material, size, and finish do most of the work before the branding ever has to.",
  items: [
    {
      title: "Hospitality + Gifting",
      description: "Blankets that feel substantial enough for donor gifts, hotel programs, founder kits, and premium brand handoffs.",
      imageSrc: "/images/gallery/blankets-stanford-medicine-folded-snow-1176.jpg",
      imageAlt: "Folded Stanford Medicine woven blanket photographed in the snow",
      imagePosition: "center 52%",
    },
    {
      title: "Beach + Outdoor",
      description: "Towels and larger textiles for coastal brands, summer launches, picnics, retreats, and destination programs.",
      imageSrc: "/images/gallery/blankets-mineragua-coastal-wrap-067.jpg",
      imageAlt: "Mineragua coastal blanket used outdoors by the water",
      imagePosition: "center 28%",
    },
    {
      title: "Retail + Welcome Kits",
      description: "Programs where the blanket or towel becomes the hero item and gives the whole merch set more presence.",
      imageSrc: "/images/gallery/blankets-google-deepmind-mockup-4.jpg",
      imageAlt: "Google DeepMind woven blanket mockup shown with black textile and multicolor fringe",
      imagePosition: "center 48%",
    },
  ],
} as const;

const brandSection = {
  eyebrow: "Textile Formats",
  title: "Start with the right textile",
  description:
    "A woven blanket, plush throw, beach towel, and gym towel all solve different jobs. We can help sort out the format before the artwork and packaging get locked.",
  backgroundImage: "/images/gallery/blankets-stanford-medicine-snow-1175.jpg",
  backgroundPosition: "center 56%",
  brands: [
    {
      name: "Woven",
    },
    {
      name: "Plush",
    },
    {
      name: "Towels",
    },
  ],
  footer:
    "The best blanket and towel programs usually come from matching the size, weight, and finish to the setting before the branding gets finalized.",
} as const;

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes a blanket program feel worth keeping",
  description:
    "The strongest textile programs usually get specific early: where the piece will live, how it should feel in hand, and what the recipient sees when it is folded, packed, or used.",
  itemTone: "light",
  items: [
    {
      title: "Start with the setting",
      description: "A beach towel, woven gift blanket, golf towel, or hotel throw each need different material, weight, and scale decisions.",
    },
    {
      title: "Design for fold and distance",
      description: "These goods get folded, draped, packed, and photographed at scale, so the artwork has to work beyond a flat mockup.",
    },
    {
      title: "Finish the handoff",
      description: "Belly bands, woven labels, straps, hang tags, and simple packaging can make the piece feel much more considered on arrival.",
    },
  ],
  backgroundImage: "/images/gallery/blankets-forest-dancing-shapes-detail.jpg",
  backgroundPosition: "center 50%",
} as const;

const blanketFaqs = [
  {
    question: "What is the MOQ for custom blankets?",
    answer: "Most blanket and towel programs start at 100 pieces total, though exact minimums depend on the textile, size, and production method.",
  },
  {
    question: "Can you help choose the right blanket or towel format?",
    answer: "Yes. That is usually the first conversation, especially when you are deciding between a woven blanket, plush throw, beach towel, gym towel, or something more gift-driven.",
  },
  {
    question: "Can you add labels, bands, or packaging?",
    answer: "Yes. Depending on the project, we can build in woven labels, belly bands, hang tags, straps, and other finishing details that help the piece land better.",
  },
  {
    question: "How long do blanket projects take?",
    answer: "Lead times vary a lot by format. We usually sort out the textile and production path first, then confirm timing based on whether the piece is woven, printed, blank-based, or more custom.",
  },
] as const;

export default function BlanketsPage() {
  return (
    <>
      <ProductCategoryPage
        title="Custom Blankets"
        subhead="Woven blankets, plush throws, beach towels, and textile goods built to feel generous, useful, and worth keeping long after the first handoff."
        image="/images/gallery/blankets-sunrise-lifestyle-3.png"
        imageAlt="Sunrise towel shown as the hero image for the blankets landing page"
        heroEyebrow="Textile Goods"
        heroImagePosition="center 28%"
        heroSubnote={null}
        introSection={introSection}
        brandSection={brandSection}
        products={blanketProducts}
        productSectionEyebrow="What We Make"
        productSectionTitle="Blankets and towels worth keeping"
        productSectionDescription="A quick photo-led look at the textile formats this page is really about, from larger blanket programs to smaller towel pieces with real use."
        productSnapCarouselItems={blanketCarouselItems}
        detailSection={detailSection}
        showBottomCta={false}
        faqs={[...blanketFaqs]}
        showFaqSection={false}
      />
      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              loop
              muted
              playsInline
              poster="/images/gallery/boatsetter-towel-weave-poster-2026-08-19.jpg"
              preload="metadata"
              style={{ objectPosition: "center 52%" }}
              aria-label="Boatsetter towel weaving on the loom"
            >
              <source
                src="/videos/blankets/boatsetter-towel-weave-2026-08-19.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right textile?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the use case, quantity, and any artwork context so we can point you toward
                the right blanket or towel format faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended textile formats, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What kind of blanket or towel are you looking for?"
            projectPlaceholder="Tell us what you want to make: woven blankets, beach towels, gift sets, quantity split, material preferences, or anything else that helps us quote the right direction."
            hiddenFields={{
              source: "blankets-page",
              product: "blankets",
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
        faqs={[...blanketFaqs]}
        className="bg-[var(--og-cream)] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
      />
    </>
  );
}
