import React from 'react';
import CasesList from '../../CasesList';
import CaseItem from './caseitem.js';

class CaseContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: CasesList
    };
  }

  render(){
    return (
      <div className='container'>
        <CaseItem data={this.state.cases} id={this.props.params.id}/>
      </div>
    );
  }
}

export default CaseContainer;
