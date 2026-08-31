import { Suspense } from "react";
import { BeanieBuilderPreview } from "@/components/BeanieBuilderPreview";

export const metadata = {
  title: "Quick Turn Beanies · Orange Goods",
};

export default function OGCraftedBeaniesBuildPage() {
  return (
    <Suspense fallback={null}>
      <BeanieBuilderPreview
        showPageHero={false}
        pageBackHref="/goods/all?productionPath=quick-turn&category=beanies"
        pageBackLabel="Back to beanies"
      />
    </Suspense>
  );
}
