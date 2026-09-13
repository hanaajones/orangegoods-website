import { promises as fs } from "fs";
import crypto from "node:crypto";
import path from "path";
import { NextResponse } from "next/server";

type ContactPayload = Record<string, unknown>;
type DeliveryName =
  | "stored"
  | "artworkStorage"
  | "hubspot"
  | "jcore"
  | "webhook"
  | "internalEmail"
  | "clientEmail"
  | "slack";
type DeliveryStatus = "delivered" | "duplicate" | "skipped" | "failed";
type DeliveryResult = {
  at: string;
  detail?: string;
  status: DeliveryStatus;
};
type RequestMeta = {
  contentType: string;
  forwardedFor: string;
  hubspotutk: string;
  origin: string;
  realIp: string;
  referer: string;
  userAgent: string;
};
type DeliveryAttemptResult = {
  detail?: string;
  status: Exclude<DeliveryStatus, "failed">;
};
type JCoreBridgeResult = {
  delivered: boolean;
  duplicate: boolean;
};
type StoredUpload = {
  driveFileId?: string;
  driveFileUrl?: string;
  fieldName: string;
  driveFolderUrl?: string;
  originalName: string;
  storedName: string;
  relativePath: string;
  mimeType: string;
  size: number;
};
type SubmissionRecord = {
  deliveries: Partial<Record<DeliveryName, DeliveryResult>>;
  id: string;
  meta: RequestMeta;
  payload: Record<string, string>;
  submittedAt: string;
  uploads: StoredUpload[];
};
type HubSpotContactRecord = {
  id: string;
  properties?: Record<string, string | null | undefined>;
};

const CONTACT_STORAGE_ROOT = process.env.VERCEL
  ? path.join("/tmp", "orangegoods-contact")
  : path.join(process.cwd(), "data");
const CONTACT_STORAGE_LABEL_ROOT = process.env.VERCEL
  ? path.join("tmp", "orangegoods-contact")
  : "data";
const CONTACT_UPLOADS_DIR = path.join(CONTACT_STORAGE_ROOT, "contact-uploads");
const CONTACT_SUBMISSIONS_DIR = path.join(CONTACT_STORAGE_ROOT, "contact-submissions");
const CONTACT_SUBMISSIONS_LOG = path.join(CONTACT_STORAGE_ROOT, "contact-submissions.jsonl");
const HUBSPOT_PRIVATE_APP_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN ?? process.env.HUBSPOT_TOKEN ?? "";
const HUBSPOT_API_BASE = "https://api.hubapi.com";
const JCORE_TYPEFORM_BRIDGE_URL = process.env.JCORE_TYPEFORM_BRIDGE_URL ?? "";
const JCORE_TYPEFORM_BRIDGE_SECRET = process.env.JCORE_TYPEFORM_BRIDGE_SECRET ?? "";
const JCORE_TYPEFORM_BRIDGE_TIMEOUT_MS = Number(process.env.JCORE_TYPEFORM_BRIDGE_TIMEOUT_MS ?? 15000);
const JCORE_ARTWORK_BRIDGE_URL = process.env.JCORE_ARTWORK_BRIDGE_URL
  ?? (JCORE_TYPEFORM_BRIDGE_URL
    ? JCORE_TYPEFORM_BRIDGE_URL.replace(/\/api\/typeform-webhook$/, "/api/website-artwork-upload")
    : "");
const JCORE_ARTWORK_BRIDGE_SECRET = process.env.JCORE_ARTWORK_BRIDGE_SECRET ?? JCORE_TYPEFORM_BRIDGE_SECRET;
const JCORE_ARTWORK_BRIDGE_TIMEOUT_MS = Number(process.env.JCORE_ARTWORK_BRIDGE_TIMEOUT_MS ?? 20000);
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN ?? "";
const SLACK_POST_MESSAGE_URL = "https://slack.com/api/chat.postMessage";
const OG_HAT_BUILDER_NOTIFY_SLACK_CHANNEL = process.env.OG_HAT_BUILDER_NOTIFY_SLACK_CHANNEL ?? "C0AV6PMMFD3";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@orangegoods.co";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "";
const CONTACT_CONFIRMATION_SUBJECT = process.env.CONTACT_CONFIRMATION_SUBJECT ?? "We got your form";
const CONTACT_DELIVERY_TIMEOUT_MS = Number(process.env.CONTACT_DELIVERY_TIMEOUT_MS ?? 4500);
const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;
const ALLOWED_UPLOAD_EXTENSIONS = new Set([".ai", ".eps", ".pdf", ".svg", ".zip", ".png", ".jpg", ".jpeg"]);
const INTERNAL_ONLY_PAYLOAD_KEYS = new Set([
  "artworkFiles",
  "artworkUploadCount",
  "fbclid",
  "firstLandingPage",
  "firstReferrer",
  "gclid",
  "intent",
  "pageName",
  "pagePath",
  "source",
  "submissionPagePath",
  "utm_campaign",
  "utm_content",
  "utm_medium",
  "utm_source",
  "utm_term",
]);

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePayloadValue(value: unknown) {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  if (value && typeof value === "object") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "";
    }
  }

  return "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function prettyLabel(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function truncate(value: string, maxLength: number) {
  const compact = value.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) return compact;
  return `${compact.slice(0, Math.max(0, maxLength - 1)).trim()}...`;
}

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes < 1024) return `${bytes} bytes`;
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(mb >= 10 ? 0 : 1)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function sanitizeFilename(filename: string) {
  return filename
    .replaceAll("\\", "/")
    .split("/")
    .pop()
    ?.replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    ?? "upload";
}

