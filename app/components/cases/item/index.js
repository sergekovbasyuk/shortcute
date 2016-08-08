import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../casenav';
import { Link } from 'react-router';

class Item extends React.Component {
  render() {
    const
      title = this.props.data.title,
      description = this.props.data.description,
      number = this.props.number,
      total = this.props.total;

    return (
      <div className='section'>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <Link to={'/cases/' + number} className={styles.btn}>view case</Link>
          <CaseNavigation number={number} total={total}/>
        </div>
      </div>
    );
  }
}

export default Item;
