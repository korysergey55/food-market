import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'

import styles from './styles.module.scss'
import { Modal } from 'antd'

const ModalAnt = observer(({ title, visible, children, width }) => {
  const {AuthStore} = useStore()
  const history = useHistory()
  
  const handleOk = () => {
    AuthStore.toggleAntModalAction()
  }
  const handleCancel = () => {
    AuthStore.toggleAntModalAction()
    history.push('/home')
    AuthStore.resetForgotPasswordAction()
  }

  return (
    <Modal
      title={title}
      className={styles.modal}
      width={width}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={true}
    >
      {children}
    </Modal>
  )
})

export default ModalAnt
