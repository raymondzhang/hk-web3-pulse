"use client";

import { useRouter } from "next/navigation";
import { localeNames, localeLabels, locales, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm p-0.5">
      {locales.map((code) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={`
            relative px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200
            ${
              currentLocale === code
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }
          `}
          title={localeLabels[code]}
          aria-label={`Switch to ${localeLabels[code]}`}
        >
          {localeNames[code]}
        </button>
      ))}
    </div>
  );
}
