import React from 'react';
import Title from './Title';
import Nav from './Nav';
import styles from './style.css';

var lastScroll = 0;

let Header = React.createClass({
  getInitialState() {
    return {
      isHidden: false
    };
  },

  scrollHandler() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    const newState = {
      isHidden: st > lastScroll
    };
    this.setState(newState);
    lastScroll = st;
  },

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  },

  render() {
    return (
      <header className={styles.header + (this.state.isHidden ? ' is-hidden' : '')} ref='myHeader'>
        <Title location={this.props.location}/>
        <Nav />
      </header>
    );
  }
});

export default Header;
