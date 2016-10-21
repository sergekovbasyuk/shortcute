import React from 'react';
import Scroll from 'react-scroll';
import styles from './style.css';
import First from './first';
import NextProject from './nextProject';
import Footer from '../footer';

const Element = Scroll.Element;

class CaseItem extends React.Component {
  render() {
    const id = this.props.id;
    const { title, description, background, task, deliverables, imgSmall,
      imgMiddle, imgLarge, imgFeatured, imgCase } = this.props.data[id];
    const total = this.props.data.length - 1;

    let nextId;
    let nextProjectTitle;
    let nextProjectDescription;

    if (id == total) {
      nextId = 0;
      nextProjectTitle = this.props.data[nextId].title;
      nextProjectDescription = this.props.data[nextId].description;
    } else {
      nextId = parseInt(id, 10) + 1;
      nextProjectTitle = this.props.data[nextId].title;
      nextProjectDescription = this.props.data[nextId].description;
    }

    return (
      <div className={styles.case}>
        <First
          title={title}
          description={description}
          imgSmall={imgSmall}
          imgMiddle={imgMiddle}
          imgLarge={imgLarge}
        />
        <Element name="content" className={styles.content}>
          <h3>Background</h3>
          <p>{background}</p>
          <h3>Task</h3>
          <p>{task}</p>
          <h3>Deliverables</h3>
          <p>{deliverables}</p>
        </Element>
        <div>
          <img className={styles.featuredImage} src={imgFeatured} alt="" />
          <img className={styles.caseImage} src={imgCase} alt="" />
        </div>
        <NextProject
          nextProjectTitle={nextProjectTitle}
          nextProjectDescription={nextProjectDescription}
          nextLinkId={nextId}
        />
        <Footer />
      </div>
    );
  }
}

CaseItem.propTypes = {
  id: React.PropTypes.string,
  data: React.PropTypes.array,
};

export default CaseItem;
