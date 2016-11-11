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
    const {
      title,
      description,
      background,
      task,
      deliverables,
      link,
      imgSmall,
      imgMiddle,
      imgLarge,
      mockup4,
      mockup3,
      mockup2,
      mockup1,
      shots4,
      shots3,
      shots2,
      shots1,
    } = this.props.data[id];
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

    if (!this.props) {
      return null;
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
          <a className={styles.link} href={`http://${link}`}>{link}</a>
        </Element>
        <div>
          <picture>
            <source media="(max-width: 425px)" srcSet={mockup1} />
            <source media="(max-width: 768px)" srcSet={mockup2} />
            <source media="(max-width: 1024px)" srcSet={mockup3} />
            <source media="(max-width: 1440px)" srcSet={mockup4} />
            <img src={mockup4} alt="Project mockup" className={styles.featuredImage} />
          </picture>
          <picture>
            <source media="(max-width: 425px)" srcSet={shots1} />
            <source media="(max-width: 768px)" srcSet={shots2} />
            <source media="(max-width: 1024px)" srcSet={shots3} />
            <source media="(max-width: 1440px)" srcSet={shots4} />
            <img src={shots4} alt="Project shots" className={styles.caseImage} />
          </picture>
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
