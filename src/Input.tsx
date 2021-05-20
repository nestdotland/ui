import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Defines the color of the input
   */
  valid?: boolean
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean
  /**
   * Defines the type of the input
   */
  type?: 'text' | 'password' | 'radio' | 'checkbox'
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { valid, disabled, className, label, type = 'text', ...other } = props

  const {
    theme: { input },
  } = useContext(ThemeContext)

  const baseStyle = input.base
  const activeStyle = input.active
  const disabledStyle = input.disabled
  const validStyle = input.valid
  const invalidStyle = input.invalid

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = classNames(
    baseStyle,
    input.type[type],
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  )

  switch (type) {
    case 'text':
      return (
        <label className={input.wrapper[type]}>
          <span className={input.label[type]}>{label}</span>
          <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
        </label>
      )

    case 'password':
      return (
        <label className={input.wrapper[type]}>
          <span className={input.label[type]}>{label}</span>
          <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
        </label>
      )

    case 'radio':
      return (
        <label className={input.wrapper[type]}>
          <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
          <span className={input.label[type]}>{label}</span>
        </label>
      )

    case 'checkbox':
      return (
        <label className={input.wrapper[type]}>
          <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
          <span className={input.label[type]}>{label}</span>
        </label>
      )

    default:
      return (
        <label className={input.wrapper.text}>
          <span className={input.label.text}>{label}</span>
          <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
        </label>
      )
  }
})

export default Input
