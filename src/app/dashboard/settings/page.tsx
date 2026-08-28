import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Settings",
}

export default function SettingsPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Settings</h2>
      <p className="text-sm text-muted-foreground">
        This page is rendered inside the Settings layout, which is nested
        inside the Dashboard layout, which is nested inside the Root layout.
      </p>
      <Link
        href="/dashboard/settings/billing"
        className="text-sm font-medium text-primary underline underline-offset-4"
      >
        Go to Billing →
      </Link>
    </div>
  )
}
