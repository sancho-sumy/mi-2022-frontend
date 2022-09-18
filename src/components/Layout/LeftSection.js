import React from 'react';
import classes from './LeftSection.module.scss';

const LeftSection = (props) => {
  return (
    <section className={classes['left-section']}>
      <div className={classes.wrapper}>{props.children}</div>
    </section>
  );
};

export default LeftSection;
