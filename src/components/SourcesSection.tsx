import { Separator } from "@/components/ui/separator";
import { ExternalLink, BookOpen, Shield, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { DataSource } from "@/types";

interface SourcesSectionProps {
  t: Dictionary;
  sources: DataSource[];
  methodology: string;
  disclaimer: string;
}

export function SourcesSection({ t, sources, methodology, disclaimer }: SourcesSectionProps) {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Methodology */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-slate-400" />
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">
              {t.footer.methodologyTitle}
            </h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
            {methodology}
          </p>
        </div>

        <Separator className="bg-slate-700 my-8" />

        {/* Sources */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">
            {t.footer.sourcesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors group"
              >
                <ExternalLink className="h-3.5 w-3.5 group-hover:text-emerald-400" />
                {source.name}
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-slate-700 my-8" />

        {/* Disclaimer & Footer */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start gap-2 max-w-2xl">
            <Shield className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500 leading-relaxed">{disclaimer}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Mail className="h-3.5 w-3.5" />
            <a href="mailto:feedback@hkweb3pulse.com" className="hover:text-emerald-400 transition-colors">
              {t.footer.reportError}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
