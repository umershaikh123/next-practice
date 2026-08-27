import { cn } from "@/shared/lib/utils"
import type { Metric } from "../_types/dashboard.types"
import { formatMetricChange, formatMetricValue } from "../_lib/format-metric-value"

export function MetricCard({ metric }: { metric: Metric }) {
  const isPositive = metric.change >= 0

  return (
    <div className="rounded-lg border border-border p-6">
      <p className="text-sm text-muted-foreground">{metric.label}</p>
      <p className="mt-2 text-3xl font-semibold">{formatMetricValue(metric.value)}</p>
      <p
        className={cn(
          "mt-1 text-xs font-medium",
          isPositive ? "text-emerald-600" : "text-destructive"
        )}
      >
        {formatMetricChange(metric.change)}
      </p>
    </div>
  )
}
