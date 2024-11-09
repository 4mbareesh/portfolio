'use client'

import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const

type BreakpointKey = keyof typeof BREAKPOINTS

interface WindowDimensions extends WindowSize {
  isBreakpoint: (breakpoint: BreakpointKey) => boolean
  isBetweenBreakpoints: (min: BreakpointKey, max: BreakpointKey) => boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  orientation: 'portrait' | 'landscape'
  aspectRatio: number
}

export const useWindowSize = (
  debounceDelay: number = 100
): WindowDimensions => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const getCurrentDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setWindowSize(getCurrentDimensions())
      }, debounceDelay)
    }

    // Handle orientation change explicitly for mobile devices
    const handleOrientationChange = () => {
      clearTimeout(timeoutId)
      // Small delay to ensure new dimensions are available
      timeoutId = setTimeout(() => {
        setWindowSize(getCurrentDimensions())
      }, 50)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    // Set initial size
    setWindowSize(getCurrentDimensions())

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [debounceDelay])

  const isBreakpoint = (breakpoint: BreakpointKey): boolean =>
    windowSize.width >= BREAKPOINTS[breakpoint]

  const isBetweenBreakpoints = (
    min: BreakpointKey,
    max: BreakpointKey
  ): boolean =>
    windowSize.width >= BREAKPOINTS[min] && windowSize.width < BREAKPOINTS[max]

  return {
    ...windowSize,
    isBreakpoint,
    isBetweenBreakpoints,
    isMobile: windowSize.width <= BREAKPOINTS.sm,
    isTablet:
      windowSize.width > BREAKPOINTS.sm && windowSize.width <= BREAKPOINTS.lg,
    isDesktop: windowSize.width > BREAKPOINTS.lg,
    orientation:
      windowSize.width > windowSize.height ? 'landscape' : 'portrait',
    aspectRatio: windowSize.width / windowSize.height,
  }
}
