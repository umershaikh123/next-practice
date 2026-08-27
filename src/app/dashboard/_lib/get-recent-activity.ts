import type { ActivityItem } from "../_types/dashboard.types"

export async function getRecentActivity(): Promise<ActivityItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return [
    { id: "1", actor: "Alice", action: "created a report", timestamp: "2m ago" },
    { id: "2", actor: "Bob", action: "invited a teammate", timestamp: "18m ago" },
    { id: "3", actor: "Carol", action: "updated billing info", timestamp: "1h ago" },
  ]
}
