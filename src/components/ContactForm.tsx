"use client"

import React, { useState } from "react"
import { trackEvent } from "@/lib/analytics"

export default function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            to: "contact@collinsai.me",
            subject: `Web contact: ${email}`,
            html: `<p>${message}</p><p>From: ${email}</p>`,
          }),
      })

      if (!res.ok) throw new Error("Email send failed")

      // track submission (silent if analytics not configured)
      trackEvent("contact_form_submitted", { email })

      setStatus("sent")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-xl">
      <label className="block">
        <span className="text-sm">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </label>

      <label className="block mt-4">
        <span className="text-sm">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
          rows={5}
        />
      </label>

      <div className="mt-4">
        <button
          type="submit"
          className="rounded-full bg-black px-6 py-2 text-white"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && <span className="ml-4 text-green-600">Sent</span>}
        {status === "error" && <span className="ml-4 text-red-600">Error sending</span>}
      </div>
    </form>
  )
}
