import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import Cart from './cart/Cart'
import Footer from '../../containers/footer/Footer'
import styles from './styles.module.scss'

const CartPage = observer(() => {
  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <Cart />
      </div>
      <Footer />
    </div>
  )
})

export default CartPage
