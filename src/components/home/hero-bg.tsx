'use client'

import { useWindowSize } from '@/hooks/use-window-size'
import Particles from '../ui/particles'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import { useTheme } from 'next-themes'
import { memo } from 'react'

function HeroBg() {
  const { resolvedTheme } = useTheme()
  const { isBreakpoint } = useWindowSize()
  const isDark = resolvedTheme === 'dark'
  const isLargeScreen = isBreakpoint('lg')

  if (!isDark) return null

  return (
    <>
      {isLargeScreen ? (
        <Particles
          className="fixed inset-0 -z-50 duration-500 animate-in fade-in"
          aria-hidden="true"
        />
      ) : (
        <StarsBackground
          className="fixed -z-20 duration-500 animate-in fade-in"
          aria-hidden="true"
        />
      )}
      <ShootingStars
        className="fixed -z-10 duration-500 animate-in fade-in"
        aria-hidden="true"
      />
    </>
  )
}

export default memo(HeroBg)
