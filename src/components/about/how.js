import React from 'react';
import styles from './style.css';
import BitmapIcon from '../icons/BitmapIcon';
import CommentsIcon from '../icons/CommentsIcon';
import LayersIcon from '../icons/LayersIcon';
import ZoomInIcon from '../icons/ZoomInIcon';
import DoubleTapIcon from '../icons/DoubleTapIcon';
import PenPencilIcon from '../icons/PenPencilIcon';
import SettingsIcon from '../icons/SettingsIcon';
import WindowLayoutIcon from '../icons/WindowLayoutIcon';

const How = () => (
  <div className={styles.aboutSection}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.headline}>How we do this</h1>
        <p>Take a little time to learn a bit about our workflow,
        gained through suffering in a pile of projects</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <BitmapIcon />
          <div>
            <h2>1. Plan</h2>
            <p>Not only todos’ list but also a process diagrams,
            schedules and so on just to keep things organized</p>
          </div>
        </div>
        <div className={styles.item}>
          <CommentsIcon />
          <div>
            <h2>2. Interview</h2>
            <p>Your business model & processes, clients; design’s
            tasks & aims and other things we want to know about</p>
          </div>
        </div>
        <div className={styles.item}>
          <ZoomInIcon />
          <div>
            <h2>3. Research</h2>
            <p>Target market, competitors, relevant technologies and
            techniques research: we’re all in</p>
          </div>
        </div>
        <div className={styles.item}>
          <LayersIcon />
          <div>
            <h2>4. Visual Inventory</h2>
            <p>Determinartion of visual language, atmosphere, direction,
            techniques most relevant to our project</p>
          </div>
        </div>
        <div className={styles.item}>
          <WindowLayoutIcon />
          <div>
            <h2>5. Wireframing</h2>
            <p>A UX fundamental, we make an ideal one based on all data
            collected, statistics and etc.</p>
          </div>
        </div>
        <div className={styles.item}>
          <PenPencilIcon />
          <div>
            <h2>6. UI Design</h2>
            <p>The painstaking approach, rich experience, imagination and a
            pixel perfect magic causes striking design</p>
          </div>
        </div>
        <div className={styles.item}>
          <DoubleTapIcon />
          <div>
            <h2>7. Interaction</h2>
            <p>Giving the life to UI elements for positive user expirience enrichment</p>
          </div>
        </div>
        <div className={styles.item}>
          <SettingsIcon />
          <div>
            <h2>8. Design Product Support</h2>
            <p>Markuping and front-end development processes support to
            ensure that the design works as conceived</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default How;
