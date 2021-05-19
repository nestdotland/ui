import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Dropdown, { DropdownProps } from '../Dropdown'
import DropdownItem from '../DropdownItem'
import Button from '../Button'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta

const Template: Story<DropdownProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleDropdown() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative m-8">
      <Button layout="primary" onClick={toggleDropdown}>
        Click to open
      </Button>
      <Dropdown className="w-56" {...args} isOpen={isOpen}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem>Item 4</DropdownItem>
      </Dropdown>
    </div>
  )
}

export const Default = Template.bind({})
