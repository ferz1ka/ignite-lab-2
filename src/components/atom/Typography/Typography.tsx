import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TypographyProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Typography({ size = 'md', children, asChild, className }: TypographyProps) {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp className={`
     text-gray-100
      ${size == 'sm' && 'text-sm'} 
      ${size == 'md' && 'text-md'} 
      ${size == 'lg' && 'text-lg'}
      ${className}
    `}>
      {children}
    </Comp>
  )
}