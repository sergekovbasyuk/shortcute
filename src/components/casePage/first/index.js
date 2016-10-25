import React from 'react';
import Scroll from 'react-scroll';
import styles from './style.css';
import ArrowIcon from '../../icons/ArrowIcon';

const Link = Scroll.Link;

const First = ({ title, description, imgSmall, imgMiddle, imgLarge }) => (
  <div className={`section ${styles.firstslide}`}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.headline}>{title}</h1>
        <p>{description}</p>
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

First.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  imgSmall: React.PropTypes.string,
  imgMiddle: React.PropTypes.string,
  imgLarge: React.PropTypes.string,
};

export default First;
