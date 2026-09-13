import { Suspense } from "react";
import { BeanieBuilderPreview } from "@/components/BeanieBuilderPreview";

export const metadata = {
  title: "Quick Turn Beanies · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreateQuickTurnBeaniesPage() {
  return (
    <Suspense fallback={null}>
      <BeanieBuilderPreview
        showPageHero={false}
        pageBackHref="/goods/beanies/quick-turn"
        pageBackLabel="Back to quick turn beanies"
      />
    </Suspense>
  );
}
