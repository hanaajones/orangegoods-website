import Image from "next/image";
import Link from "next/link";

import { PortalLoginForm } from "@/components/portal-login-form";

export default function PortalLoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-8">
      <section className="w-full max-w-md rounded-[2rem] border border-[#1C1C1C]/10 bg-white p-8 shadow-[0_18px_45px_rgba(8,30,111,0.14)] sm:p-10">
        <Link href="/" className="inline-flex">
          <Image
            src="/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"
            alt="Orange Goods"
            width={220}
            height={58}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <div className="mt-8 space-y-3">
          <h1
            className="text-5xl font-extrabold uppercase tracking-tight text-[#FF4200]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WELCOME BACK
          </h1>
          <p className="text-base leading-7 text-[#1C1C1C]/68">Sign in to your Orange Goods account.</p>
        </div>
        <div className="mt-8">
          <PortalLoginForm />
        </div>
        <div className="mt-6 text-sm">
          <Link href="/contact" className="font-semibold text-[#0B32A0] hover:text-[#FF4200]">
            No account? Start a project →
          </Link>
        </div>
      </section>
    </div>
  );
}
