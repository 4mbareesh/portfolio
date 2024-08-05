'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return <div className='bg-verdant-fg-dark/20 dark:bg-zinc-200/20 animate-pulse h-6 w-11 rounded-full backdrop-blur-3xl'/>
  return (
    <Switch
      onCheckedChange={() =>
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }
      checked={resolvedTheme === 'dark' ? true : false}
      icon={resolvedTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      variant='theme'
    />
  )
}

export default ToggleTheme
