import { Suspense } from "react";
import { ToteBuilderPreview } from "@/components/ToteBuilderPreview";

export const metadata = {
  title: "Quick Turn Totes · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OGCraftedTotesBuildPage() {
  return (
    <Suspense fallback={null}>
      <ToteBuilderPreview showPageHero={false} />
    </Suspense>
  );
}
