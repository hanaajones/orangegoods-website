import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { addOnOptions } from "../options-data";

export const metadata = {
  title: "Hat Add-Ons — Orange Goods",
  description: "Explore custom add-ons and finishing details for Orange Goods hats.",
};

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