function getFileExtension(filename: string) {
  return path.extname(filename).toLowerCase();
}

function readCookieValue(cookieHeader: string, name: string) {
  const prefix = `${name}=`;
  const part = cookieHeader
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(prefix));

  return part ? decodeURIComponent(part.slice(prefix.length)) : "";
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstname: parts[0] ?? "",
    lastname: parts.slice(1).join(" "),
  };
}

function hubspotHeaders() {
  if (!HUBSPOT_PRIVATE_APP_TOKEN) {
    throw new Error("HubSpot token is not configured.");
  }

  return {
    Authorization: `Bearer ${HUBSPOT_PRIVATE_APP_TOKEN}`,
    "Content-Type": "application/json",
  } satisfies HeadersInit;
}

async function fetchWithTimeout(input: string, init: RequestInit, timeoutMs = CONTACT_DELIVERY_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(input, {
      ...init,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function isHatBuilderSubmission(payload: Record<string, string>) {
  return payload.source === "og-crafted-hat-builder";
}

function getAnswerEntries(payload: Record<string, string>) {
  return Object.entries(payload).filter(([key, value]) => value && !INTERNAL_ONLY_PAYLOAD_KEYS.has(key));
}

function parseHostname(value: string) {
  try {
    return new URL(value).hostname;
  } catch {
    return "";
  }
}

function inferAcquisitionChannel(payload: Record<string, string>, requestMeta: RequestMeta) {
  const utmSource = (payload.utm_source ?? "").toLowerCase();
  const utmMedium = (payload.utm_medium ?? "").toLowerCase();
  const referrer = payload.firstReferrer || requestMeta.referer;
  const referrerHost = parseHostname(referrer).toLowerCase();

  if (payload.gclid || utmSource === "google" && /(cpc|ppc|paid|sem)/.test(utmMedium)) {
    return "Google Ads";
  }

  if (
    payload.fbclid
    || ["facebook", "instagram", "meta"].includes(utmSource)
    || /(paid_social|paidsocial|social_paid)/.test(utmMedium)
  ) {
    return "Meta / paid social";
  }

  if (utmSource || utmMedium) {
    return [payload.utm_source, payload.utm_medium].filter(Boolean).join(" / ");
  }

  if (referrerHost.includes("google.")) return "Google organic";
  if (referrerHost.includes("bing.")) return "Bing organic";
  if (referrerHost.includes("linkedin.")) return "LinkedIn referral";
  if (referrerHost && !referrerHost.includes("orangegoods.co")) return `Referral (${referrerHost})`;

  return "Direct / unknown";
}

function buildSubmissionOverviewEntries(
  payload: Record<string, string>,
  uploads: StoredUpload[],
  requestMeta: RequestMeta,
) {
  const attributionDetail = [
    payload.utm_source ? `source=${payload.utm_source}` : "",
    payload.utm_medium ? `medium=${payload.utm_medium}` : "",
    payload.utm_campaign ? `campaign=${payload.utm_campaign}` : "",
    payload.gclid ? "gclid present" : "",
    payload.fbclid ? "fbclid present" : "",
  ].filter(Boolean).join(" · ");

  return [
    ["Form used", payload.pageName || prettyLabel(payload.source || "website form")],
    ["Source tag", payload.source || "website-contact"],
    ["Form path", payload.pagePath || payload.submissionPagePath || requestMeta.referer || "/contact"],
    ["Intent", payload.intent || "contact"],
    ["Product", payload.product || ""],
    ["Acquisition", inferAcquisitionChannel(payload, requestMeta)],
    ["Attribution detail", attributionDetail],
    ["First landing page", payload.firstLandingPage || ""],
    ["First referrer", payload.firstReferrer || ""],
    ["Artwork folder", payload.artworkFolderUrl || ""],
    ["Uploaded files", uploads.length ? uploads.map((upload) => upload.originalName).join(", ") : "None"],
  ].filter(([, value]) => value);
}

async function syncUploadsToArtworkStorage(
  payload: Record<string, string>,
  uploads: StoredUpload[],
  submissionId: string,
  submittedAt: string,
): Promise<DeliveryAttemptResult> {
  if (!uploads.length) {
    return { status: "skipped", detail: "No artwork uploads were included." };
  }

  if (!JCORE_ARTWORK_BRIDGE_URL) {
    return { status: "skipped", detail: "J-Core artwork bridge URL is not configured." };
  }

  const formData = new FormData();
  formData.set("submissionId", submissionId);
  formData.set("submittedAt", submittedAt);
  formData.set("company", payload.company ?? "");
  formData.set("name", payload.name ?? "");
  formData.set("email", payload.email ?? "");
  formData.set("project", payload.project ?? payload.product ?? "");
  formData.set("source", payload.source ?? "website-contact");

  for (const upload of uploads) {
    const targetPath = path.join(CONTACT_UPLOADS_DIR, submissionId, upload.storedName);
    const buffer = await fs.readFile(targetPath);
    formData.append("artwork", new Blob([buffer], { type: upload.mimeType }), upload.originalName);
  }

  const response = await fetchWithTimeout(JCORE_ARTWORK_BRIDGE_URL, {
    method: "POST",
    headers: {
      ...(JCORE_ARTWORK_BRIDGE_SECRET ? { "x-artwork-upload-secret": JCORE_ARTWORK_BRIDGE_SECRET } : {}),
    },
    body: formData,
  }, JCORE_ARTWORK_BRIDGE_TIMEOUT_MS);

  const data = (await response.json().catch(() => ({}))) as {
    files?: Array<{ fileId?: string; fileName?: string; webViewLink?: string }>;
    folderUrl?: string;
    ok?: boolean;
  };

  if (!response.ok || !data.ok || !data.folderUrl) {
    throw new Error(`Artwork storage bridge failed: ${response.status} ${JSON.stringify(data)}`);
  }

  payload.artworkFolderUrl = data.folderUrl;
  if (Array.isArray(data.files) && data.files.length) {
    payload.artworkFileLinks = data.files
      .map((file) => [file.fileName, file.webViewLink].filter(Boolean).join(": "))
      .join("\n");

    for (const upload of uploads) {
      const matched = data.files.find((file) => file.fileName === upload.originalName);
      if (!matched) continue;
      upload.driveFileId = matched.fileId;
      upload.driveFileUrl = matched.webViewLink;
      upload.driveFolderUrl = data.folderUrl;
    }
  }

  return { status: "delivered", detail: `Stored artwork in Drive folder ${data.folderUrl}` };
}

function buildRequestMeta(request: Request): RequestMeta {
  const cookieHeader = request.headers.get("cookie") ?? "";

  return {
    contentType: request.headers.get("content-type") ?? "",
    forwardedFor: request.headers.get("x-forwarded-for") ?? "",
    hubspotutk: readCookieValue(cookieHeader, "hubspotutk"),
    origin: request.headers.get("origin") ?? "",
    realIp: request.headers.get("x-real-ip") ?? "",
    referer: request.headers.get("referer") ?? "",
    userAgent: request.headers.get("user-agent") ?? "",
  };
}

async function parseRequestPayload(request: Request, submissionId: string) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const payloadEntries: Array<[string, string]> = [];
    const uploads: StoredUpload[] = [];
    const uploadDir = path.join(CONTACT_UPLOADS_DIR, submissionId);

    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        const normalized = asString(value);
        if (normalized) payloadEntries.push([key, normalized]);
        continue;
      }

      if (!(value instanceof File) || value.size === 0 || key !== "artwork") {
        continue;
      }

      const originalName = sanitizeFilename(value.name || "artwork-upload");
      const extension = getFileExtension(originalName);

      if (!ALLOWED_UPLOAD_EXTENSIONS.has(extension)) {
        throw new Error(`Unsupported upload type: ${extension || "unknown"}`);
      }

      if (value.size > MAX_UPLOAD_BYTES) {
        throw new Error(`Upload too large: ${originalName}`);
      }

      await fs.mkdir(uploadDir, { recursive: true });

      const storedName = `${uploads.length + 1}-${Date.now()}-${originalName}`;
      const relativePath = path.join(CONTACT_STORAGE_LABEL_ROOT, "contact-uploads", submissionId, storedName);
      const targetPath = path.join(uploadDir, storedName);
      const buffer = Buffer.from(await value.arrayBuffer());
      await fs.writeFile(targetPath, buffer);

      uploads.push({
        fieldName: key,
        originalName,
        storedName,
        relativePath,
        mimeType: value.type || "application/octet-stream",
        size: value.size,
      });
    }

    const payload = Object.fromEntries(payloadEntries) as Record<string, string>;

    if (uploads.length) {
      payload.artworkFiles = uploads.map((file) => file.originalName).join(", ");
      payload.artworkUploadCount = String(uploads.length);
    }

    return { payload, uploads };
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body || typeof body !== "object") {
    return { payload: null, uploads: [] };
  }

  const payload = Object.fromEntries(
    Object.entries(body).flatMap(([key, value]) => {
      const normalized = normalizePayloadValue(value);
      return normalized ? [[key, normalized]] : [];
    }),
  ) as Record<string, string>;

  return { payload, uploads: [] };
}

