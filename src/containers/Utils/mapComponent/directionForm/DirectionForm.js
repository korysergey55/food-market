import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'

const DirectionServiseForm = ({ onSubmitBuildRoute }) => {
  const { t } = useTranslation();
  const [travelMode, setTravelMode] = useState('DRIVING')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const onChangeTravelMode = (evt) => {
    const { name } = evt.target
    setTravelMode(name)
  }
  const onChangeInput = (evt) => {
    const { name, value } = evt.target
    if (name === 'ORIGIN') {
      setOrigin(value)
    }
    if (name === 'DESTINATION') {
      setDestination(value)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWripper}>
          <label className={styles.label} htmlFor="ORIGIN">
            {t('Построить маршрут')}
          </label>
          <br />
          <input
            className={styles.input}
            name="ORIGIN"
            value={origin}
            type="text"
            placeholder={t('Ваше местоположение')}
            onChange={onChangeInput}
          />
        </div>
        <div className={styles.inputWripper}>
          <label className={styles.label} htmlFor="DESTINATION">
          </label>
          <br />
          <input
            className={styles.input}
            name="DESTINATION"
            value={destination}
            type="text"
            placeholder={t('Магазин')}
            onChange={onChangeInput}
            disabled

          />
        </div>
        <button
          className={styles.button}
          type="button"
          onClick={() => onSubmitBuildRoute(travelMode, origin, destination)}
        >
          {t('Построить маршрут')}
        </button>
      </div>

      {/* <div className={styles.radioContainer}>
        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="DRIVING"
            type="radio"
            checked={travelMode === 'DRIVING'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="DRIVING">
            Driving
          </label>
        </div>

        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="WALKING"
            type="radio"
            checked={travelMode === 'WALKING'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="WALKING">
            Walking
          </label>
        </div>
      </div> */}
    </div>
  )
}

export default DirectionServiseForm
