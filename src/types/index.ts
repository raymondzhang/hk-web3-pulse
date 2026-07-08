export type StatusLevel = "Leading" | "Advancing" | "Developing" | "Emerging";

export interface Milestone {
  date: string;
  description: string;
  source: string;
}

export interface Domain {
  id: string;
  name: string;
  status: StatusLevel;
  color: string;
  description: string;
  milestones: Milestone[];
  globalComparison: string;
  lastUpdated: string;
}

export interface ComparisonRow {
  area: string;
  hongKong: string;
  singapore: string;
  dubai: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  source?: string;
}

export interface DataSource {
  name: string;
  url: string;
}

export interface HKWeb3Data {
  lastUpdated: string;
  overallStatus: StatusLevel;
  overallDescription: string;
  domains: Domain[];
  comparison: ComparisonRow[];
  timeline: TimelineEvent[];
  sources: DataSource[];
  methodology: string;
  disclaimer: string;
}
