import React from 'react';
import styles from "./style.css";
import fullpage from 'fullpage.js';
import jquery from 'jquery';

class CaseNavigation extends React.Component {
  clickDown(e){
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  clickUp(e){
    e.preventDefault();
    jquery.fn.fullpage.moveSectionUp();
  }

  lastItemClickHandler(e){
    e.preventDefault();
    jquery.fn.fullpage.moveTo(1);
  }

  render() {
    let totalCases = '0' + this.props.total;
    let currentNumber;
    let target;

    let clickDown = this.clickDown;
    let clickUp = this.clickUp;

    if(this.props.number) {
      currentNumber = '0' + this.props.number;

      if(this.props.number == this.props.total){
        target = 'firstslide';
        totalCases = 'UP';
        clickDown = this.lastItemClickHandler;
      }
      else{
        target = 'case' + (this.props.number + 1);
      }
    }
    else {
      currentNumber = '00';
      target = 'case1';
    }

    return (
      <div className={styles.navigation}>
        <a onClick={clickUp}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <rect transform="rotate(45 8.707 6.293)" x="3" y="3" width="10" height="10" rx="1" fill="#292929" fillRule="evenodd"/>
          </svg>
          <span>{currentNumber}</span>
        </a>
        <svg className={styles.line} width="2" height="25" viewBox="0 0 2 25">
          <path d="M0 0h2v25H0z" fill="#292929" fillRule="evenodd"/>
        </svg>
        <a onClick={clickDown}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <rect transform="rotate(45 8.707 6.293)" x="4" y="4" width="8" height="8" rx="1" stroke="#292929" strokeWidth="2" fill="#fff" fillRule="evenodd"/>
          </svg>
          <span>{totalCases}</span>
        </a>
      </div>
    );
  }
}

export default CaseNavigation;