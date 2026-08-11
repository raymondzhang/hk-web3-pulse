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
import { ExternalLink, Shield, TrendingUp, Link2, Coins, BarChart3 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { RwaHkDisclosure } from "@/types";

interface RwaHkDisclosureProps {
  t: Dictionary;
  disclosure: RwaHkDisclosure;
}

const sfcStatusConfig: Record<string, { label: string; color: string; textColor: string }> = {
  authorized: { label: "已授权", color: "bg-emerald-100", textColor: "text-emerald-700" },
  pending: { label: "审核中", color: "bg-amber-100", textColor: "text-amber-700" },
  rejected: { label: "已拒绝", color: "bg-red-100", textColor: "text-red-700" },
  "not-applicable": { label: "不适用", color: "bg-slate-100", textColor: "text-slate-600" },
};

const investorConfig: Record<string, { label: string; color: string; textColor: string }> = {
  retail: { label: "零售", color: "bg-emerald-100", textColor: "text-emerald-700" },
  "pi-only": { label: "仅PI", color: "bg-amber-100", textColor: "text-amber-700" },
  institutional: { label: "机构", color: "bg-blue-100", textColor: "text-blue-700" },
};

const relevanceConfig: Record<string, { color: string; textColor: string; label: string }> = {
  high: { color: "bg-emerald-100", textColor: "text-emerald-700", label: "高" },
  medium: { color: "bg-amber-100", textColor: "text-amber-700", label: "中" },
  low: { color: "bg-slate-100", textColor: "text-slate-500", label: "低" },
};

function etherscanUrl(chain: string, address: string): string {
  if (!address) return "";
  const base = chain === "Multi-chain" ? "https://etherscan.io" : "https://etherscan.io";
  return `${base}/address/${address}`;
}

export function RwaHkDisclosure({ t, disclosure }: RwaHkDisclosureProps) {
  const d = t.rwa.disclosure;

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Shield className="h-5 w-5 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-900">{d.title}</h2>
        </div>
        <p className="text-sm text-slate-500 mb-2">{d.subtitle}</p>
        <p className="text-xs text-slate-400 mb-8">{d.updated}: {disclosure.lastUpdated}</p>

        {/* ─── Sub-section 1: On-chain Token Data ─── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="h-4 w-4 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              {d.onchainTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disclosure.onchainTokens.map((token, i) => {
              const rel = relevanceConfig[token.hkRelevance] ?? relevanceConfig.low;
              const addr = token.contractAddress;
              const escUrl = etherscanUrl(token.chain, addr);
              return (
                <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{token.name}</h4>
                        <span className="text-xs text-slate-400 font-mono">{token.symbol}</span>
                      </div>
                      <Badge className={`${rel.color} ${rel.textColor} border-0 text-xs`}>
                        🇭🇰 {rel.label}
                      </Badge>
                    </div>

                    {/* Contract Address */}
                    {addr ? (
                      <div className="mb-3">
                        <span className="text-xs text-slate-500">{d.contract}: </span>
                        {escUrl ? (
                          <a
                            href={escUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                          >
                            {addr.slice(0, 10)}...{addr.slice(-8)}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-slate-400">
                            {addr.slice(0, 10)}...{addr.slice(-8)}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="mb-3">
                        <span className="text-xs text-slate-500">{d.chain}: </span>
                        <span className="text-xs text-slate-400">{token.chain}</span>
                      </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="rounded bg-slate-50 p-2">
                        <p className="text-xs text-slate-400">{d.totalSupply}</p>
                        <p className="text-sm font-semibold text-slate-900">{token.totalSupply}</p>
                      </div>
                      {token.holders !== undefined && (
                        <div className="rounded bg-slate-50 p-2">
                          <p className="text-xs text-slate-400">{d.holders}</p>
                          <p className="text-sm font-semibold text-slate-900">
                            {token.holders >= 1000
                              ? `${(token.holders / 1000).toFixed(1)}K`
                              : token.holders}
                          </p>
                        </div>
                      )}
                      {token.transfers24h !== undefined && (
                        <div className="rounded bg-slate-50 p-2">
                          <p className="text-xs text-slate-400">{d.transfers24h}</p>
                          <p className="text-sm font-semibold text-slate-900">{token.transfers24h}</p>
                        </div>
                      )}
                      {token.price !== undefined && token.priceUnit && (
                        <div className="rounded bg-slate-50 p-2">
                          <p className="text-xs text-slate-400">{d.price}</p>
                          <p className="text-sm font-semibold text-slate-900">
                            {token.price >= 1000
                              ? `$${token.price.toLocaleString()}`
                              : `$${token.price}`}{" "}
                            <span className="text-xs text-slate-400">{token.priceUnit}</span>
                          </p>
                        </div>
                      )}
                      {token.liquidity && (
                        <div className="rounded bg-slate-50 p-2">
                          <p className="text-xs text-slate-400">{d.liquidity}</p>
                          <p className="text-sm font-semibold text-slate-900">{token.liquidity}</p>
                        </div>
                      )}
                    </div>

                    {/* Note */}
                    <p className="text-xs text-slate-500 leading-relaxed">{token.note}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ─── Sub-section 2: Compliance Disclosure Table ─── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              {d.complianceTitle}
            </h3>
          </div>

          <Card className="border-slate-200">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="font-semibold text-slate-700">{d.product}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.issuer}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.sfcStatus}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.vatp}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.investor}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.restrictions}</TableHead>
                      <TableHead className="font-semibold text-slate-700">{d.launch}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {disclosure.compliance.map((entry, i) => {
                      const sfc = sfcStatusConfig[entry.sfcStatus] ?? sfcStatusConfig["not-applicable"];
                      const inv = investorConfig[entry.investorType] ?? investorConfig.institutional;
                      return (
                        <TableRow key={i} className="hover:bg-slate-50">
                          <TableCell className="font-medium text-slate-900 text-sm whitespace-nowrap">
                            {entry.productName}
                          </TableCell>
                          <TableCell className="text-sm text-slate-600">{entry.issuer}</TableCell>
                          <TableCell>
                            <Badge className={`${sfc.color} ${sfc.textColor} border-0 text-xs`}>
                              {sfc.label}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-slate-600">
                            {entry.vatpAvailability.length > 0
                              ? entry.vatpAvailability.join(", ")
                              : "—"}
                          </TableCell>
                          <TableCell>
                            <Badge className={`${inv.color} ${inv.textColor} border-0 text-xs`}>
                              {inv.label}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs text-slate-500 max-w-xs">
                            {entry.restrictions}
                          </TableCell>
                          <TableCell className="text-xs text-slate-400">{entry.launchDate}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ─── Sub-section 3: Liquidity & Trading Data ─── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-4 w-4 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              {d.liquidityTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disclosure.liquidity.map((entry, i) => (
              <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{entry.token}</h4>
                        <span className="text-xs text-slate-400">{entry.pair}</span>
                      </div>
                    </div>
                    <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">
                      {entry.dex}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="text-xs text-slate-400">{d.tvl}</p>
                      <p className="text-sm font-semibold text-slate-900">{entry.tvl}</p>
                    </div>
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="text-xs text-slate-400">{d.volume24h}</p>
                      <p className="text-sm font-semibold text-slate-900">{entry.volume24h}</p>
                    </div>
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="text-xs text-slate-400">{d.price}</p>
                      <p className="text-sm font-semibold text-slate-900">{entry.price}</p>
                      {entry.priceChange24h && (
                        <p className={`text-xs ${
                          entry.priceChange24h.startsWith("+")
                            ? "text-emerald-600"
                            : entry.priceChange24h.startsWith("-")
                            ? "text-red-600"
                            : "text-slate-400"
                        }`}>
                          {entry.priceChange24h}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    {entry.chain}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ─── Sub-section 4: Data Sources & Disclaimer ─── */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-4 w-4 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              {d.dataSourcesTitle}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {disclosure.dataSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                {src.name}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
            <p className="text-xs text-amber-700 leading-relaxed">
              <span className="font-semibold">⚠️ {d.disclaimerTitle}: </span>
              {d.disclaimerNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
