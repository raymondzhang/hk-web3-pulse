import { getDomainData, getComparisonData, getTimelineData, getSources } from "@/data/domain-data";

const domainData = getDomainData("zh-CN");
const comparisonData = getComparisonData("zh-CN");
const timelineData = getTimelineData("zh-CN");
const sources = getSources("zh-CN");

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

  domainData,
  comparisonData,
  timelineData,

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

  sources,

  // ─── RWA Tracker ────────────────────────────────────────────────────

  rwa: {
    hero: {
      back: "← 返回主面板",
      badge: "RWA Tracker v1.0",
      title: "香港 RWA 趋势追踪",
      subtitle: "全球 RWA 市场全景 + 香港本地化适用性分析",
      tagBenchmark: "全球 vs 香港对标",
      navTitle: "📊 RWA 趋势追踪",
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
