import { getDomainData, getComparisonData, getTimelineData, getSources } from "@/data/domain-data";

const domainData = getDomainData("en");
const comparisonData = getComparisonData("en");
const timelineData = getTimelineData("en");
const sources = getSources("en");

export const en = {
  meta: {
    title: "HK Web3 Pulse | Hong Kong Web3 Progress Dashboard",
    description:
      "An objective, neutral, and continuously updated Hong Kong Web3 development dashboard, focusing on regulation, RWA, and stablecoins, benchmarked against leading global jurisdictions.",
  },

  nav: {
    home: "Home",
    rwa: "RWA Tracker",
  },

  hero: {
    badge: "MVP v1.0",
    title: "HK Web3 Pulse",
    subtitle:
      "Hong Kong Web3 Progress Dashboard — Objectively tracking Hong Kong's real progress in regulation, RWA, and stablecoins",
    tagOfficial: "Based on public official information",
    tagCompare: "Benchmarked against Singapore / Dubai",
  },

  overallStatus: {
    title: "Overall Maturity Assessment",
    maturity: "Maturity",
    updated: "Updated on",
    accuracyNote:
      "Based on publicly available official information, manually verified. Data can be cross-checked via source links below.",
  },

  domains: {
    title: "Three Core Domains",
    subtitle:
      "Focusing on regulation, RWA tokenization, and stablecoins — Hong Kong's key Web3 development tracks",
    sections: {
      milestones: "Key Milestones",
      globalComparison: "Global Comparison",
      lastUpdated: "Last Updated",
    },
  },

  comparison: {
    title: "Global Benchmark Table",
    subtitle:
      "Hong Kong vs Singapore vs Dubai — Cross-domain comparison across three key areas",
    dataSource:
      "Data Sources: Atlantic Council / OMFIF Tracker + MAS website + VARA public information",
    headers: {
      area: "Domain",
      hongKong: "Hong Kong",
      singapore: "Singapore",
      dubai: "Dubai",
    },
  },

  timeline: {
    title: "Key Milestones Timeline",
    subtitle:
      "Important milestones in Hong Kong's Web3 development journey, 2022–2026",
  },

  footer: {
    methodologyTitle: "Data Sources & Methodology",
    sourcesTitle: "Primary Data Sources",
    reportError: "Report an error or suggestion",
    copyright:
      "HK Web3 Pulse © 2026 — Objectively tracking Hong Kong Web3 development",
  },

  statusLabels: {
    Leading: "Leading",
    Advancing: "Advancing",
    Developing: "Developing",
    Emerging: "Emerging",
  },

  domainData,
  comparisonData,
  timelineData,

  methodology:
    "This dashboard is compiled from publicly available official information. Status classifications follow a four-tier scale: Leading (globally ahead), Advancing (actively progressing), Developing (in progress), and Emerging (early stage). All milestones are linked to official sources and support manual verification.",

  disclaimer:
    "The content of this website is for informational purposes only and does not constitute investment advice. Data is compiled from public sources and may be subject to delays or inaccuracies; please refer to official publications for authoritative information.",

  likeButton: {
    label: "Like this",
    liked: "Liked",
  },

  feedback: {
    title: "Feedback",
    subtitle: "Found an error? Have a suggestion? Let us know.",
    nameLabel: "Name",
    namePlaceholder: "Optional",
    emailLabel: "Email",
    emailPlaceholder: "Optional, so we can reply to you",
    messageLabel: "Message",
    messagePlaceholder: "Describe the issue or your suggestion…",
    privacyNote: "We will never share your personal information",
    submitButton: "Submit",
    sending: "Sending…",
    sent: "Submitted, thank you!",
    error: "Submission failed. Please try again later or email us directly.",
    directEmail: "Or email us directly at 414628016@qq.com",
  },

  sources,

  // ─── RWA Tracker ────────────────────────────────────────────────────

  rwa: {
    hero: {
      back: "← Back to Dashboard",
      badge: "RWA Tracker v1.0",
      title: "Hong Kong RWA Trend Tracker",
      subtitle: "Global RWA market panorama + Hong Kong localization analysis",
      tagBenchmark: "Global vs HK benchmark",
      navTitle: "📊 RWA Trend Tracker",
      navSubtitle: "Global $38.2B RWA market panorama + HK localization analysis →",
    },
    overview: {
      title: "Global RWA Market Overview",
      subtitle: "Data from RWA.xyz and DeFiLlama, cross-validated",
      dataDate: "Data date",
      totalAum: "Total RWA AUM",
      totalTvl: "DeFi TVL",
      holders: "Total Holders",
      holdersSub: "+{growth} in 40d, +{new} new",
      stockGrowth: "From Stocks",
      stockGrowthSub: "93% of new holders from stock assets",
      dataGapTitle: "Data discrepancy",
      dataGapNote: "RWA.xyz tracks 1,203 assets ($38.2B), DeFiLlama covers only 106 protocols ($27.7B). Gap mainly from non-USD assets, institutional products, and emerging projects. Market size referenced from RWA.xyz.",
    },
    assets: {
      title: "Asset Type Rankings",
      subtitle: "RWA asset categories ranked by TVL, annotated with Hong Kong applicability",
      hkRelevance: "HK Fit",
      hkNote: "HK assessment",
      categoryNames: {
        treasury: "Treasury / Gov Bonds",
        gold: "Gold / Commodities",
        stocks: "Stocks & Securities",
        privateCredit: "Private Credit",
        moneyMarket: "Money Market / Index",
        realEstate: "Real Estate",
        other: "Other",
      },
    },
    projects: {
      title: "Top Projects",
      subtitle: "Global RWA protocols ranked by TVL — 🇭🇰 marks HK-relevant projects",
      name: "Project",
      category: "Category",
      tvl: "TVL",
      issuer: "Issuer",
      chain: "Chain",
      hkRelevant: "HK",
    },
    stocks: {
      title: "Stock Tokenization — Biggest Growth Driver",
      subtitle: "700K new holders in 40 days, 93% from stock assets. Top 3 hold 86.5% market share",
      platform: "Platform",
      stockCount: "Stocks",
      value: "Total Value",
      marketShare: "Market Share",
      distributed: "Distributed",
      hkUnavailable: "⚠️ Not available in Hong Kong",
    },
    chains: {
      title: "Chain Distribution",
      subtitle: "RWA deployment across chains — Ethereum remains the dominant host",
      dominanceLabels: {
        dominant: "Dominant",
        growing: "Growing",
        emerging: "Emerging",
      },
    },
    hk: {
      title: "Hong Kong RWA Localization Analysis",
      subtitle: "30-40% of global trends apply directly to HK; 60-70% require localization",
      comparisonMetric: "Metric",
      global: "Global",
      hongKong: "Hong Kong",
      gap: "Gap",
      rwaTvl: "RWA TVL",
      holders: "Holders",
      tokenizedStocks: "Tokenized Stocks",
      compliantChannels: "Compliant Channels",
      notAvailable: "N/A",
      vatps: "Licensed Virtual Asset Trading Platforms (VATP)",
      products: "Hong Kong RWA Products",
      regulatoryAccess: "Regulatory Access Status",
      accessLabels: {
        retailTreasury: "Retail · Treasury",
        retailStocks: "Retail · Stocks",
        retailGold: "Retail · Gold",
        piTreasury: "PI · Treasury",
        piThreshold: "PI Threshold",
        stablecoin: "Stablecoin",
      },
    },
    trends: {
      title: "Key Trends & Hong Kong Impact",
      subtitle: "Eight global RWA trends, rated by their impact on Hong Kong",
      hkImpact: "HK Impact",
      impactLabels: {
        high: "High",
        medium: "Medium",
        low: "Low",
      },
    },
    disclosure: {
      title: "Hong Kong RWA On-Chain Trading Disclosure",
      subtitle: "Benchmarking RWA.xyz HK Edition — on-chain data readout + compliance status + trading liquidity, transparent disclosure of all HK-related RWA products",
      updated: "Data updated",
      onchainTitle: "On-Chain Token Data Readout",
      complianceTitle: "SFC Compliance Disclosure Table",
      liquidityTitle: "Trading & Liquidity Data",
      dataSourcesTitle: "Data Sources",
      disclaimerTitle: "Data Disclaimer",
      disclaimerNote:
        "Data in this section is sourced from public on-chain data, SFC/HKMA official announcements, and third-party platforms. On-chain data may have delays, and compliance status is based on the latest official releases. Data is for informational purposes only and does not constitute investment advice.",
      contract: "Contract",
      chain: "Chain",
      totalSupply: "Total Supply",
      holders: "Holders",
      transfers24h: "24h Transfers",
      price: "Price",
      liquidity: "Liquidity",
      product: "Product",
      issuer: "Issuer",
      sfcStatus: "SFC Status",
      vatp: "VATP Listed",
      investor: "Investor Type",
      restrictions: "Restrictions",
      launch: "Launch Date",
      tvl: "TVL",
      volume24h: "24h Volume",
    },
  },
};
