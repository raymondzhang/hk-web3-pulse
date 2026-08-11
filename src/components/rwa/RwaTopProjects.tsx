import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaProject } from "@/types";

interface RwaTopProjectsProps {
  t: Dictionary;
  projects: RwaProject[];
}

const categoryColors: Record<string, string> = {
  treasury: "bg-blue-100 text-blue-700",
  gold: "bg-amber-100 text-amber-700",
  stocks: "bg-violet-100 text-violet-700",
  privateCredit: "bg-rose-100 text-rose-700",
  moneyMarket: "bg-emerald-100 text-emerald-700",
  realEstate: "bg-orange-100 text-orange-700",
};

export function RwaTopProjects({ t, projects }: RwaTopProjectsProps) {
  const rwa = t.rwa;

  return (
    <section className="w-full bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-semibold text-slate-900">{rwa.projects.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-6">{rwa.projects.subtitle}</p>

        <Card className="border-slate-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold text-slate-700 w-[40px]">#</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.projects.name}</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.projects.category}</TableHead>
                    <TableHead className="font-semibold text-slate-700 text-right">{rwa.projects.tvl}</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.projects.issuer}</TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.projects.chain}</TableHead>
                    <TableHead className="font-semibold text-slate-700 text-center">{rwa.projects.hkRelevant}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project, i) => (
                    <TableRow key={i} className="hover:bg-slate-50">
                      <TableCell className="text-xs text-slate-400 font-mono">{i + 1}</TableCell>
                      <TableCell className="font-medium text-slate-900 text-sm">
                        <div>
                          {project.name}
                          {project.note && (
                            <p className="text-xs text-slate-400 mt-0.5 max-w-[200px] truncate">{project.note}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${categoryColors[project.category] || "bg-slate-100 text-slate-600"} border-0 text-xs`}>
                          {(rwa.assets.categoryNames as Record<string, string>)[project.category] || project.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-slate-900 text-sm">
                        ${project.tvl}B
                      </TableCell>
                      <TableCell className="text-xs text-slate-600">{project.issuer}</TableCell>
                      <TableCell className="text-xs text-slate-600">{project.chain}</TableCell>
                      <TableCell className="text-center">
                        {project.hkRelevant ? (
                          <span className="text-base" title="HK Relevant">🇭🇰</span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
