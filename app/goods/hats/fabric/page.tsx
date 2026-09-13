import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { fabricOptions } from "../options-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hat Fabric Options — Orange Goods",
  description: "Explore fabric directions for custom Orange Goods hats.",
  path: "/goods/hats/fabric",
  image: "/images/gallery/headwear-fabric-color-mg-9423.jpg",
  imageAlt: "Custom hat fabric options",
});

export default function HatsFabricPage() {
  const topAnchoredTitles = new Set([
    "Cotton Twill",
    "Cotton Canvas",
    "Thick Whale Corduroy",
    "Cotton Canvas Poly Blend",
    "Cotton Canvas Rip Stop",
    "Denim",
    "Classic Camo Cotton",
    "Coarse Hemp",
    "Faux Suede",
    "Trucker Mesh",
    "Polyester Hat Ropes",
    "Polyester Thin Hat Ropes",
  ]);

  const cards = fabricOptions.map((card) => ({
    ...card,
    imagePosition: topAnchoredTitles.has(card.title) ? "center 65%" : "center bottom",
    imageScaleClass: "scale-[1.5] group-hover:scale-[1.53]",
  }));

  return (
    <HatsOptionCategoryPage
      eyebrow="Fabric"
      title="Choose your fabric."
      description="Fabric sets the tone fast. Start with the feel you want, then we can narrow the exact construction and colors."
      cards={cards}
      compactCards
    />
  );
}
