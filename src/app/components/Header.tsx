'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';
import ThemeToggle from "./ThemeToggle"

export default function Header() {
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
      <div className="container mx-auto flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold text-red-600">
          <Image src="/img/brand/netflix-logo.svg" alt="Netflix Logo" width={148} height={40} />
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}