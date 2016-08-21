import React from 'react';
import BehanceIcon from '../icons/BehanceIcon';
import DribbleIcon from '../icons/DribbleIcon';
import styles from "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a href='#' className={styles.iconLink}><BehanceIcon /></a>
        <a href='https://dribbble.com/shortcute' className={styles.iconLink}><DribbleIcon /></a>
        <br/>
        <a href='mailto:hello@shortcute.xyz' className={styles.mailLink}>hello@shortcute.xyz</a>
      </footer>
    );
  }
}

export default Footer;
