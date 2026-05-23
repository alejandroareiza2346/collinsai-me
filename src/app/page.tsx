"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Layers3,
  MessageCircleMore,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

import GlassCard from "@/components/GlassCard"
import ContactFormWrapper from "@/components/ContactFormWrapper"

const features = [
  {
    title: "AI Agents",
    eyebrow: "Autonomy layer",
    description:
      "Multi-step agents that reason, route, act and report with business context built in.",
    icon: BrainCircuit,
    span: "lg:col-span-5 lg:row-span-2",
    tint: "from-sky-400/20 to-transparent",
  },
  {
    title: "Chatbots",
    eyebrow: "Front door UX",
    description:
      "Reactive customer experiences with premium conversational polish and clear handoff paths.",
    icon: MessageCircleMore,
    span: "lg:col-span-4",
    tint: "from-cyan-400/20 to-transparent",
  },
  {
    title: "RAG Systems",
    eyebrow: "Knowledge layer",
    description:
      "Private retrieval flows over company knowledge with clean citations and safer answers.",
    icon: Radar,
    span: "lg:col-span-3 lg:row-span-2",
    tint: "from-blue-400/20 to-transparent",
  },
  {
    title: "Automation",
    eyebrow: "Workflow engine",
    description:
      "Streamline operations, sales and finance tasks with orchestration that feels invisible.",
    icon: Workflow,
    span: "lg:col-span-4",
    tint: "from-indigo-400/20 to-transparent",
  },
  {
    title: "Analytics",
    eyebrow: "Decision surface",
    description:
      "Business visibility with actionable events, conversion tracking and performance signals.",
    icon: Sparkles,
    span: "lg:col-span-4",
    tint: "from-sky-500/20 to-transparent",
  },
  {
    title: "Ownership",
    eyebrow: "One provider",
    description:
      "Technical delivery with a single accountable team from design to deployment.",
    icon: ShieldCheck,
    span: "lg:col-span-4",
    tint: "from-white/10 to-transparent",
  },
]

export default function Home() {
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

      <header className="fixed left-1/2 top-6 z-50 w-[min(92vw,54rem)] -translate-x-1/2">
        <GlassCard className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <Link href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(145deg,rgba(47,136,255,0.25),rgba(255,255,255,0.06))] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
              C
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white/90 uppercase">
                CollinsAI
              </p>
              <p className="text-[11px] text-white/55">Deep Ocean Glass</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contacto
            </Link>
          </nav>
        </GlassCard>
      </header>

      <main id="top" className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <section className="flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center text-center">
          <GlassCard className="mx-auto flex w-fit items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/70">
            <Layers3 className="h-3.5 w-3.5 text-[var(--primary)]" />
            Deep Ocean Glass for CollinsAI
          </GlassCard>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white/90 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            You can connect like ocean
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:text-lg"
          >
            Premium AI agent systems for companies that need fast execution,
            elegant product surfaces and measurable ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(47,136,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-x-2 top-0 h-px rounded-full bg-white/80 blur-[1px]" />
              <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-75" />
              <span className="relative">Ver demo</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/6"
            >
              Explorar sistema
            </a>
          </motion.div>
        </section>

        <section id="features" className="mt-8 grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(10rem,auto)]">
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
                  Glass surfaces that feel alive, not static.
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                  The interface should feel like a premium device: quiet, deep,
                  reactive and ready for demos that convert.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[24rem]">
                {[
                  ["03", "seconds to feel premium"],
                  ["99%", "visual clarity under motion"],
                  ["1", "brand system for every screen"],
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
                  Delivery approach
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white/92">
                  Fast, technical and visually sharp.
                </h3>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-white/68">
                <Bot className="h-4 w-4 text-[var(--primary)]" />
                <span>AI-first product narrative</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/68">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" />
                <span>Luxury glassmorphism interactions</span>
              </div>
            </div>
          </GlassCard>
        </section>

        <section id="contact" className="mt-20 pb-6">
          <GlassCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Contact
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white/92 sm:text-4xl">
                  Let us build the signal layer for your next AI product.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  Share the brief and we will respond with a private proposal.
                  The form below stays as the closing conversion point on the page.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
                  {[
                    "Medellin, Colombia",
                    "High-ticket projects",
                    "Retainers available",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/4 px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[calc(var(--radius)*2.5)] border border-white/10 bg-black/20 p-4 sm:p-5">
                <ContactFormWrapper />
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
