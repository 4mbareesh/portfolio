import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import dynamic from 'next/dynamic'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
const HeroBg = dynamic(() => import('@/components/home/hero-bg'))

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: {
    default: 'Ambareesh A | Portfolio',
    template: '%s | Ambareesh',
  },
  description: 'Minimal portfolio of Ambareesh A, powered by Next.js',
  keywords: [
    'Ambareesh',
    'Ambareesh A',
    'Portfolio',
    'Ambareesh portfolio',
    'Portfolio Ambareesh',
    'Portfolio Ambareesh A',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background selection:bg-verdant-blue selection:text-white`}
      >
        <Providers>
          <HeroBg />
          <div className="container z-0 mx-auto grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
