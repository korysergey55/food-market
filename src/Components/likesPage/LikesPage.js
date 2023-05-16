import React, { useState, useEffect } from 'react'
import { useStore } from '../../storeMobx/index'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
const LikesPage = observer(() => {
  const { ProductsStore } = useStore()
  const { likesProducts } = ProductsStore
  useEffect(() => {
    console.log(toJS(likesProducts))
  }, [])

  return (
    <h2 className={styles.title}>LikesPage</h2>
  );
})

export default LikesPage;