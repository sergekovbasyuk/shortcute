import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import styles from './style.css';
// import CaseNavigation from '../../caseNav';
import LogoSmall from '../../icons/LogoSmall';
import ArrowIcon from '../../icons/ArrowIcon';


class First extends React.Component {
  clickDown(e) {
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  render() {
    const total = this.props.total;

    return (
      <div className={`section fp-auto-height ${styles.firstslide}`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <LogoSmall width="110" height="95" class={styles.logoSmall} />
            <h1 className={styles.headline}>Handcrafted interfaces</h1>
            <p>/shortcute is a digital design bureau that takes your project
            to the next level. Psst...we know the short cut.</p>
          </div>
          {/* <CaseNavigation total={total} /> */}
        </div>
        <a href="" onClick={this.clickDown} className={styles.link}><ArrowIcon /></a>
      </div>
    );
  }
}

First.propTypes = {
  total: React.PropTypes.number.isRequired,
};

export default First;
