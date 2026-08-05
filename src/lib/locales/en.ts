export const en = {
  meta: {
    title: "HK Web3 Pulse | Hong Kong Web3 Progress Dashboard",
    description:
      "An objective, neutral, and continuously updated Hong Kong Web3 development dashboard, focusing on regulation, RWA, and stablecoins, benchmarked against leading global jurisdictions.",
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
        "The SFC and HKMA have established a comprehensive virtual asset regulatory framework, with the VATP licensing regime continuing to be refined.",
      globalComparison:
        "Regulatory standards are on par with Singapore with faster execution; Dubai's VARA takes a more aggressive approach but with relatively lower compliance thresholds.",
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
          date: "2026-01",
          description: [
            "First batch of stablecoin issuer licenses issued (high threshold, only a few approved)",
          ],
        },
        {
          date: "2026-04",
          description: [
            "SFC released new framework allowing tokenized bond trading on licensed platforms, opening to retail investors",
          ],
        },
        {
          date: "2026-06",
          description: [
            "SFC issued circular on Relevant Stablecoin services, clarifying regulatory requirements for VATPs offering stablecoin services",
          ],
        },
      ],
      lastUpdated: "2026-08-05",
    },
    {
      id: "rwa",
      status: "Advancing" as const,
      name: "RWA / Tokenization",
      description:
        "Hong Kong is a global leader in real-world asset (RWA) tokenization, with active promotion from both the government and regulators.",
      globalComparison:
        "Hong Kong leads both Singapore and Dubai in RWA tokenization; direct government participation in bond issuance is rare worldwide.",
      milestones: [
        {
          date: "2024-02",
          description: [
            "Hong Kong government successfully issued the first tranche of tokenized green bonds, totaling HK$800 million",
          ],
        },
        {
          date: "2024-08",
          description: [
            "HKMA launched Project Ensemble sandbox to explore interbank trading of tokenized assets",
          ],
        },
        {
          date: "2025-06",
          description: [
            "Project Ensemble advanced to the EnsembleTX phase, expanding to broader tokenization use cases",
          ],
        },
        {
          date: "2025-12",
          description: [
            "Cumulative issuance of tokenized green and infrastructure bonds exceeded US$2 billion",
          ],
        },
        {
          date: "2026-03",
          description: [
            "SFC approved the first real estate tokenization product and commodity RWA fund",
          ],
        },
      ],
      lastUpdated: "2026-08-05",
    },
    {
      id: "stablecoins",
      status: "Developing" as const,
      name: "Stablecoins",
      description:
        "The stablecoin regulatory framework has been enacted and issuer licenses are being granted, but market size and ecosystem remain in early development.",
      globalComparison:
        "Singapore's MAS stablecoin framework was enacted earlier in 2023; Dubai maintains an open stance on stablecoins but detailed regulations are still being refined.",
      milestones: [
        {
          date: "2024-07",
          description: [
            "Hong Kong Legislative Council passed the Stablecoin Bill, establishing a licensing regime for fiat-backed stablecoin issuers",
          ],
        },
        {
          date: "2025-08",
          description: [
            "Stablecoin Ordinance officially came into effect; HKMA became the stablecoin issuer regulator",
          ],
        },
        {
          date: "2025-10",
          description: [
            "HKMA received 70+ expressions of interest, emphasizing the need for viable business models",
          ],
        },
        {
          date: "2026-01",
          description: [
            "First batch of stablecoin issuer licenses began issuance; high threshold with only a few institutions approved",
          ],
        },
      ],
      lastUpdated: "2026-08-05",
    },
  ],

  comparisonData: [
    {
      area: "Regulation & Licensing",
      hongKong: "Advancing — VATP licensing regime is mature; Stablecoin Ordinance in effect",
      singapore: "Advancing — MAS licensing regime has been operational for years with a well-established framework",
      dubai: "Advancing — VARA framework is aggressive; license issuance is fast-paced",
    },
    {
      area: "RWA / Tokenization",
      hongKong: "Advancing — Government directly participates in tokenized bond issuance, a global leader",
      singapore: "Developing — Sandbox exploration phase; lower level of government participation",
      dubai: "Developing — DIFC is actively exploring, but at a limited scale",
    },
    {
      area: "Stablecoins",
      hongKong: "Advancing — First licenses officially granted (HSBC, Anchorpoint); requirements being relaxed",
      singapore: "Advancing — Regulatory framework was enacted first; higher market activity",
      dubai: "Developing — Open stance; detailed regulations still being refined",
    },
  ],

  timelineData: [
    {
      date: "2026-06",
      title: "HKMA Relaxes Stablecoin Requirements",
      description: "HKMA relaxed compliance requirements for licensed stablecoin issuers, lowering barriers to encourage more institutional participation",
    },
    {
      date: "2026-04",
      title: "SFC Tokenized Bond Secondary Market Framework",
      description: "SFC released new framework allowing licensed platforms to offer tokenized bond trading to retail investors, first explicit regulation globally",
    },
    {
      date: "2026-04",
      title: "First Stablecoin Licenses Officially Granted",
      description: "HSBC and Anchorpoint Financial approved by HKMA as first officially licensed stablecoin issuers",
    },
    {
      date: "2026-04",
      title: "Web3 Festival 2026",
      description: "Hong Kong Web3 Festival 2026 held; tokenized secondary market opened to retail investors",
    },
    {
      date: "2026-Q2",
      title: "Custody & Dealer New Regulations Advancing",
      description:
        "New regulations for virtual asset custody services and digital asset dealers are advancing through legislation.",
    },
    {
      date: "2026-03",
      title: "First Real Estate RWA Product Approved",
      description:
        "SFC approved the first real estate tokenization product and commodity RWA fund.",
    },
    {
      date: "2026-01",
      title: "First Stablecoin Licenses Issued",
      description:
        "HKMA issued the first batch of stablecoin issuer licenses to a select group of qualified institutions.",
    },
    {
      date: "2025-12",
      title: "Tokenized Bond Cumulative Issuance Exceeds US$2 Billion",
      description:
        "Hong Kong's cumulative issuance of tokenized green and infrastructure bonds surpassed US$2 billion.",
    },
    {
      date: "2025-10",
      title: "70+ Stablecoin Expressions of Interest",
      description:
        "HKMA received over 70 expressions of interest from prospective stablecoin issuers, emphasizing the need for viable business models.",
    },
    {
      date: "2025-08",
      title: "Stablecoin Ordinance Officially Enacted",
      description:
        "The Stablecoin Ordinance officially came into effect; HKMA began accepting stablecoin issuer license applications.",
    },
    {
      date: "2025-06",
      title: "EnsembleTX Phase Launched",
      description:
        "Project Ensemble expanded to EnsembleTX, covering a broader range of tokenized asset scenarios.",
    },
    {
      date: "2024-08",
      title: "Project Ensemble Sandbox Launched",
      description:
        "HKMA launched the Ensemble sandbox to explore the use of tokenized assets in interbank trading.",
    },
    {
      date: "2024-07",
      title: "Stablecoin Bill Passed",
      description:
        "The Legislative Council passed the Stablecoin Bill, establishing a licensing regime for fiat-backed stablecoins.",
    },
    {
      date: "2024-02",
      title: "First Tokenized Green Bonds Issued",
      description:
        "The Hong Kong government issued the world's first tranche of tokenized green bonds, totaling HK$800 million.",
    },
    {
      date: "2023-06",
      title: "VATP Licensing Regime Takes Effect",
      description:
        "The virtual asset trading platform licensing regime was officially implemented; all platforms operating in Hong Kong are required to be licensed.",
    },
    {
      date: "2022-10",
      title: "Hong Kong Publishes Policy Statement on Virtual Assets",
      description:
        "The Financial Secretary published the Policy Statement on the Development of Virtual Assets in Hong Kong, declaring the vision of developing Hong Kong as an international virtual asset hub.",
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
};
