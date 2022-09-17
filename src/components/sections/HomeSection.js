import React from 'react';
import bgPicture from './girl-and-pet.png';
import classes from './HomeSection.module.css'

const FirstSection = () => {
  return (
    <div className={classes['first-section']}>
      <img src={bgPicture} alt="Woman with cat" />
    </div>
  );
};

export default FirstSection;
