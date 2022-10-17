import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'
import { CheckBox, CheckBoxProps } from './CheckBox'

export const Default: StoryObj<CheckBoxProps> = {}

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {
    checked: false
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Typography size="sm">Label</Typography>
      </div>
    )
  ]
} as Meta<CheckBoxProps>