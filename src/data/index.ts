import data from "./hk-web3-mvp.json";
import type { HKWeb3Data } from "@/types";

/**
 * Single source of truth for all dashboard data.
 * All business data (domains, comparison, timeline, sources) lives in hk-web3-mvp.json.
 * Locale files only contain UI translation strings.
 */
export const hkWeb3Data = data as HKWeb3Data;
