// app/api/enlist-alert/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, timezone, goals } = await req.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return NextResponse.json(
        { ok: false, error: "Missing Telegram configuration" },
        { status: 500 },
      );
    }

    const text = `
🛡 *New MindArsenal Recruit Enlisted*

*Name:* ${name || "N/A"}
*Email:* ${email || "N/A"}
*Timezone:* ${timezone || "N/A"}
*Goals:*
${goals || "N/A"}

Stay sharp. Another soldier joins the ranks.
    `.trim();

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Telegram enlist alert error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send alert" },
      { status: 500 },
    );
  }
}
