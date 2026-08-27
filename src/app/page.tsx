import { HeroSection } from "./_components/hero-section"
import { ErrorTrigger } from "@/shared/components/error-trigger"
import { GLOBAL_ERROR_MESSAGE } from "@/shared/constants/error-messages"

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <>
      <HeroSection />
      <div className="flex justify-center gap-4 pb-16">
        <ErrorTrigger label="Trigger route error" message="Simulated route error on Home" />
        <ErrorTrigger label="Trigger global error" message={GLOBAL_ERROR_MESSAGE} />
      </div>
    </>
  )
}
