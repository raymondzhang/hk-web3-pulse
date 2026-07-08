import { cookies } from "next/headers";
import { locales, DEFAULT_LOCALE, type Locale } from "./i18n";

const COOKIE_NAME = "locale";

/**
 * Server-side locale detection from cookie.
 * Safe to call in Server Components only.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (value && (locales as string[]).includes(value)) {
    return value as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Map locale to HTML lang attribute */
export function localeToLang(locale: Locale): string {
  return locale === "zh-CN" ? "zh-CN" : locale === "zh-TW" ? "zh-TW" : "en";
}
