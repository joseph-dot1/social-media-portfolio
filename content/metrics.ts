export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Render as compact notation ("800K") — for large values in tight grids. */
  compact?: boolean;
}

const compactFormat = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

/** Static string form of a metric — for marquees, cards, meta text. */
export function formatMetric(m: Metric): string {
  const n = m.compact ? compactFormat.format(m.value) : m.value.toLocaleString("en-US");
  return `${m.prefix ?? ""}${n}${m.suffix ?? ""}`;
}

// Aggregate proof for the hero metrics band. Sources: client analytics
// screenshots, 2026-07-15. 900K+ views = 735.8K Chibest + 173.5K MJI FB
// + 23.8K Richland + 12.1K MJI YT ≈ 945K (conservative floor).
export const heroMetrics: Metric[] = [
  { value: 900_000, suffix: "+", label: "organic views generated", compact: true },
  { value: 7, label: "brands grown" },
  { value: 3, suffix: "+", label: "years running social growth" },
  { value: 30, suffix: "+", label: "qualified leads from paid social" },
];
