import { Icon } from '@iconify/react'
import React from 'react'

const Modal = (props) => {
  const { onClose, open, type, children, ...rest } = props

  const handleOverlayClick = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        {...rest}
        onClick={onClose}
        className={`modal ${open ? 'open' : ''}`}
      >
        <div className={`modal__overlay`}></div>
        <div style={{height: "100%"}} className={`modal__content`} onClick={handleOverlayClick || onClose}>
          <button className="modal__button--close h-cb" onClick={onClose}>
            <Icon icon="mingcute:close-fill" />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
