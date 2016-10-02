import React from 'react';
import Header from '../header';
import styles from './style.css';

const Layout = ({ location, children }) => (
  <div className={styles.layout}>
    <Header location={location} />
    {children}
  </div>
);

Layout.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default Layout;
