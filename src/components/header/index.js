import React from 'react';
import Title from './Title';
import Nav from './Nav';
import styles from "./style.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Title location={this.props.location} title='/shortcute'/>
        <Nav />
      </header>
    );
  }
}

export default Header;
