import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../casenav';
import ArrowIcon from '../../icons/ArrowIcon';

class First extends React.Component {
  render() {
    const total = this.props.total;

    return (
      <div className={'section ' + styles.firstslide}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.logo}>/s</h1>
            <h1>Handcrafted <br/>interfaces</h1>
            <p>/shortcute is a digital design bureau that takes your project to the next level. Psst...we know the short cut.</p>
          </div>
          <CaseNavigation total={total}/>
          <a className={styles.arrowdown}>
            <ArrowIcon />
          </a>
        </div>
      </div>
    );
  }
}

export default First;
