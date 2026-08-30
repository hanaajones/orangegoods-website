import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Hat Builder Experience Draft · Orange Goods",
};

export default function HatBuilderExperienceDraftPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="crafted"
        lockedMode="crafted"
        experienceVariant="immersive"
        pageKicker="Draft builder"
        pageTitle="Full Custom Hats"
        pageDescription="A more experiential hat-builder direction with larger type, stronger color, and a roomier three-column shell inspired by the beanie builder."
        pageBackHref="/goods/hats"
        pageBackLabel="Back to hats"
        previewLinks={[
          {
            label: "Live hats builder",
            href: "/build/og-crafted-hats",
          },
          {
            label: "Beanie builder reference",
            href: "/build/og-crafted-beanies?style=as-colour-1107-cuff-beanie",
          },
        ]}
      />
    </Suspense>
  );
}
