#!/usr/bin/env node

/**
 * hk-web3-pulse Daily Pulse Check Script
 *
 * 每天运行，检查 HK Web3 领域最新动态，自动更新数据文件。
 * 在 GitHub Actions 中运行（需要 OPENAI_API_KEY secret）。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "../src/data");

// ─── Load current data ────────────────────────────────────────────────────

function loadJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filename} not found, skipping`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
  console.log(`✅ Updated ${filename}`);
}

const locales = ["en", "zh-CN", "zh-TW"];

// Load all locale data
const timelineData = {};
const domainData = {};
const comparisonData = {};
const sourcesData = {};
const hkWeb3 = loadJSON("hk-web3-mvp.json");

for (const locale of locales) {
  timelineData[locale] = loadJSON(`timelineData.${locale}.json`);
  domainData[locale] = loadJSON(`domainData.${locale}.json`);
  comparisonData[locale] = loadJSON(`comparisonData.${locale}.json`);
  sourcesData[locale] = loadJSON(`sources.${locale}.json`);
}

// ─── Build prompt ─────────────────────────────────────────────────────────

function buildPrompt() {
  // Show the latest few timeline entries to know what we already have
  const recentEvents = timelineData["en"]
    .slice(0, 5)
    .map((e) => `- ${e.date}: ${e.title}`)
    .join("\n");

  return `You are a Hong Kong Web3 policy analyst. Your task is to check if there are any NEW developments in HK Web3 since the last update.

Current data as of: ${hkWeb3.lastUpdated}
Current overall status: ${hkWeb3.overallStatus}

Recent milestones already recorded:
${recentEvents}

Three domains tracked:
1. Regulation & Licensing (VATP, SFC circulars, new licensing regimes)
2. RWA / Tokenization (tokenized bonds, SFC-approved funds, DACC, Project Ensemble)
3. Stablecoins (HKMA licenses, new applications, regulatory changes)

Please search for ANY new developments since ${hkWeb3.lastUpdated} in these areas.

If there are NEW developments, respond with a JSON object:
{
  "hasUpdates": true,
  "newOverallStatus": "Advancing",  // or leave as current if unchanged
  "newTimelineEvents": [
    {
      "date": "2026-08",
      "title_en": "English title",
      "title_zhCN": "简体中文标题",
      "title_zhTW": "繁體中文標題",
      "description_en": "English description",
      "description_zhCN": "简体中文描述",
      "description_zhTW": "繁體中文描述"
    }
  ],
  "domainUpdates": [
    {
      "domainId": "regulation",  // or "rwa" or "stablecoins"
      "newStatus": "Advancing",  // optional
      "newMilestones": [
        {
          "date": "2026-08",
          "description_en": ["English milestone description"],
          "description_zhCN": ["简体中文里程碑描述"],
          "description_zhTW": ["繁體中文里程碑描述"]
        }
      ]
    }
  ]
}

If there are NO new developments, respond with:
{ "hasUpdates": false }

IMPORTANT: Only report developments that are VERIFIED from official sources (SFC, HKMA, FSTB, Hong Kong government). Do NOT fabricate or guess.`;
}

// ─── Call LLM API ─────────────────────────────────────────────────────────

async function callLLM(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.log("⚠️  OPENAI_API_KEY not set — skipping LLM call");
    return null;
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a Hong Kong Web3 policy analyst. You only report verified facts from official sources. Respond in JSON format only.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.1,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`❌ LLM API error: ${response.status} ${err}`);
    return null;
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  // Extract JSON from response (may be wrapped in ```json ... ```)
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/(\{[\s\S]*\})/);
  if (!jsonMatch) {
    console.error("❌ Could not parse LLM response as JSON:", content.slice(0, 200));
    return null;
  }
  return JSON.parse(jsonMatch[1]);
}

// ─── Apply updates ────────────────────────────────────────────────────────

function applyUpdates(result) {
  if (!result || !result.hasUpdates) {
    console.log("ℹ️  No new developments detected.");
    return false;
  }

  const today = new Date().toISOString().slice(0, 10);

  // Update hk-web3-mvp.json
  if (result.newOverallStatus) {
    hkWeb3.overallStatus = result.newOverallStatus;
  }
  hkWeb3.lastUpdated = today;
  saveJSON("hk-web3-mvp.json", hkWeb3);

  // Add new timeline events (prepend to existing)
  if (result.newTimelineEvents && result.newTimelineEvents.length > 0) {
    for (const evt of result.newTimelineEvents) {
      for (const locale of locales) {
        const localeKey = locale === "en" ? "en" : locale === "zh-CN" ? "zhCN" : "zhTW";
        timelineData[locale].unshift({
          date: evt.date,
          title: evt[`title_${localeKey}`] || evt.title_en,
          description: evt[`description_${localeKey}`] || evt.description_en,
        });
      }
    }
    for (const locale of locales) {
      saveJSON(`timelineData.${locale}.json`, timelineData[locale]);
    }
    console.log(`📅 Added ${result.newTimelineEvents.length} new timeline event(s)`);
  }

  // Update domain data
  if (result.domainUpdates && result.domainUpdates.length > 0) {
    for (const update of result.domainUpdates) {
      for (const locale of locales) {
        const domain = domainData[locale].find((d) => d.id === update.domainId);
        if (!domain) continue;

        if (update.newStatus) {
          domain.status = update.newStatus;
        }
        if (update.newMilestones && update.newMilestones.length > 0) {
          const localeSuffix = locale === "en" ? "en" : locale === "zh-CN" ? "zhCN" : "zhTW";
          const newMilestones = update.newMilestones.map((m) => ({
            date: m.date,
            description: m[`description_${localeSuffix}`] || m.description_en,
          }));
          domain.milestones.push(...newMilestones);
        }
        domain.lastUpdated = today;
      }
    }
    for (const locale of locales) {
      saveJSON(`domainData.${locale}.json`, domainData[locale]);
    }
    console.log(`📊 Updated ${result.domainUpdates.length} domain(s)`);
  }

  return true;
}

// ─── Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔍 HK Web3 Pulse Check —", new Date().toISOString());
  console.log(`   Last updated: ${hkWeb3.lastUpdated}`);
  console.log(`   Current status: ${hkWeb3.overallStatus}`);

  const prompt = buildPrompt();
  const result = await callLLM(prompt);

  if (result) {
    const changed = applyUpdates(result);
    if (changed) {
      console.log("✅ Pulse check complete — changes detected and applied.");
    } else {
      console.log("✅ Pulse check complete — no changes needed.");
    }
  } else {
    console.log("⚠️  Pulse check skipped — LLM unavailable.");
  }
}

main().catch((err) => {
  console.error("❌ Pulse check failed:", err);
  process.exit(1);
});