import React from 'react';
import Header from '../header';
import styles from './style.css';
import Main from "../main";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Header location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
