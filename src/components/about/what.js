import React from 'react';
import styles from './style.css';
import MonitorIcon from '../icons/MonitorIcon';
import SmartTabletIcon from '../icons/SmartTabletIcon';

const What = () => (
  <div className={styles.aboutSection}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.headline}>What we offer</h1>
        <p>We are ready to dive in any project you want to launch:
        banking, e-commerce, e-learning, online broadcasting,  messenger,
        video editor or whatever — let&apos;s do it</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <MonitorIcon />
          <div>
            <h2>Web UI & UX design</h2>
            <p>We are expertised in responsive websites, landing pages,
            desktop applications, etc</p>
          </div>
        </div>
        <div className={styles.item}>
          <SmartTabletIcon />
          <div>
            <h2>Mobile app UI & UX design</h2>
            <p>iOS? Android? Sounds good…anyway it’s not the case,
            because we really love apps!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default What;
