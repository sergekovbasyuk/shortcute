import React from 'react';
import Scroll from 'react-scroll';
import styles from './style.css';
import ArrowIcon from '../icons/ArrowIcon';

const Link = Scroll.Link;
const imgSmall = 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1484069882/shortcute/mockup.jpg';
const imgMiddle = 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1484069882/shortcute/mockup_2x.jpg';
const imgLarge = 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1484069883/shortcute/mockup_3x.jpg';

const First = () => (
  <div className={styles.first}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.headline}>We&apos;re hiring!</h1>
        <p>We are shortcute design bureau. We design user experiences for web and mobile
        apps and...we’re hiring for UI/UX designer and interne positions now!</p>
      </div>
      <picture className={styles.imgContainer}>
        <source media="(max-width: 700px)" srcSet={imgSmall} />
        <source media="(max-width: 1920px)" srcSet={imgMiddle} />
        <source media="(min-width: 1920px)" srcSet={imgLarge} />
        <img src={imgLarge} className={styles.img} alt="Case" />
      </picture>
    </div>
    <Link
      to="content" spy smooth offset={-20}
      duration={500} className={styles.link}
    ><ArrowIcon />
    </Link>
  </div>
);

export default First;
