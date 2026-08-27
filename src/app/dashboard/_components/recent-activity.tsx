import { getRecentActivity } from "../_lib/get-recent-activity"

export async function RecentActivity() {
  const activity = await getRecentActivity()

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <ul className="divide-y divide-border rounded-lg border border-border">
        {activity.map((item) => (
          <li key={item.id} className="flex items-center justify-between px-4 py-3 text-sm">
            <span>
              <span className="font-medium">{item.actor}</span>{" "}
              <span className="text-muted-foreground">{item.action}</span>
            </span>
            <span className="text-xs text-muted-foreground">{item.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
