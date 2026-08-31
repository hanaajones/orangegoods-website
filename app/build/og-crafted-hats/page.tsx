import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Full Custom Hats · Orange Goods",
};

export default function OGCraftedHatsBuildPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="crafted"
        lockedMode="crafted"
        experienceVariant="immersive"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/all?productionPath=full-custom&category=hats"
        pageBackLabel="Back to hats"
      />
    </Suspense>
  );
}
