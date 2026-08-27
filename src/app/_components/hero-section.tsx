import Link from "next/link"
import { Button } from "@/shared/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-24 text-center">
      <span className="rounded-full border border-border bg-muted px-4 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Next.js 16 Practice
      </span>
      <h1 className="font-heading text-5xl text-balance sm:text-6xl">
        React Server Components
      </h1>
      <h2 className="text-2xl font-medium text-muted-foreground sm:text-3xl">
        Meet React&apos;s newest hooks
      </h2>
      <p className="max-w-xl text-sm text-muted-foreground">
        A playground for exploring the App Router, layouts, and everything else
        that ships with modern Next.js.
      </p>
      <Button render={<Link href="/dashboard" />} size="lg">
        View dashboard
      </Button>
    </section>
  )
}
