import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const NextProject = ({ nextProjectTitle, nextProjectDescription, nextLinkId }) => (
  <div className={styles.contact}>
    <div className={styles.content}>
      <div className={styles.contactText}>
        <p>next project</p>
        <h1>{nextProjectTitle}</h1>
        <p>{nextProjectDescription}</p>
        <Link
          to={'/cases/' + nextLinkId}
          className={styles.btn}
        >view case
        </Link>
      </div>
    </div>
  </div>
);

NextProject.propTypes = {
  nextProjectTitle: React.PropTypes.string,
  nextProjectDescription: React.PropTypes.string,
  nextLinkId: React.PropTypes.number,
};

export default NextProject;
