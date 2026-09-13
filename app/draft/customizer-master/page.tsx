import { Suspense } from "react";
import type { Metadata } from "next";
import { CustomizerMasterDraftPreview } from "@/components/CustomizerMasterDraftPreview";

export const metadata: Metadata = {
  title: "Customizer Master Draft · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CustomizerMasterDraftPage() {
  return (
    <Suspense fallback={null}>
      <CustomizerMasterDraftPreview />
    </Suspense>
  );
}
