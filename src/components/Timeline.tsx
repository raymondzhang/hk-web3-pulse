import { Clock } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { TimelineEvent } from "@/types";

interface TimelineProps {
  t: Dictionary;
  events: TimelineEvent[];
}

export function Timeline({ t, events }: TimelineProps) {
  const itemsPerRow = 3;

  // 按每行3个分组
  const rows: TimelineEvent[][] = [];
  for (let i = 0; i < events.length; i += itemsPerRow) {
    rows.push(events.slice(i, i + itemsPerRow));
  }

  return (
    <section className="w-full bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-semibold text-slate-900">{t.timeline.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-10">{t.timeline.subtitle}</p>

        {/* Desktop: Snake/S-shape Timeline */}
        <div className="hidden md:block">
          <div className="space-y-6">
            {rows.map((row, rowIndex) => {
              const isReverse = rowIndex % 2 === 1;

              return (
                <div key={rowIndex} className="flex items-start gap-5">
                  {row.map((event, colIndex) => (
                    <div key={colIndex} className="flex-1 relative">
                      {/* 连接圆点（卡片顶部） */}
                      <div className="flex justify-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                      </div>

                      {/* 水平连接线（到下一个卡片） */}
                      {colIndex < row.length - 1 && (
                        <div className="absolute top-1.5 left-1/2 w-full h-px bg-emerald-200" />
                      )}

                      {/* 向下的转弯连接线（行尾/行首） */}
                      {(() => {
                        const isLastRow = rowIndex === rows.length - 1;
                        if (isLastRow) return null;

                        const isLastCol = colIndex === row.length - 1;
                        const isFirstCol = colIndex === 0;

                        const needsDown = (!isReverse && isLastCol) || (isReverse && isFirstCol);

                        if (!needsDown) return null;

                        return (
                          <div
                            className="absolute top-1.5 h-7 w-px bg-emerald-200"
                            style={{
                              left: isReverse ? "0" : "auto",
                              right: isReverse ? "auto" : "0",
                            }}
                          />
                        );
                      })()}

                      {/* 事件卡片 */}
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="text-xs font-mono font-semibold text-emerald-600">
                          {event.date}
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900 mt-1.5 leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200" />
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div className="absolute left-4 -translate-x-[5.5px] mt-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                </div>
                <div className="ml-10 bg-slate-50 rounded-lg p-4 border border-slate-100 w-full">
                  <span className="text-xs font-mono font-semibold text-emerald-600">
                    {event.date}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 mt-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
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
