/**
 * Shared i18n types and constants.
 * Safe to import from both Server and Client components.
 */
export type Locale = "zh-CN" | "zh-TW" | "en";

export const locales: Locale[] = ["zh-CN", "zh-TW", "en"];

export const localeNames: Record<Locale, string> = {
  "zh-CN": "简",
  "zh-TW": "繁",
  en: "EN",
};

export const localeLabels: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  en: "English",
};

export const DEFAULT_LOCALE: Locale = "zh-CN";
