export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Render as compact notation ("800K") — for large values in tight grids. */
  compact?: boolean;
}

// Aggregate proof for the hero metrics band. Sources: resume, 2026-07.
// 800K+ views = 604.3K Chibest + 165.6K MJI FB + 12.1K MJI YT + 23.8K Richland (conservative floor).
export const heroMetrics: Metric[] = [
  { value: 800_000, suffix: "+", label: "organic views generated", compact: true },
  { value: 7, label: "brands grown" },
  { value: 3, suffix: "+", label: "years running social growth" },
  { value: 30, suffix: "+", label: "qualified leads from paid social" },
];
