import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Navbar from '@/components/layout/header'
import ParticlesBg from '@/components/ui/particles-bg'

export default function Home() {
  return (
    <div className="flex min-h-screen select-none flex-col">
      <ParticlesBg />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
