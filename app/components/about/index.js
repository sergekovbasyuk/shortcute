import React from 'react';
import First from './first';
import What from './what';
import How from './how';
import Clients from './clients';
import Team from './team';
import Contact from './contact';
import Footer from '../footer';


class About extends React.Component {
  render() {
    return (
      <div className='container'>
        <First />
        <What />
        <How />
        <Clients />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default About;
