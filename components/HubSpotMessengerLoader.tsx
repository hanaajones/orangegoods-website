"use client";

import Script from "next/script";

const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "";

export function HubSpotMessengerLoader() {
  if (!portalId) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`https://js.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
