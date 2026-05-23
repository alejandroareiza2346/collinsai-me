"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Layers3, Menu, X } from "lucide-react"

import GlassCard from "@/components/GlassCard"
import PerformanceWidget from "@/components/PerformanceWidget"
import Header from "@/components/Header"
import { trackEvent } from "@/lib/analytics"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      <main id="top" className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <section className="relative min-h-[calc(100vh-9rem)] overflow-hidden">
          <GlassCard className="relative h-full min-h-[calc(100vh-9rem)] overflow-hidden p-0">
            <div className="absolute inset-0">
              <Image
                src="/images/backgrounds/fondo.png"
                alt="CollinsAI background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,5,16,0.92)_0%,rgba(0,5,16,0.72)_34%,rgba(0,5,16,0.34)_58%,rgba(0,5,16,0.14)_72%,rgba(0,5,16,0.86)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_18%_50%,rgba(47,136,255,0.16),transparent_34%),radial-gradient(circle_at_82%_50%,rgba(255,255,255,0.04),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,5,16,0.18),rgba(0,5,16,0.42)_40%,rgba(0,5,16,0.92))]" />
            </div>

            <div className="relative grid min-h-[calc(100vh-9rem)] items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <GlassCard className="mx-auto flex w-fit items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/68 lg:mx-0">
                  <Layers3 className="h-3.5 w-3.5 text-[var(--primary)]" />
                  CollinsAI
                </GlassCard>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white/92 sm:text-5xl lg:text-6xl xl:text-7xl"
                >
                  Automation Intelligence for SMBs
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:mt-7 sm:text-[1.03rem]"
                >
                  CollinsAI converts manual operations into efficient systems. We automate
                  processes, sales follow-up, and customer service so your business reduces
                  cost and scales without technical complexity.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:items-start"
                >
                  <Link
                    href="/contact"
                    onClick={() => trackEvent("cta_contact_click", { location: "hero" })}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(59,127,255,0.24)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                  >
                    <span className="absolute inset-x-2 top-0 h-px rounded-full bg-white/80 blur-[1px]" />
                    <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-75" />
                    <span className="relative">Book an operational demo</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/features"
                    onClick={() => trackEvent("cta_services_click", { location: "hero" })}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/4 px-7 py-3 text-sm font-medium text-white/82 backdrop-blur-sm transition hover:border-white/18 hover:bg-white/6 sm:w-auto"
                  >
                    Explore services
                  </Link>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <PerformanceWidget />
        </section>
      </main>
    </div>
  )
}
