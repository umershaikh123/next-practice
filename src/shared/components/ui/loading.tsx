"use client"

import { ThreeDots, Puff } from "react-loader-spinner"
import { Spinner } from "@/shared/components/ui/spinner"

type LoadingProps = {
  variant?: "three-dots" | "puff" | "spinner"
  color?: string
  height?: string | number
  width?: string | number
}

function Loading({
  variant = "three-dots",
  color = "#4fa94d",
  height = "80",
  width = "80",
}: LoadingProps) {
  if (variant === "spinner") {
    return <Spinner className="size-10" />
  }

  if (variant === "puff") {
    return (
      <Puff
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    )
  }

  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color={color}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export { Loading }
