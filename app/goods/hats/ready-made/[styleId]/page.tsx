import { redirect } from "next/navigation";
import { READY_MADE_HATS } from "@/lib/ready-made-hats";

export function generateStaticParams() {
  return READY_MADE_HATS.map((style) => ({ styleId: style.id.toLowerCase() }));
}

export default async function ReadyMadeStyleRedirectPage({ params }: { params: Promise<{ styleId: string }> }) {
  const { styleId } = await params;
  redirect(`/goods/hats/quick-turn/${styleId}`);
}
