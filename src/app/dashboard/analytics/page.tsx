import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Analytics</h2>
      <p className="text-sm text-muted-foreground">
        A sibling branch to Settings: Root → Dashboard → Analytics. Same
        depth as Settings, different layout instance — navigating between
        the two remounts this layout and its state.
      </p>
    </div>
  )
}
