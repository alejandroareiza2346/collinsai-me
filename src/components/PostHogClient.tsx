"use client"

import { useEffect } from "react"

type PostHogClient = {
  init: (key: string, options: { api_host: string }) => void
  __initialized?: boolean
}

export default function PostHogClient() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"
    if (!key) return

    // dynamic import to avoid bundling on server
    import("posthog-js").then((posthogModule) => {
      const posthog = (posthogModule.default ?? posthogModule) as Partial<PostHogClient>
      if (!posthog.__initialized) {
        posthog.init?.(key, { api_host: host })
        posthog.__initialized = true
      }
    })
  }, [])

  return null
}
