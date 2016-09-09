import React from 'react';
import Title from './Title';
import Nav from './Nav';
import styles from "./style.css";
import Headroom from 'headroom.js';

class Header extends React.Component {
  scrollHandler(e){
    var header = document.querySelector('header');
    
    var headroom = new Headroom(header,{
      "offset": 205,
      "tolerance": 5,
      "classes": {
        "initial": "headroom",
        "pinned": "headroom--pinned",
        "unpinned": "headroom--unpinned"
      }
    });

    headroom.init();
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollHandler);
  }

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
