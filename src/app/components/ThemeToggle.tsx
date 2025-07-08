'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-md p-2 text-white hover:text-red-500 transition"
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}