import React from 'react';
import Item from './item';
import First from './first';
import Footer from '../footer';
import fullpage from 'fullpage.js';
import jquery from 'jquery';

class Cases extends React.Component {
    componentDidMount() {
      jquery('#fullpage').fullpage();
    }

    componentWillUnmount(){
      jquery.fn.fullpage.destroy('all');
    }

  render () {
    const data = this.props.data;
    let totalCases = this.props.data.length;
    let itemTemplate;

    itemTemplate = data.map(function (item, index) {
      return (
        <Item data={item} key={index} number={index + 1} total={totalCases}/>
      );
    });

    return (
      <div id='fullpage' className='cases'>
        <First total={totalCases}/>
        {itemTemplate}
        <div className='section fp-auto-height'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Cases;
