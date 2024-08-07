'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    icon?: React.ReactNode
    variant?: 'default' | 'theme'
  }
>(({ className, icon, variant = 'default', ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-verdant-fg data-[state=unchecked]:bg-verdant-fg-dark-2',
      className
    )}
    {...props}
    ref={ref}
  >
    {variant === 'theme' && (
      <Sparkles
        size={16}
        className="absolute ml-px hidden rounded stroke-verdant-blue dark:block"
      />
    )}
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none inline-flex h-5 w-5 items-center justify-center rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-verdant-bg data-[state=unchecked]:bg-verdant-fg'
      )}
    >
      {icon || null}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
