"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"

import GlassCard from "@/components/GlassCard"
import ContactFormWrapper from "@/components/ContactFormWrapper"

export default function ContactPage() {
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
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Contact
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white/92 sm:text-4xl">
                  Tell us about the operation you want to improve and we will shape the right automation and AI system.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  Share the brief and we will respond with a private proposal focused on scope, integrations, and rollout.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
                  {[
                    "Medellin, Colombia",
                    "SMB automation",
                    "Projects and retainers",
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
