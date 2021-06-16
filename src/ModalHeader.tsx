import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'
import { NoteIcon, XIcon } from '@primer/octicons-react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onClose: any
}

const ModalHeader = React.forwardRef<HTMLParagraphElement, Props>(function ModalHeader(props, ref) {
  const { children, className, onClose, ...other } = props
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext)

  const baseStyle = modalHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <header className={cls} ref={ref} {...other}>
      <div className="space-x-4">
        <NoteIcon className="h-5 w-5" />
        {children}
      </div>
      <button
        className="w-6 h-6 inline-flex items-center justify-center rounded text-gray-300 hover:text-gray-100 transition-colors duration-100"
        aria-label="close"
        onClick={onClose}
      >
        <XIcon className="w-5 h-5" />
      </button>
    </header>
  )
})

export default ModalHeader
