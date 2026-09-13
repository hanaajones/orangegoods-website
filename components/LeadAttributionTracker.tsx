"use client";

import { useEffect } from "react";
import { captureLeadAttribution } from "@/lib/lead-attribution";

export function LeadAttributionTracker() {
  useEffect(() => {
    captureLeadAttribution();
  }, []);

  return null;
}
