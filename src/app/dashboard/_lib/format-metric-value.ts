export function formatMetricValue(value: number) {
  return new Intl.NumberFormat("en-US").format(value)
}

export function formatMetricChange(change: number) {
  const sign = change > 0 ? "+" : ""
  return `${sign}${change.toFixed(1)}%`
}
