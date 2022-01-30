import * as React from 'react'
import styles from './styles.module.scss'
import StarList from '../../../containers/starList/StarList'

const CustomersSaying = () => {
  return (
    <section className={styles.customersSaying}>
      <div className={styles.container}>
        <h2 className={styles.title}>Что говорят наши клиенты </h2>
        <div className={styles.wripper}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.text}>
                ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur
                adipisci velit sed quia non numqua eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem repudia sint
                et molestiae”
              </p>
              <StarList />
              <p className={styles.userName}>Alina Parker</p>
              <p className={styles.userCompany}>Ceo, GTD</p>
            </li>

            <li className={styles.item}>
              <p className={styles.text}>
                ”Exercitationem ullam corporis suscipit laborio nisi ut aliquid
                ex ea commodi consequatur uis autem vel eum iure reprehenderit
                qui in ea vou velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat”
              </p>
              <StarList />
              <p className={styles.userName}>Kevin Andrew</p>
              <p className={styles.userCompany}>Manager, Rex </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CustomersSaying
