import React from 'react';
import styles from "./style.css";

class Brief extends React.Component {
  render() {
    return (
        <div className={styles.brief}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Fill a brief</h1>
              <p>The form of which is determined by set rules, of all the possible arguments and information on one side of a controversy.</p>
            </div>
            <a href='' className={styles.btn}>send</a>
          </div>
        </div>
      );
    }
  }

export default Brief;
