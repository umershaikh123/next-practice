import { LayoutFrame } from "@/shared/components/layout-frame"

export default function BillingLayout({
  children,
}: LayoutProps<"/dashboard/settings/billing">) {
  return (
    <LayoutFrame
      label="Billing Layout"
      path="dashboard/settings/billing/layout.tsx"
      color={4}
    >
      {children}
    </LayoutFrame>
  )
}
