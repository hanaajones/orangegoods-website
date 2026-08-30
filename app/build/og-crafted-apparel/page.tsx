import { Suspense } from "react";
import type { Metadata } from "next";
import { ApparelBuilderPreview, type ApparelBuilderStyle } from "@/components/ApparelBuilderPreview";
import { buildApparelBuilderStyles } from "@/lib/apparel-styles";

export const metadata: Metadata = {
  title: "OG Crafted Apparel Builder · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OGCraftedApparelBuildPage() {
  const styles = buildApparelBuilderStyles() satisfies ApparelBuilderStyle[];

  return (
    <Suspense fallback={null}>
      <ApparelBuilderPreview
        styles={styles}
        draftLinks={[]}
      />
    </Suspense>
  );
}
