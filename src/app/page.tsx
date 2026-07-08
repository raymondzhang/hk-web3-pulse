import { Activity, BarChart3, Shield } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { OverallStatus } from "@/components/OverallStatus";
import { DomainCard } from "@/components/DomainCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Timeline } from "@/components/Timeline";
import { SourcesSection } from "@/components/SourcesSection";
import { FeedbackForm } from "@/components/FeedbackForm";
import { getLocale } from "@/lib/locale-server";
import { getDictionary } from "@/lib/dictionary";
import { hkWeb3Data } from "@/data";

export default async function Home() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  // Use locale-specific data for translated content; JSON only for language-independent fields
  const data = hkWeb3Data;

  return (
    <main className="min-h-full flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" />
                  <span>{t.hero.tagOfficial}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4" />
                  <span>{t.hero.tagCompare}</span>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <OverallStatus
        t={t}
        status={data.overallStatus}
        lastUpdated={data.lastUpdated}
      />

      {/* Domain Cards — uses locale-specific translated data */}
      <section className="w-full bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            {t.domains.title}
          </h2>
          <p className="text-sm text-slate-500 mb-8">{t.domains.subtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.domainData.map((domain) => (
              <DomainCard key={domain.id} t={t} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table — uses locale-specific translated data */}
      <ComparisonTable t={t} data={t.comparisonData} />

      {/* Timeline — uses locale-specific translated data */}
      <Timeline t={t} events={t.timelineData} />

      {/* Feedback Form */}
      <section className="w-full bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            {t.feedback.title}
          </h2>
          <p className="text-sm text-slate-500 mb-8">{t.feedback.subtitle}</p>
          <FeedbackForm t={t} />
        </div>
      </section>

      {/* Sources & Footer — uses locale-specific translated data */}
      <SourcesSection
        t={t}
        sources={t.sources}
        methodology={t.methodology}
        disclaimer={t.disclaimer}
      />
    </main>
  );
}
