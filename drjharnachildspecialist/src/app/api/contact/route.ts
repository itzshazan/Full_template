import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 200, phone: 30, subject: 200, message: 5000 } as const;

type Field = keyof typeof MAX;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const data = {} as Record<Field, string>;
  for (const key of Object.keys(MAX) as Field[]) {
    const v = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    data[key] = v.slice(0, MAX[key]);
  }

  if (!data.name || !EMAIL_RE.test(data.email) || !data.phone || !data.message) {
    return NextResponse.json({ ok: false, error: "Please fill in all required fields." }, { status: 422 });
  }

  // TODO: deliver the enquiry, e.g. via an email API or SMTP using credentials
  // from environment variables. Until then it is only written to the server log.
  console.info("[contact] new enquiry", { ...data, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