function buildSubmissionRows(payload: Record<string, string>, uploads: StoredUpload[]) {
  const payloadRows = getAnswerEntries(payload)
    .map(([key, value]) => {
      const formattedValue = escapeHtml(value).replaceAll("\n", "<br />");
      return `<tr><td style="padding:8px 12px;border:1px solid #e7e1d5;font-weight:700;vertical-align:top;">${escapeHtml(prettyLabel(key))}</td><td style="padding:8px 12px;border:1px solid #e7e1d5;">${formattedValue}</td></tr>`;
    });

  const uploadRows = uploads.map((upload) => {
    const detail = `${upload.originalName} (${formatBytes(upload.size)})`;
    const storageLine = upload.driveFileUrl
      ? `<a href="${escapeHtml(upload.driveFileUrl)}" style="color:#0b32a0;text-decoration:underline;">Open file</a>${upload.driveFolderUrl ? ` · <a href="${escapeHtml(upload.driveFolderUrl)}" style="color:#0b32a0;text-decoration:underline;">Open folder</a>` : ""}`
      : `<span style="color:#666;">${escapeHtml(upload.relativePath)}</span>`;
    return `<tr><td style="padding:8px 12px;border:1px solid #e7e1d5;font-weight:700;vertical-align:top;">Uploaded File</td><td style="padding:8px 12px;border:1px solid #e7e1d5;">${escapeHtml(detail)}<br />${storageLine}</td></tr>`;
  });

  return [...payloadRows, ...uploadRows].join("");
}

