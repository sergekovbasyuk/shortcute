import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../caseNav';
import { Link } from 'react-router';


class Item extends React.Component {
  render() {
    const
      {title,
      description,
      imgSmall,
      imgMiddle,
      imgLarge} = this.props.data,
      {number,
      total} = this.props;

    var bg;

    if(window.innerWidth > 1440){
      bg = {
        backgroundImage: 'url(' + imgLarge +')'
      };
    }
    else if(window.innerWidth > 600){
      bg = {
        backgroundImage: 'url(' + imgMiddle +')'
      };
    }
    else {
      bg = {
        backgroundImage: 'url(' + imgSmall +')'
      };
    }

    return (
      <div className={'section'} >
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.headline}>{title}</h1>
            <p>{description}</p>
            <Link to={'/cases/' + (number - 1)} className={styles.btn}>view case</Link>
          </div>
          <div className={styles.img} style={bg}></div>
        </div>
        <CaseNavigation number={number} total={total}/>
      </div>
    );
  }
}

export default Item;
