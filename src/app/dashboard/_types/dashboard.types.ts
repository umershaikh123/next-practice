export type Metric = {
  id: string
  label: string
  value: number
  change: number
}

export type ActivityItem = {
  id: string
  actor: string
  action: string
  timestamp: string
}
