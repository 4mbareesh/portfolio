import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Navbar from '@/components/layout/header'
import ParticlesBg from '@/components/ui/particles-bg'

export default function Home() {
  return (
    <>
      <ParticlesBg />
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  )
}
