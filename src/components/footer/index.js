import React from 'react';
import { Link } from 'react-router';
import BehanceIcon from '../icons/BehanceIcon';
import DribbleIcon from '../icons/DribbleIcon';
import styles from './style.css';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://www.behance.net/shortcute" className={styles.iconLink}><BehanceIcon /></a>
    <a href="https://dribbble.com/shortcute" className={styles.iconLink}><DribbleIcon /></a>
    <br />
    <a href="mailto:hello@shortcute.xyz" className={styles.mailLink}>hello@shortcute.xyz</a>
    <br />
    <Link to="/hiring" className={styles.hiringLink} >We&apos;re hiring!</Link>
  </footer>
);

export default Footer;
