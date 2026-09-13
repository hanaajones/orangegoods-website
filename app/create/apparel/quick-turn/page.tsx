import { Suspense } from "react";
import type { Metadata } from "next";
import { ApparelBuilderPreview, type ApparelBuilderStyle } from "@/components/ApparelBuilderPreview";
import { buildApparelBuilderStyles } from "@/lib/apparel-styles";

export const metadata: Metadata = {
  title: "Quick Turn Apparel Builder · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreateQuickTurnApparelPage() {
  const styles = buildApparelBuilderStyles() satisfies ApparelBuilderStyle[];

  return (
    <Suspense fallback={null}>
      <ApparelBuilderPreview
        styles={styles}
        showPageHero={false}
        draftLinks={[]}
        pageBackHref="/goods/apparel/quick-turn"
        pageBackLabel="Back to quick turn apparel"
      />
    </Suspense>
  );
}
