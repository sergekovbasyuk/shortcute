import React from 'react';
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
          <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/Victor_xtbyd7.jpg" alt="" />
          <strong>Victor Samokhvalov</strong>
          <p>Co-founder<br /> Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/Alexander_zo0ikb.jpg" alt="" />
          <strong>Alexander Zhovtalyuk</strong>
          <p>Co-founder<br /> Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/Anna_bdap9b.jpg" alt="" />
          <strong>Anna Hnap</strong>
          <p>Product designer</p>
        </div>
        <div className={styles.employee}>
          <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/Sergii_ka7ctd.jpg" alt="" />
          <strong>Serge Kovbasyuk</strong>
          <p>Frontend developer</p>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
