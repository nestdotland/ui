import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Modal, { ModalProps } from '../Modal'

export default {
  title: 'Modal',
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} >
  <p className="text-gray-100">Basic label</p>
</Modal>

export const Basic = Template.bind({})
Basic.args = {
  isOpen: true
}
