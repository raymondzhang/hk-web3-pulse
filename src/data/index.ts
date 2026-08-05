import data from "./hk-web3-mvp.json";
import type { HKWeb3Data } from "@/types";

/**
 * Dashboard data from JSON.
 * Only contains lastUpdated and overallStatus.
 * All other business data (domains, comparison, timeline, sources) lives in locale files.
 */
export const hkWeb3Data = data as HKWeb3Data;
