"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { trackEvent } from "@/lib/analytics"
import {
  BarChart3,
  CheckCircle2,
  Copy,
  Cpu,
  Gauge,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import GlassCard from "@/components/GlassCard"
import { cn } from "@/lib/utils"

type ModeKey = "launch" | "scale" | "enterprise"

const modes: Array<{
  key: ModeKey
  label: string
  description: string
  values: number[]
  signal: string
}> = [
  {
    key: "launch",
    label: "Launch",
    description: "Fastest path to first value.",
    values: [88, 91, 93, 96, 98, 99],
    signal: "rapid adoption",
  },
  {
    key: "scale",
    label: "Scale",
    description: "More throughput, same clarity.",
    values: [84, 87, 90, 92, 95, 97],
    signal: "stable growth",
  },
  {
    key: "enterprise",
    label: "Enterprise",
    description: "Governance and reliability first.",
    values: [79, 82, 85, 89, 92, 94],
    signal: "controlled expansion",
  },
]

const statusByMode: Record<ModeKey, string> = {
  launch: "Ready in days",
  scale: "Ready for traffic",
  enterprise: "Ready for governance",
}

const baseMetrics = {
  uptime: "99.98%",
  latency: "180ms",
  conversion: "+31%",
  confidence: "94/100",
}

const easing = [0.22, 1, 0.36, 1] as const

export default function PerformanceWidget() {
  const [mode, setMode] = useState<ModeKey>("launch")
  const [load, setLoad] = useState(72)
  const [copied, setCopied] = useState(false)

  const activeMode = modes.find((item) => item.key === mode) ?? modes[0]

  const jsonPayload = useMemo(() => {
    return {
      project: "CollinsAI",
      profile: activeMode.key,
      load,
      status: statusByMode[activeMode.key],
      metrics: {
        uptime: baseMetrics.uptime,
        latency: `${Math.max(72, Math.round(240 - load))}ms`,
        conversion: `${Math.max(12, Math.round(load * 0.43))}%`,
        confidence: `${Math.min(99, Math.round(load + 22))}/100`,
      },
      signal: activeMode.signal,
    }
  }, [activeMode.key, activeMode.signal, load])

  const chartValues = activeMode.values.map((value, index) => {
    const shift = Math.round((load - 50) * 0.18)
    return Math.max(28, Math.min(100, value + shift + index * 2))
  })

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(jsonPayload, null, 2))
      trackEvent("widget_copy_json", { profile: activeMode.key, load })
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <GlassCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Interactive widget</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white/92 sm:text-4xl">
              A performance layer that reads like an executive dashboard.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Switch the profile, move the load, and the system rewrites the surface in real time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[32rem]">
            {modes.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setMode(item.key)
                  trackEvent("widget_mode_change", { mode: item.key })
                }}
                className={cn(
                  "rounded-3xl border px-4 py-4 text-left transition duration-300",
                  mode === item.key
                    ? "border-white/18 bg-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
                    : "border-white/10 bg-white/4 hover:border-white/16 hover:bg-white/6",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold tracking-tight text-white/92">
                    {item.label}
                  </span>
                  {mode === item.key ? (
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)]" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-white/38" />
                  )}
                </div>
                <p className="mt-2 text-xs leading-5 text-white/55">{item.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[calc(var(--radius)*2.2)] border border-white/10 bg-black/24 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[var(--primary)]">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">JSON payload</p>
                  <p className="text-sm text-white/78">Mode: {activeMode.label}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={copyJson}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70 transition hover:border-white/18 hover:bg-white/8"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy JSON"}
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Uptime", baseMetrics.uptime],
                ["Latency", `${Math.max(72, Math.round(240 - load))}ms`],
                ["Confidence", `${Math.min(99, Math.round(load + 22))}/100`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[calc(var(--radius)*1.4)] border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">{label}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white/92">{value}</p>
                </div>
              ))}
            </div>

            <pre className="mt-4 overflow-x-auto rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-[#040916] p-4 text-[11px] leading-5 text-white/72 sm:text-xs">
              {JSON.stringify(jsonPayload, null, 2)}
            </pre>

            <div className="mt-4 space-y-4 rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-white/55">Load</span>
                <span className="font-semibold text-white/90">{load}%</span>
              </div>
              <input
                type="range"
                min={24}
                max={100}
                value={load}
                onChange={(event) => setLoad(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[var(--primary)]"
                aria-label="System load"
              />
              <div className="flex flex-wrap gap-2 text-xs text-white/58">
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1">
                  {statusByMode[activeMode.key]}
                </span>
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1">
                  {activeMode.signal}
                </span>
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1">
                  JSON-ready output
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", value: baseMetrics.uptime, icon: ShieldCheck },
                { label: "Latency", value: `${Math.max(72, Math.round(240 - load))}ms`, icon: Gauge },
                { label: "Conversion", value: `${Math.max(12, Math.round(load * 0.43))}%`, icon: Rocket },
                { label: "Confidence", value: `${Math.min(99, Math.round(load + 22))}/100`, icon: Cpu },
              ].map((metric, index) => {
                const Icon = metric.icon

                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: easing }}
                    className="rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">{metric.label}</p>
                      <Icon className="h-4 w-4 text-[var(--primary)]" />
                    </div>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-white/92">
                      {metric.value}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="rounded-[calc(var(--radius)*2.2)] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Signal chart</p>
                  <p className="mt-1 text-sm text-white/66">Live response curve for the current mode.</p>
                </div>
                <BarChart3 className="h-5 w-5 text-[var(--primary)]" />
              </div>

              <div className="mt-6 flex h-44 items-end gap-2">
                {chartValues.map((value, index) => (
                  <motion.div
                    key={`${activeMode.key}-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${value}%`, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: easing }}
                    className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,rgba(83,214,255,0.94)_0%,rgba(47,136,255,0.42)_100%)] shadow-[0_0_40px_rgba(47,136,255,0.18)]"
                    style={{ minHeight: 24 }}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-white/48">
                <span>Autonomous orchestration</span>
                <span>Decision confidence rises with load efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}