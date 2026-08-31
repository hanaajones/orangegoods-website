import { Suspense } from "react";
import { ToteBuilderPreview } from "@/components/ToteBuilderPreview";

export const metadata = {
  title: "Quick Turn Totes Master Draft · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OGCraftedTotesMasterDraftPage() {
  return (
    <Suspense fallback={null}>
      <ToteBuilderPreview variant="master-draft" />
    </Suspense>
  );
}
