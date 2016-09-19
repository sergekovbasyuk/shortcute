import React from 'react';
import styles from './style.css';
import ArrowIcon from '../icons/ArrowIcon';
import First from './first';
import NextProject from './nextProject';
import Footer from '../footer';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class CaseItem extends React.Component {
  render() {
    const id = this.props.id,
    {
      title,
      description,
      background,
      task,
      deliverables,
      imgSmall,
      imgMiddle,
      imgLarge,
      imgFeatured,
      imgCase
    } = this.props.data[id],
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
        nextId = parseInt(id, 10) + 1;
        nextProjectTitle = this.props.data[nextId].title;
        nextProjectDescription = this.props.data[nextId].description;
      }

    return (
      <div className={styles.case}>
        <First title={title} description={description} imgSmall={imgSmall} imgMiddle={imgMiddle} imgLarge={imgLarge}/>
        <Element name='content' className={styles.content}>
          <h3>Background</h3>
          <p>{background}</p>
          <h3>Task</h3>
          <p>{task}</p>
          <h3>Deliverables</h3>
          <p>{deliverables}</p>
          <hr></hr>
        </Element>
        <div>
          <img sizes='100%' className={styles.featuredImage} src={imgFeatured}></img>
          <img sizes='100%' className={styles.caseImage} src={imgCase}></img>
        </div>
        <NextProject nextProjectTitle={nextProjectTitle} nextProjectDescription={nextProjectDescription} nextLinkId={nextId}/>
        <Footer />
      </div>
    );
  }
}

export default CaseItem;
