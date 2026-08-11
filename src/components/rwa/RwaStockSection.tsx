import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertTriangle } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaStockTokenization } from "@/types";

interface RwaStockSectionProps {
  t: Dictionary;
  stocks: RwaStockTokenization;
}

export function RwaStockSection({ t, stocks }: RwaStockSectionProps) {
  const rwa = t.rwa;

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{rwa.stocks.title}</h2>
            <p className="text-sm text-slate-500 mt-1">{rwa.stocks.subtitle}</p>
          </div>
          <Badge className="bg-amber-100 text-amber-700 border-0">
            TVL: ${stocks.totalTvl}B
          </Badge>
        </div>

        <Card className="border-slate-200 overflow-hidden mt-6 mb-6">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold text-slate-700 w-[40px]">#</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.stocks.platform}</TableHead>
                    <TableHead className="font-semibold text-slate-700 text-right">{rwa.stocks.stockCount}</TableHead>
                    <TableHead className="font-semibold text-slate-700 text-right">{rwa.stocks.value}</TableHead>
                    <TableHead className="font-semibold text-slate-700 text-right">{rwa.stocks.marketShare}</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.stocks.distributed}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.rankings.map((platform) => (
                    <TableRow key={platform.rank} className="hover:bg-slate-50">
                      <TableCell className="text-xs text-slate-400 font-mono">{platform.rank}</TableCell>
                      <TableCell className="font-medium text-slate-900 text-sm">{platform.platform}</TableCell>
                      <TableCell className="text-right text-sm text-slate-600">{platform.stockCount}</TableCell>
                      <TableCell className="text-right font-semibold text-slate-900 text-sm">${platform.value}M</TableCell>
                      <TableCell className="text-right text-sm text-slate-600">{platform.marketShare}%</TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {platform.distributed !== undefined ? `${platform.distributed}%` : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* HK Warning */}
        <div className="p-4 rounded-lg bg-red-50 border border-red-100">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-red-700">{rwa.stocks.hkUnavailable}</p>
              <p className="text-xs text-red-600 mt-1 leading-relaxed">{stocks.hkNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
