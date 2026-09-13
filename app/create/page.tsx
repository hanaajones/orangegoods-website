import type { Metadata } from "next";
import { CreateLandingClient } from "@/app/create/_components/CreateLandingClient";

export const metadata: Metadata = {
  title: "Create · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreatePage() {
  return <CreateLandingClient />;
}
