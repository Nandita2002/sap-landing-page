import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL!; // 🔥 move to env

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 🔥 Basic validation (important)
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔥 Timeout controller (prevents hanging)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let response;
    try {
      response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    // 🔥 Handle HTTP errors
    if (!response.ok) {
      return NextResponse.json(
        {
          status: "error",
          message: `Apps Script failed with ${response.status}`,
        },
        { status: 500 }
      );
    }

    const text = await response.text();

    // 🔥 Safe JSON parsing
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { status: "success", raw: text };
    }

    return NextResponse.json(data);

 } catch (err: unknown) {
  console.error("Proxy error:", err);

  let message = "Unknown error";

  if (err instanceof Error) {
    message = err.message;
  }

  return NextResponse.json(
    {
      status: "error",
      message,
    },
    { status: 500 }
  );
}
}