"use client"

import { ThreeDots, Puff } from "react-loader-spinner"
import { Spinner } from "@/shared/components/ui/spinner"

type LoadingProps = {
  color?: string
  height?: string | number
  width?: string | number
}

function Loading({
  color = "#4fa94d",
  height = "80",
  width = "80",
}: LoadingProps) {
  return <Spinner className="size-10" />
}

export { Loading }
