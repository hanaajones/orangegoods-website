export type HatStyleImage = {
  src: string;
  label: string;
  imagePosition?: string;
};

export type HatStyle = {
  slug: string;
  model: string;
  title: string;
  description: string;
  selectorDescription: string;
  image: string;
  gallery?: HatStyleImage[];
  imagePosition?: string;
  closure: string;
  profile: string;
  bestFor: string;
};

const sharedDetailGalleryImage: HatStyleImage = {
  src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og-crafted-shared-detail-mg-9416.jpg",
  label: "Detail view",
};

export const hatStyles = [
  {
    slug: "og-100-dad-hat",
    model: "OG 100",
    title: "Dad Hat",
    description: "Relaxed 6-panel, everyday fit.",
    selectorDescription: "6-panel, low profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og100-cypress-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og100-cypress-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og100-cypress-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og100-cypress-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Strapback",
    profile: "Low profile",
    bestFor: "Easy everyday brand cap",
  },
  {
    slug: "og-110-five-panel-unstructured-hat",
    model: "OG 110",
    title: "Standard Cap",
    description: "Clean 5-panel shape with a laid-back feel.",
    selectorDescription: "5-panel, unstructured, mid profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og110-walnut-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og110-walnut-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og110-walnut-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og110-walnut-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Strapback",
    profile: "Mid profile",
    bestFor: "Surf, coffee, and lifestyle brands",
  },
  {
    slug: "og-120-coast-cap",
    model: "OG 120",
    title: "Coast Cap",
    description: "Soft low-profile shape with a laid-back feel.",
    selectorDescription: "6-panel, low profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og120-black-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og120-black-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og120-black-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og120-black-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 48%",
    closure: "Strapback",
    profile: "Mid profile",
    bestFor: "Casual retail programs",
  },
  {
    slug: "og-130-setter-cap",
    model: "OG 130",
    title: "Setter Cap",
    description: "A sharper 5-panel with more structure.",
    selectorDescription: "5-panel, structured, mid profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og130-navy-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og130-navy-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og130-navy-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og130-navy-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "Mid profile",
    bestFor: "Structured front-logo builds",
  },
  {
    slug: "og-140-surf-trucker",
    model: "OG 140",
    title: "Surf Trucker",
    description: "Relaxed trucker built for lifestyle brands.",
    selectorDescription: "trucker, mid profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og140-front-updated.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og140-front-updated.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og140-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og140-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "Mid profile",
    bestFor: "Coastal and outdoor programs",
  },
  {
    slug: "og-150-stock-trucker",
    model: "OG 150",
    title: "Stock Trucker",
    description: "Classic mesh-back trucker with more presence.",
    selectorDescription: "trucker, mesh back, mid profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og150-khaki-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og150-khaki-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og150-khaki-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og150-khaki-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "Mid profile",
    bestFor: "Events and larger merch runs",
  },
  {
    slug: "og-160-field-trucker",
    model: "OG 160",
    title: "Field Trucker",
    description: "More structured front with extra logo room.",
    selectorDescription: "trucker, structured front, low profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og160-white-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og160-white-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og160-white-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og160-white-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "Low profile",
    bestFor: "Bolder front decoration",
  },
  {
    slug: "og-170-foam-trucker",
    model: "OG 170",
    title: "Foamie Trucker",
    description: "High-profile trucker that makes more of a statement.",
    selectorDescription: "foam trucker, high profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og170-navy-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og170-navy-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og170-navy-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og170-navy-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Louder promotional drops",
  },
  {
    slug: "og-180-trail-cap",
    model: "OG 180",
    title: "Trail Cap",
    description: "Camper-style shape with an outdoor lean.",
    selectorDescription: "camper, low profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og180-black-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og180-black-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og180-black-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og180-black-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 52%",
    closure: "Clip closure",
    profile: "Low profile",
    bestFor: "Outdoor and active use",
  },
  {
    slug: "og-190-highline-cap",
    model: "OG 190",
    title: "Highline Cap",
    description: "Structured high-profile cap with a stronger crown.",
    selectorDescription: "structured cap, high profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og190-walnut-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og190-walnut-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og190-walnut-side.jpg", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og190-walnut-back.jpg", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Retail-style structured builds",
  },
  {
    slug: "og-200-perform-cap",
    model: "OG 200",
    title: "Perform Cap",
    description: "Lighter, more technical, and built for movement.",
    selectorDescription: "performance cap, mid profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og200-perform-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og200-perform-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og200-perform-side.png", label: "Side view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og200-perform-back.png", label: "Back view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 50%",
    closure: "Clip closure",
    profile: "Mid profile",
    bestFor: "Technical and sport programs",
  },
  {
    slug: "og-210-bucket-hat",
    model: "OG 210",
    title: "Bucket Hat",
    description: "A custom bucket built for summer drops and events.",
    selectorDescription: "bucket hat, high profile",
    image: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og210-walnut-front.jpg",
    gallery: [
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og210-walnut-front.jpg", label: "Front view" },
      { src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og210-walnut-inside.jpg", label: "Inside view" },
      sharedDetailGalleryImage,
    ],
    imagePosition: "center 48%",
    closure: "Fitted",
    profile: "High profile",
    bestFor: "Event kits and seasonal drops",
  },
] satisfies HatStyle[];

export const featuredHatStyles = [
  { slug: "og-100-dad-hat" },
  { slug: "og-110-five-panel-unstructured-hat", title: "Standard Cap" },
  { slug: "og-140-surf-trucker" },
  { slug: "og-170-foam-trucker" },
  { slug: "og-190-highline-cap" },
  { slug: "og-210-bucket-hat" },
].flatMap(({ slug, title }) => {
    const style = hatStyles.find((item) => item.slug === slug);

    if (!style) return [];

    return [title ? { ...style, title } : style];
  });

export function getHatStyleBySlug(slug: string) {
  return hatStyles.find((style) => style.slug === slug);
}
