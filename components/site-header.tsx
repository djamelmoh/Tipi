"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-green-800">TERRA</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-700 transition-colors">
            Accueil
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-700 transition-colors">
            À propos
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-green-700 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="text-sm font-medium hover:text-green-700 transition-colors">
            Cas d'usage
          </Link>
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <div className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cas d'usage
            </Link>
            <Button asChild className="bg-green-700 hover:bg-green-800 w-full" onClick={() => setIsMenuOpen(false)}>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

