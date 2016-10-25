import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

class Item extends React.Component {
  render() {
    const {
      title,
      description,
      imgSmall,
      imgMiddle,
      imgLarge,
    } = this.props.data;

    const number = this.props.number;

    if (!this.props) {
      return null;
    }

    return (
      <div className="section">
        <div className={styles.content}>
          <div className={`text ${styles.text}`}>
            <h1 className={styles.headline}>{title}</h1>
            <p>{description}</p>
            <Link to={`/cases/${number - 1}`} className={styles.btn}>view case</Link>
          </div>
          <picture className={styles.imgContainer}>
            <source media="(max-width: 700px)" srcSet={imgSmall} />
            <source media="(max-width: 1920px)" srcSet={imgMiddle} />
            <source media="(min-width: 1920px)" srcSet={imgLarge} />
            <img src={imgLarge} className={styles.img} alt="Case" />
          </picture>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  data: React.PropTypes.object.isRequired,
  number: React.PropTypes.number.isRequired,
};

export default Item;
