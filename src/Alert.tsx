import React, { SVGAttributes, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'
import * as Octoicon from '@primer/octicons-react'

enum AlertEnum {
  success,
  danger,
  warning,
  info,
  neutral,
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of the alert
   */
  type?: keyof typeof AlertEnum
  /**
   * If defined, shows the close icon that calls this function
   */
  onClose?: () => void
}

type IconProps = SVGAttributes<SVGElement>

export const InfoIcon: React.FC<IconProps> = (props) => <Octoicon.InfoIcon {...props} />

export const WarningIcon: React.FC<IconProps> = (props) => <Octoicon.AlertIcon {...props} />

export const DangerIcon: React.FC<IconProps> = (props) => <Octoicon.FlameIcon {...props} />

export const SuccessIcon: React.FC<IconProps> = (props) => <Octoicon.CheckCircleIcon {...props} />

export const NeutralIcon: React.FC<IconProps> = (props) => <Octoicon.InfoIcon {...props} />

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { className, children, type = 'neutral', onClose, ...other } = props
  const {
    theme: { alert },
  } = useContext(ThemeContext)

  const baseStyle = alert.base
  const withCloseStyle = alert.withClose
  const typeStyle = alert[type]
  const iconBaseStyle = alert.icon.base
  const iconTypeStyle = alert.icon[type]

  let Icon
  switch (type) {
    case 'success':
      Icon = SuccessIcon
      break
    case 'warning':
      Icon = WarningIcon
      break
    case 'danger':
      Icon = DangerIcon
      break
    case 'info':
      Icon = InfoIcon
      break
    case 'neutral':
      Icon = NeutralIcon
      break
    default:
      Icon = NeutralIcon
  }

  const cls = classNames(baseStyle, typeStyle, onClose && withCloseStyle, className)

  const iconCls = classNames(iconBaseStyle, iconTypeStyle, 'absolute left-0 top-0 ml-4 mt-4')
  const closeCls = classNames(iconBaseStyle, iconTypeStyle)

  return (
    <div className={cls} role="alert" ref={ref} {...other}>
      {onClose && (
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4" aria-label="close">
          <Octoicon.XIcon className={closeCls} />
        </button>
      )}
      <Icon className={iconCls} />
      {children}
    </div>
  )
})

export default Alert
