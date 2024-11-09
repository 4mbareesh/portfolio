'use client'

import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import { useTheme } from 'next-themes'

function HeroBg() {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'dark' ? (
    <>
      <ShootingStars className="fixed -z-10" />
      <StarsBackground className="fixed -z-20" />
    </>
  ) : null
}

export default HeroBg
