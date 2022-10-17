import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react"

export interface TextFieldRootProps {
  children: ReactNode
}

export interface TextFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export interface TextFieldIconProps {
  children: ReactNode
}

function TextFieldRoot({ children }: TextFieldRootProps) {
  return (
    <div className={`
    px-4
    py-3
    rounded
    h-12
    w-full
    bg-gray-800

    focus-within:ring-2
    ring-cyan-500

    flex
    items-center
    gap-3
  `}>
      {children}
    </div>
  )
}

TextFieldRoot.displayName = 'TextField.Root'

function TextFieldInput(props: TextFieldInputProps) {
  return (
    <input
      className={`
        flex-1
        bg-transparent
        outline-none
        text-xs
        text-gray-100
        placeholder:text-gray-400
      `}
      {...props}
    />
  )
}

TextFieldInput.displayName = 'TextField.Input'

function TextFieldIcon({ children }: TextFieldIconProps) {
  return (
    <Slot className={`
      w-6
      h-6
      text-gray-400
    `}>
      {children}
    </Slot>
  )
}

TextFieldIcon.displayName = 'TextField.Icon'

export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Icon: TextFieldIcon,
}