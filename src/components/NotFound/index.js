import React from 'react';
import styles from './style.css';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.content}>
          <div className={styles.contactText}>
            <svg width="120" height="144" viewBox="0 0 120 144"><path d="M118 143.5l-1.3.3c-.6 0-1-.2-1.6-.5l-.4-.4v-.2l-16.8-18.5L81 142.8v.2l-.6.3-.4.2-.7.2h-1.5l-.5-.4-.4-.3h-.2v-.2L60 124.3l-16.7 18.5c-.2 0-.2.2-.2.2l-.3.3c-.2 0-.3.2-.5.3h-.6l-.5.2h-.5l-.5-.2c-.2 0-.4-.2-.5-.3-.2 0-.3-.2-.4-.3v-.2L22 124.3 5.5 142.8l-.7.5c-.4.3-1 .5-1.5.5-.4 0-1 0-1.3-.3-1-.3-2-1-2-2.2v-84C0 25.3 27 0 60 0s60 25.4 60 57.3v84c0 1.2-1 2-2 2.2zm-4-86.2C114 28.7 89.6 6 60 6S6 28.8 6 57.4v76l14-15.5c.5-.6 1.3-1 2.2-1 .8 0 1.6.4 2.2 1L41 136.3 58 117.8c1-1.2 3.3-1.2 4.4 0L79 136.3l16.6-18.5c1-1.2 3.3-1.2 4.4 0l14 15.6v-76zM84 72c-5 0-9-4-9-9s4-9 9-9c4.8 0 8.8 4 8.8 9s-4 9-9 9zm-48 0c-4.8 0-8.8-4-8.8-9s4-9 9-9c4.8 0 9 4 9 9s-4.2 9-9 9z" fill="#292929" fillRule="evenodd"/></svg>
            <h1 className={styles.headline}>Whoops!</h1>
            <p>We couldn’t find the page you were looking for.</p>
            <Link to='/' className={styles.btn}>go back home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