function buildSubmissionSummary(payload: Record<string, string>, uploads: StoredUpload[]) {
  const lines = getAnswerEntries(payload)
    .map(([key, value]) => `${prettyLabel(key)}: ${value}`);

  if (uploads.length) {
    lines.push(`Uploaded files: ${uploads.map((upload) => upload.originalName).join(", ")}`);
  }

  if (payload.artworkFolderUrl) {
    lines.push(`Artwork folder: ${payload.artworkFolderUrl}`);
  }

  return lines.join("\n");
}

function buildJCoreBridgeToken(payload: Record<string, string>) {
  const stablePayload = Object.keys(payload)
    .sort()
    .map((key) => `${key}:${payload[key]}`)
    .join("\n");

  return crypto
    .createHash("sha256")
    .update(stablePayload)
    .digest("hex")
    .slice(0, 32);
}

function buildJCoreTypeformPayload(payload: Record<string, string>) {
  const submittedAt = new Date().toISOString();
  const formId = payload.source === "og-crafted-hat-builder"
    ? "og-crafted-hat-builder-website"
    : "og-website-contact";
  const title = payload.source === "og-crafted-hat-builder"
    ? "OG Crafted Hat Builder"
    : "Orange Goods Website Contact";

  const answers = Object.entries(payload)
    .filter(([, value]) => value)
    .map(([key, value], index) => {
      const fieldId = `website-${index}-${key}`;

      if (key === "email") {
        return {
          email: value,
          field: { id: fieldId, ref: key, type: "email" },
          type: "email",
        };
      }

      if (key === "needBy") {
        return {
          date: value,
          field: { id: fieldId, ref: key, type: "date" },
          type: "date",
        };
      }

      const answerType = value.includes("\n") || value.length > 140 ? "long_text" : "text";
      return {
        field: { id: fieldId, ref: key, type: answerType },
        text: value,
        type: answerType,
      };
    });

  return {
    event_id: `website-contact-${Date.now()}`,
    event_type: "form_response",
    form_response: {
      answers,
      definition: {
        fields: answers.map((answer) => ({
          id: answer.field.id,
          ref: answer.field.ref,
          title: prettyLabel(answer.field.ref),
          type: answer.field.type,
        })),
        id: formId,
        title,
      },
      form_id: formId,
      hidden: {
        intent: payload.intent ?? "",
        pageName: payload.pageName ?? "",
        pagePath: payload.pagePath ?? payload.submissionPagePath ?? "",
        firstLandingPage: payload.firstLandingPage ?? "",
        firstReferrer: payload.firstReferrer ?? "",
        utm_source: payload.utm_source ?? "",
        utm_medium: payload.utm_medium ?? "",
        utm_campaign: payload.utm_campaign ?? "",
        utm_content: payload.utm_content ?? "",
        utm_term: payload.utm_term ?? "",
        gclid: payload.gclid ?? "",
        fbclid: payload.fbclid ?? "",
        product: payload.product ?? "",
        source: payload.source ?? "website-contact",
      },
      submitted_at: submittedAt,
      token: buildJCoreBridgeToken(payload),
    },
  };
}

