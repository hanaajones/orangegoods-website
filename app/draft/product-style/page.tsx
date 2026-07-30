import { Suspense } from "react";
import { ProductStylePreview } from "@/components/ProductStylePreview";

export const metadata = {
  title: "Unified Product Page Preview · Orange Goods",
};

export default function ProductStyleDraftPage() {
  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        modeLabelOverrides={{
          ready: "Ready-made hats",
          catalog: "Ready-made apparel",
          shop: "Shop OG",
        }}
        previewLinks={[
          {
            label: "AS Colour 5001 Builder",
            href: "/build/products/as-colour-5001",
          },
          {
            label: "Gildan 8000 Style Page",
            href: "/catalog/gildan-8000",
          },
        ]}
      />
    </Suspense>
  );
}
