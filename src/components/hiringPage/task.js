import React from 'react';
import Scroll from 'react-scroll';
import styles from './style.css';

const Element = Scroll.Element;

const Task = () => (
  <Element name="content" className={styles.content}>
    <div className={styles.text}>
      <h1 className={styles.headline}>Test Task</h1>
      <p className={styles.taskParagraph}>If you design loving, English
      speaking, workaholic individual with an
      innate sense of beauty, then we&apos;re waiting for your test task:</p>
      <p className={styles.taskParagraph}>1. Make a sign up and sign in page for a company.</p>
      <p className={styles.taskParagraph}>2. Don’t forget to use company’s logo.
        <a
          className={styles.blue}
          href="www.freepik.com/free-vector/yoga-and-massage-logo_833053.htm#term=yoga"
        >
        www.freepik.com/free-vector/yoga-and-massage-logo_833053.htm#term=yoga</a>
      </p>
      <p className={styles.taskParagraph}>3. Company info: yoga studio located somewhere in NYC.</p>
      <p className={styles.taskParagraph}>4. Target audience are middle aged men and women.</p>
      <p className={styles.taskParagraph}>5. Also mention your personal info:
      first and last name, age,
      work experience (or its lack lol), hobbies, company of your dream and
      why, your 3 favorite dribbble accounts (if you have such).</p>
      <p className={styles.taskParagraph}>Completed tasks drop here:
        <a className={styles.blue} href="mailto:hello@shortcute.xyz"> hello@shortcute.xyz</a>
        <br />
      Please mention this in the subject line: Interne %your first name% %your last name%.
      </p>
    </div>
  </Element>
);

export default Task;
