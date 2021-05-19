import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar, { AvatarProps } from '../Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  size: 'large',
  src: "https://deno.land/images/hashrock_simple.png",
  alt: 'Profile image',
}
