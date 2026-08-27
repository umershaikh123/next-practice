"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-2xl font-semibold">Application error</h1>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="rounded-none border border-transparent bg-black px-6 py-2 text-xs font-semibold tracking-widest text-white uppercase"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
