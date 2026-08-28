import { LayoutFrame } from "@/shared/components/layout-frame"
import { DashboardNav } from "./_components/dashboard-nav"

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <LayoutFrame label="Dashboard Layout" path="dashboard/layout.tsx" color={2}>
      <DashboardNav />
      {children}
    </LayoutFrame>
  )
}
