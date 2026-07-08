import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { ComparisonRow } from "@/types";

interface ComparisonTableProps {
  t: Dictionary;
  data: ComparisonRow[];
}

export function ComparisonTable({ t, data }: ComparisonTableProps) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-semibold text-slate-900">{t.comparison.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-6">{t.comparison.subtitle}</p>

        <Card className="border-slate-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold text-slate-700 w-[200px]">
                      {t.comparison.headers.area}
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700">
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
                        {t.comparison.headers.hongKong}
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700">
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        {t.comparison.headers.singapore}
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700">
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500" />
                        {t.comparison.headers.dubai}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell className="font-medium text-slate-900">
                        {row.area}
                      </TableCell>
                      <TableCell className="text-sm text-slate-600 leading-relaxed">
                        {row.hongKong}
                      </TableCell>
                      <TableCell className="text-sm text-slate-600 leading-relaxed">
                        {row.singapore}
                      </TableCell>
                      <TableCell className="text-sm text-slate-600 leading-relaxed">
                        {row.dubai}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 mt-3">{t.comparison.dataSource}</p>
      </div>
    </section>
  );
}
