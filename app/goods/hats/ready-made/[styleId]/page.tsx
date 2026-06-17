import { notFound } from "next/navigation";
import Link from "next/link";
import { ShoppableReadyMadeHat } from "@/components/ShoppableReadyMadeHat";
import { READY_MADE_HATS_BY_ID, READY_MADE_HATS } from "@/lib/ready-made-hats";

export function generateStaticParams() {
  return READY_MADE_HATS.map(s => ({ styleId: s.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ styleId: string }> }) {
  const { styleId } = await params;
  const style = READY_MADE_HATS_BY_ID[styleId];
  if (!style) return {};
  return { title: `${style.name} — Ready Made Hats · Orange Goods` };
}

export default async function StylePage({ params }: { params: Promise<{ styleId: string }> }) {
  const { styleId } = await params;
  const style = READY_MADE_HATS_BY_ID[styleId];
  if (!style) notFound();

  const recommended = READY_MADE_HATS.filter(s => s.id.toLowerCase() !== styleId).slice(0, 5);

  return (
    <main className="bg-[#F5F0E8] pb-24 md:pb-0">
      <div className="px-6 pt-6 md:px-12">
        <Link href="/goods/hats/ready-made" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--og-blue)] hover:text-[var(--og-orange)]">
          ← All Ready Made Hats
        </Link>
      </div>
      <section className="px-6 py-8 md:px-12">
        <ShoppableReadyMadeHat style={style} recommendedStyles={recommended} />
      </section>
    </main>
  );
}
