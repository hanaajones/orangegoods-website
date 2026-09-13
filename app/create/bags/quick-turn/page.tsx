import { Suspense } from "react";
import { ToteBuilderPreview } from "@/components/ToteBuilderPreview";

export const metadata = {
  title: "Quick Turn Totes · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreateQuickTurnTotesPage() {
  return (
    <Suspense fallback={null}>
      <ToteBuilderPreview
        showPageHero={false}
        pageBackHref="/goods/bags/quick-turn"
        pageBackLabel="Back to quick turn bags"
      />
    </Suspense>
  );
}
