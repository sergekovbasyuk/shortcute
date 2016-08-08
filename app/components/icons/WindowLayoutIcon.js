import React from 'react';

import styles from "./style.css";

class WindowLayoutIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="48" height="40" viewBox="0 0 48 40">
        <path d="M45 40H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h42c1.7 0 3 1.3 3 3v34c0 1.7-1.3 3-3 3zm1-37c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v5h44V3zm0 7H2v27c0 .6.4 1 1 1h42c.6 0 1-.4 1-1V10zm-7 22H29c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1zm-1-14h-8v12h8V18zM23 32H9c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1zm-1-14H10v12h12V18zM5 4c.6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1s.5-1 1-1zm3 0c.6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1s.5-1 1-1zm3 0c.6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1s.5-1 1-1z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default WindowLayoutIcon;
