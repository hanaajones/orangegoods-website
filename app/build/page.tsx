import type { Metadata } from "next";
import { BuildLandingClient } from "./BuildLandingClient";

export const metadata: Metadata = {
  title: "Build Online · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BuildPage() {
  return <BuildLandingClient />;
}
