import { LayoutFrame } from "@/shared/components/layout-frame"

export default function AnalyticsLayout({
  children,
}: LayoutProps<"/dashboard/analytics">) {
  return (
    <LayoutFrame
      label="Analytics Layout"
      path="dashboard/analytics/layout.tsx"
      color={5}
    >
      {children}
    </LayoutFrame>
  )
}
