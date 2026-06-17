"use client";

import dynamic from "next/dynamic";

const ShopifyCollection = dynamic(() => import("@/components/ShopifyCollection"), { ssr: false });

export default function ShopClient() {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ShopifyCollection />
      </div>
    </section>
  );
}
