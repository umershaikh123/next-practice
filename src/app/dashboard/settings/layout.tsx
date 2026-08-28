import { LayoutFrame } from "@/shared/components/layout-frame"

export default function SettingsLayout({
  children,
}: LayoutProps<"/dashboard/settings">) {
  return (
    <LayoutFrame
      label="Settings Layout"
      path="dashboard/settings/layout.tsx"
      color={3}
    >
      {children}
    </LayoutFrame>
  )
}
