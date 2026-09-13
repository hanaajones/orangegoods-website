import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductStylePreview } from "@/components/ProductStylePreview";
import { getHatStyleBySlug, hatStyles } from "@/app/goods/hats/style-data";
import { READY_MADE_HATS, getReadyMadeHatBySlug, getReadyMadeHatSlug } from "@/lib/ready-made-hats";

export function generateStaticParams() {
  return [
    ...hatStyles.map((style) => ({ styleSlug: style.slug })),
    ...READY_MADE_HATS.map((style) => ({ styleSlug: getReadyMadeHatSlug(style) })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ styleSlug: string }> }) {
  const { styleSlug } = await params;
  const craftedStyle = getHatStyleBySlug(styleSlug);

  if (craftedStyle) {
    return { title: `${craftedStyle.title} — Full Custom Hats · Orange Goods` };
  }

  const readyMadeStyle = getReadyMadeHatBySlug(styleSlug);
  if (readyMadeStyle) {
    return { title: `${readyMadeStyle.name} — Quick Turn Hats · Orange Goods` };
  }

  return {};
}

export default async function CreateHatStylePage({
  params,
}: {
  params: Promise<{ styleSlug: string }>;
}) {
  const { styleSlug } = await params;
  const craftedStyle = getHatStyleBySlug(styleSlug);

  if (craftedStyle) {
    return (
      <Suspense fallback={null}>
        <ProductStylePreview
          initialMode="crafted"
          lockedMode="crafted"
          experienceVariant="immersive"
          initialHatStyleSlug={craftedStyle.slug}
          pageTitle=""
          pageDescription=""
          pageBackHref="/goods/hats/full-custom"
          pageBackLabel="Back to hats"
        />
      </Suspense>
    );
  }

  const readyMadeStyle = getReadyMadeHatBySlug(styleSlug);
  if (!readyMadeStyle) notFound();

  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="ready"
        lockedMode="ready"
        experienceVariant="immersive"
        initialReadyMadeStyleId={readyMadeStyle.id.toLowerCase()}
        readyMadeRouteBase="/create/hats"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/hats/quick-turn"
        pageBackLabel="All Quick Turn Hats"
      />
    </Suspense>
  );
}
