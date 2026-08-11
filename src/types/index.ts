export type StatusLevel = "Leading" | "Advancing" | "Developing" | "Emerging";

export interface Milestone {
  date: string;
  description: string | string[];
  source?: string;
}

export interface ComparisonRow {
  area: string;
  hongKong: string;
  singapore: string;
  dubai: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  source?: string;
}

export interface DataSource {
  name: string;
  url: string;
}

export interface HKWeb3Data {
  lastUpdated: string;
  overallStatus: StatusLevel;
}

// ─── RWA Market Types ──────────────────────────────────────────────────────

export type HkRelevance = "high" | "medium" | "low";
export type ChainDominance = "dominant" | "growing" | "emerging";

export interface RwaMarketSummary {
  totalAumRwaXyz: number;
  totalTvlDefiLlama: number;
  dataGapPercent: number;
  totalProtocols: number;
  totalAssetsRwaXyz: number;
  totalHoldersDistributed: number;
  holdersGrowth40d: number;
  newHolders40d: number;
  newHoldersFromStocks: number;
}

export interface RwaAssetType {
  rank: number;
  category: string;
  icon: string;
  tvl: number;
  percent: number;
  examples: string[];
  hkRelevance: HkRelevance;
  hkNote: string;
}

export interface RwaProject {
  name: string;
  tvl: number;
  category: string;
  issuer: string;
  chain: string;
  contractAddress: string;
  tier: number;
  hkRelevant: boolean;
  note: string;
}

export interface RwaStockPlatform {
  rank: number;
  platform: string;
  stockCount: number;
  value: number;
  marketShare: number;
  distributed?: number;
}

export interface RwaStockTokenization {
  totalTvl: number;
  top3MarketShare: number;
  rankings: RwaStockPlatform[];
  hkAvailability: string;
  hkNote: string;
}

export interface RwaChainEntry {
  chain: string;
  dominance: ChainDominance;
  projects: string[];
  note: string;
}

export interface RwaHkVatp {
  name: string;
  license: string;
  status: string;
  rwaTokens: string[];
  note: string;
}

export interface RwaHkProduct {
  name: string;
  type: string;
  status: string;
  chain: string;
  address: string;
  scale?: string;
  note: string;
  hkRelevance: HkRelevance;
}

export interface RwaRegulatoryAccess {
  retailTreasury: string;
  retailStocks: string;
  retailGold: string;
  piTreasury: string;
  piThreshold: string;
  stablecoin: string;
}

export interface RwaGlobalVsHk {
  rwaTvl: { global: number; hk: number; unit: string };
  holders: { global: number; hk: number };
  tokenizedStocks: { global: number; hk: number; unit: string };
  compliantChannels: { global: number; hk: number };
}

export interface RwaHkSpecific {
  vatps: RwaHkVatp[];
  hkProducts: RwaHkProduct[];
  regulatoryAccess: RwaRegulatoryAccess;
  globalVsHk: RwaGlobalVsHk;
}

export interface RwaTrend {
  id: string;
  title: string;
  description: string;
  hkImpact: HkRelevance;
  hkNote: string;
}

export interface RwaMarketData {
  lastUpdated: string;
  dataDate: string;
  marketSummary: RwaMarketSummary;
  assetTypes: RwaAssetType[];
  topProjects: RwaProject[];
  stockTokenization: RwaStockTokenization;
  chainDistribution: RwaChainEntry[];
  hkSpecific: RwaHkSpecific;
  trends: RwaTrend[];
}
