import { HeroSection } from "./_components/hero-section"

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return <HeroSection />
}
