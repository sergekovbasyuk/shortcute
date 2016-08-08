import React from 'react';
import styles from "./style.css";
import BehanceIcon from '../../icons/BehanceIcon';
import DribbleIcon from '../../icons/DribbleIcon';
import MailIcon from '../../icons/MailIcon';

class First extends React.Component {
  render() {
    return (
        <div className={styles.first}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.logo}>/s</h1>
              <h1>Contacts</h1>
              <p>When people over profits</p>
              <a href='' className={styles.link}>
                <BehanceIcon />/shortcute
              </a>
              <br/>
              <a href='' className={styles.link}>
                <DribbleIcon />@shortcute
              </a>
              <br/>
              <a href='mailto:hi@shortcute.xyz' className={styles.link}>
                <MailIcon />hi@shortcute.xyz
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

export default First;
