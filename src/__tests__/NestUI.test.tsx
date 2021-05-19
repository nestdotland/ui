import React, { useContext } from 'react'
import { mount } from 'enzyme'
import Button from '../Button'
import NestUI from '../NestUI'
import { NestUIContext } from '../index'

function TestButton() {
  const { toggleMode } = useContext(NestUIContext)

  return <button onClick={toggleMode}>Click</button>
}

describe('NestUI Context', () => {
  beforeEach(() => {
    document.documentElement.className = ''
  })

  it('should use defaultTheme styles', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
    const wrapper = mount(
      <NestUI>
        <Button />
      </NestUI>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should extend theme', () => {
    const expected = 'bg-red-600'
    const theme = {
      button: {
        base: 'bg-red-600',
      },
    }
    const wrapper = mount(
      <NestUI theme={theme}>
        <Button />
      </NestUI>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should add light class to html element if usePreferences is present', () => {
    const expected = 'light'
    mount(
      <NestUI usePreferences>
        <Button />
      </NestUI>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should not add any class to html element if usePreferences is ausent', () => {
    const expected = ''
    mount(
      <NestUI>
        <Button />
      </NestUI>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should execute the toggleTheme method', () => {
    const expected = 'dark'
    const wrapper = mount(
      <NestUI usePreferences>
        <TestButton />
      </NestUI>
    )

    const button = wrapper.find('button')

    button.simulate('click')

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should add dark theme based on users preference', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        }
      }),
    })

    const expected = 'dark'
    mount(
      <NestUI usePreferences>
        <Button />
      </NestUI>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should add dark theme class to html element', () => {
    const expected = 'dark'
    mount(
      <NestUI dark>
        <Button />
      </NestUI>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should add dark theme class to html element when usePreferences is enabled', () => {
    const expected = 'dark'
    mount(
      <NestUI dark usePreferences>
        <Button />
      </NestUI>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })
})
