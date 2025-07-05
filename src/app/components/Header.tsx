'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-background text-primary border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          <Image src="/img/brand/netflix-logo.svg" alt="Netflix Logo" width={148} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/top10" className="hover:text-red-500 transition">Top 10</Link>
          <Link href="/tv-shows" className="hover:text-red-500 transition">TV Shows</Link>
          <Link href="/movies" className="hover:text-red-500 transition">Movies</Link>
          <Link href="/new" className="hover:text-red-500 transition">New & Popular</Link>
          
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-zinc-800 px-4 pb-4 space-y-2 text-sm">
          <Link href="/top10" className="block">Top 10</Link>
          <Link href="/tv-shows" className="block">TV Shows</Link>
          <Link href="/movies" className="block">Movies</Link>
          <Link href="/new" className="block">New & Popular</Link>
        </nav>
      )}
    </header>
  );
}