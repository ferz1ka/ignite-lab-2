import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'
import { CheckBox } from './CheckBox'

export const Default: StoryObj = {}

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Typography size="sm">Label</Typography>
      </div>
    )
  ]
} as Meta