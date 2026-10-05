import { getDomainData, getComparisonData, getTimelineData, getSources } from "@/data/domain-data";

const domainData = getDomainData("zh-TW");
const comparisonData = getComparisonData("zh-TW");
const timelineData = getTimelineData("zh-TW");
const sources = getSources("zh-TW");

export const zhTW = {
  meta: {
    title: "HK Web3 Pulse | 香港Web3進展面板",
    description:
      "客觀、中立、可持續更新的香港Web3發展儀表板，聚焦監管、RWA、穩定幣三大領域，對標全球領先司法轄區。",
  },

  nav: {
    home: "首頁",
    rwa: "RWA 追蹤器",
  },

  hero: {
    badge: "MVP v1.0",
    title: "HK Web3 Pulse",
    subtitle:
      "香港 Web3 進展面板 — 客觀追踪香港在監管、RWA、穩定幣三大關鍵領域的真實進展",
    tagOfficial: "基於公開官方信息",
    tagCompare: "對標新加坡 / 迪拜",
  },

  overallStatus: {
    title: "總體成熟度評估",
    maturity: "成熟度",
    updated: "更新於",
    accuracyNote:
      "基於公開官方信息，人工校驗。數據可點擊下方來源連結核實。",
  },

  domains: {
    title: "三大核心領域",
    subtitle:
      "聚焦監管、RWA 代幣化、穩定幣 — 香港 Web3 發展的關鍵賽道",
    sections: {
      milestones: "關鍵里程碑",
      globalComparison: "全球對標",
      lastUpdated: "最後更新",
    },
  },

  comparison: {
    title: "全球對標簡表",
    subtitle:
      "香港 vs 新加坡 vs 迪拜 — 三大關鍵領域橫向對比",
    dataSource:
      "數據來源：Atlantic Council / OMFIF Tracker + MAS官網 + VARA公開資訊",
    headers: {
      area: "領域",
      hongKong: "香港",
      singapore: "新加坡",
      dubai: "迪拜",
    },
  },

  timeline: {
    title: "關鍵里程碑時間線",
    subtitle: "2022-2026 香港 Web3 發展歷程中的重要節點",
  },

  footer: {
    methodologyTitle: "數據來源與方法論",
    sourcesTitle: "主要數據來源",
    reportError: "報告錯誤或建議",
    copyright: "HK Web3 Pulse © 2026 — 客觀追踪香港 Web3 發展進展",
  },

  statusLabels: {
    Leading: "全球領先",
    Advancing: "積極推進",
    Developing: "發展中",
    Emerging: "起步階段",
  },

  domainData,
  comparisonData,
  timelineData,

  methodology:
    "本面板數據基於公開官方資訊整理，狀態分級採用四級標準：Leading（全球領先）、Advancing（積極推進）、Developing（發展中）、Emerging（起步階段）。所有里程碑均標註官方來源連結，支持人工校驗。",

  disclaimer:
    "本網站內容僅供資訊參考，不構成任何投資建議。數據基於公開資訊整理，可能存在滯後或誤差，請以官方發佈為準。",

  likeButton: {
    label: "點讚支持",
    liked: "已點讚",
  },

  feedback: {
    title: "意見回饋",
    subtitle: "發現數據有誤？有改進建議？歡迎告訴我們。",
    nameLabel: "姓名",
    namePlaceholder: "選填",
    emailLabel: "電郵",
    emailPlaceholder: "選填，方便我們回覆你",
    messageLabel: "意見內容",
    messagePlaceholder: "請描述你發現的問題或建議…",
    privacyNote: "我們不會公開你的個人資訊",
    submitButton: "提交",
    sending: "發送中…",
    sent: "已提交，謝謝！",
    error: "提交失敗，請稍後重試或直接發郵件給我們。",
    directEmail: "也可以直接發郵件到 414628016@qq.com",
  },

  sources,

  // ─── RWA Tracker ────────────────────────────────────────────────────

  rwa: {
    hero: {
      back: "← 返回主面板",
      badge: "RWA Tracker v1.0",
      title: "香港 RWA 趨勢追蹤",
      subtitle: "全球 RWA 市場全景 + 香港本地化適用性分析",
      tagBenchmark: "全球 vs 香港對標",
      navTitle: "📊 RWA 趨勢追蹤",
      navSubtitle: "全球 $38.2B RWA 市場全景 + 香港本地化分析 →",
    },
    overview: {
      title: "全球 RWA 市場概覽",
      subtitle: "數據來自 RWA.xyz 和 DeFiLlama，交叉驗證",
      dataDate: "數據日期",
      totalAum: "RWA 總 AUM",
      totalTvl: "DeFi TVL",
      holders: "持有人總數",
      holdersSub: "40天增 {growth}，新增 {new}",
      stockGrowth: "新增來自股票",
      stockGrowthSub: "93% 新增用戶來自股票類資產",
      dataGapTitle: "數據差異",
      dataGapNote: "RWA.xyz 追蹤 1,203 個資產 ($38.2B)，DeFiLlama 僅覆蓋 106 個協議 ($27.7B)。差異主要來自非美元資產、機構級產品和新興項目。市場規模以 RWA.xyz 為準。",
    },
    assets: {
      title: "資產類型排行",
      subtitle: "按 TVL 排名的 RWA 資產類別，標註香港適用性",
      hkRelevance: "香港適用",
      hkNote: "香港評估",
      categoryNames: {
        treasury: "國債/政府債券",
        gold: "黃金/大宗商品",
        stocks: "股票與證券",
        privateCredit: "私人信貸",
        moneyMarket: "貨幣市場/指數",
        realEstate: "房地產",
        other: "其他",
      },
    },
    projects: {
      title: "頭部項目排行",
      subtitle: "按 TVL 排名的全球 RWA 協議，🇭🇰 標記表示與香港相關",
      name: "項目",
      category: "類別",
      tvl: "TVL",
      issuer: "發行方",
      chain: "鏈",
      hkRelevant: "香港",
    },
    stocks: {
      title: "股票代幣化 — 當前最大爆發點",
      subtitle: "40天新增 70 萬用戶，93% 來自股票類資產。Top 3 佔市場 86.5%",
      platform: "平台",
      stockCount: "底層股票數",
      value: "總價值",
      marketShare: "市場份額",
      distributed: "Distributed",
      hkUnavailable: "⚠️ 香港不可用",
    },
    chains: {
      title: "鏈分佈格局",
      subtitle: "RWA 代幣化的主要部署鏈，Ethereum 仍為絕對主導",
      dominanceLabels: {
        dominant: "主導",
        growing: "增長中",
        emerging: "新興",
      },
    },
    hk: {
      title: "香港 RWA 本地化分析",
      subtitle: "全球趨勢的 30-40% 直接適用於香港，60-70% 需要本地化修正",
      comparisonMetric: "指標",
      global: "全球",
      hongKong: "香港",
      gap: "差距",
      rwaTvl: "RWA TVL",
      holders: "持有人數",
      tokenizedStocks: "代幣化股票",
      compliantChannels: "合規渠道數",
      notAvailable: "不存在",
      vatps: "持牌虛擬資產交易平台 (VATP)",
      products: "香港 RWA 產品",
      regulatoryAccess: "監管準入狀態",
      accessLabels: {
        retailTreasury: "散戶·國債",
        retailStocks: "散戶·股票",
        retailGold: "散戶·黃金",
        piTreasury: "專業投資者·國債",
        piThreshold: "PI 門檻",
        stablecoin: "穩定幣",
      },
    },
    trends: {
      title: "關鍵趨勢與香港影響",
      subtitle: "全球 RWA 八大趨勢，標注對香港的影響程度",
      hkImpact: "香港影響",
      impactLabels: {
        high: "高",
        medium: "中",
        low: "低",
      },
    },
    disclosure: {
      title: "香港 RWA 鏈上資產交易信息披露",
      subtitle: "對標 RWA.xyz 香港版 — 鏈上數據直讀 + 合規狀態 + 交易流動性，透明披露所有香港相關 RWA 產品",
      updated: "數據更新於",
      onchainTitle: "鏈上 Token 數據直讀",
      complianceTitle: "SFC 合規披露表",
      liquidityTitle: "交易與流動性數據",
      dataSourcesTitle: "數據來源",
      disclaimerTitle: "數據免責聲明",
      disclaimerNote:
        "本板塊數據來源於公開鏈上數據、SFC/HKMA 官方公告及第三方平台。鏈上數據可能存在延遲，合規狀態以官方最新發布為準。數據僅供參考，不構成任何投資建議。",
      contract: "合約地址",
      chain: "鏈",
      totalSupply: "總供應量",
      holders: "持有人",
      transfers24h: "24h 轉賬",
      price: "價格",
      liquidity: "流動性",
      product: "產品",
      issuer: "發行方",
      sfcStatus: "SFC 狀態",
      vatp: "VATP 上架",
      investor: "投資者類型",
      restrictions: "限制條款",
      launch: "上線時間",
      tvl: "TVL",
      volume24h: "24h 交易量",
    },
  },
};
