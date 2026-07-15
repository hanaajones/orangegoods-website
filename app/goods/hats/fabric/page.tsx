import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { fabricOptions } from "../options-data";

export const metadata = {
  title: "Hat Fabric Options — Orange Goods",
  description: "Explore fabric directions for custom Orange Goods hats.",
};

export default function HatsFabricPage() {
  return (
    <HatsOptionCategoryPage
      eyebrow="Fabric"
      title="Choose your fabric."
      description="Fabric sets the tone fast. Start with the feel you want, then we can narrow the exact construction and colors."
      cards={fabricOptions}
    />
  );
}
