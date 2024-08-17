import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Minimal portfolio of ambareesh powered by Next.js',
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
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
