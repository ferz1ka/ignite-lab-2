import { Meta, StoryObj } from '@storybook/react'
import { TextField, TextFieldRootProps } from './TextField'
import { Lock, Eye } from 'phosphor-react'

export const Default: StoryObj<TextFieldRootProps> = {

}

export default {
  title: "Components/TextField",
  component: TextField.Root,
  args: {
    children: (
      [
        <TextField.Icon>
          <Lock />
        </TextField.Icon>,
        <TextField.Input placeholder='Placeholder' />,
        <TextField.Icon>
          <Eye />
        </TextField.Icon>,
      ]
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextFieldRootProps>