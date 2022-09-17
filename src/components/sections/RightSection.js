import React from 'react';
import FirstSection from '../sections/HomeSection';
import classes from './RightSection.module.css';

const RightSection = () => {
  return (
    <div className={classes['right-section']}>
      <section className={classes.wrapper}>
        <FirstSection />
      </section>
    </div>
  );
};

export default RightSection;
