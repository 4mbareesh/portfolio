'use client'

import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import { useTheme } from 'next-themes'

function HeroBg() {
  const { resolvedTheme } = useTheme()
  if (resolvedTheme === 'dark')
    return (
      <>
        <ShootingStars className="fixed -z-10" />
        <StarsBackground className="fixed -z-20" />
      </>
    )
}

export default HeroBg
