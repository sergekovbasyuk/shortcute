import React from 'react';
import styles from './style.css';
import BehanceIcon from '../icons/BehanceIcon';
import DribbleIcon from '../icons/DribbleIcon';
import MailIcon from '../icons/MailIcon';
import FacebookIcon from '../icons/FacebookIcon';
import LogoSmall from '../icons/LogoSmall';

const Contacts = () => (
  <div className="container">
    <div className={styles.first}>
      <div className={styles.content}>
        <div className={styles.text}>
          <LogoSmall width="110" height="95" class={styles.logoSmall} />
          <h1 className={styles.headline}>Contacts</h1>
          <p>Get to know us even more</p>
          <a href="https://www.behance.net/shortcute" className={styles.link}>
            <BehanceIcon />/shortcute
          </a>
          <br />
          <a href="https://dribbble.com/shortcute" className={styles.link}>
            <DribbleIcon />@shortcute
          </a>
          <br />
          <a href="https://www.facebook.com/CutxPasteStudio" className={styles.link}>
            <FacebookIcon />/shortcute
          </a>
        </div>
        <div className={styles.text}>
          <h1 className={styles.headline}>Drop a line</h1>
          <p>If you haven’t done it yet, hurry up!</p>
          <a href="mailto:hello@shortcute.xyz" className={styles.link}>
            <MailIcon />hello@shortcute.xyz
          </a>
        </div>
      </div>
    </div>
  </div>
);


export default Contacts;
