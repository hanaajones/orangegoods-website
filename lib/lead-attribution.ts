"use client";

export const attributionFieldNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

const LEAD_ATTRIBUTION_STORAGE_KEY = "og-lead-attribution";

type LeadAttributionFieldName = (typeof attributionFieldNames)[number];
type LeadAttributionRecord = Partial<Record<LeadAttributionFieldName, string>> & {
  firstLandingPage?: string;
  firstReferrer?: string;
};

function safeWindow() {
  return typeof window === "undefined" ? null : window;
}

function readStoredAttribution() {
  const currentWindow = safeWindow();
  if (!currentWindow) return {};

  try {
    const raw = currentWindow.localStorage.getItem(LEAD_ATTRIBUTION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as LeadAttributionRecord;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStoredAttribution(value: LeadAttributionRecord) {
  const currentWindow = safeWindow();
  if (!currentWindow) return;

  try {
    currentWindow.localStorage.setItem(LEAD_ATTRIBUTION_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Ignore storage failures so forms still work in private or restricted browsers.
  }
}

function currentPageValue() {
  const currentWindow = safeWindow();
  if (!currentWindow) return "";
  return `${currentWindow.location.pathname}${currentWindow.location.search}`;
}

export function captureLeadAttribution() {
  const currentWindow = safeWindow();
  if (!currentWindow) return {};

  const searchParams = new URLSearchParams(currentWindow.location.search);
  const stored = readStoredAttribution();
  const nextValue: LeadAttributionRecord = { ...stored };

  for (const fieldName of attributionFieldNames) {
    const value = searchParams.get(fieldName)?.trim();
    if (value) nextValue[fieldName] = value;
  }

  if (!nextValue.firstLandingPage) {
    nextValue.firstLandingPage = currentPageValue();
  }

  const referrer = currentWindow.document.referrer?.trim();
  if (referrer && !nextValue.firstReferrer) {
    nextValue.firstReferrer = referrer;
  }

  writeStoredAttribution(nextValue);
  return nextValue;
}

export function getLeadAttributionHiddenFields() {
  const currentWindow = safeWindow();
  if (!currentWindow) return {};

  const stored = captureLeadAttribution();
  const hiddenFields: Record<string, string> = {};

  for (const fieldName of attributionFieldNames) {
    const value = stored[fieldName];
    if (value) hiddenFields[fieldName] = value;
  }

  if (stored.firstLandingPage) {
    hiddenFields.firstLandingPage = stored.firstLandingPage;
  }

  if (stored.firstReferrer) {
    hiddenFields.firstReferrer = stored.firstReferrer;
  }

  hiddenFields.submissionPagePath = currentPageValue();

  return hiddenFields;
}
