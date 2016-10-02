import React from 'react';
import First from './first';
import What from './what';
import How from './how';
import Clients from './clients';
import Team from './team';
import Contact from './contact';
import Footer from '../footer';


const About = () => (
  <div className="container">
    <First />
    <What />
    <How />
    <Clients />
    <Team />
    <Contact />
    <Footer />
  </div>
);

export default About;
