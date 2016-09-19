import React from 'react';
import Title from './Title';
import Nav from './Nav';
import styles from "./style.css";
import Headroom from 'headroom.js';

class Header extends React.Component {
  scrollHandler(element){
    var headroom = new Headroom(element,{
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
    const myHeader = this.refs.myHeader;

    window.addEventListener('scroll', this.scrollHandler(myHeader));
  }

  render() {
    return (
      <header className={styles.header} ref='myHeader'>
        <Title location={this.props.location}/>
        <Nav />
      </header>
    );
  }
}

export default Header;