function buildTypeformSignature(rawBody: string) {
  if (!JCORE_TYPEFORM_BRIDGE_SECRET) return "";

  const digest = crypto
    .createHmac("sha256", JCORE_TYPEFORM_BRIDGE_SECRET)
    .update(rawBody)
    .digest("base64");

  return `sha256=${digest}`;
}

async function sendResendEmail(params: {
  cc?: string[];
  html: string;
  replyTo?: string;
  subject: string;
  text: string;
  to: string[];
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !CONTACT_FROM_EMAIL) {
    return { status: "skipped", detail: "Resend is not configured." } satisfies DeliveryAttemptResult;
  }

  const response = await fetchWithTimeout("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cc: params.cc,
      from: CONTACT_FROM_EMAIL,
      html: params.html,
      reply_to: params.replyTo,
      subject: params.subject,
      text: params.text,
      to: params.to,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend delivery failed: ${response.status} ${errorText}`);
  }

  return { status: "delivered" } satisfies DeliveryAttemptResult;
}

async function deliverInternalEmail(
  payload: Record<string, string>,
  uploads: StoredUpload[],
  requestMeta: RequestMeta,
): Promise<DeliveryAttemptResult> {
  const replyTo = payload.email || undefined;
  const subjectBase = payload.source === "og-crafted-hat-builder"
    ? "New OG Crafted hat build submission"
    : "New Orange Goods website form";
  const subject = payload.product ? `${subjectBase} · ${payload.product}` : subjectBase;
  const overviewEntries = buildSubmissionOverviewEntries(payload, uploads, requestMeta);
  const overviewRows = overviewEntries
    .map(([label, value]) => {
      const formattedValue = escapeHtml(value).replaceAll("\n", "<br />");
      return `<tr><td style="padding:8px 12px;border:1px solid #d8d0c2;font-weight:700;vertical-align:top;background:#f7f2ea;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #d8d0c2;">${formattedValue}</td></tr>`;
    })
    .join("");
  const overviewText = overviewEntries.map(([label, value]) => `${label}: ${value}`).join("\n");
  const rows = buildSubmissionRows(payload, uploads);
  const summary = buildSubmissionSummary(payload, uploads);

  return sendResendEmail({
    cc: ["easton@orangegoods.co"],
    html: `
      <div style="font-family:Arial,sans-serif;background:#f7f2ea;padding:24px;color:#1c1c1c;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e7e1d5;padding:24px;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ff4200;">Orange Goods website</p>
          <h1 style="margin:0 0 10px;font-size:28px;line-height:1.1;color:#0b32a0;">We got a form.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#1c1c1c;">A new website form came in. Overview first, then the submitted answers.</p>
          <h2 style="margin:0 0 10px;font-size:15px;letter-spacing:0.16em;text-transform:uppercase;color:#7a6a55;">Submission overview</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">${overviewRows}</table>
          <h2 style="margin:0 0 10px;font-size:15px;letter-spacing:0.16em;text-transform:uppercase;color:#7a6a55;">Submitted answers</h2>
          <table style="width:100%;border-collapse:collapse;">${rows}</table>
        </div>
      </div>
    `,
    replyTo,
    subject,
    text: `We got a form.\n\nSubmission overview:\n${overviewText}\n\nSubmitted answers:\n${summary}`,
    to: [CONTACT_TO_EMAIL],
  });
}

async function deliverClientConfirmation(payload: Record<string, string>): Promise<DeliveryAttemptResult> {
  if (!payload.email) {
    return { status: "skipped", detail: "No client email provided." } satisfies DeliveryAttemptResult;
  }

  const firstName = payload.name ? splitName(payload.name).firstname : "";
  const greetingName = firstName || "there";
  const projectLabel = payload.product || payload.project || "your project";
  const subject = payload.source === "og-crafted-hat-builder"
    ? "We got your hat build request"
    : CONTACT_CONFIRMATION_SUBJECT;

  return sendResendEmail({
    html: `
      <div style="font-family:Arial,sans-serif;background:#f7f2ea;padding:24px;color:#1c1c1c;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e7e1d5;padding:32px;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ff4200;">Orange Goods</p>
          <h1 style="margin:0 0 18px;font-size:30px;line-height:1.1;color:#0b32a0;">We got your form.</h1>
          <p style="margin:0 0 14px;font-size:16px;line-height:1.7;">Hi ${escapeHtml(greetingName)},</p>
          <p style="margin:0 0 14px;font-size:16px;line-height:1.7;">Thanks for reaching out about ${escapeHtml(projectLabel)}. We got your form and someone from Orange Goods will follow up within one business day.</p>
          <p style="margin:0 0 14px;font-size:16px;line-height:1.7;">If you want to add references, artwork, or timing details in the meantime, just reply to this email.</p>
          <p style="margin:24px 0 0;font-size:14px;line-height:1.7;color:#555;">Orange Goods<br />hello@orangegoods.co</p>
        </div>
      </div>
    `,
    replyTo: CONTACT_TO_EMAIL,
    subject,
    text: `Hi ${greetingName},\n\nThanks for reaching out about ${projectLabel}. We got your form and someone from Orange Goods will follow up within one business day.\n\nIf you want to add references, artwork, or timing details in the meantime, just reply to this email.\n\nOrange Goods\nhello@orangegoods.co`,
    to: [payload.email],
  });
}

function buildHubSpotContactProperties(payload: Record<string, string>) {
  const { firstname, lastname } = splitName(payload.name ?? "");

  return Object.fromEntries(
    Object.entries({
      firstname,
      lastname,
      email: payload.email ?? "",
      company: payload.company ?? "",
      phone: payload.phone ?? "",
    }).filter(([, value]) => value),
  );
}

async function searchHubSpotContactByEmail(email: string) {
  const response = await fetchWithTimeout(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts/search`, {
    method: "POST",
    headers: hubspotHeaders(),
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      properties: ["email", "firstname", "lastname", "company", "phone"],
      limit: 1,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HubSpot contact search failed: ${response.status} ${errorText}`);
  }

  const body = (await response.json()) as { results?: HubSpotContactRecord[] };
  return body.results?.[0] ?? null;
}

async function deliverViaHubSpot(
  payload: Record<string, string>,
  uploads: StoredUpload[],
  requestMeta: RequestMeta,
): Promise<DeliveryAttemptResult> {
  void uploads;
  void requestMeta;

  if (!payload.email) {
    return { status: "skipped", detail: "No email available for HubSpot contact sync." } satisfies DeliveryAttemptResult;
  }

  if (!HUBSPOT_PRIVATE_APP_TOKEN) {
    return { status: "skipped", detail: "HubSpot token is not configured." } satisfies DeliveryAttemptResult;
  }

  const properties = buildHubSpotContactProperties(payload);
  if (!Object.keys(properties).length) {
    return { status: "skipped", detail: "No HubSpot contact properties were available." } satisfies DeliveryAttemptResult;
  }

  const existing = await searchHubSpotContactByEmail(payload.email);

  if (existing?.id) {
    const response = await fetchWithTimeout(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts/${existing.id}`, {
      method: "PATCH",
      headers: hubspotHeaders(),
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HubSpot contact update failed: ${response.status} ${errorText}`);
    }

    return { status: "delivered", detail: `Updated HubSpot contact ${existing.id}.` } satisfies DeliveryAttemptResult;
  }

  const response = await fetchWithTimeout(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts`, {
    method: "POST",
    headers: hubspotHeaders(),
    body: JSON.stringify({ properties }),
  });

  if (response.status === 409) {
    const conflictContact = await searchHubSpotContactByEmail(payload.email);
    if (conflictContact?.id) {
      return { status: "duplicate", detail: `HubSpot contact ${conflictContact.id} already exists.` } satisfies DeliveryAttemptResult;
    }
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HubSpot contact creation failed: ${response.status} ${errorText}`);
  }

  const created = (await response.json()) as HubSpotContactRecord;
  return { status: "delivered", detail: `Created HubSpot contact ${created.id}.` } satisfies DeliveryAttemptResult;
}

async function deliverViaWebhook(payload: Record<string, string>): Promise<DeliveryAttemptResult> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return { status: "skipped", detail: "CONTACT_WEBHOOK_URL is not configured." } satisfies DeliveryAttemptResult;
  }

  const response = await fetchWithTimeout(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Webhook delivery failed: ${response.status} ${errorText}`);
  }

  return { status: "delivered" } satisfies DeliveryAttemptResult;
}

async function deliverViaJCore(
  payload: Record<string, string>,
  requestMeta: RequestMeta,
): Promise<DeliveryAttemptResult> {
  if (!JCORE_TYPEFORM_BRIDGE_URL) {
    return { status: "skipped", detail: "J-Core bridge URL is not configured." } satisfies DeliveryAttemptResult;
  }

  if (!payload.email) {
    return { status: "skipped", detail: "No email available for J-Core intake." } satisfies DeliveryAttemptResult;
  }

  const body = JSON.stringify(buildJCoreTypeformPayload(payload));
  const signature = buildTypeformSignature(body);
  const response = await fetchWithTimeout(JCORE_TYPEFORM_BRIDGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(signature ? { "typeform-signature": signature } : {}),
      ...(requestMeta.forwardedFor ? { "x-forwarded-for": requestMeta.forwardedFor } : {}),
      ...(requestMeta.realIp ? { "x-real-ip": requestMeta.realIp } : {}),
      ...(requestMeta.userAgent ? { "user-agent": requestMeta.userAgent } : {}),
    },
    body,
  }, JCORE_TYPEFORM_BRIDGE_TIMEOUT_MS);

  const data = (await response.json().catch(() => ({}))) as { duplicate?: boolean; ok?: boolean };
  if (!response.ok || !data.ok) {
    throw new Error(`J-Core bridge failed: ${response.status} ${JSON.stringify(data)}`);
  }

  const result: JCoreBridgeResult = {
    delivered: true,
    duplicate: Boolean(data.duplicate),
  };

  return result.duplicate
    ? { status: "duplicate", detail: "Submission already existed in J-Core." }
    : { status: "delivered" };
}

