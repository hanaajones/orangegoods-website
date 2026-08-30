import { Suspense } from "react";
import { BeanieBuilderPreview } from "@/components/BeanieBuilderPreview";

export const metadata = {
  title: "Full Custom Beanies · Orange Goods",
};

export default function OGCraftedBeaniesBuildPage() {
  return (
    <Suspense fallback={null}>
      <BeanieBuilderPreview />
    </Suspense>
  );
}
