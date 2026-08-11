import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaAssetType } from "@/types";

interface RwaAssetTableProps {
  t: Dictionary;
  assets: RwaAssetType[];
}

const relevanceConfig: Record<string, { color: string; textColor: string; label: string }> = {
  high: { color: "bg-emerald-100", textColor: "text-emerald-700", label: "高" },
  medium: { color: "bg-amber-100", textColor: "text-amber-700", label: "中" },
  low: { color: "bg-slate-100", textColor: "text-slate-500", label: "低" },
};

export function RwaAssetTable({ t, assets }: RwaAssetTableProps) {
  const rwa = t.rwa;

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">{rwa.assets.title}</h2>
        <p className="text-sm text-slate-500 mb-6">{rwa.assets.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {assets.map((asset) => {
            const rel = relevanceConfig[asset.hkRelevance] ?? relevanceConfig.low;
            return (
              <Card key={asset.rank} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{asset.icon}</span>
                      <h3 className="font-semibold text-slate-900">{(rwa.assets.categoryNames as Record<string, string>)[asset.category] || asset.category}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900">${asset.tvl}B</span>
                      <Badge className={`${rel.color} ${rel.textColor} border-0 text-xs`}>
                        {rwa.assets.hkRelevance}: {rel.label}
                      </Badge>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all"
                        style={{ width: `${asset.percent}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400 mt-1">{asset.percent}% of RWA TVL</span>
                  </div>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {asset.examples.slice(0, 4).map((ex, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                      >
                        {ex}
                      </span>
                    ))}
                    {asset.examples.length > 4 && (
                      <span className="inline-block text-xs px-2 py-0.5 text-slate-400">
                        +{asset.examples.length - 4}
                      </span>
                    )}
                  </div>

                  {/* HK Note */}
                  {asset.hkNote && (
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        <span className="font-medium text-slate-600">🇭🇰 {rwa.assets.hkNote}:</span> {asset.hkNote}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
