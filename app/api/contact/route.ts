import { NextResponse } from "next/server";

/**
 * Contact endpoint. Validates input server-side and returns a result.
 *
 * INTEGRATION POINT: wire your delivery here — e.g. Resend / SendGrid,
 * a Nodemailer SMTP transport, or a CRM webhook. The validated payload
 * is ready in `data`. No third-party calls are made by default so the
 * project builds and runs with zero secrets.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();

  // Honeypot — pretend success, do nothing
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  // eslint-disable-next-line no-console
  console.info("[poptávka]", { name, phone, email, topic: data.topic });

  // TODO: deliver the message (e-mail / CRM) here.

  return NextResponse.json({ ok: true });
}