function buildHatBuilderSlackMessage(payload: Record<string, string>) {
  const lines = ["*New OG Crafted hat build*"];

  const contactLine = [payload.name, payload.company].filter(Boolean).join(" - ");
  if (contactLine) lines.push(contactLine);
  if (payload.email) lines.push(`*Email:* ${payload.email}`);
  if (payload.phone) lines.push(`*Phone:* ${payload.phone}`);
  if (payload.needBy) lines.push(`*Requested in-hand:* ${payload.needBy}`);
  if (payload.estimatedTotal) lines.push(`*Estimated total:* ${payload.estimatedTotal}`);

  const summary = payload.projectSummary
    ? payload.projectSummary
    : [
      payload.product ? `Product: ${payload.product}` : "",
      payload.program ? `Program: ${payload.program}` : "",
      payload.style
        ? `Style: ${payload.style}${payload.styleName ? ` - ${payload.styleName}` : ""}`
        : "",
      payload.quantity ? `Quantity: ${payload.quantity}` : "",
    ].filter(Boolean).join("\n");

  if (summary) {
    lines.push("");
    lines.push("*Build summary:*");
    lines.push(summary);
  }

  if (payload.notes) {
    lines.push("");
    lines.push(`*Notes:* ${truncate(payload.notes, 320)}`);
  }

  return truncate(lines.join("\n"), 2800);
}

