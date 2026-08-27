"use client"
import { useEffect } from "react"
import { Button } from "@/shared/components/ui/button"
import { GLOBAL_ERROR_MESSAGE } from "@/shared/constants/error-messages"

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  if (error.message === GLOBAL_ERROR_MESSAGE) {
    throw error
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="text-sm text-muted-foreground">{error?.message}</p>
      <Button onClick={retry}>Try again</Button>
    </div>
  )
}
