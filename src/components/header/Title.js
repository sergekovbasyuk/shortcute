import React from 'react';
import { IndexLink } from 'react-router';
import styles from "./style.css";
import ArrowIconLeft from '../icons/ArrowIconLeft';

class Title extends React.Component {
  render() {
    let logoBack;

    if(this.props.location.pathname.indexOf('/cases/') === 0 && window.innerWidth <= 700){
      logoBack = (
        <h1 className={styles.titleBack}>
          <IndexLink to='/' className={styles.link}>
            <ArrowIconLeft />
            /s
          </IndexLink>
        </h1>
      );
    }
    else if(this.props.location.pathname.indexOf('/cases/') === 0 && window.innerWidth > 700){
      logoBack = (
        <h1 className={styles.titleBack}>
          <IndexLink to='/' className={styles.link}>
            /s
            <ArrowIconLeft />
            <span>back home</span>
          </IndexLink>
        </h1>
      );
    }
    else {
      logoBack = (
        <h1 className={styles.title}>
          <IndexLink to='/'>{this.props.title}</IndexLink>
        </h1>
      );
    }

    return (
      <div>
        {logoBack}
      </div>
    );
  }
}

export default Title;
