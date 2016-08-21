import React from 'react';

import styles from "./style.css";

class BitmapIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="48" height="42" viewBox="0 0 48 42">
        <path d="M47 22H19c-.6 0-1-.4-1-1 0-.5.4-1 1-1h28c.6 0 1 .5 1 1 0 .6-.4 1-1 1zm0-16H19c-.6 0-1-.4-1-1 0-.5.4-1 1-1h28c.6 0 1 .5 1 1 0 .6-.4 1-1 1zM6 42c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0-5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm.3-7.4c-.2.3-.5.4-.8.4-.2 0-.4 0-.6-.2l-4.5-3C0 6.7 0 6 .2 5.6c.3-.4 1-.6 1.3-.3l3.7 2.4 5-7.2c.3-.4 1-.5 1.4-.2.4.3.5 1 .2 1.4l-5.5 8zM19 35h28c.6 0 1 .5 1 1 0 .6-.4 1-1 1H19c-.6 0-1-.4-1-1 0-.5.4-1 1-1z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default BitmapIcon;
