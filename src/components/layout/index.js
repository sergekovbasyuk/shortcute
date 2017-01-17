import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import styles from './style.css';

const Layout = ({ location, children, history }) => (
  <div className={styles.layout}>
    <Header location={location} navigateBack={history} />
    {children}
  </div>
);

Layout.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default withRouter(Layout);
