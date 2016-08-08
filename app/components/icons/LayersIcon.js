import React from 'react';

import styles from "./style.css";

class LayersIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="48" height="46" viewBox="0 0 48 46">
        <path d="M47.3 14l-23 12h-.9L.5 14C0 13.6 0 13 0 12.7c0-.4.3-.6.6-.7l23-12h.8l23 12c.2.3.4.6.4 1s-.2.7-.5 1zM24 2L3 13 24 24l20.7-11L24 2zM.4 21.7l3-1.5c.5-.2 1 0 1.4.5 0 .5 0 1-.6 1.4l-1.3.5 21 11.3 20.7-11.3-1.3-.6c-.5-.4-.7-1-.4-1.5.2-.5.8-.7 1.3-.4l3 1.6c.2 0 .4.4.5.7 0 .4 0 1-.5 1L24.3 36h-1L.4 23.3c-.2-.2-.4-.5-.4-1 0-.3.2-.6.5-.8zm0 10l3-1.5c.5-.2 1 0 1.4.5 0 .5 0 1-.6 1.4l-1.3.5 21 11.3 20.7-11.3-1.3-.6c-.5-.4-.7-1-.4-1.5.2-.5.8-.7 1.3-.4l3 1.6c.2 0 .4.4.5.7 0 .4 0 1-.5 1L24.3 46l-.4.2c-.2 0-.4 0-.6-.2L.4 33.4c-.2-.2-.4-.5-.4-1 0-.3.2-.6.5-.8z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default LayersIcon;
