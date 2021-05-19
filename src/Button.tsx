import classNames from 'classnames'
import React, { ReactNode, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import warn from './utils/warning'

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>

export interface Props {
  children?: React.ReactNode
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean
  /**
   * The size of the button
   */
  size?: 'larger' | 'large' | 'regular' | 'small'
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType
  /**
   * The style of the button
   */
  layout?: 'primary' | 'outline' | 'link' | 'blank'
  /**
   * The accent color of the badge
   */
  accent?: 'gray' | 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'purple'
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean
}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button'
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a'
}

export interface ButtonAsOtherProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps

type Ref = ReactNode | HTMLElement | string

const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined, // patch for https://github.com/estevanmaito/windmill-react-ui/issues/7
    disabled = false,
    size = 'regular',
    layout = 'primary',
    accent = 'gray',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props
  const {
    theme: { button },
  } = useContext(ThemeContext)

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight
  }

  warn(
    hasIcon() && !other['aria-label'] && !children,
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  )

  const IconLeft = iconLeft || icon
  const IconRight = iconRight

  const baseStyle = button.base
  const blockStyle = button.block
  const sizeStyles = {
    larger: button.size.larger,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
  }
  const iconSizeStyles = {
    larger: button.size.icon.larger,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
  }
  const iconStyle = button.icon[size]
  const layoutStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  }
  const accentStyles = {
    primary: button.primary.accent[accent],
    outline: button.outline.accent[accent],
    link: button.link.accent[accent],
  }
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  }
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  }

  const iconLeftStyles = classNames(iconStyle, children ? button.icon.left : '')
  const iconRightStyles = classNames(iconStyle, children ? button.icon.right : '')

  return React.createElement(
    tag,
    {
      className: classNames(
        baseStyle,
        // has icon but no children
        hasIcon() && !children && iconSizeStyles[size],
        // has icon and children
        hasIcon() && children && sizeStyles[size],
        // does not have icon
        !hasIcon() && sizeStyles[size],
        layoutStyles[layout],
        accentStyles[layout],
        disabled ? disabledStyles[layout] : activeStyles[layout],
        block ? blockStyle : null,
        className
      ),
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft ? React.createElement(IconLeft, { className: iconLeftStyles, 'aria-hidden': true }) : null,
    children,
    IconRight ? React.createElement(IconRight, { className: iconRightStyles, 'aria-hidden': true }) : null
  )
})

export default Button
