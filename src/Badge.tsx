import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The accent color of the badge
   */
  color?: 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'purple' | 'gray'
  /**
   * The base color of the badge
   */
  type?: 'light' | 'dark'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  const { className, children, color = 'gray', type = 'dark', ...other } = props

  const {
    theme: { badge },
  } = useContext(ThemeContext)

  const cls = classNames(badge.type[type].base, badge.type[type][color], className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Badge
