"use client"
import { Button } from "@/shared/components/ui/button"
import { useState } from "react"

const Count = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="py-4 space-y-4 flex flex-col w-fit">
      <Button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Update Count
      </Button>

      <h1>Count : {count}</h1>
    </div>
  )
}

export default Count
