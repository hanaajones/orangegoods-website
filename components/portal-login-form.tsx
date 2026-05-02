"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function PortalLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        router.push("/portal/dashboard");
      }}
    >
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#1C1C1C]">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-[#1C1C1C]/10 bg-[#F3EFE7] px-4 py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#0B32A0] focus:bg-white"
          placeholder="alex@brand.com"
          required
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#1C1C1C]">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border border-[#1C1C1C]/10 bg-[#F3EFE7] px-4 py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#0B32A0] focus:bg-white"
          placeholder="Enter your password"
          required
        />
      </label>
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-xl bg-[#FF4200] px-5 py-3 text-sm font-semibold uppercase text-white shadow-[0_18px_45px_rgba(8,30,111,0.14)] transition hover:-translate-y-0.5 hover:bg-[#0B32A0]"
      >
        SIGN IN
      </button>
    </form>
  );
}
