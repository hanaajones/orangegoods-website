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
          ready: "Quick-turn hats",
          catalog: "Quick-turn apparel",
          shop: "Shop OG",
        }}
        previewLinks={[
          {
            label: "AS Colour 5026 Builder",
            href: "/create/apparel/as-colour-5026",
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
