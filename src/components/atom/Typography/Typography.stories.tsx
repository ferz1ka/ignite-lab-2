import { Meta, StoryObj } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export const Default: StoryObj<TypographyProps> = {
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
  }
}

export const CustomComponent: StoryObj<TypographyProps> = {
  args: {
    asChild: true,
    children: (
      <a>Esse texto é um exemplo de Slot (Radix-UI) usando a tag "a"</a>
    )
  }
}

export default {
  title: "Components/Typography",
  component: Typography,
  args: {
    children: "Typography"
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
} as Meta<TypographyProps>