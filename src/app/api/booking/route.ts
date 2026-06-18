import { NextResponse } from "next/server";

interface BookingRequestBody {
  name: string;
  email: string;
  background: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingRequestBody = await request.json();
    const { name, email, background } = body;

    // Basic server-side validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing DISCORD_WEBHOOK_URL in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const discordPayload = {
      embeds: [
        {
          title: "🔥 New Academy Booking Request!",
          color: 0x000000,
          fields: [
            { name: "👤 Student Name", value: name, inline: true },
            { name: "📧 Email Address", value: email, inline: false },
            {
              name: "💬 Design Background",
              value: background || "No prior experience stated.",
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      throw new Error("Discord API responded with an error status");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Booking pipeline error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
