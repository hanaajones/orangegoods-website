import Link from "next/link";

import { StatusBadge } from "@/components/portal-ui";
import { portalOrders } from "@/data/portal";

export default function PortalOrdersPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7F00]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Orders
        </p>
        <h1
          className="text-4xl font-extrabold uppercase tracking-tight text-[#FF4200] sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Past and active orders.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#1C1C1C]/66">
          Review production status, delivery history, and reorder details for every Orange Goods custom goods program.
        </p>
      </section>

      <section className="rounded-[2rem] border border-[#1C1C1C]/10 bg-white p-3 shadow-[0_18px_45px_rgba(8,30,111,0.12)] sm:p-4">
        <div className="hidden grid-cols-[1.15fr_1.1fr_0.8fr_0.9fr_0.95fr_0.8fr] gap-4 rounded-[1.25rem] bg-[#F3EFE7] px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/52 lg:grid">
          <span>Order</span>
          <span>Product</span>
          <span>Quantity</span>
          <span>Date</span>
          <span>Status</span>
          <span />
        </div>
        <div className="space-y-3 pt-0 sm:pt-3">
          {portalOrders.map((order) => (
            <article
              key={order.id}
              className="grid gap-4 rounded-[1.5rem] border border-[#1C1C1C]/10 bg-white px-5 py-5 lg:grid-cols-[1.15fr_1.1fr_0.8fr_0.9fr_0.95fr_0.8fr] lg:items-center"
            >
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/45 lg:hidden"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Order
                </p>
                <p className="text-base font-bold tracking-tight text-[#1C1C1C]">{order.orderNumber}</p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/45 lg:hidden"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Product
                </p>
                <p className="text-sm font-medium text-[#1C1C1C]">{order.productName}</p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/45 lg:hidden"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Quantity
                </p>
                <p className="text-sm text-[#1C1C1C]/70">{order.quantity}</p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/45 lg:hidden"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Date
                </p>
                <p className="text-sm text-[#1C1C1C]/70">{order.placedDate}</p>
              </div>
              <div className="space-y-2">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/45 lg:hidden"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Status
                </p>
                <StatusBadge status={order.status} />
                <p className="text-sm text-[#1C1C1C]/62">
                  {order.status === "Delivered" ? `Delivered: ${order.deliveredDate}` : `Est. ship: ${order.estimatedShipDate}`}
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href={`/portal/orders/${order.id}`}
                  className="inline-flex rounded-full border border-[#1C1C1C]/10 bg-[#F3EFE7] px-4 py-2 text-sm font-semibold text-[#1C1C1C] hover:border-[#0B32A0] hover:text-[#0B32A0]"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
