import React from 'react'
import Header from '../../containers/header/Header'
import MapComponent from '../../containers/mapComponent/MapComponent'
import ContactForm from './contactForm/ContactForm'
import ReachUs from './reachUs/ReachUs'
import CustomersSaying from './customersSay/CustomersSay'
import Footer from '../../containers/footer/Footer'
import styles from "./styles.module.scss"

const ContactsPage = () => {
  return (
    <div className={styles.contactPage}>
      <Header />
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.container}>
        <div className={styles.wripper}>
          {/* <div className={styles.map}></div> */}
          <MapComponent/>
          <ReachUs />
        </div>
        <ContactForm />
        <CustomersSaying />
      </div>
      <Footer/>
    </div>
  );
};

export default ContactsPage;