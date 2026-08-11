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
import { Building2, Shield, Coins, FileText } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaHkSpecific } from "@/types";

interface RwaHkSectionProps {
  t: Dictionary;
  hk: RwaHkSpecific;
}

const statusColors: Record<string, string> = {
  licensed: "bg-emerald-100 text-emerald-700",
  live: "bg-emerald-100 text-emerald-700",
  issued: "bg-blue-100 text-blue-700",
  pilot: "bg-amber-100 text-amber-700",
  approved: "bg-violet-100 text-violet-700",
  restricted: "bg-red-100 text-red-700",
  unavailable: "bg-red-100 text-red-700",
  available: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
};

export function RwaHkSection({ t, hk }: RwaHkSectionProps) {
  const rwa = t.rwa;

  const g = hk.globalVsHk;

  const comparisonRows = [
    {
      metric: rwa.hk.rwaTvl,
      global: `$${g.rwaTvl.global}${g.rwaTvl.unit}`,
      hk: `~$${g.rwaTvl.hk}${g.rwaTvl.unit}`,
      gap: `${Math.round(g.rwaTvl.global / Math.max(g.rwaTvl.hk, 0.001))}x`,
    },
    {
      metric: rwa.hk.holders,
      global: `${(g.holders.global / 1000000).toFixed(1)}M`,
      hk: `~${(g.holders.hk / 1000).toFixed(1)}K`,
      gap: `${Math.round(g.holders.global / Math.max(g.holders.hk, 1))}x`,
    },
    {
      metric: rwa.hk.tokenizedStocks,
      global: `$${g.tokenizedStocks.global}${g.tokenizedStocks.unit}`,
      hk: `$${g.tokenizedStocks.hk}`,
      gap: rwa.hk.notAvailable,
    },
    {
      metric: rwa.hk.compliantChannels,
      global: `${g.compliantChannels.global}+`,
      hk: `${g.compliantChannels.hk}`,
      gap: `${Math.round(g.compliantChannels.global / Math.max(g.compliantChannels.hk, 1))}x`,
    },
  ];

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🇭🇰</span>
          <h2 className="text-xl font-semibold text-slate-900">{rwa.hk.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-8">{rwa.hk.subtitle}</p>

        {/* Global vs HK Comparison */}
        <Card className="border-slate-200 mb-8">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold text-slate-700">{rwa.hk.comparisonMetric}</TableHead>
                    <TableHead className="font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        {rwa.hk.global}
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        {rwa.hk.hongKong}
                      </span>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700">{rwa.hk.gap}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row, i) => (
                    <TableRow key={i} className="hover:bg-slate-50">
                      <TableCell className="font-medium text-slate-900">{row.metric}</TableCell>
                      <TableCell className="text-sm text-slate-600">{row.global}</TableCell>
                      <TableCell className="text-sm text-slate-600">{row.hk}</TableCell>
                      <TableCell className="text-sm font-semibold text-red-500">{row.gap}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Licensed VATPs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-4 w-4 text-slate-600" />
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                {rwa.hk.vatps}
              </h3>
            </div>
            <div className="space-y-3">
              {hk.vatps.map((vatp, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900 text-sm">{vatp.name}</h4>
                      <Badge className={`${statusColors[vatp.status] || "bg-slate-100 text-slate-600"} border-0 text-xs`}>
                        {vatp.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500">{vatp.license}</p>
                    {vatp.rwaTokens.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {vatp.rwaTokens.map((token, j) => (
                          <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                            {token}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* HK RWA Products */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coins className="h-4 w-4 text-slate-600" />
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                {rwa.hk.products}
              </h3>
            </div>
            <div className="space-y-3">
              {hk.hkProducts.map((product, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900 text-sm">{product.name}</h4>
                      <Badge className={`${statusColors[product.status] || "bg-slate-100 text-slate-600"} border-0 text-xs`}>
                        {product.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{product.chain}</span>
                      {product.scale && <span>· {product.scale}</span>}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{product.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory Access */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              {rwa.hk.regulatoryAccess}
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { key: "retailTreasury", icon: "📊" },
              { key: "retailStocks", icon: "📈" },
              { key: "retailGold", icon: "🥇" },
              { key: "piTreasury", icon: "🏦" },
              { key: "piThreshold", icon: "💰" },
              { key: "stablecoin", icon: "🪙" },
            ].map((item) => {
              const val = (hk.regulatoryAccess as unknown as Record<string, string>)[item.key] || "";
              const color = statusColors[val] || "bg-slate-100 text-slate-600";
              return (
                <Card key={item.key} className="border-slate-200">
                  <CardContent className="p-3 text-center">
                    <span className="text-lg">{item.icon}</span>
                    <p className="text-xs font-medium text-slate-700 mt-1">
                      {(rwa.hk.accessLabels as unknown as Record<string, string>)[item.key] || item.key}
                    </p>
                    <Badge className={`${color} border-0 text-xs mt-1`}>{val}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
