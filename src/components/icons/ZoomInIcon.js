import React from 'react';

import styles from "./style.css";

class ZoomInIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="48" height="48" viewBox="0 0 48 48">
        <path d="M47.6 47.7c-.2.2-.4.3-.7.3-.3 0-.6 0-.8-.3L30 31.4c-3.3 2.8-7.4 4.6-12 4.6C8 36 0 28 0 18S8 0 18 0s18 8 18 18c0 4.6-1.8 8.8-4.7 12l16.3 16.3c.4.4.4 1 0 1.4zM34 18c0-8.8-7.2-16-16-16S2 9.2 2 18s7.2 16 16 16 16-7.2 16-16zm-8 1h-7v7c0 .6-.5 1-1 1-.6 0-1-.4-1-1v-7h-7c-.6 0-1-.4-1-1s.4-1 1-1h7v-7c0-.6.4-1 1-1 .5 0 1 .4 1 1v7h7c.5 0 1 .4 1 1s-.5 1-1 1z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default ZoomInIcon;
