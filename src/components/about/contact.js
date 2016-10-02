import React from 'react';
import styles from './style.css';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.content}>
      <div className={styles.contactText}>
        <h1>Contact us</h1>
        <p>If you want to bla bla bla please click here</p>
        <a href="mailto:hello@shortcute.xyz" className={styles.btn}>email us</a>
      </div>
    </div>
  </div>
);

export default Contact;
