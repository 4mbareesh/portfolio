import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Navbar from '@/components/layout/header'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export default function Home() {
  return (
    <>
      <ShootingStars className="fixed -z-10" />
      <StarsBackground className="fixed -z-20" />
      <div className="z-0 grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  )
}
