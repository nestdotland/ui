import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '../Card'

export default {
  title: 'Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card className="p-4 text-gray-100" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello',
  color: 'default',
}
