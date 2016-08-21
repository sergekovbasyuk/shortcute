import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Cases from '../mainPage';
import CasesList from '../../CasesList';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: CasesList
    };
  }

  render() {
    return (
      <div className='main'>
        <Cases data={this.state.cases}/>
      </div>
    );
  }
}

export default Main;
