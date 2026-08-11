import data from "./hk-web3-mvp.json";
import rwaData from "./rwa-market.json";
import type { HKWeb3Data, RwaMarketData } from "@/types";

/**
 * Single source of truth for all dashboard data.
 * All business data (domains, comparison, timeline, sources) lives in hk-web3-mvp.json.
 * RWA market data lives in rwa-market.json.
 * Locale files only contain UI translation strings.
 */
export const hkWeb3Data = data as HKWeb3Data;
export const rwaMarketData = rwaData as RwaMarketData;
