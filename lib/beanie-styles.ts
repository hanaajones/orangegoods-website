export type BeanieStyle = {
  slug: string;
  model: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  typeLabel: string;
  fit: string;
  material: string;
  decorationOptions: string[];
};

export const BEANIE_STYLES: BeanieStyle[] = [
  {
    slug: "as-colour-1107-cuff-beanie",
    model: "AS Colour 1107",
    title: "Cuff Beanie",
    description: "Classic cuffed beanie with a clean front area for embroidery, a patch, or a woven-label finish.",
    image: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    imagePosition: "center 44%",
    typeLabel: "Cuffed Beanie",
    fit: "Cuffed",
    material: "100% acrylic",
    decorationOptions: ["Embroidery", "Patch", "Woven Label"],
  },
  {
    slug: "as-colour-1115-knit-beanie",
    model: "AS Colour 1115",
    title: "Knit Beanie",
    description: "Ribbed wool-blend beanie with a slightly more premium feel for embroidery, patch, or woven-label branding.",
    image: "/images/gallery/embroidery-fish-at-sea-beanies.jpg",
    imagePosition: "center 48%",
    typeLabel: "Knit Beanie",
    fit: "Longer body",
    material: "50% wool, 50% acrylic",
    decorationOptions: ["Embroidery", "Patch", "Woven Label"],
  },
];

export function getBeanieStyleBySlug(slug: string | null | undefined) {
  return BEANIE_STYLES.find((style) => style.slug === slug) ?? BEANIE_STYLES[0];
}
