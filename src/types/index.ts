export type StatusLevel = "Leading" | "Advancing" | "Developing" | "Emerging";

export interface Milestone {
  date: string;
  description: string | string[];
  source?: string;
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
}
