import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../../containers/Reuseble/Logo/Logo'
import styles from './styles.module.scss'

interface IProps {
  dataText: string
}

const Title: React.FC<IProps> = ({ dataText = 'Title' }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.logoWripper}>
        <Logo />
        <h2 className={styles.logoText}> {dataText}</h2>
      </div>
      <h1 className={styles.title}>{t('title.online_products_store')}</h1>
    </div>
  )
}

export default Title
