import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the color of the card. (no color by default)
   */
  color?: 'default' | 'white' | 'black' | 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'purple'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { className, children, color = 'default', ...other } = props
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base

  const cls = classNames(baseStyle, card.color[color], className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default Card
