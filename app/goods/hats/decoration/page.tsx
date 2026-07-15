import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { decorationOptions } from "../options-data";

export const metadata = {
  title: "Hat Decoration Methods — Orange Goods",
  description: "Explore embroidery, patches, and print options for custom Orange Goods hats.",
};

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
