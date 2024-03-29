import React, { useEffect, useState } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import CategoryRouts from '../../routes/CategoryRouts'
import Filters from '../productsPage/filters/Filters'
import SubscribeForm from '../../containers/Reuseble/subscribeForm/SubscribeForm.tsx'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd'
const { Search } = Input

const ProductsPage = observer(() => {
  const { ProductsStore } = useStore()
  const { t } = useTranslation();

  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()

  const [search, setSearchValue] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    history.push(match.path + '/all')
  }, [match.path])

  useEffect(() => {
    window.scroll(0, 350)
  }, [])

  useEffect(() => {
    setSearchValue('')
    ProductsStore.filterProducts('')
  }, [location.pathname])

  useEffect(() => {
    setShowFilters(false)
  }, [location.pathname])

  const onChangeSearch = evt => {
    const { value } = evt.target
    setSearchValue(value)
    if (value === '') {
      ProductsStore.filterProducts('')
    }
    ProductsStore.filterProducts(value)
  }

  const onSearch = (value) => {
    ProductsStore.filterProducts(value)
    setSearchValue(value)
  }

  const handleShowFilters = () => {
    setShowFilters(!showFilters)
    ProductsStore.resetFilters()
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        {location.pathname === '/products/all' ?
          <h2
            className={styles.title}
            onClick={() => history.push(match.path + '/all')}
          >
            {t('productsPage.category_of_goods')}
          </h2 >
          : null}
        {location.pathname !== '/products/all' ?
          <div className={styles.filterWripper}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faFilter}
              size="2x"
              color="#1890ff"
              onClick={() => handleShowFilters()}
            />
            <Search
              className={styles.search}
              placeholder={t("productsPage.search_product")}
              value={search}
              onChange={evt => onChangeSearch(evt)}
              onSearch={onSearch}
              size="large"
              enterButton={t("productsPage.search")}
            />
          </div> : null}
        <div className={styles.wripper}>
          {showFilters && < Filters setShowFilters={setShowFilters} />}
          <CategoryRouts />
        </div>
        <SubscribeForm />
      </div>
      <Footer />
    </div>
  )
})

export default ProductsPage
