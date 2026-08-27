export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return <div className="mx-auto w-full max-w-5xl p-8">{children}</div>
}
