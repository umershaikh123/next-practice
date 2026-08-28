import Link from "next/link"

const DASHBOARD_LINKS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/settings", label: "Settings" },
  { href: "/dashboard/settings/billing", label: "Billing" },
  { href: "/dashboard/analytics", label: "Analytics" },
] as const

export function DashboardNav() {
  return (
    <nav className="mb-6 flex flex-wrap gap-4 border-b border-border pb-4">
      {DASHBOARD_LINKS.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-foreground hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
