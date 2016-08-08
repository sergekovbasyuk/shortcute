import React from 'react';
import styles from "./style.css";

class First extends React.Component {
  render() {
    return (
        <div className={styles.first}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.logo}>/s</h1>
              <h1>About Us</h1>
              <p>When people over profits</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default First;
