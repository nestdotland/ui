import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputProps } from '../Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => (
  <form className="flex flex-col space-y-6">
    <Input name={args.type} {...args} />
    <Input name={args.type} {...args} />
    <Input name={args.type} {...args} />
  </form>
)

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  label: 'Input',
  placeholder: 'Placeholder'
}
