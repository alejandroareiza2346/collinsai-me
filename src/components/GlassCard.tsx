"use client"

import { motion } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

type GlassCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const easing = [0.22, 1, 0.36, 1] as const

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    node.style.setProperty("--spotlight-x", `${x}px`)
    node.style.setProperty("--spotlight-y", `${y}px`)
    node.style.setProperty("--spotlight-opacity", "1")
  }

  const handleMouseLeave = () => {
    const node = cardRef.current
    if (!node) return

    node.style.setProperty("--spotlight-opacity", "0")
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easing }}
      className={cn("glass-card relative overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className="glass-card-spotlight pointer-events-none absolute inset-0 opacity-[var(--spotlight-opacity)] transition-opacity duration-300"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70"
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
