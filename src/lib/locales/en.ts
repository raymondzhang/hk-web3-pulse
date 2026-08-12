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

  // ── Business Data ──────────────────────────────────────────────────

  domainData: [
    {
      id: "regulation",
      status: "Advancing" as const,
      name: "Regulation & Licensing",
      description:
        "Hong Kong has built one of the world's most comprehensive virtual asset regulatory frameworks. VATP licensing is mature, four new licensing regimes (dealers, custodians, advisors, asset managers) are advancing toward legislation, and the SFC continues to strengthen cybersecurity and investor protection requirements.",
      globalComparison:
        "Regulatory breadth leads Singapore and Dubai — HK is building a full-spectrum VA licensing system; Dubai VARA has issued 51 licenses but with lower compliance thresholds.",
      milestones: [
        {
          date: "2023-06",
          description: [
            "VATP (Virtual Asset Trading Platform) licensing regime officially operational, requiring licensed operations",
          ],
        },
        {
          date: "2025-08",
          description: [
            "Stablecoin issuer regulatory framework officially came into effect",
          ],
        },
        {
          date: "2025-12",
          description: [
            "SFC/FSTB published consultation conclusions on VA dealer and custodian regulation",
          ],
        },
        {
          date: "2026-05",
          description: [
            "SFC/FSTB published consultation conclusions on VA advisory and asset management — four new licensing regimes taking shape",
          ],
        },
        {
          date: "2026-07",
          description: [
            "SFC mandated phishing-resistant authentication for VATPs, banning SMS OTP as sole login method",
          ],
        },
        {
          date: "2026-Q3",
          description: [
            "Legislative proposals for four new VA licensing regimes (dealers, custodians, advisors, asset managers) being prepared for LegCo",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
    {
      id: "rwa",
      status: "Advancing" as const,
      name: "RWA / Tokenization",
      description:
        "Hong Kong is a global leader in RWA tokenization: government directly participates in tokenized bond issuance, SFC approved the first native tokenized fund, and digital bond infrastructure (DACC) has landed in Hong Kong, marking a shift from government-led to market-driven diversification.",
      globalComparison:
        "Globally leading — Hong Kong is the only jurisdiction with government tokenized bonds, SFC-approved tokenized fund, and dedicated clearing infrastructure simultaneously.",
      milestones: [
        {
          date: "2024-02",
          description: [
            "Hong Kong government issued the world's first tokenized green bonds, totaling HK$800 million",
          ],
        },
        {
          date: "2025-11",
          description: [
            "Project Ensemble moved from sandbox to EnsembleTX pilot phase, conducting real-value transactions",
          ],
        },
        {
          date: "2026-03",
          description: [
            "SFC approved the first real estate tokenization product and commodity RWA fund",
          ],
        },
        {
          date: "2026-04",
          description: [
            "Tokenized product secondary market opened to retail investors; Web3 Festival 2026 held",
          ],
        },
        {
          date: "2026-07",
          description: [
            "SFC approved Hong Kong's first fully native tokenized bond fund (Baillie Gifford), signaling global institutions accelerating HK布局",
          ],
        },
        {
          date: "2026-07",
          description: [
            "DACC (Digital Asset Clearing Center) headquartered in Hong Kong, building infrastructure for tokenized bonds, stablecoins, and cross-border RMB settlement",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
    {
      id: "stablecoins",
      status: "Advancing" as const,
      name: "Stablecoins",
      description:
        "The stablecoin regulatory framework is fully operational: HSBC and Anchorpoint hold the first licenses, 36 formal applications are under review, and the HKMA maintains an 'open yet cautious' stance on a second batch of licenses potentially around October.",
      globalComparison:
        "Framework maturity comparable to Singapore's MAS framework, but with a distinct large-bank-focused licensing strategy; mainland China's Circular 42 explicitly banned unauthorized yuan stablecoins.",
      milestones: [
        {
          date: "2025-08",
          description: [
            "Stablecoin Ordinance officially came into effect; HKMA became the stablecoin issuer regulator",
          ],
        },
        {
          date: "2025-09",
          description: [
            "HKMA received 36 formal stablecoin issuer license applications",
          ],
        },
        {
          date: "2026-02",
          description: [
            "Mainland China issued Circular 42, banning unauthorized yuan stablecoins and asset tokenization",
          ],
        },
        {
          date: "2026-04",
          description: [
            "First licenses granted: HSBC (HKD stablecoin, integrated with PayMe) and Anchorpoint Financial (Standard Chartered × Animoca Brands)",
          ],
        },
        {
          date: "2026-06",
          description: [
            "HKMA relaxed compliance requirements for licensed stablecoin issuers, lowering barriers to entry",
          ],
        },
        {
          date: "2026-08",
          description: [
            "HKMA says 'open yet cautious' on more licenses; market rumors suggest second batch may be approved around October National Day",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
  ],

  comparisonData: [
    {
      area: "Regulation & Licensing",
      hongKong: "Advancing — VATP regime mature + four new licensing regimes (dealers/custodians/advisors/asset managers) advancing to legislation; SFC strengthening cybersecurity requirements",
      singapore: "Advancing — MAS published supervisory expectations for DPT service providers (7 areas); licensing regime stable",
      dubai: "Advancing — VARA has issued 51 licenses; mature framework but lower compliance thresholds",
    },
    {
      area: "RWA / Tokenization",
      hongKong: "Globally leading — Government tokenized bonds + SFC-approved first native tokenized fund + DACC clearing infrastructure",
      singapore: "Developing — Sandbox exploration phase; lower government participation",
      dubai: "Developing — DIFC actively exploring, but limited scale",
    },
    {
      area: "Stablecoins",
      hongKong: "Advancing — 2 licenses operational (HSBC/Anchorpoint), 36 applications under review, second batch possibly around October",
      singapore: "Advancing — MAS framework operational for years; higher market activity",
      dubai: "Developing — Open stance; detailed regulations still being refined",
    },
  ],

  timelineData: [
    {
      date: "2026-08",
      title: "HKMA Open Yet Cautious on More Stablecoin Licenses",
      description: "HKMA has not ruled out issuing more licenses; 36 formal applications under review; market rumors suggest second batch may be approved around October National Day",
    },
    {
      date: "2026-07",
      title: "SFC Approves First Fully Native Tokenized Bond Fund",
      description: "Global asset manager Baillie Gifford established the first fully native tokenized bond fund in Hong Kong, approved by SFC — signaling accelerating institutional adoption",
    },
    {
      date: "2026-07",
      title: "SFC Mandates Phishing-Resistant Authentication for VATPs",
      description: "SFC issued circular banning SMS OTP as sole login method for VATPs and internet brokers, mandating phishing-resistant authentication",
    },
    {
      date: "2026-07",
      title: "DACC Digital Asset Clearing Infrastructure Launches in HK",
      description: "DACC headquartered in Hong Kong, building infrastructure for tokenized bonds, stablecoins, and cross-border RMB settlement; backed by 12 institutional investors",
    },
    {
      date: "2026-06",
      title: "HKMA Relaxes Stablecoin Requirements",
      description: "HKMA relaxed compliance requirements for licensed stablecoin issuers, lowering barriers to encourage more institutional participation",
    },
    {
      date: "2026-05",
      title: "Four New VA Licensing Regime Consultation Conclusions Published",
      description: "SFC/FSTB published consultation conclusions on VA advisory and asset management regulation; four licensing regimes being prepared for legislation",
    },
    {
      date: "2026-04",
      title: "First Stablecoin Licenses Officially Granted",
      description: "HSBC (HKD stablecoin, integrated with PayMe) and Anchorpoint Financial (Standard Chartered × Animoca Brands) approved by HKMA",
    },
    {
      date: "2026-04",
      title: "Tokenized Secondary Market Opens to Retail + Web3 Festival",
      description: "SFC released tokenized bond secondary market framework; retail investors can participate; Web3 Festival 2026 held",
    },
    {
      date: "2026-03",
      title: "First Real Estate RWA Product Approved",
      description: "SFC approved the first real estate tokenization product and commodity RWA fund",
    },
    {
      date: "2026-02",
      title: "China Circular 42 Bans Unauthorized Yuan Stablecoins",
      description: "PBOC and CSRC issued notice explicitly banning unauthorized yuan stablecoins and asset tokenization, impacting pending HK license applications",
    },
    {
      date: "2025-12",
      title: "VA Dealer and Custodian Consultation Conclusions Published",
      description: "SFC/FSTB published consultation conclusions on VA dealer and custodian regulation, accelerating full-spectrum VA licensing",
    },
    {
      date: "2025-11",
      title: "Project Ensemble Enters EnsembleTX Pilot",
      description: "Moved from sandbox experimentation to real-value transaction pilot, covering broader tokenized asset scenarios",
    },
    {
      date: "2025-08",
      title: "Stablecoin Ordinance Officially Enacted",
      description: "The Stablecoin Ordinance officially came into effect; HKMA became the stablecoin issuer regulator",
    },
    {
      date: "2024-07",
      title: "Stablecoin Bill Passed",
      description: "The Legislative Council passed the Stablecoin Bill, establishing a licensing regime for fiat-backed stablecoins",
    },
    {
      date: "2024-02",
      title: "First Tokenized Green Bonds Issued",
      description: "The Hong Kong government issued the world's first tranche of tokenized green bonds, totaling HK$800 million",
    },
    {
      date: "2023-06",
      title: "VATP Licensing Regime Takes Effect",
      description: "The virtual asset trading platform licensing regime was officially implemented; all platforms operating in Hong Kong are required to be licensed",
    },
    {
      date: "2022-10",
      title: "Hong Kong Publishes Policy Statement on Virtual Assets",
      description: "The Financial Secretary published the Policy Statement on the Development of Virtual Assets in Hong Kong, declaring the vision of developing Hong Kong as an international virtual asset hub",
    },
  ],

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

  sources: [
    { name: "Securities and Futures Commission (SFC)", url: "https://www.sfc.hk" },
    { name: "Hong Kong Monetary Authority (HKMA)", url: "https://www.hkma.gov.hk" },
    { name: "Hong Kong Government News", url: "https://www.news.gov.hk" },
    { name: "Office of the Financial Secretary", url: "https://www.fso.gov.hk" },
    { name: "Atlantic Council CBDC Tracker", url: "https://www.atlanticcouncil.org/cbdctracker/" },
    { name: "Monetary Authority of Singapore (MAS)", url: "https://www.mas.gov.sg" },
    { name: "Dubai Virtual Assets Regulatory Authority (VARA)", url: "https://vara.ae" },
  ],

  // ─── RWA Tracker ────────────────────────────────────────────────────

  rwa: {
    hero: {
      back: "← Back to Dashboard",
      badge: "RWA Tracker v1.0",
      title: "Hong Kong RWA Tokenization Tracker",
      subtitle: "Global RWA market panorama + Hong Kong localization analysis — On-chain data, benchmarked against RWA.xyz / DeFiLlama",
      tagOnchain: "On-chain data direct",
      tagBenchmark: "Global vs HK benchmark",
      navTitle: "📊 RWA Tokenization Tracker",
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
