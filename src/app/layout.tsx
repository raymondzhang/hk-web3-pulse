import type { Metadata } from "next";
import "./globals.css";
import { getLocale, localeToLang } from "@/lib/locale-server";
import { getDictionary } from "@/lib/dictionary";
import { getDarkMode } from "@/lib/theme-server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: ["香港", "Web3", "区块链", "监管", "RWA", "稳定币", "Hong Kong", "crypto"],
  };
}

/** Inline script to prevent FOUC for dark mode — runs before React hydration */
const themeScript = `
(function() {
  try {
    var m = document.cookie.match(/(?:^|;\\s*)theme=([^;]*)/);
    var theme = m ? decodeURIComponent(m[1]) : null;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
`.trim();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dark = await getDarkMode();

  return (
    <html
      lang={localeToLang(locale)}
      className={`h-full antialiased${dark ? " dark" : ""}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
