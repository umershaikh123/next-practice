import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Billing",
}

export default function BillingPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Billing</h2>
      <p className="text-sm text-muted-foreground">
        Four layouts deep: Root → Dashboard → Settings → Billing. Each
        dashed border above is a separate layout.tsx.
      </p>
      <Link
        href="/dashboard/settings"
        className="text-sm font-medium text-primary underline underline-offset-4"
      >
        ← Back to Settings
      </Link>
    </div>
  )
}
