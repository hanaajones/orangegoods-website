import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ToteBuilderPreview } from "@/components/ToteBuilderPreview";
import { AS_COLOUR_TOTES, getAsColourToteBySlug, getAsColourToteSlug } from "@/lib/as-colour-totes";

export function generateStaticParams() {
  return AS_COLOUR_TOTES.map((style) => ({ styleSlug: getAsColourToteSlug(style) }));
}

export async function generateMetadata({ params }: { params: Promise<{ styleSlug: string }> }) {
  const { styleSlug } = await params;
  const style = getAsColourToteBySlug(styleSlug);
  if (!style) return {};
  return {
    title: `${style.name} — Quick Turn Totes · Orange Goods`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CreateQuickTurnToteStylePage({
  params,
}: {
  params: Promise<{ styleSlug: string }>;
}) {
  const { styleSlug } = await params;
  const style = getAsColourToteBySlug(styleSlug);
  if (!style) notFound();

  return (
    <Suspense fallback={null}>
      <ToteBuilderPreview
        lockedStyleSlug={styleSlug}
        showPageHero={false}
        pageBackHref="/goods/bags/quick-turn"
        pageBackLabel="All Quick Turn Bags"
      />
    </Suspense>
  );
}
