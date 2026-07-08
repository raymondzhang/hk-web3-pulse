import type { Locale } from "./i18n";
import { zhCN } from "./locales/zh-CN";
import { zhTW } from "./locales/zh-TW";
import { en } from "./locales/en";

const dictionaries: Record<Locale, typeof zhCN> = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  en: en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries["zh-CN"];
}

export type Dictionary = ReturnType<typeof getDictionary>;
