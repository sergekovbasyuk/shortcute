import React from 'react';
import styles from './style.css';
import ArrowIcon from '../icons/ArrowIcon';
import First from './first';
import NextProject from './nextProject';
import Footer from '../footer';

class CaseItem extends React.Component {
  render() {
    const
      id = this.props.id,
      title = this.props.data[id].title,
      description = this.props.data[id].description,
      background = this.props.data[id].background,
      task = this.props.data[id].task,
      deliverables = this.props.data[id].deliverables,
      imgSmall = this.props.data[id].imgSmall,
      imgMiddle = this.props.data[id].imgMiddle,
      imgLarge = this.props.data[id].imgLarge,
      imgFeatured = this.props.data[id].imgFeatured,
      imgCase = this.props.data[id].imgCase,
      total = this.props.data.length - 1;

    let
      nextId,
      nextProjectTitle,
      nextProjectDescription;

      if(id == total){
        nextId = 0;
        nextProjectTitle = this.props.data[nextId].title;
        nextProjectDescription = this.props.data[nextId].description;
      }
      else{
        nextId = parseInt(id) + 1;
        nextProjectTitle = this.props.data[nextId].title;
        nextProjectDescription = this.props.data[nextId].description;
      }

    return (
      <div className={styles.case}>
        <First title={title} description={description} imgSmall={imgSmall} imgMiddle={imgMiddle} imgLarge={imgLarge}/>
        <div className={styles.content}>
          <h3>Background</h3>
          <p>{background}</p>
          <h3>Task</h3>
          <p>{task}</p>
          <h3>Deliverables</h3>
          <p>{deliverables}</p>
          <hr></hr>
        </div>
        <div>
          <img className={styles.featuredImage} src={imgFeatured}></img>
          <img className={styles.caseImage} src={imgCase}></img>
        </div>
        <NextProject nextProjectTitle={nextProjectTitle} nextProjectDescription={nextProjectDescription} nextLinkId={nextId}/>
        <Footer />
      </div>
    );
  }
}

export default CaseItem;
