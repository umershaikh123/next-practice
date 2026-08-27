"use client"

import { useState } from "react"
import { Button } from "@/shared/components/ui/button"

type ErrorTriggerProps = {
  label: string
  message: string
}

export function ErrorTrigger({ label, message }: ErrorTriggerProps) {
  const [shouldThrow, setShouldThrow] = useState(false)

  if (shouldThrow) {
    throw new Error(message)
  }

  return (
    <Button variant="destructive" onClick={() => setShouldThrow(true)}>
      {label}
    </Button>
  )
}
