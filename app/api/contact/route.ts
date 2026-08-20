import { promises as fs } from "fs";
import crypto from "node:crypto";
import path from "path";
import { NextResponse } from "next/server";

type ContactPayload = Record<string, unknown>;
type JCoreBridgeResult = {
  delivered: boolean;
  duplicate: boolean;
};
type JCoreBridgeRequestMeta = {
  forwardedFor?: string;
  realIp?: string;
  userAgent?: string;
};
type StoredUpload = {
  fieldName: string;
  originalName: string;
  storedName: string;
  relativePath: string;
  mimeType: string;
  size: number;
};

const JCORE_TYPEFORM_BRIDGE_URL = process.env.JCORE_TYPEFORM_BRIDGE_URL
  ?? "http://127.0.0.1:3000/api/typeform-webhook";
const JCORE_TYPEFORM_BRIDGE_SECRET = process.env.JCORE_TYPEFORM_BRIDGE_SECRET ?? "";
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN ?? "";
const SLACK_POST_MESSAGE_URL = "https://slack.com/api/chat.postMessage";
const OG_HAT_BUILDER_NOTIFY_SLACK_CHANNEL = process.env.OG_HAT_BUILDER_NOTIFY_SLACK_CHANNEL
  ?? "C0AV6PMMFD3";
const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;
const ALLOWED_UPLOAD_EXTENSIONS = new Set([".ai", ".eps", ".pdf", ".svg", ".zip", ".png", ".jpg", ".jpeg"]);

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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
  return `${compact.slice(0, Math.max(0, maxLength - 1)).trim()}…`;
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

async function parseRequestPayload(request: Request, submissionId: string) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const payloadEntries: Array<[string, string]> = [];
    const uploads: StoredUpload[] = [];
    const uploadDir = path.join(process.cwd(), "data", "contact-uploads", submissionId);

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
      const relativePath = path.join("data", "contact-uploads", submissionId, storedName);
      const targetPath = path.join(process.cwd(), relativePath);
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
      const normalized = asString(value);
      return normalized ? [[key, normalized]] : [];
    }),
  ) as Record<string, string>;

  return { payload, uploads: [] };
}

function isHatBuilderSubmission(payload: Record<string, string>) {
  return payload.source === "og-crafted-hat-builder";
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
          field: { id: fieldId, ref: key, type: "email" },
          type: "email",
          email: value,
        };
      }

      if (key === "needBy") {
        return {
          field: { id: fieldId, ref: key, type: "date" },
          type: "date",
          date: value,
        };
      }

      const answerType = value.includes("\n") || value.length > 140 ? "long_text" : "text";
      return {
        field: { id: fieldId, ref: key, type: answerType },
        type: answerType,
        text: value,
      };
    });

  return {
    event_id: `website-contact-${Date.now()}`,
    event_type: "form_response",
    form_response: {
      form_id: formId,
      token: buildJCoreBridgeToken(payload),
      submitted_at: submittedAt,
      definition: {
        id: formId,
        title,
        fields: answers.map((answer) => ({
          id: answer.field.id,
          ref: answer.field.ref,
          title: prettyLabel(answer.field.ref),
          type: answer.field.type,
        })),
      },
      hidden: {
        source: payload.source ?? "website-contact",
        intent: payload.intent ?? "",
        product: payload.product ?? "",
      },
      answers,
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

async function deliverViaResend(payload: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) return false;

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@orangegoods.co";
  const replyTo = payload.email || undefined;
  const subjectBase = payload.source === "og-crafted-hat-builder"
    ? "New OG Crafted hat build submission"
    : "New Orange Goods contact submission";
  const subject = payload.product ? `${subjectBase} · ${payload.product}` : subjectBase;
  const rows = Object.entries(payload)
    .filter(([, value]) => value)
    .map(([key, value]) => {
      const formattedValue = escapeHtml(value).replaceAll("\n", "<br />");
      return `<tr><td style="padding:8px 12px;border:1px solid #e7e1d5;font-weight:700;vertical-align:top;">${escapeHtml(prettyLabel(key))}</td><td style="padding:8px 12px;border:1px solid #e7e1d5;">${formattedValue}</td></tr>`;
    })
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      cc: ["easton@orangegoods.co"],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f7f2ea;padding:24px;color:#1c1c1c;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e7e1d5;padding:24px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ff4200;">Orange Goods website</p>
            <h1 style="margin:0 0 20px;font-size:28px;line-height:1.1;color:#0b32a0;">${escapeHtml(subjectBase)}</h1>
            <table style="width:100%;border-collapse:collapse;">${rows}</table>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend delivery failed: ${response.status} ${errorText}`);
  }

  return true;
}

async function deliverViaWebhook(payload: Record<string, string>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Webhook delivery failed: ${response.status} ${errorText}`);
  }

  return true;
}

