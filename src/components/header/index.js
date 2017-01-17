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
        <header className={styles.header}>
          <Title location={this.props.location} />
          <Nav />
          <CaseNavigation total="6" />
        </header>
      );
    } else {
      headerComponent = (
        <Headroom disableInlineStyles>
          <header className={styles.header}>
            <Title location={this.props.location} navigateBack={this.props.navigateBack} />
            <Nav />
          </header>
        </Headroom>
      );
    }

    if (!this.props) {
      return null;
    }

    return (
      <div className={styles.wrapper}>
        {headerComponent}
      </div>
    );
  }
}

Header.propTypes = {
  location: React.PropTypes.object.isRequired,
  navigateBack: React.PropTypes.object.isRequired,
};

export default Header;
