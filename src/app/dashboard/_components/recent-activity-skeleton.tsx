export function RecentActivitySkeleton() {
  return (
    <div className="space-y-3">
      <div className="h-6 w-40 animate-pulse rounded bg-muted" />
      <div className="space-y-2 rounded-lg border border-border p-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-5 animate-pulse rounded bg-muted" />
        ))}
      </div>
    </div>
  )
}
