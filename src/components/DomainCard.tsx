import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe } from "lucide-react";
import { LikeButton } from "@/components/LikeButton";
import type { Dictionary } from "@/lib/dictionary";
import type { StatusLevel } from "@/types";

interface LocaleDomain {
  id: string;
  status: StatusLevel;
  name: string;
  description: string;
  globalComparison: string;
  milestones: { date: string; description: string | string[] }[];
  lastUpdated: string;
}

interface DomainCardProps {
  t: Dictionary;
  domain: LocaleDomain;
}

const statusConfig: Record<StatusLevel, { color: string; textColor: string; bgLight: string }> = {
  Leading: { color: "bg-emerald-500", textColor: "text-emerald-700 dark:text-emerald-400", bgLight: "bg-emerald-50 dark:bg-emerald-900/30" },
  Advancing: { color: "bg-emerald-500", textColor: "text-emerald-700 dark:text-emerald-400", bgLight: "bg-emerald-50 dark:bg-emerald-900/30" },
  Developing: { color: "bg-amber-500", textColor: "text-amber-700 dark:text-amber-400", bgLight: "bg-amber-50 dark:bg-amber-900/30" },
  Emerging: { color: "bg-slate-400", textColor: "text-slate-600 dark:text-slate-400", bgLight: "bg-slate-50 dark:bg-slate-800" },
};

const progressWidth: Record<StatusLevel, string> = {
  Leading: "100%",
  Advancing: "75%",
  Developing: "50%",
  Emerging: "25%",
};

function normalizeDescription(desc: string | string[]): string {
  return Array.isArray(desc) ? desc.join("") : desc;
}

export function DomainCard({ t, domain }: DomainCardProps) {
  const status = domain.status ?? "Emerging";
  const config = statusConfig[status];
  const label = t.statusLabels[status];

  return (
    <Card className="h-full border-slate-200 dark:border-slate-700 dark:bg-slate-800 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {domain.name}
          </CardTitle>
          <Badge className={`${config.bgLight} ${config.textColor} border-0 text-xs font-medium`}>
            {label}
          </Badge>
          <LikeButton
            domainId={domain.id}
            label={t.likeButton.label}
            likedLabel={t.likeButton.liked}
          />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
          {domain.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>{t.domains.sections.milestones}</span>
            <span>{label}</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${config.color} rounded-full transition-all`}
              style={{ width: progressWidth[status] }}
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {t.domains.sections.milestones}
          </h4>
          <ul className="space-y-2">
            {domain.milestones.map((milestone, idx) => (
              <li key={idx} className="text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0 mt-0.5">
                    {milestone.date}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {normalizeDescription(milestone.description)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Comparison */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-start gap-2">
            <Globe className="h-4 w-4 text-slate-400 dark:text-slate-500 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-medium text-slate-600 dark:text-slate-300">{t.domains.sections.globalComparison}：</span>
              {domain.globalComparison}
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          <Calendar className="h-3 w-3" />
          <span>{t.domains.sections.lastUpdated} {domain.lastUpdated}</span>
        </div>
      </CardContent>
    </Card>
  );
}
