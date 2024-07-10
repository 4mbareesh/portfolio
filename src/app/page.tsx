import { Toaster } from 'react-hot-toast'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import Navbar from '@/components/layout/header'
import ParticlesBg from '@/components/ui/particles-bg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen select-none bg-verdant-bg'>
      <Toaster position='top-center' reverseOrder={false} />
      <ParticlesBg />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
