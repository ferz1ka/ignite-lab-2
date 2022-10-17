import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  size?: 'lg' | 'xl' | 'xxl'
  children: ReactNode
  asChild?: boolean
}

export function Heading({ size = 'xl', children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={`
      text-gray-100
      font-bold
      ${size == 'lg' && 'text-lg'} 
      ${size == 'xl' && 'text-xl'} 
      ${size == 'xxl' && 'text-xxl'}
    `}>
      {children}
    </Comp>
  )
}