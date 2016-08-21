import React from 'react';
import styles from "./style.css";
import PenPencilIcon from '../icons/PenPencilIcon';
import BriefcaseIcon from '../icons/BriefcaseIcon';
import BulbIcon from '../icons/BulbIcon';
import ShapeIcon from '../icons/ShapeIcon';
import UserMaleIcon from '../icons/UserMaleIcon';

class Clients extends React.Component {
  render() {
    return (
        <div className={styles.aboutSection}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.headline}>Who we work with</h1>
              <p>We are happy to cooperate with businesses of any sizes and individuals from around the world</p>
            </div>
            <div className={styles.clients}>
              <div className={styles.client}>
                <BulbIcon />
                <strong>Startups</strong>
              </div>
              <div className={styles.client}>
                <PenPencilIcon />
                <strong>Agencies</strong>
              </div>
              <div className={styles.client}>
                <BriefcaseIcon />
                <strong>Businesses</strong>
              </div>
              <div className={styles.client}>
                <UserMaleIcon />
                <strong>Individuals</strong>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Clients;
