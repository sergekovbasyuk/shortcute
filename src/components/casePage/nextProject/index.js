import React from 'react';
import styles from "./style.css";
import { Link } from 'react-router';

class NextProject extends React.Component {
  render() {
    return (
        <div className={styles.contact}>
          <div className={styles.content}>
            <div className={styles.contactText}>
              <p>next project</p>
              <h1>{this.props.nextProjectTitle}</h1>
              <p>{this.props.nextProjectDescription}</p>
              <Link
                to={'/cases/' + this.props.nextLinkId}
                className={styles.btn}>
                view case
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

export default NextProject;
