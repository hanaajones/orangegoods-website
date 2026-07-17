export type HatStyle = {
  slug: string;
  model: string;
  title: string;
  description: string;
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
    image: "/images/product/hats/og100-dad-hat-brown-front.jpg",
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
    image: "/images/product/hats/og110-five-panel-brown-front.jpg",
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
    image: "/images/product/hat-lifestyle-hero.jpg",
    imagePosition: "center 44%",
    closure: "Strapback",
    profile: "Low profile",
    bestFor: "Casual retail programs",
  },
  {
    slug: "og-130-setter-cap",
    model: "OG 130",
    title: "Setter Cap",
    description: "A sharper 5-panel with more structure.",
    image: "/images/product/hat-bucket-hero.jpg",
    imagePosition: "center 45%",
    closure: "Snapback",
    profile: "Mid profile",
    bestFor: "Structured front-logo builds",
  },
  {
    slug: "og-140-surf-trucker",
    model: "OG 140",
    title: "Surf Trucker",
    description: "Relaxed trucker built for lifestyle brands.",
    image: "/images/product/hats/og140-surf-trucker-brown-front.jpg",
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
    image: "/images/product/hat-lifestyle-secondary.jpg",
    imagePosition: "center 48%",
    closure: "Snapback",
    profile: "Mid profile",
    bestFor: "Events and larger merch runs",
  },
  {
    slug: "og-160-field-trucker",
    model: "OG 160",
    title: "Field Trucker",
    description: "More structured front with extra logo room.",
    image: "/images/product/hats/og160-retro-trucker-front.jpg",
    imagePosition: "center 42%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Bolder front decoration",
  },
  {
    slug: "og-170-foam-trucker",
    model: "OG 170",
    title: "Foam Trucker",
    description: "High-profile trucker that makes more of a statement.",
    image: "/images/product/hats/og170-foam-trucker-front.jpg",
    imagePosition: "center 44%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Louder promotional drops",
  },
  {
    slug: "og-180-trail-cap",
    model: "OG 180",
    title: "Trail Cap",
    description: "Camper-style shape with an outdoor lean.",
    image: "/images/product/hats/as-colour/1104-nylon-cap-front.jpg",
    imagePosition: "center 48%",
    closure: "Clip closure",
    profile: "Low profile",
    bestFor: "Outdoor and active use",
  },
  {
    slug: "og-190-highline-cap",
    model: "OG 190",
    title: "Highline Cap",
    description: "Structured high-profile cap with a stronger crown.",
    image: "/images/product/hats/feb-highline-navy-front.jpg",
    imagePosition: "center 46%",
    closure: "Snapback",
    profile: "High profile",
    bestFor: "Retail-style structured builds",
  },
  {
    slug: "og-200-perform-cap",
    model: "OG 200",
    title: "Perform Cap",
    description: "Lighter, more technical, and built for movement.",
    image: "/images/product/hats/feb-perform-black-front.jpg",
    imagePosition: "center 44%",
    closure: "Clip closure",
    profile: "Low profile",
    bestFor: "Technical and sport programs",
  },
  {
    slug: "og-210-bucket-hat",
    model: "OG 210",
    title: "Bucket Hat",
    description: "A custom bucket built for summer drops and events.",
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
