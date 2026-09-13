import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { decorationOptions } from "../options-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hat Decoration Methods — Orange Goods",
  description: "Explore embroidery, patches, and print options for custom Orange Goods hats.",
  path: "/goods/hats/decoration",
  image: "/images/gallery/headwear-woven-patch-mg-6859.jpg",
  imageAlt: "Custom hat decoration methods",
});

export default function HatsDecorationPage() {
  return (
    <HatsOptionCategoryPage
      eyebrow="Decoration Methods"
      title="Choose your decoration."
      description="The branding method changes the whole read of the hat. Start here, then we can narrow the exact execution."
      cards={decorationOptions}
    />
  );
}
