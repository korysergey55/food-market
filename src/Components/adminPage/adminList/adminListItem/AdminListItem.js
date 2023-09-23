import { useEffect } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import sprite from '../../../../sourses/icons/productsSprite.svg'

const AdminListItem = observer((...product) => {
  const {
    id,
    name,
    category,
    subcategory,
    description,
    brand, weight,
    manufactur,
    fullDescription,
    AdditionalInformation,
    Reviews,
    price,
    discount,
    isSale,
    image,
    images,
    qantity
  } = product[0].product

  const { ProductsStore } = useStore()

  const remuveProductDatabase = async (id) => {
    const responce = await ProductsStore.deleteProductAPI(id);
    if (responce) ProductsStore.getAllProductsAPI();
  }

  return (
    <li className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item} >
          <div className={styles.iconEditContainer} onClick={() => ProductsStore.setEditedProduct(id)}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </div>
          <div className={styles.iconBinContainer} onClick={() => remuveProductDatabase(id)}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-bin'} />
            </svg>
          </div>
        </li>
        <li className={styles.item}>
          <img src={image} alt='product-image' width='100' height='100' />
        </li>
        <li className={styles.item}>
          <p className='fieldName'>id</p>
          <h3 className='fieldText'> {id}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>name</p>
          <h3 className='fieldText'> {name}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>category</p>
          <h3 className='fieldText'> {category}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>subcategory</p>
          <h3 className='fieldText'> {subcategory}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>brand</p>
          <h3 className='fieldText'> {brand}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>weight</p>
          <h3 className='fieldText'> {weight}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>manufactur</p>
          <h3 className='fieldText'> {manufactur}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>fullDescription</p>
          <h3 className='fieldText'> {fullDescription}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>AdditionalInformation</p>
          <h3 className='fieldText'> {AdditionalInformation}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>Reviews</p>
          <h3 className='fieldText'> {Reviews}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>price</p>
          <h3 className='fieldText'> {price}</h3>
        </li>
        <li className={styles.item}>
          <p className='fieldName'>discount</p>
          <h3 className='fieldText'> {discount}</h3>
          {discount}
        </li>
        <li className={styles.item}>
          <p className='fieldName'>isSale</p>
          <h3 className='fieldText'> {isSale ? isSale : 'no'}</h3>
        </li>
      </ul>
    </li>
  );
})

export default AdminListItem;