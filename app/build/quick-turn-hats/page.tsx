import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Quick Turn Hats Builder · Orange Goods",
};

export default function QuickTurnHatsBuildPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="ready"
        lockedMode="ready"
        experienceVariant="immersive"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/all?productionPath=quick-turn&category=hats"
        pageBackLabel="Back to quick turn hats"
      />
    </Suspense>
  );
}