async function deliverViaJCore(
  payload: Record<string, string>,
  requestMeta?: JCoreBridgeRequestMeta,
) {
  const body = JSON.stringify(buildJCoreTypeformPayload(payload));
  const signature = buildTypeformSignature(body);
  const response = await fetch(JCORE_TYPEFORM_BRIDGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(signature ? { "typeform-signature": signature } : {}),
      ...(requestMeta?.forwardedFor ? { "x-forwarded-for": requestMeta.forwardedFor } : {}),
      ...(requestMeta?.realIp ? { "x-real-ip": requestMeta.realIp } : {}),
      ...(requestMeta?.userAgent ? { "user-agent": requestMeta.userAgent } : {}),
    },
    body,
  });

  const data = await response.json().catch(() => ({})) as { ok?: boolean; duplicate?: boolean };

  if (!response.ok || !data.ok) {
    throw new Error(`J-Core bridge failed: ${response.status} ${JSON.stringify(data)}`);
  }

  return {
    delivered: true,
    duplicate: Boolean(data.duplicate),
  } satisfies JCoreBridgeResult;
}

function buildHatBuilderSlackMessage(payload: Record<string, string>) {
  const lines = ["*New OG Crafted hat build*"];

  const contactLine = [payload.name, payload.company].filter(Boolean).join(" — ");
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

async function deliverHatBuilderSlackNotification(payload: Record<string, string>) {
  if (!SLACK_BOT_TOKEN) return false;
  if (!isHatBuilderSubmission(payload)) return false;

  const response = await fetch(SLACK_POST_MESSAGE_URL, {
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

  const data = await response.json().catch(() => ({})) as {
    ok?: boolean;
    error?: string;
  };

  if (!response.ok || !data.ok) {
    throw new Error(`Slack notification failed: ${response.status} ${JSON.stringify(data)}`);
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const { payload, uploads } = await parseRequestPayload(request, submissionId);

    if (!payload) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    if (!payload.name || !payload.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required contact fields." },
        { status: 400 },
      );
    }

    if (
      payload.source === "og-crafted-hat-builder" &&
      (!payload.company || !payload.phone || !payload.shippingAddress)
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required builder checkout fields." },
        { status: 400 },
      );
    }

    const submission = {
      id: submissionId,
      submittedAt: new Date().toISOString(),
      payload,
      uploads,
    };

    const logFile = path.join(process.cwd(), "data", "contact-submissions.jsonl");
    await fs.mkdir(path.dirname(logFile), { recursive: true });
    await fs.appendFile(logFile, `${JSON.stringify(submission)}\n`, "utf8");

    const deliveries: string[] = ["stored"];

    const jcoreResult = await deliverViaJCore(payload, {
      forwardedFor: request.headers.get("x-forwarded-for") ?? "",
      realIp: request.headers.get("x-real-ip") ?? "",
      userAgent: request.headers.get("user-agent") ?? "",
    });
    if (jcoreResult.delivered) {
      deliveries.push("jcore");
    }

    if (!jcoreResult.duplicate) {
      try {
        if (await deliverHatBuilderSlackNotification(payload)) {
          deliveries.push("slack");
        }
      } catch (error) {
        console.error("[Hat Builder Slack Notification Error]", error);
      }
    }

    try {
      if (await deliverViaWebhook(payload)) {
        deliveries.push("webhook");
      }
    } catch (error) {
      console.error("[Contact Webhook Delivery Error]", error);
    }

    try {
      if (await deliverViaResend(payload)) {
        deliveries.push("email");
      }
    } catch (error) {
      console.error("[Contact Email Delivery Error]", error);
    }

    console.log("[Contact Submission]", submission);

    return NextResponse.json({
      ok: true,
      id: submission.id,
      deliveries,
      message: "Thanks. We will be in touch within 1 business day.",
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
