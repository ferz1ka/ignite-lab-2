import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={`
      px-4
      py-3
      rounded
      w-full
      outline-none
      bg-cyan-500

      text-black
      text-sm
      font-semibold

      transition-colors
      hover:bg-cyan-300
      focus:ring-2
      ring-white

      flex
      items-center
      justify-center
    `}
      {...props}
    >
      {children}
    </Comp>
  )
}