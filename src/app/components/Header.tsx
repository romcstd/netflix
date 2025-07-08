'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <header className={`top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'fixed bg-black/50 backdrop-blur-md shadow-md' : 'absolute bg-transparent'}
      `}>
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          <Image src="/img/brand/netflix-logo.svg" alt="Netflix Logo" width={148} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
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
            className="md:hidden text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-background h-screen text-primary border-t border-zinc-800 px-4 py-4 space-y-2 text-sm">
          <Link href="/top10" className="block">Top 10</Link>
          <Link href="/tv-shows" className="block">TV Shows</Link>
          <Link href="/movies" className="block">Movies</Link>
          <Link href="/new" className="block">New & Popular</Link>
        </nav>
      )}
    </header>
  );
}