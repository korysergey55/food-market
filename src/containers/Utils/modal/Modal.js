import { useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

const Modal = observer(({ children, title = 'title' }) => {
  const { AuthStore } = useStore()

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEsc)
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
    }
  })

  const handleEsc = evt => {
    if (evt.code === 'Escape') {
      AuthStore.toggleModalAction()
    }
  }

  const handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) return
    AuthStore.toggleModalAction()
  }

  const modalRoot = document.querySelector('#modal-root')
  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <h2>{title}</h2>
      <div className={styles.Modal}>
        <button
          type="button"
          className={styles.closeModal}
          onClick={() => AuthStore.toggleModalAction()}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
})

export default Modal
