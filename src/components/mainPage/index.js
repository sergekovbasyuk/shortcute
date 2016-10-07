import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import Item from './item';
import First from './first';
import Footer from '../footer';

class Cases extends React.Component {
  componentDidMount() {
    jquery('#fullpage').fullpage({
      css3: true,
      afterLoad: function updateSlideNumber() {
        const slideNumber = document.getElementById('slide-number');
        const bodyClass = document.body.classList[0];

        if (slideNumber) {
          switch (bodyClass) {
            default:
              slideNumber.innerHTML = '00';
              break;
            case ('fp-viewing-0'):
              slideNumber.innerHTML = '00';
              break;
            case ('fp-viewing-1'):
              slideNumber.innerHTML = '01';
              break;
            case ('fp-viewing-2'):
              slideNumber.innerHTML = '02';
              break;
            case ('fp-viewing-3'):
              slideNumber.innerHTML = '03';
              break;
            case ('fp-viewing-4'):
              slideNumber.innerHTML = '04';
              break;
            case ('fp-viewing-5'):
              slideNumber.innerHTML = '05';
              break;
            case ('fp-viewing-6'):
              slideNumber.innerHTML = '06';
              break;
            case ('fp-viewing-7'):
              slideNumber.innerHTML = '06';
              break;
          }
        }
      },
    });
  }

  componentWillUnmount() {
    jquery.fn.fullpage.destroy('all');
  }

  render() {
    const data = this.props.data;
    const totalCases = this.props.data.length;
    const itemTemplate = data.map((item, index) => (
      <Item data={item} key={index} number={index + 1} total={totalCases} />
    ));

    return (
      <div id="fullpage" className="cases">
        <First total={totalCases} />
        {itemTemplate}
        <div className="section fp-auto-height">
          <Footer />
        </div>
      </div>
    );
  }
}

Cases.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default Cases;
