import React from 'react';
import styles from "./style.css";
import CaseNavigation from '../../caseNav';
import jquery from 'jquery';

class First extends React.Component {
  clickHandler(e){
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  render() {
    const total = this.props.total;

    return (
      <div className={'section fp-auto-height ' + styles.firstslide}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.logo}>/s</h1>
            <h1 className={styles.headline}>Handcrafted interfaces</h1>
            <p>/shortcute is a digital design bureau that takes your project to the next level. Psst...we know the short cut.</p>
          </div>
          <CaseNavigation total={total}/>
        </div>
      </div>
    );
  }
}

export default First;
