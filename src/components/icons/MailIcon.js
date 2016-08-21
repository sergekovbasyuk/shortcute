import React from 'react';

import styles from "./style.css";

class MailIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="32" height="22" viewBox="0 0 32 22">
        <path d="M29 22H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v16c0 1.7-1.3 3-3 3zM3 20h26c.6 0 1-.4 1-1V3.3L16.7 14.8l-.7.2c-.2 0-.5 0-.7-.2L2 3.3V19c0 .6.4 1 1 1zM28.5 2h-25L16 12.7 28.5 2z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default MailIcon;
