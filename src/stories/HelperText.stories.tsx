import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import HelperText, { HelperTextProps } from '../HelperText'

export default {
  title: 'HelperText',
  component: HelperText,
} as Meta

const Template: Story<HelperTextProps> = (args) => <HelperText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Helper text used with inputs.',
  valid: null,
}
