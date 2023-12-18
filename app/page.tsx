import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticlesBg from './components/ParticlesBg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen select-none bg-verdant-bg'>
      <Toaster position='top-center' reverseOrder={false}/>
      <ParticlesBg />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
