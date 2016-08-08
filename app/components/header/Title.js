import React from 'react';
import { IndexLink } from 'react-router';

import styles from "./style.css";

class Title extends React.Component {
  render() {
    return (
      <h1 className={styles.title}>
        <IndexLink to='/' className={styles.link} activeClassName={styles.activelink}>{this.props.title}</IndexLink>
      </h1>
    );
  }
}

export default Title;
