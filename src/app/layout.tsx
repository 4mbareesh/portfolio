import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

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
        className={`${poppins.className} selection:text-white bg-verdant-bg selection:bg-verdant-blue`}
      >
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  )
}
