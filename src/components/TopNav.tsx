import Link from "next/link";
import { Activity, BarChart3 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";

interface TopNavProps {
  t: Dictionary;
  currentPath: "home" | "rwa";
}

export function TopNav({ t, currentPath }: TopNavProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors">
            <Activity className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-semibold tracking-wide">HK Web3 Pulse</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                currentPath === "home"
                  ? "text-emerald-400 bg-emerald-400/10 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/rwa"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                currentPath === "rwa"
                  ? "text-emerald-400 bg-emerald-400/10 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              {t.nav.rwa}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
