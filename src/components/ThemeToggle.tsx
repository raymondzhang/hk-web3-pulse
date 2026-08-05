"use client";

import { useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  initialDark?: boolean;
}

export function ThemeToggle({ initialDark = false }: ThemeToggleProps) {
  const [dark, setDark] = useState(initialDark);

  const toggle = useCallback(() => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.cookie = `theme=${next ? "dark" : "light"};path=/;max-age=31536000;SameSite=Lax`;
  }, [dark]);

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-200"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
