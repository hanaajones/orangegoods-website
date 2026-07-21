import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "OG Crafted Hats · Orange Goods",
};

export default function OGCraftedHatsBuildPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="crafted"
        lockedMode="crafted"
        pageKicker="Build Online"
        pageTitle="OG Crafted Hats"
        pageDescription="A dedicated hat builder for shape, fabric, interior labels, seam tape, patches, and full custom decisions."
      />
    </Suspense>
  );
}
