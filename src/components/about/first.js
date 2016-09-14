import React from 'react';
import styles from "./style.css";
import ArrowIcon from '../icons/ArrowIcon';
import LogoSmall from '../icons/LogoSmall';

class First extends React.Component {
  render() {
    return (
        <div className={styles.first}>
          <div className={styles.content}>
            <div className={styles.text}>
              <LogoSmall width='110' height='95' class={styles.logoSmall}/>
              <h1 className={styles.headline}>About Us</h1>
              <p>/shortcute is a digital design bureau that takes your project to the next level. Psst...we know the short cut.</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default First;
