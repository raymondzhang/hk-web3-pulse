import type { StatusLevel } from "@/types";

import enDomainData from "./domainData.en.json";
import zhCNDomainData from "./domainData.zh-CN.json";
import zhTWDomainData from "./domainData.zh-TW.json";

import enComparisonData from "./comparisonData.en.json";
import zhCNComparisonData from "./comparisonData.zh-CN.json";
import zhTWComparisonData from "./comparisonData.zh-TW.json";

import enTimelineData from "./timelineData.en.json";
import zhCNTimelineData from "./timelineData.zh-CN.json";
import zhTWTimelineData from "./timelineData.zh-TW.json";

import enSources from "./sources.en.json";
import zhCNSources from "./sources.zh-CN.json";
import zhTWSources from "./sources.zh-TW.json";

export interface DomainEntry {
  id: string;
  status: StatusLevel;
  name: string;
  description: string;
  globalComparison: string;
  milestones: { date: string; description: string[] }[];
  lastUpdated: string;
}

export interface ComparisonEntry {
  area: string;
  hongKong: string;
  singapore: string;
  dubai: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

export interface SourceEntry {
  name: string;
  url: string;
}

// Cast status from string to StatusLevel — trusted data from JSON
function castDomains(data: { id: string; status: string; name: string; description: string; globalComparison: string; milestones: { date: string; description: string[] }[]; lastUpdated: string }[]): DomainEntry[] {
  return data.map((d) => ({ ...d, status: d.status as StatusLevel }));
}

export function getDomainData(locale: string) {
  const map: Record<string, DomainEntry[]> = {
    en: castDomains(enDomainData),
    "zh-CN": castDomains(zhCNDomainData),
    "zh-TW": castDomains(zhTWDomainData),
  };
  return map[locale] ?? map["zh-CN"];
}

export function getComparisonData(locale: string) {
  const map: Record<string, ComparisonEntry[]> = {
    en: enComparisonData,
    "zh-CN": zhCNComparisonData,
    "zh-TW": zhTWComparisonData,
  };
  return map[locale] ?? map["zh-CN"];
}

export function getTimelineData(locale: string) {
  const map: Record<string, TimelineEntry[]> = {
    en: enTimelineData,
    "zh-CN": zhCNTimelineData,
    "zh-TW": zhTWTimelineData,
  };
  return map[locale] ?? map["zh-CN"];
}

export function getSources(locale: string) {
  const map: Record<string, SourceEntry[]> = {
    en: enSources,
    "zh-CN": zhCNSources,
    "zh-TW": zhTWSources,
  };
  return map[locale] ?? map["zh-CN"];
}