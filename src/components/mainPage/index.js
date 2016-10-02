import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import Item from './item';
import First from './first';
import Footer from '../footer';

class Cases extends React.Component {
  componentDidMount() {
    jquery('#fullpage').fullpage();
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
