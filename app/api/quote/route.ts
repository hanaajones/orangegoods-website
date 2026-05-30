import { NextRequest, NextResponse } from "next/server";

export interface QuoteRequest {
  product: string;
  qty: number | "lets-talk";
  addons: string[];
  estimatedPrice: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuoteRequest = await req.json();

    // Validate basic shape
    if (!body.product || !body.qty) {
      return NextResponse.json(
        { error: "Missing required fields: product, qty" },
        { status: 400 }
      );
    }

    // In a full integration, send an email here (e.g., via Postmark / SendGrid).
    // For now, log the quote request and redirect to thank-you page.
    console.log("[Quote Request]", {
      product: body.product,
      qty: body.qty,
      addons: body.addons,
      estimatedPrice: body.estimatedPrice,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.redirect(
      new URL("/thank-you?source=quote", req.url),
      { status: 303 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
