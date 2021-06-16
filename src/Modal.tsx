import React, { useEffect, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import Backdrop from './Backdrop'
import Transition from './Transition'
import FocusLock from 'react-focus-lock'
import { XIcon } from '@primer/octicons-react'

import { ThemeContext } from './context/ThemeContext'
import ModalHeader from "./ModalHeader"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the modal is open
   */
  isOpen: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  const { children, onClose, isOpen, ...other } = props

  const {
    theme: { modal },
  } = useContext(ThemeContext)

  const baseStyle = modal.base

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modalComponent = (
    <Transition show={isOpen}>
      <Transition
        enter="transition ease-out duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Backdrop onClick={onClose}>
          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 transform translate-y-1/2"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0  transform translate-y-1/2"
          >
            <div className={baseStyle} role="dialog" onClick={(e) => e.stopPropagation()} ref={ref} {...other}>
              <FocusLock returnFocus>
                <ModalHeader onClose={onClose}>Modal Title</ModalHeader>
                {children}
              </FocusLock>
            </div>
          </Transition>
        </Backdrop>
      </Transition>
    </Transition>
  )

  return mounted ? createPortal(modalComponent, document.body) : null
})

export default Modal
