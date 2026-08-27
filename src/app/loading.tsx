import { Loading } from "@/shared/components/ui/loading"

export default function RootLoading() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center p-8">
      <Loading />
    </div>
  )
}
