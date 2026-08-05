import { Clock } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { TimelineEvent } from "@/types";

interface TimelineProps {
  t: Dictionary;
  events: TimelineEvent[];
}

export function Timeline({ t, events }: TimelineProps) {
  const itemsPerRow = 3;

  const rows: TimelineEvent[][] = [];
  for (let i = 0; i < events.length; i += itemsPerRow) {
    rows.push(events.slice(i, i + itemsPerRow));
  }

  return (
    <section className="w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t.timeline.title}</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">{t.timeline.subtitle}</p>

        {/* Desktop: Snake/S-shape Timeline */}
        <div className="hidden md:block">
          <div className="space-y-6">
            {rows.map((row, rowIndex) => {
              const isReverse = rowIndex % 2 === 1;

              return (
                <div key={rowIndex} className="flex items-start gap-5">
                  {row.map((event, colIndex) => (
                    <div key={colIndex} className="flex-1 relative">
                      <div className="flex justify-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" />
                      </div>

                      {colIndex < row.length - 1 && (
                        <div className="absolute top-1.5 left-1/2 w-full h-px bg-emerald-200 dark:bg-emerald-800" />
                      )}

                      {(() => {
                        const isLastRow = rowIndex === rows.length - 1;
                        if (isLastRow) return null;

                        const isLastCol = colIndex === row.length - 1;
                        const isFirstCol = colIndex === 0;

                        const needsDown = (!isReverse && isLastCol) || (isReverse && isFirstCol);

                        if (!needsDown) return null;

                        return (
                          <div
                            className="absolute top-1.5 h-7 w-px bg-emerald-200 dark:bg-emerald-800"
                            style={{
                              left: isReverse ? "0" : "auto",
                              right: isReverse ? "auto" : "0",
                            }}
                          />
                        );
                      })()}

                      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                          {event.date}
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1.5 leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: simple vertical timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200 dark:bg-emerald-800" />
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div className="absolute left-4 -translate-x-[5.5px] mt-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" />
                </div>
                <div className="ml-10 bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-slate-100 dark:border-slate-700 w-full">
                  <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    {event.date}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
