import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Backdrop, { BackdropProps } from '../Backdrop'
import Button from '../Button'

export default {
  title: 'Backdrop',
  component: Backdrop,
} as Meta

const Template: Story<BackdropProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleBackdrop() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative">
      <Button onClick={toggleBackdrop}>Open backdrop</Button>
      {isOpen && <Backdrop onClick={toggleBackdrop} {...args} />}
    </div>
  )
}

export const Default = Template.bind({})
