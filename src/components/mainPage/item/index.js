import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../caseNav';
import { Link } from 'react-router';

class Item extends React.Component {
  render() {
    const
      title = this.props.data.title,
      description = this.props.data.description,
      number = this.props.number,
      imgSmall = this.props.data.imgSmall,
      imgMiddle = this.props.data.imgMiddle,
      imgLarge = this.props.data.imgLarge,
      total = this.props.total;

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
      <div className={'section ' + styles.case} >
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
