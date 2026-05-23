"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"

import GlassCard from "@/components/GlassCard"

export default function FAQPage() {
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
        <section className="mt-8 pb-6">
          <GlassCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">FAQ</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white/92 sm:text-4xl">Frequently asked questions</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">Common questions about discovery, timelines, pricing, and delivery for automation and AI projects. If you do not find your question here, request a free 30-minute diagnostic via the Contact page.</p>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
