import { useEffect } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import sprite from '../../../../sourses/icons/productsSprite.svg'
import { Button, message, Popconfirm } from 'antd';

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
  } = product[0].product

  const { ProductsStore } = useStore()

  const confirm = async (e: React.MouseEvent<HTMLElement>) => {
    const responce = await ProductsStore.deleteProductAPI(id);
    if (responce) {
      message.success('Product was secsesfuly deleted');
      ProductsStore.getAllProductsAPI();
    }
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    message.error('Rejected deleted');
  };

  return (
    <li className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item} >
          <div className={styles.iconEditContainer} onClick={() => ProductsStore.setEditedProduct(id)}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </div>
          <div className={styles.iconBinContainer}>
            <Popconfirm
              title="Delete product"
              description="Are you sure to delete this product?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
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