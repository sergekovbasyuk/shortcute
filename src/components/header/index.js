import React from 'react';
import Headroom from 'react-headroom';
import Title from './Title';
import Nav from './Nav';
import styles from './style.css';
import CaseNavigation from '../caseNav';

class Header extends React.Component {
  render() {
    let headerComponent;

    if (this.props.location.pathname === '/') {
      headerComponent = (
        <div className={styles.header}>
          <Title location={this.props.location} />
          <Nav />
          <CaseNavigation total="6" />
        </div>
      );
    } else {
      headerComponent = (
        <div className={styles.header}>
          <Title location={this.props.location} />
          <Nav />
        </div>
      );
    }

    return (
      <Headroom disableInlineStyles>
        {headerComponent}
      </Headroom>
    );
  }
}

Header.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Header;
