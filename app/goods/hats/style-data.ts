export type HatStyle = {
  slug: string;
  model: string;
  title: string;
  description: string;
  selectorDescription: string;
  image: string;
  imagePosition?: string;
  closure: string;
  profile: string;
  bestFor: string;
};

export const hatStyles = [
  {
    slug: "og-100-dad-hat",
    model: "OG 100",
    title: "Dad Hat",
    description: "Relaxed 6-panel, everyday fit.",
    selectorDescription: "6-panel, low profile",
    image: "/images/product/hats/og-crafted-styles/og100-dad-hat-front-2026-07.jpg",
    imagePosition: "center 50%",
    closure: "Strapback",
    profile: "Low profile",
    bestFor: "Easy everyday brand cap",
  },
  {
    slug: "og-110-five-panel-unstructured-hat",
    model: "OG 110",
    title: "5-panel unstructured hat",
    description: "Clean 5-panel shape with a laid-back feel.",
    selectorDescription: "5-panel, unstructured, mid profile",
    image: "/images/product/hats/og-crafted-styles/og110-five-panel-unstructured-front-2026-07.jpg",
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
    image: "/images/product/hats/og-crafted-styles/og120-coast-cap-front-2026-07.jpg",
    imagePosition: "center 48%",
    closure: "Strapback",
    profile: "Low profile",
    bestFor: "Casual retail programs",
  },
  {
    slug: "og-130-setter-cap",
    model: "OG 130",
    title: "Setter Cap",
    description: "A sharper 5-panel with more structure.",
    selectorDescription: "5-panel, structured, mid profile",
    image: "/images/product/hats/og-crafted-styles/og130-setter-cap-front-2026-07.jpg",
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
    image: "/images/product/hats/og-crafted-styles/og140-surf-trucker-front-2026-07.jpg",
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
    image: "/images/product/hats/og-crafted-styles/og150-stock-trucker-front-2026-07.jpg",
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
    selectorDescription: "trucker, structured front, high profile",
    image: "/images/product/hats/og-crafted-styles/og160-field-trucker-front-2026-07.jpg",
    imagePosition: "center 50%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Bolder front decoration",
  },
  {
    slug: "og-170-foam-trucker",
    model: "OG 170",
    title: "Foam Trucker",
    description: "High-profile trucker that makes more of a statement.",
    selectorDescription: "foam trucker, high profile",
    image: "/images/product/hats/og-crafted-styles/og170-foam-trucker-front-2026-07.jpg",
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
    image: "/images/product/hats/og-crafted-styles/og180-trail-cap-front-2026-07.jpg",
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
    image: "/images/product/hats/og-crafted-styles/og190-highline-cap-front-2026-07.jpg",
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
    selectorDescription: "performance cap, low profile",
    image: "/images/product/hats/og-crafted-styles/og200-perform-cap-front-2026-07.jpg",
    imagePosition: "center 50%",
    closure: "Clip closure",
    profile: "Low profile",
    bestFor: "Technical and sport programs",
  },
  {
    slug: "og-210-bucket-hat",
    model: "OG 210",
    title: "Bucket Hat",
    description: "A custom bucket built for summer drops and events.",
    selectorDescription: "bucket hat",
    image: "/images/gallery/hat-client-bucket-brown.jpg",
    imagePosition: "center 48%",
    closure: "Fitted",
    profile: "Bucket",
    bestFor: "Event kits and seasonal drops",
  },
] satisfies HatStyle[];

export const featuredHatStyles = hatStyles.filter((style) =>
  ["OG 100", "OG 110", "OG 140"].includes(style.model)
);

export function getHatStyleBySlug(slug: string) {
  return hatStyles.find((style) => style.slug === slug);
}
