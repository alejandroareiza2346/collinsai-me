"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

import GlassCard from "@/components/GlassCard"
import { trackEvent } from "@/lib/analytics"

const LINKS = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
]

export default function Header() {
  const pathname = usePathname() || "/"
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // close mobile menu on route change
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(92vw,72rem)] -translate-x-1/2 sm:top-6">
      <GlassCard className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
            <Image src="/images/logos/CollinsAI%20(7).png" alt="CollinsAI logo" width={40} height={40} className="h-full w-full object-contain p-1.5" priority />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-white/90 uppercase">CollinsAI</p>
          </div>
        </Link>

        <nav className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-1 text-sm text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => trackEvent("nav_click", { to: l.href, location: "header" })}
              className={`rounded-full px-4 py-2 transition hover:bg-white/8 hover:text-white ${isActive(l.href) ? "bg-white/6 text-white" : ""}`}
            >
              {l.label}
            </Link>
          ))}

          <span className="h-4 w-px bg-white/10" aria-hidden="true" />
          <Link href="/contact" onClick={() => trackEvent("nav_click", { to: "/contact", location: "header" })} className={`rounded-full px-4 py-2 transition hover:bg-white/8 hover:text-white ${isActive("/contact") ? "bg-white/6 text-white" : ""}`}>Contacto</Link>
        </nav>

        {mobileOpen ? (
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/8 hover:text-white md:hidden"
            aria-label="Cerrar menú"
            aria-expanded="true"
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((c) => !c)}
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/8 hover:text-white md:hidden"
            aria-label="Abrir menú"
            aria-expanded="false"
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((c) => !c)}
          >
            <Menu className="h-4 w-4" />
          </button>
        )}
      </GlassCard>

      <GlassCard className={`mt-3 overflow-hidden border-white/10 px-2 py-2 transition-all duration-300 md:hidden ${mobileOpen ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
        <nav id="mobile-nav" className="flex flex-col gap-1 text-sm text-white/78">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white ${isActive(l.href) ? "bg-white/6 text-white" : ""}`}
              onClick={() => trackEvent("nav_click", { to: l.href, location: "mobile" })}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white ${isActive("/contact") ? "bg-white/6 text-white" : ""}`} onClick={() => trackEvent("nav_click", { to: "/contact", location: "mobile" })}>
            Contacto
          </Link>
        </nav>
      </GlassCard>
    </header>
  )
}
