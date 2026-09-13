import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { addOnOptions } from "../options-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hat Add-Ons — Orange Goods",
  description: "Explore custom add-ons and finishing details for Orange Goods hats.",
  path: "/goods/hats/add-ons",
  image: "/images/gallery/headwear-side-embroidery-img-7667.jpg",
  imageAlt: "Custom hat add-on detail",
});

export default function HatsAddOnsPage() {
  return (
    <HatsOptionCategoryPage
      eyebrow="Add-Ons"
      title="Choose your add-ons."
      description="Interior branding, extra embroidery, and finishing details all live here when you want to push the hat a little further."
      cards={addOnOptions}
    />
  );
}
