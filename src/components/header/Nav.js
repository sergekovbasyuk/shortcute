import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/aboutus" className={styles.link}>About Us</Link>
    <Link to="/contacts" className={styles.link}>Contacts</Link>
  </nav>
);

export default Nav;
