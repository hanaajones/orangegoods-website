import { NextResponse } from "next/server";

const QUO_API_BASE = "https://api.quo.com/v1";
const QUO_API_KEY = process.env.QUO_API_KEY ?? "";
const QUO_CHAT_SOURCE = process.env.QUO_CHAT_SOURCE ?? "orangegoods-website-chat";
const QUO_PHONE_NUMBER_ID = process.env.QUO_PHONE_NUMBER_ID ?? "";
const QUO_PHONE_NUMBER = process.env.QUO_PHONE_NUMBER ?? "";
const QUO_PHONE_USER_ID = process.env.QUO_PHONE_USER_ID ?? "";
const QUO_TIMEOUT_MS = Number(process.env.QUO_TIMEOUT_MS ?? 8000);

type QuoPhoneNumber = {
  id: string;
  number: string;
  users?: Array<{
    id: string;
  }>;
};

type QuoContact = {
  id: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

function truncate(value: string, maxLength: number) {
  const compact = value.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) return compact;
  return `${compact.slice(0, Math.max(0, maxLength - 1)).trim()}...`;
}

function normalizePhone(input: string) {
  const trimmed = input.trim();

  if (!trimmed) return "";
  if (/^\+[1-9]\d{7,14}$/.test(trimmed)) return trimmed;

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;

  return "";
}

function buildExternalId(phone: string) {
  return `og-website-chat:${phone.replace(/\D/g, "")}`;
}

function quoHeaders() {
  if (!QUO_API_KEY) {
    throw new Error("QUO_API_KEY is not configured.");
  }

  return {
    Authorization: QUO_API_KEY,
    "Content-Type": "application/json",
  } satisfies HeadersInit;
}

async function fetchWithTimeout(input: string, init: RequestInit, timeoutMs = QUO_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(input, {
      ...init,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Quo request timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function resolveSender() {
  if (QUO_PHONE_NUMBER_ID && QUO_PHONE_NUMBER) {
    return {
      id: QUO_PHONE_NUMBER_ID,
      number: QUO_PHONE_NUMBER,
      userId: QUO_PHONE_USER_ID,
    };
  }

  const response = await fetchWithTimeout(`${QUO_API_BASE}/phone-numbers`, {
    headers: {
      Authorization: QUO_API_KEY,
    },
    method: "GET",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to load Quo phone numbers: ${response.status} ${errorText}`);
  }

  const body = (await response.json()) as { data?: QuoPhoneNumber[] };
  const sender = body.data?.[0];

  if (!sender?.id || !sender.number) {
    throw new Error("No Quo sending number is available.");
  }

  return {
    id: sender.id,
    number: sender.number,
    userId: sender.users?.[0]?.id ?? "",
  };
}

async function findContact(externalId: string) {
  const url = new URL(`${QUO_API_BASE}/contacts`);
  url.searchParams.append("externalIds", externalId);
  url.searchParams.append("sources", QUO_CHAT_SOURCE);
  url.searchParams.append("maxResults", "1");

  const response = await fetchWithTimeout(url.toString(), {
    headers: {
      Authorization: QUO_API_KEY,
    },
    method: "GET",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to query Quo contacts: ${response.status} ${errorText}`);
  }

  const body = (await response.json()) as { data?: QuoContact[] };
  return body.data?.[0] ?? null;
}

async function createContact(args: {
  externalId: string;
  name: string;
  origin: string;
  phone: string;
}) {
  const { firstName, lastName } = splitName(args.name);
  const safeFirstName = firstName || "Website";
  const safeLastName = lastName || (firstName ? "" : "Lead");
  const payload = {
    defaultFields: {
      firstName: safeFirstName,
      lastName: safeLastName || null,
      phoneNumbers: [
        {
          name: "mobile",
          value: args.phone,
        },
      ],
    },
    externalId: args.externalId,
    source: QUO_CHAT_SOURCE,
    sourceUrl: args.origin || "https://orangegoods.co",
  };

  const response = await fetchWithTimeout(`${QUO_API_BASE}/contacts`, {
    body: JSON.stringify(payload),
    headers: quoHeaders(),
    method: "POST",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create Quo contact: ${response.status} ${errorText}`);
  }

  const body = (await response.json()) as { data?: QuoContact };
  return body.data ?? null;
}

async function ensureContact(args: {
  name: string;
  origin: string;
  phone: string;
}) {
  const externalId = buildExternalId(args.phone);
  const existing = await findContact(externalId);
  if (existing) return existing;
  return createContact({
    externalId,
    name: args.name,
    origin: args.origin,
    phone: args.phone,
  });
}

function buildOpeningMessage(message: string, name: string) {
  const greetingName = splitName(name).firstName;
  const quotedLeadMessage = truncate(message, 180);
  const intro = greetingName ? `Hi ${greetingName}` : "Hi";

  return `${intro}, thanks for reaching out to Orange Goods. We got your website message: "${quotedLeadMessage}". Our team will text you back shortly.`;
}

async function sendOpeningText(args: {
  from: string;
  message: string;
  name: string;
  phone: string;
  userId: string;
}) {
  const payload = {
    content: buildOpeningMessage(args.message, args.name),
    from: args.from,
    to: [args.phone],
    ...(args.userId ? { userId: args.userId } : {}),
  };

  const response = await fetchWithTimeout(`${QUO_API_BASE}/messages`, {
    body: JSON.stringify(payload),
    headers: quoHeaders(),
    method: "POST",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send Quo message: ${response.status} ${errorText}`);
  }

  return response.json() as Promise<{
    data?: {
      conversationId?: string;
      id?: string;
      status?: string;
    };
  }>;
}

export async function POST(request: Request) {
  try {
    if (!QUO_API_KEY) {
      return NextResponse.json(
        {
          error: "Quo chat is not configured yet.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;
    const message = asString(body.message);
    const phone = normalizePhone(asString(body.phone));
    const name = asString(body.name);
    const origin = request.headers.get("origin") ?? "";

    if (!message) {
      return NextResponse.json({ error: "Please enter a message first." }, { status: 400 });
    }

    if (!phone) {
      return NextResponse.json({ error: "Please enter a valid mobile number." }, { status: 400 });
    }

    const sender = await resolveSender();
    const contact = await ensureContact({
      name,
      origin,
      phone,
    });

    const messageResult = await sendOpeningText({
      from: sender.id,
      message,
      name,
      phone,
      userId: sender.userId,
    });

    return NextResponse.json({
      contactId: contact?.id ?? null,
      conversationId: messageResult.data?.conversationId ?? null,
      messageId: messageResult.data?.id ?? null,
      messageStatus: messageResult.data?.status ?? null,
      ok: true,
      phone,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown Quo chat error";
    return NextResponse.json(
      {
        error: "We could not start the text thread right now.",
        detail,
      },
      { status: 500 },
    );
  }
}
