"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import {
  Bot,
  BrainCircuit,
  MessageCircleMore,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

import GlassCard from "@/components/GlassCard"

const features = [
  {
    title: "Process automation",
    eyebrow: "Core service",
    description:
      "Automations that remove repetitive work across operations, sales, support, and internal workflows.",
    icon: BrainCircuit,
    span: "lg:col-span-5 lg:row-span-2",
    tint: "from-sky-400/20 to-transparent",
  },
  {
    title: "WhatsApp automation",
    eyebrow: "Fast adoption",
    description:
      "Customer conversations, routing, and follow-up flows that keep the business responsive without adding headcount.",
    icon: MessageCircleMore,
    span: "lg:col-span-4",
    tint: "from-cyan-400/20 to-transparent",
  },
  {
    title: "Operational dashboards",
    eyebrow: "Compounding signal",
    description:
      "Clear dashboards that show pipeline, tasks, service levels, and operational performance in real time.",
    icon: Radar,
    span: "lg:col-span-3 lg:row-span-2",
    tint: "from-blue-400/20 to-transparent",
  },
  {
    title: "API integrations",
    eyebrow: "Clear ROI",
    description:
      "Connect CRMs, forms, payment tools, internal systems, and external services into one coherent stack.",
    icon: Workflow,
    span: "lg:col-span-4",
    tint: "from-indigo-400/20 to-transparent",
  },
  {
    title: "AI agents",
    eyebrow: "Retention engine",
    description:
      "Task-oriented assistants that support sales, operations, and customer service with guardrails.",
    icon: Sparkles,
    span: "lg:col-span-4",
    tint: "from-sky-500/20 to-transparent",
  },
  {
    title: "Consulting and security",
    eyebrow: "Founder velocity",
    description:
      "Technical direction, implementation planning, governance, and security-minded delivery.",
    icon: ShieldCheck,
    span: "lg:col-span-4",
    tint: "from-white/10 to-transparent",
  },
]

const fundabilitySignals = [
  {
    title: "Operational impact",
    description: "It addresses work the team already does manually, so value shows up quickly.",
  },
  {
    title: "Fast deployment",
    description: "Solutions are scoped for quick rollout so teams can adopt them without long delays.",
  },
  {
    title: "Compounding efficiency",
    description: "Automations, integrations, and operational data improve the system over time.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,136,255,0.24)_0%,rgba(47,136,255,0.06)_40%,transparent_70%)] blur-3xl"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(47,136,255,0.08),transparent_28%)] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,5,16,0.12),rgba(0,5,16,0.72)_58%,rgba(0,5,16,1))]" />
      </div>

      <Header />

      <main className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <section className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(10rem,auto)]">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <GlassCard
                key={feature.title}
                delay={0.08 * index}
                className={`group relative flex min-h-[11rem] flex-col justify-between overflow-hidden p-6 ${feature.span}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${feature.tint} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      {feature.eyebrow}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white/92">
                      {feature.title}
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="relative mt-10 max-w-sm text-sm leading-6 text-white/65">
                  {feature.description}
                </p>
              </GlassCard>
            )
          })}

          <GlassCard className="relative overflow-hidden p-6 lg:col-span-8 lg:min-h-[18rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,136,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Product language
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white/92 sm:text-4xl">
                  Service pages should explain value fast, not make people decode jargon.
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                  CollinsAI needs a page that shows the outcome, the delivery model, and the
                  operational pain it removes in one pass.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[24rem]">
                {[
                  ["03", "layers of service focus"],
                  ["99%", "clarity on the problem solved"],
                  ["1", "starting point that scales"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/4 p-4">
                    <p className="text-2xl font-semibold text-white/92">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/48">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-6 lg:col-span-4 lg:min-h-[18rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(83,214,255,0.12),transparent_40%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Why it works
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white/92">
                  A practical service model with clear delivery and room to expand.
                </h3>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-white/68">
                <Bot className="h-4 w-4 text-[var(--primary)]" />
                  <span>Problem-first service narrative</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/68">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" />
                  <span>Repeatable implementation and clearer retention loops</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-6 lg:col-span-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,136,255,0.08),transparent_38%)]" />
            <div className="relative grid gap-4 md:grid-cols-3">
              {fundabilitySignals.map((signal, index) => (
                <div
                  key={signal.title}
                  className="rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                    0{index + 1}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold tracking-tight text-white/92">
                    {signal.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
