import CardSection from '@/components/CardSection'
import PricingSection from '@/components/PricingSection'
import StartSection from '@/components/StartSection'
import Testimonials from '@/components/Testimonials'
import Hero from '@/screen/Hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <CardSection />
      <Testimonials />
      <div className="container mx-auto px-4">
        <PricingSection />
        <StartSection />
      </div>
    </>
  )
}
