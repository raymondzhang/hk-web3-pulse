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

  domainData: [
    {
      id: "regulation",
      status: "Advancing" as const,
      name: "監管與牌照",
      description:
        "香港建立了全球最完整的虛擬資產監管體系之一。VATP牌照制度成熟運行，四項新牌照制度（交易商、託管商、顧問、資管）立法推進中，SFC持續強化網絡安全與投資者保護要求。",
      globalComparison:
        "監管廣度領先新加坡和迪拜——香港正構建全鏈條VA牌照體系；迪拜VARA已發51張牌照但合規門檻較低",
      milestones: [
        {
          date: "2023-06",
          description: [
            "VATPs（虛擬資產交易平台）牌照制度正式運作，要求持牌運營",
          ],
        },
        {
          date: "2025-08",
          description: ["穩定幣發行人監管框架條例正式生效"],
        },
        {
          date: "2025-12",
          description: [
            "SFC/FSTB發布虛擬資產交易商和託管商監管諮詢結論",
          ],
        },
        {
          date: "2026-05",
          description: [
            "SFC/FSTB發布VA諮詢和VA資管服務監管諮詢結論，四項新牌照制度成型",
          ],
        },
        {
          date: "2026-07",
          description: [
            "SFC發布強制防釣魚認證要求，禁止VATP使用短信驗證碼作為唯一登錄方式",
          ],
        },
        {
          date: "2026-Q3",
          description: [
            "虛擬資產交易商、託管商、顧問、資管四項新牌照制度立法草案準備提交立法會",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
    {
      id: "rwa",
      status: "Advancing" as const,
      name: "RWA代幣化",
      description:
        "香港在RWA代幣化領域全球領先：政府直接參與代幣化債券發行，SFC批准首個原生物代幣化基金，數字債券基礎設施（DACC）落地，正從政府主導走向市場化多元發展。",
      globalComparison:
        "全球領先——香港是唯一同時擁有政府代幣化債券、SFC批准代幣化基金和專項清算基礎設施的司法轄區",
      milestones: [
        {
          date: "2024-02",
          description: [
            "香港政府成功發行首批代幣化綠色債券，規模8億港元",
          ],
        },
        {
          date: "2025-11",
          description: [
            "Project Ensemble從沙盒進入EnsembleTX試點階段，開展真實價值交易",
          ],
        },
        {
          date: "2026-03",
          description: [
            "SFC批准首隻房地產代幣化產品及商品RWA基金",
          ],
        },
        {
          date: "2026-04",
          description: [
            "代幣化產品二級市場向零售投資者開放，Web3 Festival 2026舉辦",
          ],
        },
        {
          date: "2026-07",
          description: [
            "SFC批准香港首個原生物代幣化債券基金（Baillie Gifford），全球資管機構在港佈局",
          ],
        },
        {
          date: "2026-07",
          description: [
            "DACC（數字資產清算中心）落地香港，構建代幣化債券、穩定幣與跨境人民幣結算基礎設施",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
    {
      id: "stablecoins",
      status: "Advancing" as const,
      name: "穩定幣",
      description:
        "穩定幣監管框架全面運行：匯豐和Anchorpoint獲首批牌照，36份正式申請待審，HKMA對第二批牌照持開放審慎態度，有望在國慶前後發放新一輪牌照。",
      globalComparison:
        "框架成熟度與新加坡MAS框架接近，但以大型銀行為主導的牌照策略與兩地均不同；中國大陸42號通知明確禁止未授權人民幣穩定幣",
      milestones: [
        {
          date: "2025-08",
          description: [
            "《穩定幣條例》正式生效，HKMA成為穩定幣發行人監管機構",
          ],
        },
        {
          date: "2025-09",
          description: [
            "HKMA收到36份正式穩定幣發行人牌照申請",
          ],
        },
        {
          date: "2026-02",
          description: [
            "中國大陸發布42號通知，禁止未授權人民幣穩定幣和資產代幣化",
          ],
        },
        {
          date: "2026-04",
          description: [
            "首批牌照發放：匯豐銀行（HKD穩定幣，接入PayMe）及Anchorpoint Financial（渣打×Animoca Brands）獲批",
          ],
        },
        {
          date: "2026-06",
          description: [
            "HKMA放寬持牌穩定幣發行人合規要求，降低準入門檻",
          ],
        },
        {
          date: "2026-08",
          description: [
            "HKMA表示對發放更多牌照持「開放審慎」態度，市場傳言第二批或於國慶前後獲批",
          ],
        },
      ],
      lastUpdated: "2026-08-12",
    },
  ],

  comparisonData: [
    {
      area: "監管與牌照",
      hongKong: "積極推進 — VATP制度成熟 + 四項新牌照制度（交易商/託管/顧問/資管）立法推進，SFC強化網絡安全要求",
      singapore: "積極推進 — MAS發布DPT服務商監管期望文件（7大領域），牌照制度穩定運行",
      dubai: "積極推進 — VARA已發51張牌照，監管框架成熟但合規門檻較低",
    },
    {
      area: "RWA代幣化",
      hongKong: "全球領先 — 政府代幣化債券 + SFC批准首個原生物代幣化基金 + DACC清算基礎設施落地",
      singapore: "發展中 — 沙盒探索階段，政府參與度較低",
      dubai: "發展中 — DIFC積極探索，但規模有限",
    },
    {
      area: "穩定幣",
      hongKong: "積極推進 — 2張牌照運營（匯豐/Anchorpoint），36份申請待審，第二批或於10月獲批",
      singapore: "積極推進 — MAS框架運行多年，市場活躍度較高",
      dubai: "發展中 — 態度開放，監管細則待完善",
    },
  ],

  timelineData: [
    {
      date: "2026-08",
      title: "HKMA對更多穩定幣牌照持開放審慎態度",
      description: "HKMA表示未排除發放更多牌照，36份正式申請待審，市場傳言第二批或於國慶前後獲批",
    },
    {
      date: "2026-07",
      title: "SFC批准首個原生物代幣化債券基金",
      description: "全球資管機構Baillie Gifford在港設立完全原生物代幣化債券基金，SFC批准，標誌全球機構加速佈局香港市場",
    },
    {
      date: "2026-07",
      title: "SFC強制VATP採用防釣魚認證",
      description: "SFC發布通函，禁止VATP使用短信驗證碼作為唯一登錄方式，強制防釣魚認證",
    },
    {
      date: "2026-07",
      title: "DACC數字資產清算基礎設施落地香港",
      description: "DACC以香港為總部，構建代幣化債券、穩定幣與跨境人民幣結算基礎設施",
    },
    {
      date: "2026-06",
      title: "HKMA放寬穩定幣監管要求",
      description: "金管局放寬持牌穩定幣發行人的合規要求，降低準入門檻以鼓勵更多機構參與",
    },
    {
      date: "2026-05",
      title: "四項VA新牌照制度諮詢結論發布",
      description: "SFC/FSTB發布虛擬資產諮詢和資管服務監管諮詢結論，四項牌照制度立法準備中",
    },
    {
      date: "2026-04",
      title: "首批穩定幣牌照正式發放",
      description: "匯豐銀行（HKD穩定幣接入PayMe）及Anchorpoint Financial（渣打×Animoca Brands）獲HKMA批准",
    },
    {
      date: "2026-04",
      title: "代幣化二級市場向零售開放 + Web3 Festival",
      description: "SFC發布代幣化債券二級市場框架，零售投資者可參與；Web3 Festival 2026舉辦",
    },
    {
      date: "2026-03",
      title: "首隻房地產RWA產品獲批",
      description: "SFC批准首隻房地產代幣化產品及商品RWA基金",
    },
    {
      date: "2026-02",
      title: "中國42號通知禁止未授權人民幣穩定幣",
      description: "中國人民銀行和證監會發布通知，明確禁止未授權人民幣穩定幣和資產代幣化",
    },
    {
      date: "2025-12",
      title: "VA交易商和託管商監管諮詢結論發布",
      description: "SFC/FSTB發布虛擬資產交易商和託管商監管諮詢結論，全鏈條VA牌照體系加速成型",
    },
    {
      date: "2025-11",
      title: "Project Ensemble進入EnsembleTX試點",
      description: "從沙盒實驗進入真實價值交易試點",
    },
    {
      date: "2025-08",
      title: "穩定幣條例正式生效",
      description: "《穩定幣條例》正式生效，HKMA成為穩定幣發行人監管機構",
    },
    {
      date: "2024-07",
      title: "《穩定幣條例草案》通過",
      description: "立法會通過穩定幣條例草案，建立法幣掛鈎穩定幣發牌制度",
    },
    {
      date: "2024-02",
      title: "首批代幣化綠色債券發行",
      description: "香港政府發行全球首批代幣化綠色債券，規模8億港元",
    },
    {
      date: "2023-06",
      title: "VATPs牌照制度生效",
      description: "虛擬資產交易平台發牌制度正式實施，所有在港運營平台須持牌",
    },
    {
      date: "2022-10",
      title: "香港發表虛擬資產政策宣言",
      description: "財政司發表《有關香港虛擬資產發展的政策宣言》，宣示發展為國際虛擬資產中心的願景",
    },
  ],

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

  sources: [
    { name: "香港證監會 (SFC)", url: "https://www.sfc.hk" },
    { name: "香港金融管理局 (HKMA)", url: "https://www.hkma.gov.hk" },
    { name: "香港政府新聞網", url: "https://www.news.gov.hk" },
    { name: "香港財政司司長辦公室", url: "https://www.fso.gov.hk" },
    {
      name: "Atlantic Council CBDC Tracker",
      url: "https://www.atlanticcouncil.org/cbdctracker/",
    },
    { name: "新加坡金管局 (MAS)", url: "https://www.mas.gov.sg" },
    {
      name: "迪拜虛擬資產監管局 (VARA)",
      url: "https://vara.ae",
    },
  ],

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
