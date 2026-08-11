import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaTrend } from "@/types";

interface RwaTrendsProps {
  t: Dictionary;
  trends: RwaTrend[];
}

const impactConfig: Record<string, { color: string; textColor: string; bgLight: string }> = {
  high: { color: "bg-emerald-500", textColor: "text-emerald-700", bgLight: "bg-emerald-50" },
  medium: { color: "bg-amber-500", textColor: "text-amber-700", bgLight: "bg-amber-50" },
  low: { color: "bg-slate-400", textColor: "text-slate-500", bgLight: "bg-slate-50" },
};

export function RwaTrends({ t, trends }: RwaTrendsProps) {
  const rwa = t.rwa;

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-semibold text-slate-900">{rwa.trends.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-8">{rwa.trends.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trends.map((trend) => {
            const impact = impactConfig[trend.hkImpact] ?? impactConfig.low;
            return (
              <Card key={trend.id} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-slate-900 text-sm leading-snug flex-1 pr-2">
                      {trend.title}
                    </h3>
                    <Badge className={`${impact.bgLight} ${impact.textColor} border-0 text-xs shrink-0`}>
                      {rwa.trends.hkImpact}: {rwa.trends.impactLabels[trend.hkImpact] || trend.hkImpact}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {trend.description}
                  </p>
                  {trend.hkNote && (
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-start gap-1.5">
                        <span className="text-sm shrink-0">🇭🇰</span>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {trend.hkNote}
                        </p>
                      </div>
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
