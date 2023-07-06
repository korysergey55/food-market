import React from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import styles from './styles.module.scss'

const AdminListItem = observer((product) => {

  const { ProductsStore } = useStore()
  // id: uuidv4(),
  // name: '',
  //   category: '',
  //   subcategory: '',
  //   description: '',
  //   brand: '',
  //   weight: 0,
  //   manufactur: '',
  //   fullDescription: '',
  //   AdditionalInformation: '',
  //   Reviews: '',
  //   price: 0,
  //   discount: '',
  //   isSale: false,
  //   image: '',
  //  images: [],
  //   qantity: 1,
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.subcategory}>{product.subcategory}</p>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.weight}>{product.weight}</p>
        <p className={styles.manufactur}>{product.manufactur}</p>
        <p className={styles.fullDescription}>{product.fullDescription}</p>
        <p className={styles.AdditionalInformation}>{product.AdditionalInformation}</p>
        <p className={styles.Reviews}>{product.Reviews}</p>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.discount}>{product.discount}</p>
        <p className={styles.isSale}>{product.isSale}</p>
        {/* <p className={styles.image}>{product.image}</p>
          <p className={styles.images}>{product.images}</p> */}
        <p className={styles.qantity}>{product.qantity}</p>
      </div>

    </li>
  );
})

export default AdminListItem;