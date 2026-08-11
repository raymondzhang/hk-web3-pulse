import { Activity, BarChart3, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { RwaMarketOverview } from "@/components/rwa/RwaMarketOverview";
import { RwaAssetTable } from "@/components/rwa/RwaAssetTable";
import { RwaTopProjects } from "@/components/rwa/RwaTopProjects";
import { RwaStockSection } from "@/components/rwa/RwaStockSection";
import { RwaChainDistribution } from "@/components/rwa/RwaChainDistribution";
import { RwaHkSection } from "@/components/rwa/RwaHkSection";
import { RwaTrends } from "@/components/rwa/RwaTrends";
import { SourcesSection } from "@/components/SourcesSection";
import { getLocale } from "@/lib/locale-server";
import { getDictionary } from "@/lib/dictionary";
import { rwaMarketData } from "@/data";

export default async function RwaPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const data = rwaMarketData;

  return (
    <main className="min-h-full flex flex-col">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t.rwa.hero.back}
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                  {t.rwa.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {t.rwa.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                {t.rwa.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4" />
                  <span>{t.rwa.hero.tagOnchain}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4" />
                  <span>{t.rwa.hero.tagBenchmark}</span>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <RwaMarketOverview
        t={t}
        summary={data.marketSummary}
        dataDate={data.dataDate}
      />

      {/* Asset Types */}
      <RwaAssetTable t={t} assets={data.assetTypes} />

      {/* Top Projects */}
      <RwaTopProjects t={t} projects={data.topProjects} />

      {/* Stock Tokenization */}
      <RwaStockSection t={t} stocks={data.stockTokenization} />

      {/* Chain Distribution */}
      <RwaChainDistribution t={t} chains={data.chainDistribution} />

      {/* HK Section */}
      <RwaHkSection t={t} hk={data.hkSpecific} />

      {/* Trends */}
      <RwaTrends t={t} trends={data.trends} />

      {/* Sources & Footer */}
      <SourcesSection
        t={t}
        sources={[
          ...t.sources,
          { name: "RWA.xyz", url: "https://www.rwa.xyz" },
          { name: "DeFiLlama", url: "https://defillama.com" },
          { name: "Token Terminal", url: "https://tokenterminal.com" },
        ]}
        methodology={t.methodology}
        disclaimer={t.disclaimer}
      />
    </main>
  );
}
