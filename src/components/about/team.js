import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Team = () => (
  <div className={styles.aboutSection}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.headline}>Who will do this</h1>
        <p>Our core team is not that big, right? But it&apos;s not the case,
        we have quckly scalable resources to tackle a project of any size and difficulty</p>
      </div>
      <div className={styles.employees}>
        <div className={styles.employee}>
          <img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/shortcute/team/Victor_xtbyd7.jpg" alt="Victor Samokhvalov" />
          <strong>Victor Samokhvalov</strong>
          <p>Co-founder<br /> Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/shortcute/team/Alexander_zo0ikb.jpg" alt="Alexander Zhovtalyuk" />
          <strong>Alexander Zhovtalyuk</strong>
          <p>Co-founder<br /> Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/shortcute/team/Anna_bdap9b.jpg" alt="Anna Hnap" />
          <strong>Anna Hnap</strong>
          <p>Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/shortcute/team/Sergii_ka7ctd.jpg" alt="Serge Kovbasyuk" />
          <strong>Serge Kovbasyuk</strong>
          <p>Frontend developer</p>
        </div>
      </div>
      <p>Want to join us? <Link to="/hiring" className={styles.hiringLink} >
      Check available positions here.</Link></p>
    </div>
  </div>
);

export default Team;
