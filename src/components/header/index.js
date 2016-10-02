import React from 'react';
import Title from './Title';
import Nav from './Nav';
import styles from './style.css';

let lastScroll = 0;

const Header = React.createClass({
  getInitialState() {
    return {
      isHidden: false,
    };
  },

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  },

  scrollHandler() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    const newState = {
      isHidden: st > lastScroll,
    };
    this.setState(newState);
    lastScroll = st;
  },

  render() {
    return (
      <header className={styles.header + (this.state.isHidden ? ' is-hidden' : '')}>
        <Title location={this.props.location} />
        <Nav />
      </header>
    );
  },
});

Header.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Header;
