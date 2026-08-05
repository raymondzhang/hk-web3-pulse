import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { StatusLevel } from "@/types";

interface OverallStatusProps {
  t: Dictionary;
  status: StatusLevel;
  lastUpdated: string;
}

const statusConfig: Record<StatusLevel, { color: string; bgColor: string }> = {
  Leading: { color: "text-emerald-700 dark:text-emerald-400", bgColor: "bg-emerald-100 dark:bg-emerald-900/30" },
  Advancing: { color: "text-emerald-700 dark:text-emerald-400", bgColor: "bg-emerald-100 dark:bg-emerald-900/30" },
  Developing: { color: "text-amber-700 dark:text-amber-400", bgColor: "bg-amber-100 dark:bg-amber-900/30" },
  Emerging: { color: "text-slate-700 dark:text-slate-400", bgColor: "bg-slate-100 dark:bg-slate-800" },
};

export function OverallStatus({ t, status, lastUpdated }: OverallStatusProps) {
  const config = statusConfig[status];
  const label = t.statusLabels[status];

  return (
    <section className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t.overallStatus.title}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm leading-relaxed">
              {t.overallStatus.accuracyNote}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge className={`${config.bgColor} ${config.color} border-0 px-4 py-1.5 text-sm font-medium`}>
              {label}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              <span>{t.overallStatus.updated} {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
