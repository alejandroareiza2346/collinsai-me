export async function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  try {
    const posthogModule = await import("posthog-js")
    const posthog = (posthogModule.default ?? posthogModule) as unknown as {
      capture?: (event: string, props?: Record<string, unknown>) => void
    }
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (key && typeof posthog.capture === "function") {
      posthog.capture(eventName, properties)
    }
  } catch (err) {
    // debug only
    console.debug("trackEvent error", err)
  }
}
