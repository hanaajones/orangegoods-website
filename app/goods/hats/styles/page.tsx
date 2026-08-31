import { redirect } from "next/navigation";

const fullCustomHatsBrowserHref = "/goods/all?productionPath=full-custom&category=hats";

export default function HatStylesPage() {
  redirect(fullCustomHatsBrowserHref);
}
