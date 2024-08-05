import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Header from '@/components/layout/header'
import dynamic from 'next/dynamic'
const HeroBg = dynamic(() => import('@/components/home/hero-bg'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <HeroBg />
      <div className="z-0 grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </>
  )
}
