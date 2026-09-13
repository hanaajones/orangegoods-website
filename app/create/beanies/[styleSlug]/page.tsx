import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BeanieBuilderPreview } from "@/components/BeanieBuilderPreview";
import { BEANIE_STYLES, BEANIE_STYLES_BY_SLUG } from "@/lib/beanie-styles";

export function generateStaticParams() {
  return BEANIE_STYLES.map((style) => ({ styleSlug: style.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ styleSlug: string }> }) {
  const { styleSlug } = await params;
  const style = BEANIE_STYLES_BY_SLUG[styleSlug];
  if (!style) return {};
  return {
    title: `${style.title} — Quick Turn Beanies · Orange Goods`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CreateQuickTurnBeanieStylePage({
  params,
}: {
  params: Promise<{ styleSlug: string }>;
}) {
  const { styleSlug } = await params;
  const style = BEANIE_STYLES_BY_SLUG[styleSlug];
  if (!style) notFound();

  return (
    <Suspense fallback={null}>
      <BeanieBuilderPreview
        lockedStyleSlug={styleSlug}
        pageBackHref="/goods/beanies/quick-turn"
        pageBackLabel="All Quick Turn Beanies"
      />
    </Suspense>
  );
}
