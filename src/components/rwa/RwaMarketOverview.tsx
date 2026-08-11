import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Layers, TrendingUp, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaMarketSummary } from "@/types";

interface RwaMarketOverviewProps {
  t: Dictionary;
  summary: RwaMarketSummary;
  dataDate: string;
}

export function RwaMarketOverview({ t, summary, dataDate }: RwaMarketOverviewProps) {
  const rwa = t.rwa;

  const stats = [
    {
      label: rwa.overview.totalAum,
      value: `$${summary.totalAumRwaXyz}B`,
      sub: `RWA.xyz · ${summary.totalAssetsRwaXyz} assets`,
      icon: BarChart3,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      label: rwa.overview.totalTvl,
      value: `$${summary.totalTvlDefiLlama}B`,
      sub: `DeFiLlama · ${summary.totalProtocols} protocols`,
      icon: Layers,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: rwa.overview.holders,
      value: `${summary.totalHoldersDistributed}M`,
      sub: rwa.overview.holdersSub.replace("{growth}", `${Math.round(summary.holdersGrowth40d * 100)}%`).replace("{new}", `${(summary.newHolders40d / 1000).toFixed(0)}K`),
      icon: Users,
      color: "text-violet-600",
      bgColor: "bg-violet-50",
    },
    {
      label: rwa.overview.stockGrowth,
      value: `${Math.round(summary.newHoldersFromStocks * 100)}%`,
      sub: rwa.overview.stockGrowthSub,
      icon: TrendingUp,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{rwa.overview.title}</h2>
            <p className="text-sm text-slate-500 mt-1">{rwa.overview.subtitle}</p>
          </div>
          <span className="text-xs text-slate-400">{rwa.overview.dataDate}: {dataDate}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400">{stat.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-100">
          <p className="text-xs text-amber-700">
            <span className="font-semibold">⚠️ {rwa.overview.dataGapTitle}:</span> {rwa.overview.dataGapNote}
          </p>
        </div>
      </div>
    </section>
  );
}
