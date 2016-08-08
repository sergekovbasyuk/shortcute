import React from 'react';
import styles from './style.css';
import ArrowIcon from '../icons/ArrowIcon';

class CaseItem extends React.Component {
  render() {
    const
      id = this.props.id - 1,
      title = this.props.data[id].title,
      description = this.props.data[id].description,
      background = this.props.data[id].background,
      task = this.props.data[id].task,
      deliverables = this.props.data[id].deliverables;

    return (
      <div className={styles.case}>
        <div className={'section'}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <a className={styles.arrowdown}>
              <ArrowIcon />
            </a>
          </div>
        </div>
        <h2>Background</h2>
        <p>{background}</p>
        <h2>Task</h2>
        <p>{task}</p>
        <h2>Deliverables</h2>
        <p>{deliverables}</p>
      </div>
    );
  }
}

export default CaseItem;
