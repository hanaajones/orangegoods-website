"use client";

import { useEffect, useState } from "react";
import { getLeadAttributionHiddenFields } from "@/lib/lead-attribution";

export function useLeadAttributionHiddenFields(enabled = true) {
  const [hiddenFields, setHiddenFields] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!enabled) {
      setHiddenFields({});
      return;
    }

    setHiddenFields(getLeadAttributionHiddenFields());
  }, [enabled]);

  return hiddenFields;
}
