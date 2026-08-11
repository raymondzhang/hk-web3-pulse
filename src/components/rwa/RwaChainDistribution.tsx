import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaChainEntry } from "@/types";

interface RwaChainDistributionProps {
  t: Dictionary;
  chains: RwaChainEntry[];
}

const dominanceConfig: Record<string, { color: string; textColor: string; bgLight: string; width: string }> = {
  dominant: { color: "bg-emerald-500", textColor: "text-emerald-700", bgLight: "bg-emerald-50", width: "100%" },
  growing: { color: "bg-blue-500", textColor: "text-blue-700", bgLight: "bg-blue-50", width: "60%" },
  emerging: { color: "bg-amber-500", textColor: "text-amber-700", bgLight: "bg-amber-50", width: "30%" },
};

export function RwaChainDistribution({ t, chains }: RwaChainDistributionProps) {
  const rwa = t.rwa;

  return (
    <section className="w-full bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <Link2 className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-semibold text-slate-900">{rwa.chains.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-8">{rwa.chains.subtitle}</p>

        <div className="space-y-3">
          {chains.map((entry) => {
            const dom = dominanceConfig[entry.dominance] ?? dominanceConfig.emerging;
            return (
              <Card key={entry.chain} className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-slate-900 text-sm">{entry.chain}</h3>
                      <Badge className={`${dom.bgLight} ${dom.textColor} border-0 text-xs`}>
                        {rwa.chains.dominanceLabels[entry.dominance] || entry.dominance}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {entry.projects.slice(0, 3).map((p, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {p}
                        </span>
                      ))}
                      {entry.projects.length > 3 && (
                        <span className="text-xs px-2 py-0.5 text-slate-400">+{entry.projects.length - 3}</span>
                      )}
                    </div>
                  </div>
                  {/* Dominance bar */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                    <div className={`h-full ${dom.color} rounded-full`} style={{ width: dom.width }} />
                  </div>
                  <p className="text-xs text-slate-500">{entry.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
