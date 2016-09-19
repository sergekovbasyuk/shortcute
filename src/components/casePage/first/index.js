import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../caseNav';
import ArrowIcon from '../../icons/ArrowIcon';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

class First extends React.Component {
  render() {
    const
      title = this.props.title,
      description = this.props.description,
      imgSmall = this.props.imgSmall,
      imgMiddle = this.props.imgMiddle,
      imgLarge = this.props.imgLarge,
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
      <div className={'section ' + styles.firstslide}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.headline}>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.img} style={bg}></div>
        </div>
        <Link to='content' spy smooth offset={-20} duration={500} className={styles.link}><ArrowIcon /></Link>
      </div>
    );
  }
}

export default First;
