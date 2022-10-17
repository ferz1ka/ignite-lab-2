import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export const Default: StoryObj<ButtonProps> = {}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <p>Esse botão é um exemplo de Slot (Radix-UI) usando a tag "p"</p>
    )
  }
}

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button"
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>