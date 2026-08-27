import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
]

export function NavBar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex w-full max-w-5xl items-center gap-6 px-8 py-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
