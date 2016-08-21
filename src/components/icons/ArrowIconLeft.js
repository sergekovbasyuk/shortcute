import React from 'react';

import styles from "./style.css";

class ArrowIconLeft extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="29" height="11" viewBox="0 0 29 11">
        <path d="M10 4.2h19v2H6v4c-.5.4-1 .4-1.5 0L.3 6C0 5.5 0 5 .3 4.4L4.5.3C5 0 5.5 0 6 .3v4h4z" fill="#292929" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default ArrowIconLeft;
