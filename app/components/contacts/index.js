import React from 'react';
import First from './first';
import Brief from './brief';

class Contacts extends React.Component {
  render() {
    return (
      <div className='container'>
        <First />
        <Brief />
      </div>

    );
  }
}

export default Contacts;
