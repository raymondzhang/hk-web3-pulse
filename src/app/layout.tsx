import type { Metadata } from "next";
import "./globals.css";
import { getLocale, localeToLang } from "@/lib/locale-server";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: ["香港", "Web3", "区块链", "监管", "RWA", "稳定币", "Hong Kong", "crypto"],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={localeToLang(locale)} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50">
        {children}
      </body>
    </html>
  );
}
