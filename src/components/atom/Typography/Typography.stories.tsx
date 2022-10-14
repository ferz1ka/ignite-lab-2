import { Meta, StoryObj } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export const Small: StoryObj<TypographyProps> = {
  args: {
    size: 'sm'
  }
}

export const MediumDefault: StoryObj<TypographyProps> = {
  args: {
    size: 'md'
  }
}

export const Large: StoryObj<TypographyProps> = {
  args: {
    size: 'lg'
  }
}

export default {
  title: "Components/Typography",
  component: Typography,
  args: {
    children: "Typography"
  }
} as Meta<TypographyProps>