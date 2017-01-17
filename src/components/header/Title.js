import React from 'react';
import { IndexLink } from 'react-router';
import styles from './style.css';
import ArrowIconLeft from '../icons/ArrowIconLeft';
import LogoSmall from '../icons/LogoSmall';

class Title extends React.Component {
  render() {
    let logoBack;

    if (!this.props.location) {
      return null;
    }

    if (this.props.location.pathname.indexOf('/cases/') === 0 && window.innerWidth <= 700) {
      logoBack = (
        <h1 className={styles.titleBack}>
          <IndexLink to="/" className={styles.link}>
            <ArrowIconLeft />
            <LogoSmall width="20" height="18" />
          </IndexLink>
        </h1>
      );
    } else if (this.props.location.pathname.indexOf('/cases/') === 0 && window.innerWidth > 700) {
      logoBack = (
        <h1 className={styles.titleBack}>
          <IndexLink to="/" className={styles.link}>
            <LogoSmall width="20" height="18" />
            <ArrowIconLeft />
            <span>back home</span>
          </IndexLink>
        </h1>
      );
    } else if (this.props.location.pathname.indexOf('/hiring') === 0) {
      logoBack = (
        <h1 className={styles.titleBack}>
          <a href="#" className={styles.link} onClick={this.props.navigateBack.goBack} >
            <LogoSmall width="20" height="18" />
            <ArrowIconLeft />
            <span>go back</span>
          </a>
        </h1>
      );
    } else {
      logoBack = (
        <h1 className={styles.title}>
          <IndexLink to="/">
            <svg className={styles.logoBig} viewBox="0 0 131 24">
              <path d="M0 23H4L14.4 1h-3.7L0 23zm20.2-2.7c3.2 0 5.3-1.5 5.3-4.4 0-2.6-2-3.5-4.6-4.2-1.4-.4-2.2-.7-2.2-1.2 0-.4.4-.7 1-.7 1 0 2.6.4 4 1l1.5-2.7c-1.5-1-3.5-1.5-5.4-1.5-3 0-5.3 1.5-5.3 4.2s2 3.6 4.6 4.2c1.4.4 2 .6 2 1.2 0 .5-.3.7-1 .7-1.4 0-3-.4-4.5-1.4L14 18.4c2 1.3 4 2 6.2 2zm7.2-.3H32v-7c0-1.4.8-2.2 2-2.2 1 0 1.7.8 1.7 2.2v7h4.6v-8.5c0-3-1.7-4.8-4.5-4.8-1.8 0-3 1-3.8 2V2.6h-4.6V20zm21.8.3c4.2 0 7.2-3 7.2-6.8 0-3.7-3-6.8-7-6.8-4.3 0-7.3 3-7.3 6.8s3 6.8 7.2 6.8zm0-4c-1.5 0-2.7-1.2-2.7-2.8 0-1.6 1-3 2.7-3 1.6 0 2.8 1.4 2.8 3s-1 3-2.7 3zm9.2 3.7H63v-4c0-3 1.3-4.4 3.6-4.4h.4V6.8c-2 0-3.3 1-4 2.8V7h-4.6v13zm15.4.3c1.3 0 2.3-.3 3.2-.8V16c-.6.2-1.2.4-1.8.4-.8 0-1.2-.4-1.2-1.3v-4.3h3V7h-3V3.7h-4.6V7H68v3.7h1.4V16c0 3 1.7 4.3 4.4 4.3zm11.4 0c3 0 4.6-1.2 5.8-3L88 15c-.8 1-1.4 1.5-2.5 1.5-1.6 0-2.6-1.3-2.6-3 0-1.6 1-3 2.6-3 1 0 1.7.5 2.3 1.4l3-2.3c-1.2-1.8-3-3-5.6-3-4 0-7 3-7 6.8 0 3.7 3 6.8 6.8 6.8zm11.8 0c1.8 0 3-1 3.8-2V20h4.6V7h-4.6v7c0 1.5-.8 2.2-2 2.2-1 0-1.7-.7-1.7-2.2V7h-4.5v8.5c0 3 1.7 4.8 4.5 4.8zm16 0c1.3 0 2.4-.3 3.2-.8V16c-.6.2-1.2.4-1.8.4-.8 0-1.2-.4-1.2-1.3v-4.3h3V7h-3V3.7h-4.6V7H107v3.7h1.6V16c0 3 1.7 4.3 4.4 4.3zm11.6 0c2.6 0 4.4-1 5.7-2.6l-2.6-2c-1 .8-1.8 1.2-2.8 1.2-1.6 0-2.6-.8-3-2.2h8.7v-1c0-3.8-2-7-6.5-7-3.8 0-6.5 3-6.5 6.7 0 4 2.8 6.8 7 6.8zm-2.6-8c.2-1.3 1-2.2 2.2-2.2 1.3 0 2 1 2.3 2.4H122z" fill="#292929" fillRule="evenodd" />
            </svg>
          </IndexLink>
        </h1>
      );
    }

    return (
      <div className={styles.titleContainer}>
        {logoBack}
      </div>
    );
  }
}

Title.propTypes = {
  location: React.PropTypes.object.isRequired,
  navigateBack: React.PropTypes.object,
};

export default Title;
