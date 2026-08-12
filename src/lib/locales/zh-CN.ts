export const zhCN = {
  meta: {
    title: "HK Web3 Pulse | 香港Web3进展面板",
    description:
      "客观、中立、可持续更新的香港Web3发展仪表盘，聚焦监管、RWA、稳定币三大领域，对标全球领先司法辖区。",
  },

  nav: {
    home: "首页",
    rwa: "RWA 追踪器",
  },

  hero: {
    badge: "MVP v1.0",
    title: "HK Web3 Pulse",
    subtitle:
      "香港 Web3 进展面板 — 客观追踪香港在监管、RWA、稳定币三大关键领域的真实进展",
    tagOfficial: "基于公开官方信息",
    tagCompare: "对标新加坡 / 迪拜",
  },

  overallStatus: {
    title: "总体成熟度评估",
    maturity: "成熟度",
    updated: "更新于",
    accuracyNote:
      "基于公开官方信息，人工校验。数据可点击下方来源链接核实。",
  },

  domains: {
    title: "三大核心领域",
    subtitle:
      "聚焦监管、RWA 代币化、稳定币 — 香港 Web3 发展的关键赛道",
    sections: {
      milestones: "关键里程碑",
      globalComparison: "全球对标",
      lastUpdated: "最后更新",
    },
  },

  comparison: {
    title: "全球对标简表",
    subtitle:
      "香港 vs 新加坡 vs 迪拜 — 三大关键领域横向对比",
    dataSource:
      "数据来源：Atlantic Council / OMFIF Tracker + MAS官网 + VARA公开信息",
    headers: {
      area: "领域",
      hongKong: "香港",
      singapore: "新加坡",
      dubai: "迪拜",
    },
  },

  timeline: {
    title: "关键里程碑时间线",
    subtitle: "2022-2026 香港 Web3 发展历程中的重要节点",
  },

  footer: {
    methodologyTitle: "数据来源与方法论",
    sourcesTitle: "主要数据来源",
    reportError: "报告错误或建议",
    copyright: "HK Web3 Pulse © 2026 — 客观追踪香港 Web3 发展进展",
  },

  statusLabels: {
    Leading: "全球领先",
    Advancing: "积极推进",
    Developing: "发展中",
    Emerging: "起步阶段",
  },

  domainData: [
    {
      id: "regulation",
      status: "Advancing" as const,
      name: "监管与牌照",
      description:
        "香港证监会（SFC）和香港金管局（HKMA）建立了较为完善的虚拟资产监管框架，VATPs牌照制度持续优化。",
      globalComparison:
        "与新加坡监管水平接近，执行速度较快；迪拜VARA更激进但合规门槛相对较低",
      milestones: [
        {
          date: "2023-06",
          description: [
            "VATPs（虚拟资产交易平台）牌照制度正式运行，要求持牌运营",
          ],
        },
        {
          date: "2025-08",
          description: ["稳定币发行人监管框架条例正式生效"],
        },
        {
          date: "2026-01",
          description: [
            "首批稳定币发行人牌照开始发放（高门槛，仅少数获批）",
          ],
        },
        {
          date: "2026-Q2",
          description: ["托管服务与数字资产交易商新规正在推进立法"],
        },
      ],
      lastUpdated: "2026-08-05",
    },
    {
      id: "rwa",
      status: "Advancing" as const,
      name: "RWA代币化",
      description:
        "香港在真实世界资产（RWA）代币化领域处于全球领先地位，政府和监管机构积极推动。",
      globalComparison:
        "香港在RWA代币化方面领先新加坡和迪拜，政府直接参与发行为全球罕见",
      milestones: [
        {
          date: "2024-02",
          description: [
            "香港政府成功发行首批代币化绿色债券，规模8亿港元",
          ],
        },
        {
          date: "2024-08",
          description: [
            "HKMA启动Project Ensemble沙盒，探索代币化资产银行间交易",
          ],
        },
        {
          date: "2025-06",
          description: [
            "Project Ensemble推进至EnsembleTX阶段，扩展至更广泛的代币化应用场景",
          ],
        },
        {
          date: "2025-12",
          description: [
            "代币化绿色和基建债券累计发行规模超过20亿美元",
          ],
        },
        {
          date: "2026-03",
          description: ["SFC批准首只房地产代币化产品及商品RWA基金"],
        },
        {
          date: "2026-04",
          description: ["代币化产品二级市场向零售投资者开放，零售投资者可参与购买代币化债券"],
        },
        {
          date: "2026-04",
          description: ["香港Web3 Festival 2026举办（4月20-23日），汇聚全球Web3生态参与者"],
        },
      ],
      lastUpdated: "2026-08-05",
    },
    {
      id: "stablecoins",
      status: "Developing" as const,
      name: "稳定币",
      description:
        "稳定币监管框架已落地，发行人牌照开始发放，但市场规模和生态仍处于早期发展阶段。",
      globalComparison:
        "新加坡MAS稳定币框架2023年已先行落地；迪拜对稳定币态度开放但监管细则仍在完善",
      milestones: [
        {
          date: "2024-07",
          description: [
            "香港立法会通过《稳定币条例草案》，建立法币挂钩稳定币发牌制度",
          ],
        },
        {
          date: "2025-08",
          description: [
            "《稳定币条例》正式生效，HKMA成为稳定币发行人监管机构",
          ],
        },
        {
          date: "2025-10",
          description: [
            "HKMA收到70+ expressions of interest，强调需有可行商业模式",
          ],
        },
        {
          date: "2026-04",
          description: [
            "HKMA正式发放首批稳定币发行人牌照：汇丰银行及Anchorpoint Financial（渣打银行与安拟集团合资）获批",
          ],
        },
        {
          date: "2026-06",
          description: [
            "HKMA放宽持牌稳定币发行人要求，降低合规门槛以吸引更多机构申请",
          ],
        },
      ],
      lastUpdated: "2026-08-05",
    },
  ],

  comparisonData: [
    {
      area: "监管与牌照",
      hongKong: "积极推进 — VATP牌照制度成熟，稳定币条例生效",
      singapore: "积极推进 — MAS牌照制度运行多年，框架完善",
      dubai: "积极推进 — VARA框架激进，牌照发放速度快",
    },
    {
      area: "RWA代币化",
      hongKong: "积极推进 — 政府直接参与代币化债券发行，全球领先",
      singapore: "发展中 — 沙盒探索阶段，政府参与度较低",
      dubai: "发展中 — DIFC积极探索，但规模有限",
    },
    {
      area: "稳定币",
      hongKong: "积极推进 — 首批牌照正式发放（汇丰、Anchorpoint），监管要求持续放宽",
      singapore: "积极推进 — 监管框架先行，市场活跃度较高",
      dubai: "发展中 — 态度开放，监管细则待完善",
    },
  ],

  timelineData: [
    {
      date: "2026-06",
      title: "HKMA放宽稳定币监管要求",
      description: "金管局放宽持牌稳定币发行人的合规要求，降低准入门槛以鼓励更多机构参与",
    },
    {
      date: "2026-04",
      title: "SFC代币化债券二级市场框架",
      description: "证监会发布新框架，允许持牌平台向零售投资者提供代币化债券交易，为全球首个明确监管",
    },
    {
      date: "2026-04",
      title: "首批稳定币牌照正式发放",
      description: "汇丰银行及Anchorpoint Financial获HKMA批准成为首批正式持牌稳定币发行人",
    },
    {
      date: "2026-04",
      title: "Web3 Festival 2026",
      description: "香港Web3 Festival 2026举办，代币化二级市场向零售投资者开放",
    },
    {
      date: "2026-Q2",
      title: "托管与交易商新规推进",
      description: "虚拟资产托管服务和数字资产交易商新规正在推进立法",
    },
    {
      date: "2026-03",
      title: "首只房地产RWA产品获批",
      description: "SFC批准首只房地产代币化产品及商品RWA基金",
    },
    {
      date: "2026-01",
      title: "首批稳定币牌照发放",
      description: "HKMA向少数符合条件的机构发放首批稳定币发行人牌照",
    },
    {
      date: "2025-12",
      title: "代币化债券累计超20亿美元",
      description: "香港代币化绿色和基建债券累计发行规模突破20亿美元",
    },
    {
      date: "2025-10",
      title: "70+稳定币意向申请",
      description:
        "HKMA收到超过70份稳定币发行人意向表达，强调需有可行商业模式",
    },
    {
      date: "2025-08",
      title: "稳定币条例正式生效",
      description: "《稳定币条例》正式生效，HKMA开始接受发行人牌照申请",
    },
    {
      date: "2025-06",
      title: "EnsembleTX阶段启动",
      description:
        "Project Ensemble扩展至EnsembleTX，覆盖更广泛的代币化资产场景",
    },
    {
      date: "2024-08",
      title: "Project Ensemble沙盒启动",
      description: "HKMA启动Ensemble沙盒，探索代币化资产在银行间交易的应用",
    },
    {
      date: "2024-07",
      title: "《稳定币条例草案》通过",
      description: "立法会通过稳定币条例草案，建立法币挂钩稳定币发牌制度",
    },
    {
      date: "2024-02",
      title: "首批代币化绿色债券发行",
      description: "香港政府发行全球首批代币化绿色债券，规模8亿港元",
    },
    {
      date: "2023-06",
      title: "VATPs牌照制度生效",
      description:
        "虚拟资产交易平台发牌制度正式实施，所有在港运营平台须持牌",
    },
    {
      date: "2022-10",
      title: "香港发表虚拟资产政策宣言",
      description:
        "财政司发表《有关香港虚拟资产发展的政策宣言》，宣示发展为国际虚拟资产中心的愿景",
    },
  ],

  methodology:
    "本面板数据基于公开官方信息整理，状态分级采用四级标准：Leading（全球领先）、Advancing（积极推进）、Developing（发展中）、Emerging（起步阶段）。所有里程碑均标注官方来源链接，支持人工校验。",

  disclaimer:
    "本网站内容仅供信息参考，不构成任何投资建议。数据基于公开信息整理，可能存在滞后或误差，请以官方发布为准。",

  likeButton: {
    label: "点赞支持",
    liked: "已点赞",
  },

  feedback: {
    title: "意见反馈",
    subtitle: "发现数据有误？有改进建议？欢迎告诉我们。",
    nameLabel: "姓名",
    namePlaceholder: "选填",
    emailLabel: "邮箱",
    emailPlaceholder: "选填，方便我们回复你",
    messageLabel: "意见内容",
    messagePlaceholder: "请描述你发现的问题或建议…",
    privacyNote: "我们不会公开你的个人信息",
    submitButton: "提交",
    sending: "发送中…",
    sent: "已提交，谢谢！",
    error: "提交失败，请稍后重试或直接发邮件给我们。",
    directEmail: "也可以直接发邮件到 414628016@qq.com",
  },

  sources: [
    {
      name: "香港证监会 (SFC)",
      url: "https://www.sfc.hk",
    },
    {
      name: "香港金融管理局 (HKMA)",
      url: "https://www.hkma.gov.hk",
    },
    {
      name: "香港政府新闻网",
      url: "https://www.news.gov.hk",
    },
    {
      name: "香港财政司司长办公室",
      url: "https://www.fso.gov.hk",
    },
    {
      name: "Atlantic Council CBDC Tracker",
      url: "https://www.atlanticcouncil.org/cbdctracker/",
    },
    {
      name: "新加坡金管局 (MAS)",
      url: "https://www.mas.gov.sg",
    },
    {
      name: "迪拜虚拟资产监管局 (VARA)",
      url: "https://vara.ae",
    },
  ],

  // ─── RWA Tracker ────────────────────────────────────────────────────

  rwa: {
    hero: {
      back: "← 返回主面板",
      badge: "RWA Tracker v1.0",
      title: "香港 RWA 代币化追踪器",
      subtitle: "全球 RWA 市场全景 + 香港本地化适用性分析 — 链上数据直读，对标 RWA.xyz / DeFiLlama",
      tagOnchain: "链上数据直读",
      tagBenchmark: "全球 vs 香港对标",
      navTitle: "📊 RWA 代币化追踪器",
      navSubtitle: "全球 $38.2B RWA 市场全景 + 香港本地化分析 →",
    },
    overview: {
      title: "全球 RWA 市场概览",
      subtitle: "数据来自 RWA.xyz 和 DeFiLlama，交叉验证",
      dataDate: "数据日期",
      totalAum: "RWA 总 AUM",
      totalTvl: "DeFi TVL",
      holders: "持有人总数",
      holdersSub: "40天增 {growth}，新增 {new}",
      stockGrowth: "新增来自股票",
      stockGrowthSub: "93% 新增用户来自股票类资产",
      dataGapTitle: "数据差异",
      dataGapNote: "RWA.xyz 追踪 1,203 个资产 ($38.2B)，DeFiLlama 仅覆盖 106 个协议 ($27.7B)。差异主要来自非美元资产、机构级产品和新兴项目。市场规模以 RWA.xyz 为准。",
    },
    assets: {
      title: "资产类型排行",
      subtitle: "按 TVL 排名的 RWA 资产类别，标注香港适用性",
      hkRelevance: "香港适用",
      hkNote: "香港评估",
      categoryNames: {
        treasury: "国债/政府债券",
        gold: "黄金/大宗商品",
        stocks: "股票与证券",
        privateCredit: "私人信贷",
        moneyMarket: "货币市场/指数",
        realEstate: "房地产",
        other: "其他",
      },
    },
    projects: {
      title: "头部项目排行",
      subtitle: "按 TVL 排名的全球 RWA 协议，🇭🇰 标记表示与香港相关",
      name: "项目",
      category: "类别",
      tvl: "TVL",
      issuer: "发行方",
      chain: "链",
      hkRelevant: "香港",
    },
    stocks: {
      title: "股票代币化 — 当前最大爆发点",
      subtitle: "40天新增 70 万用户，93% 来自股票类资产。Top 3 占市场 86.5%",
      platform: "平台",
      stockCount: "底层股票数",
      value: "总价值",
      marketShare: "市场份额",
      distributed: "Distributed",
      hkUnavailable: "⚠️ 香港不可用",
    },
    chains: {
      title: "链分布格局",
      subtitle: "RWA 代币化的主要部署链，Ethereum 仍为绝对主导",
      dominanceLabels: {
        dominant: "主导",
        growing: "增长中",
        emerging: "新兴",
      },
    },
    hk: {
      title: "香港 RWA 本地化分析",
      subtitle: "全球趋势的 30-40% 直接适用于香港，60-70% 需要本地化修正",
      comparisonMetric: "指标",
      global: "全球",
      hongKong: "香港",
      gap: "差距",
      rwaTvl: "RWA TVL",
      holders: "持有人数",
      tokenizedStocks: "代币化股票",
      compliantChannels: "合规渠道数",
      notAvailable: "不存在",
      vatps: "持牌虚拟资产交易平台 (VATP)",
      products: "香港 RWA 产品",
      regulatoryAccess: "监管准入状态",
      accessLabels: {
        retailTreasury: "散户·国债",
        retailStocks: "散户·股票",
        retailGold: "散户·黄金",
        piTreasury: "专业投资者·国债",
        piThreshold: "PI 门槛",
        stablecoin: "稳定币",
      },
    },
    trends: {
      title: "关键趋势与香港影响",
      subtitle: "全球 RWA 八大趋势，标注对香港的影响程度",
      hkImpact: "香港影响",
      impactLabels: {
        high: "高",
        medium: "中",
        low: "低",
      },
    },
    disclosure: {
      title: "香港 RWA 链上资产交易信息披露",
      subtitle: "对标 RWA.xyz 香港版 — 链上数据直读 + 合规状态 + 交易流动性，透明披露所有香港相关 RWA 产品",
      updated: "数据更新于",
      onchainTitle: "链上 Token 数据直读",
      complianceTitle: "SFC 合规披露表",
      liquidityTitle: "交易与流动性数据",
      dataSourcesTitle: "数据来源",
      disclaimerTitle: "数据免责声明",
      disclaimerNote:
        "本板块数据来源于公开链上数据、SFC/HKMA 官方公告及第三方平台。链上数据可能存在延迟，合规状态以官方最新发布为准。数据仅供参考，不构成任何投资建议。",
      contract: "合约地址",
      chain: "链",
      totalSupply: "总供应量",
      holders: "持有人",
      transfers24h: "24h 转账",
      price: "价格",
      liquidity: "流动性",
      product: "产品",
      issuer: "发行方",
      sfcStatus: "SFC 状态",
      vatp: "VATP 上架",
      investor: "投资者类型",
      restrictions: "限制条款",
      launch: "上线时间",
      tvl: "TVL",
      volume24h: "24h 交易量",
    },
  },
};
