export const LAYOUT_FRAME_COLORS = {
  1: {
    border: "border-layout-frame-1",
    badge: "bg-layout-frame-1 text-white",
  },
  2: {
    border: "border-layout-frame-2",
    badge: "bg-layout-frame-2 text-white",
  },
  3: {
    border: "border-layout-frame-3",
    badge: "bg-layout-frame-3 text-white",
  },
  4: {
    border: "border-layout-frame-4",
    badge: "bg-layout-frame-4 text-white",
  },
  5: {
    border: "border-layout-frame-5",
    badge: "bg-layout-frame-5 text-black",
  },
} as const

export type LayoutFrameColor = keyof typeof LAYOUT_FRAME_COLORS
