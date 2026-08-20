import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Quick Turn Hats Builder · Orange Goods",
};

export default function ReadyMadeHatsBuildPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="ready"
        lockedMode="ready"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/hats/ready-made"
        pageBackLabel="Back to ready made hats"
      />
    </Suspense>
  );
}
