import React from 'react'
import { mount } from 'enzyme'
import Badge from '../Badge'

describe('Badge: Light', () => {
  it('should render without crashing', () => {
    mount(<Badge />)
  })

  it('should render with base styles', () => {
    const expected = 'inline-flex px-2 py-1 text-sm uppercase font-bold rounded-md'
    const wrapper = mount(<Badge />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with green color', () => {
    const expected = 'text-green-400'
    const wrapper = mount(<Badge color="green" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with blue color', () => {
    const expected = 'text-blue-400'
    const wrapper = mount(<Badge color="blue" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with red color', () => {
    const expected = 'text-red-400'
    const wrapper = mount(<Badge color="red" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with orange color', () => {
    const expected = 'text-orange-400'
    const wrapper = mount(<Badge color="orange" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with purple color', () => {
    const expected = 'text-purple-400'
    const wrapper = mount(<Badge color="purple" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with primary styles when no type is used', () => {
    const expected = 'bg-gray-800 text-gray-100'
    const wrapper = mount(<Badge />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
