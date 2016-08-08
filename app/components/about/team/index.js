import React from 'react';
import styles from "./style.css";

class Team extends React.Component {
  render() {
    return (
        <div className={styles.aboutSection}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Who will do this</h1>
              <p>Our core team is not that big, right? But it's not the case, we have quckly scalable resources to tackle a project of any size and difficulty</p>
            </div>
            <div className={styles.employees}>
              <div className={styles.employee}>
                <strong>Victor Samokhvalov</strong>
                <p>Co-founder, Product designer</p>
              </div>
              <div className={styles.employee}>
                <strong>Alexander Zhovtalyuk</strong>
                <p>Co-founder, Product designer</p>
              </div>
              <div className={styles.employee}>
                <strong>Anna Hnap</strong>
                <p>Junior UI/UX Designer</p>
              </div>
              <div className={styles.employee}>
                <strong>Nazar Kulikov</strong>
                <p>Junior UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Team;
