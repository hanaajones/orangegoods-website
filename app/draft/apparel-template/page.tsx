import { redirect } from "next/navigation";

export const metadata = {
  title: "Apparel Template Preview - Orange Goods",
};

export default function ApparelTemplateDraftPage() {
  redirect("/goods/apparel/styles");
}
