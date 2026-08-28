import type { ReactNode } from "react"
import {
  LAYOUT_FRAME_COLORS,
  type LayoutFrameColor,
} from "@/shared/constants/layout-frame-colors"

type LayoutFrameProps = {
  label: string
  path: string
  color: LayoutFrameColor
  children: ReactNode
}

export function LayoutFrame({ label, path, color, children }: LayoutFrameProps) {
  const { border, badge } = LAYOUT_FRAME_COLORS[color]

  return (
    <div className={`relative rounded-lg border-4 border-dashed p-6 pt-8 ${border}`}>
      <span
        className={`absolute -top-3 left-4 rounded px-2 py-0.5 text-xs font-semibold tracking-wide ${badge}`}
      >
        {label} <span className="opacity-75">({path})</span>
      </span>
      {children}
    </div>
  )
}
