import { Activity, BarChart3, Shield } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OverallStatus } from "@/components/OverallStatus";
import { DomainCard } from "@/components/DomainCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Timeline } from "@/components/Timeline";
import { SourcesSection } from "@/components/SourcesSection";
import { FeedbackForm } from "@/components/FeedbackForm";
import { getLocale } from "@/lib/locale-server";
import { getDictionary } from "@/lib/dictionary";
import { getDarkMode } from "@/lib/theme-server";
import { hkWeb3Data } from "@/data";

export default async function Home() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const dark = await getDarkMode();
  const data = hkWeb3Data;

  return (
    <main className="min-h-full flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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
            <div className="shrink-0 flex items-center gap-3">
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle initialDark={dark} />
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

      {/* Domain Cards */}
      <section className="w-full bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {t.domains.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">{t.domains.subtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.domainData.map((domain) => (
              <DomainCard key={domain.id} t={t} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable t={t} data={t.comparisonData} />

      {/* Timeline */}
      <Timeline t={t} events={t.timelineData} />

      {/* Feedback Form */}
      <section className="w-full bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {t.feedback.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">{t.feedback.subtitle}</p>
          <FeedbackForm t={t} />
        </div>
      </section>

      {/* RWA Tracker CTA */}
      <section className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/rwa"
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {t.rwa.hero.navTitle}
                </h3>
                <p className="text-sm text-emerald-100">
                  {t.rwa.hero.navSubtitle}
                </p>
              </div>
            </div>
            <span className="text-white text-2xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
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
