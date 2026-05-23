import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, subject, html } = body
    if (!to || !subject || !html) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 })
    }

    const key = process.env.RESEND_API_KEY
    if (!key) return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 })

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "owner@collinsai.me",
        to,
        subject,
        html,
      }),
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 })
  }
}
