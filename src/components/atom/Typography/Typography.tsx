export interface TypographyProps {
  size?: 'sm' | 'md' | 'lg'
  children: string
}

export function Typography({ size = 'md', children }: TypographyProps) {
  return (
    <span className={`
    text-gray-100 
    ${size == 'sm' && 'text-xs'} 
    ${size == 'md' && 'text-md'} 
    ${size == 'lg' && 'text-lg'}
    `}>
      {children}
    </span>
  )
}