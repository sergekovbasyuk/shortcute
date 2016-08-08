import React from 'react';

import styles from "./style.css";

class BriefcaseIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="62" height="58" viewBox="0 0 62 58">
        <path d="M58.7 58H3.3C1.5 58 0 56.5 0 54.6V14.2c0-2 1.5-3.4 3.3-3.4h16v-5c0-3 2.5-5.5 5.5-5.5h12.4c3 0 5.4 2.5 5.4 5.5v5h16c2 0 3.4 1.5 3.4 3.4v40.4c0 2-1.5 3.4-3.3 3.4zM40 5.8c0-1.6-1.2-3-2.8-3H24.8C23.2 3 22 4.3 22 6v5h18v-5zm19.4 8.4c0-.4-.3-.8-.7-.8H3.3c-.4 0-.7.4-.7.8v13.6h23.2c0-3 2.4-5.2 5.2-5.2 1.4 0 2.6.5 3.6 1.5s1.6 2.3 1.6 3.7h23.2V14.3zm-31 13.5v5.6c0 .6.3 1.2.8 1.7.5.4 1 .7 1.8.7 1.4 0 2.6-1 2.6-2.4v-5.6c0-.7-.3-1.3-.8-1.7-.5-.5-1-.8-1.8-.8-1.4 0-2.6 1-2.6 2.5zm31 2.8H36.2v2.8c0 2.8-2.4 5-5.2 5-1.4 0-2.6-.5-3.6-1.4-1-1-1.6-2.4-1.6-3.7v-2.8H2.6v24c0 .5.3 1 .7 1h55.4c.4 0 .7-.5.7-1v-24z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default BriefcaseIcon;