async function deliverHatBuilderSlackNotification(
  payload: Record<string, string>,
): Promise<DeliveryAttemptResult> {
  if (!SLACK_BOT_TOKEN) {
    return { status: "skipped", detail: "Slack bot token is not configured." } satisfies DeliveryAttemptResult;
  }

  if (!isHatBuilderSubmission(payload)) {
    return { status: "skipped", detail: "Not a hat builder submission." } satisfies DeliveryAttemptResult;
  }

  const response = await fetchWithTimeout(SLACK_POST_MESSAGE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: OG_HAT_BUILDER_NOTIFY_SLACK_CHANNEL,
      text: buildHatBuilderSlackMessage(payload),
      unfurl_links: false,
      unfurl_media: false,
    }),
  });

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
    ok?: boolean;
  };
  if (!response.ok || !data.ok) {
    throw new Error(`Slack notification failed: ${response.status} ${JSON.stringify(data)}`);
  }

  return { status: "delivered" } satisfies DeliveryAttemptResult;
}

async function persistSubmissionRecord(record: SubmissionRecord) {
  await fs.mkdir(CONTACT_SUBMISSIONS_DIR, { recursive: true });
  const filePath = path.join(CONTACT_SUBMISSIONS_DIR, `${record.id}.json`);
  await fs.writeFile(filePath, `${JSON.stringify(record, null, 2)}\n`, "utf8");
}

