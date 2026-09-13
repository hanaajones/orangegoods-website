import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Quick Turn Hats Builder · Orange Goods",
};

export default function CreateQuickTurnHatsPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="ready"
        lockedMode="ready"
        experienceVariant="immersive"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/hats/quick-turn"
        pageBackLabel="Back to quick turn hats"
      />
    </Suspense>
  );
}
