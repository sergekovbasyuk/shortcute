import React from 'react';
import Scroll from 'react-scroll';
import styles from './style.css';
import ArrowIcon from '../../icons/ArrowIcon';

const Link = Scroll.Link;

const First = ({ title, description, imgSmall, imgMiddle, imgLarge }) => {
  let bg;

  if (window.innerWidth > 1440) {
    bg = {
      backgroundImage: `url(${imgLarge})`,
    };
  } else if (window.innerWidth > 600) {
    bg = {
      backgroundImage: `url(${imgMiddle})`,
    };
  } else {
    bg = {
      backgroundImage: `url(${imgSmall})`,
    };
  }

  return (
    <div className={`section ${styles.firstslide}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.headline}>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.img} style={bg} />
      </div>
      <Link
        to="content" spy smooth offset={-20}
        duration={500} className={styles.link}
      ><ArrowIcon />
      </Link>
    </div>
  );
};


First.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  imgSmall: React.PropTypes.string,
  imgMiddle: React.PropTypes.string,
  imgLarge: React.PropTypes.string,
};

export default First;
