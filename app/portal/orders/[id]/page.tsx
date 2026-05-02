import Link from "next/link";
import { notFound } from "next/navigation";

import { PortalOrderTimeline, PortalSectionCard, StatusBadge } from "@/components/portal-ui";
import { getPortalOrder, portalOrders } from "@/data/portal";

export function generateStaticParams() {
  return portalOrders.map((order) => ({ id: order.id }));
}

export default async function PortalOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = getPortalOrder(id);

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link href="/portal/orders" className="inline-flex text-sm font-semibold text-[#0B32A0] hover:text-[#1C1C1C]">
          Back to orders
        </Link>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7F00]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Order detail
            </p>
            <h1
              className="text-4xl font-extrabold uppercase tracking-tight text-[#FF4200] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {order.orderNumber} | {order.productName}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={order.status} />
              <p className="text-sm text-[#1C1C1C]/62">Placed: {order.placedDate}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex rounded-xl border border-[#1C1C1C]/10 bg-white px-5 py-3 text-sm font-semibold text-[#1C1C1C] hover:border-[#0B32A0] hover:text-[#0B32A0]"
            >
              Download invoice
            </Link>
            <Link
              href={`/build?product=${order.productSlug}`}
              className="inline-flex rounded-xl bg-[#FF4200] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,30,111,0.14)] transition hover:-translate-y-0.5 hover:bg-[#0B32A0]"
            >
              Reorder this product
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <PortalSectionCard title="Order details">
          <dl className="grid gap-5 sm:grid-cols-2">
            <DetailItem label="Product" value={order.productName} />
            <DetailItem label="Quantity" value={order.quantity.toString()} />
            <DetailItem label="Decoration type" value={order.decorationType} />
            <DetailItem label="Artwork status" value={order.artworkStatus} />
            <DetailItem label="Estimated ship" value={order.estimatedShipDate ?? "Already shipped"} />
            <DetailItem label="Tracking" value={order.trackingNumber ?? "Pending"} />
          </dl>
        </PortalSectionCard>

        <PortalSectionCard title="Status timeline">
          <PortalOrderTimeline order={order} />
        </PortalSectionCard>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] p-5">
      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/48">{label}</dt>
      <dd className="mt-2 text-base font-semibold text-[#1C1C1C]">{value}</dd>
    </div>
  );
}
