import React from 'react';
import styles from "./style.css";
import BehanceIcon from '../icons/BehanceIcon';
import DribbleIcon from '../icons/DribbleIcon';
import MailIcon from '../icons/MailIcon';
import FacebookIcon from '../icons/FacebookIcon';

class Contacts extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.first}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.logo}>/s</h1>
              <h1 className={styles.headline}>Contacts</h1>
              <p>When people over profits</p>
              <a href='' className={styles.link}>
                <BehanceIcon />/shortcute
              </a>
              <br/>
              <a href='https://dribbble.com/shortcute' className={styles.link}>
                <DribbleIcon />@shortcute
              </a>
              <br/>
              <a href='https://www.facebook.com/CutxPasteStudio' className={styles.link}>
                <FacebookIcon />/shortcute
              </a>
            </div>
            <div className={styles.text}>
              <h1 className={styles.headline}>Drop a line</h1>
              <p>When people over profits.</p>
              <a href='mailto:hi@shortcute.xyz' className={styles.link}>
                <MailIcon />hi@shortcute.xyz
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Contacts;
