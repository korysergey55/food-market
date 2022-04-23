import React from 'react'
import ContactInfo from '../../Components/contactsPage/contactInfo/ContactInfo'
import MapComponent from '../../containers/Utils/mapComponent/MapComponent'
import ReachUs from './reachUs/ReachUs'
import Partners from '../../Components/homePage/partners/Partners'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'

const ContactsPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <ContactInfo />
        <div className={styles.wripper}>
          {/* <div className={styles.map}></div> */}
          <MapComponent />
          <ReachUs />
        </div>
        <Partners />
      </div>
      <Footer />
    </div>
  )
}

export default ContactsPage
