import Link from "next/link";

import { PortalOrderCard, PortalSectionCard, PortalSummaryCard } from "@/components/portal-ui";
import { portalOrders } from "@/data/portal";

const recentOrders = portalOrders.slice(0, 3);

export default function PortalDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7F00]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Customer Portal
        </p>
        <h1
          className="text-4xl font-extrabold uppercase tracking-tight text-[#FF4200] sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Good to see you, Alex.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#1C1C1C]/66">
          Here&apos;s the current snapshot of your Orange Goods account, recent custom goods orders, and the next steps your team can take.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PortalSummaryCard label="Active orders" value="2" />
        <PortalSummaryCard label="Last order" value="Embroidered Dad Hat x 250" />
        <PortalSummaryCard label="Next milestone" value="In Production" />
        <PortalSummaryCard label="Ready to reorder" value="1 product" />
      </section>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.4fr)_minmax(19rem,0.8fr)]">
        <PortalSectionCard
          title="Recent orders"
          action={
            <Link href="/portal/orders" className="text-sm font-semibold text-[#0B32A0] hover:text-[#1C1C1C]">
              View all orders
            </Link>
          }
        >
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <PortalOrderCard key={order.id} order={order} />
            ))}
          </div>
        </PortalSectionCard>

        <PortalSectionCard title="Quick actions">
          <div className="space-y-4">
            <Link
              href="/build"
              className="flex rounded-[1.5rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] px-5 py-4 text-sm font-semibold text-[#1C1C1C] hover:border-[#0B32A0] hover:text-[#0B32A0]"
            >
              Start a new order
            </Link>
            <Link
              href="/build"
              className="flex rounded-[1.5rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] px-5 py-4 text-sm font-semibold text-[#1C1C1C] hover:border-[#0B32A0] hover:text-[#0B32A0]"
            >
              Request reorder
            </Link>
            <a
              href="mailto:hello@orangegoods.co"
              className="flex rounded-[1.5rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] px-5 py-4 text-sm font-semibold text-[#1C1C1C] hover:border-[#0B32A0] hover:text-[#0B32A0]"
            >
              Contact us
            </a>
          </div>
        </PortalSectionCard>
      </div>
    </div>
  );
}
