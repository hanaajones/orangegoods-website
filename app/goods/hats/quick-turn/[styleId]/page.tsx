import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductStylePreview } from "@/components/ProductStylePreview";
import { READY_MADE_HATS, READY_MADE_HATS_BY_ID } from "@/lib/ready-made-hats";

export function generateStaticParams() {
  return READY_MADE_HATS.map((style) => ({ styleId: style.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ styleId: string }> }) {
  const { styleId } = await params;
  const style = READY_MADE_HATS_BY_ID[styleId];
  if (!style) return {};
  return { title: `${style.name} — Quick Turn Hats · Orange Goods` };
}

export default async function QuickTurnStylePage({ params }: { params: Promise<{ styleId: string }> }) {
  const { styleId } = await params;
  const style = READY_MADE_HATS_BY_ID[styleId];
  if (!style) notFound();

  return (
    <Suspense fallback={null}>
      <ProductStylePreview
        initialMode="ready"
        lockedMode="ready"
        experienceVariant="immersive"
        initialReadyMadeStyleId={styleId}
        readyMadeRouteBase="/goods/hats/quick-turn"
        pageTitle=""
        pageDescription=""
        pageBackHref="/goods/all?productionPath=quick-turn&category=hats"
        pageBackLabel="All Quick Turn Hats"
      />
    </Suspense>
  );
}