async function appendSubmissionSnapshot(record: SubmissionRecord) {
  await fs.mkdir(path.dirname(CONTACT_SUBMISSIONS_LOG), { recursive: true });
  await fs.appendFile(CONTACT_SUBMISSIONS_LOG, `${JSON.stringify(record)}\n`, "utf8");
}

async function persistSubmissionRecordSafely(record: SubmissionRecord, context: string) {
  try {
    await persistSubmissionRecord(record);
  } catch (error) {
    console.error(`[Contact Submission Persistence Error] ${context}`, error);
  }
}

async function appendSubmissionSnapshotSafely(record: SubmissionRecord) {
  try {
    await appendSubmissionSnapshot(record);
  } catch (error) {
    console.error("[Contact Submission Snapshot Error]", error);
  }
}
async function setDeliveryResult(
  record: SubmissionRecord,
  name: DeliveryName,
  status: DeliveryStatus,
  detail?: string,
) {
  record.deliveries[name] = {
    at: new Date().toISOString(),
    ...(detail ? { detail } : {}),
    status,
  };
  await persistSubmissionRecordSafely(record, `delivery:${name}`);
}

async function runDelivery(
  record: SubmissionRecord,
  name: DeliveryName,
  delivery: () => Promise<DeliveryAttemptResult>,
) {
  try {
    const result = await delivery();
    await setDeliveryResult(record, name, result.status, result.detail);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    await setDeliveryResult(record, name, "failed", detail);
  }
}

export async function POST(request: Request) {
  try {
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const requestMeta = buildRequestMeta(request);
    const { payload, uploads } = await parseRequestPayload(request, submissionId);

    if (!payload) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    if (
      payload.source === "og-crafted-hat-builder" &&
      (!payload.company || !payload.email || !payload.name || !payload.phone || !payload.shippingAddress)
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required builder checkout fields." },
        { status: 400 },
      );
    }

    const submission: SubmissionRecord = {
      deliveries: {},
      id: submissionId,
      meta: requestMeta,
      payload,
      submittedAt: new Date().toISOString(),
      uploads,
    };

    await setDeliveryResult(submission, "stored", "delivered", "Submission captured locally.");
    await runDelivery(submission, "artworkStorage", () => syncUploadsToArtworkStorage(payload, uploads, submissionId, submission.submittedAt));

    await runDelivery(submission, "hubspot", () => deliverViaHubSpot(payload, uploads, requestMeta));
    await runDelivery(submission, "jcore", () => deliverViaJCore(payload, requestMeta));
    await runDelivery(submission, "webhook", () => deliverViaWebhook(payload));
    await runDelivery(submission, "internalEmail", () => deliverInternalEmail(payload, uploads, requestMeta));
    await runDelivery(submission, "clientEmail", () => deliverClientConfirmation(payload));

    const jcoreStatus = submission.deliveries.jcore?.status;
    if (jcoreStatus !== "duplicate") {
      await runDelivery(submission, "slack", () => deliverHatBuilderSlackNotification(payload));
    } else {
      await setDeliveryResult(submission, "slack", "skipped", "Skipped because J-Core marked the submission duplicate.");
    }

    await appendSubmissionSnapshotSafely(submission);
    console.log("[Contact Submission]", submission);

    const deliveries = Object.entries(submission.deliveries)
      .filter(([, result]) => result?.status === "delivered" || result?.status === "duplicate")
      .map(([name]) => name);
    const warnings = Object.entries(submission.deliveries)
      .filter(([, result]) => result?.status === "failed")
      .map(([name, result]) => `${name}: ${result?.detail ?? "delivery failed"}`);

    return NextResponse.json({
      deliveries,
      id: submission.id,
      message: "Thanks. We will be in touch within 1 business day.",
      ok: true,
      warnings,
    });
  } catch (error) {
    console.error("[Contact Submission Error]", error);

    const message = error instanceof Error ? error.message : "";
    if (message.startsWith("Unsupported upload type")) {
      return NextResponse.json(
        { ok: false, error: "Unsupported artwork file type. Please upload AI, EPS, PDF, SVG, ZIP, PNG, or JPG." },
        { status: 400 },
      );
    }

    if (message.startsWith("Upload too large")) {
      return NextResponse.json(
        { ok: false, error: "Artwork file is too large. Please send a smaller file or share a link in the notes." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { ok: false, error: "We could not submit your request right now." },
      { status: 500 },
    );
  }
}
