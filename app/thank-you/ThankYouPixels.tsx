"use client";

import { useEffect } from "react";

// ─── REPLACE THESE WITH YOUR REAL IDs ───────────────────────────────────────
const GOOGLE_ADS_ID = "AW-XXXXXXXXX";          // e.g. AW-123456789
const GOOGLE_ADS_CONVERSION_LABEL = "XXXXXXXX"; // e.g. AbCdEfGhI
const META_PIXEL_ID = "XXXXXXXXXXXXXXX";         // e.g. 1234567890123456
// ────────────────────────────────────────────────────────────────────────────

export default function ThankYouPixels() {
  useEffect(() => {
    // ── Google Ads conversion ───────────────────────────────────────────────
    if (GOOGLE_ADS_ID !== "AW-XXXXXXXXX") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtagFn = (window as any).gtag;
      if (typeof gtagFn === "function") {
        gtagFn("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
        });
      }
    }

    // ── Meta (Facebook) Pixel ──────────────────────────────────────────────
    if (META_PIXEL_ID !== "XXXXXXXXXXXXXXX") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbqFn = (window as any).fbq;
      if (typeof fbqFn === "function") {
        fbqFn("track", "Lead");
      }
    }

    // ── HubSpot form submission event ──────────────────────────────────────
    // HubSpot tracking code auto-fires on page view — no extra call needed.
    // If you want to fire a custom event:
    // window._hsq = window._hsq || [];
    // window._hsq.push(["trackEvent", { id: "thank-you-page" }]);

  }, []);

  return null; // no visible UI
}
