import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Navbar from '@/components/layout/header'
import dynamic from 'next/dynamic'
const ParticlesBg = dynamic(() => import('@/components/ui/particles-bg'), {
  ssr: false,
})

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
