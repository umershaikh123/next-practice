"use client"

import { Spinner } from "@/shared/components/ui/spinner"
import { cva } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
type LoadingProps = {
  color?: string
  height?: string | number
  width?: string | number
}

function Loading({ color = "#4fa94d" }: LoadingProps) {
  return <Spinner className={cn("size-10", color)} />
}

export { Loading }
