import { EventEmitter } from 'events';

class CaseStore extends EventEmitter{
  constructor(){
    super();
    this.cases = [
      {
        id: 1,
        title: 'Pinstants',
        description: 'Responsive website with dashboard for London based employment service startup.'
      },
      {
        id: 2,
        title: 'Alexei Smoliar',
        description: 'A known movie director assistant\'s responsive website.'
      },
      {
        id: 3,
        title: 'Minute of Life',
        description: 'The goal was to create an ultimately friendly interface suitable for users of all ages.'
      }
    ];
  }
}

const caseStore = new CaseStore();

export default caseStore;
