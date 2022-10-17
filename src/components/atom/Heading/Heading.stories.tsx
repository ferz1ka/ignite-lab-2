import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['lg', 'xl', 'xxl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Esse texto é um exemplo de Slot (Radix-UI) usando a tag "h1"</h1>
    )
  }
}

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading"
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
} as Meta<HeadingProps>