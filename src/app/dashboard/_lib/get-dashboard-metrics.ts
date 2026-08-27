import type { Metric } from "../_types/dashboard.types"

export async function getDashboardMetrics(): Promise<Metric[]> {
  // await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: "revenue", label: "Revenue", value: 48200, change: 4.3 },
    { id: "signups", label: "Signups", value: 312, change: -1.2 },
    { id: "active-users", label: "Active Users", value: 1890, change: 2.8 },
  ]
}
