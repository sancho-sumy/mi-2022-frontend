import React from 'react';
import Header from '../Layout/Header';
import classes from './RightSection.module.scss';

const RightSection = (props) => {
  return (
    <div className={classes['right-section']}>
      <section className={classes.wrapper}>
        {props.activeItem !== 'home' && <Header />}
        {props.children}
      </section>
    </div>
  );
};

export default RightSection;
