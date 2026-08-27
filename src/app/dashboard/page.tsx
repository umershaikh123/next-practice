import type { Metadata } from "next"
import { DashboardHeader } from "./_components/dashboard-header"
import { MetricCard } from "./_components/metric-card"
import { getDashboardMetrics } from "./_lib/get-dashboard-metrics"
import { ErrorTrigger } from "@/shared/components/error-trigger"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const metrics = await getDashboardMetrics()

  return (
    <div className="space-y-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="flex justify-center">
        <ErrorTrigger label="Trigger route error" message="Simulated route error on Dashboard" />
      </div>
    </div>
  )
}
