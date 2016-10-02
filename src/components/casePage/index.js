import React from 'react';
import CasesList from '../../CasesList';
import CaseItem from './caseItem';

class CaseContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: CasesList,
    };
  }

  render() {
    return (
      <div className="container">
        <CaseItem data={this.state.cases} id={this.props.params.id} />
      </div>
    );
  }
}

CaseContainer.propTypes = {
  params: React.PropTypes.object,
};

export default CaseContainer;
