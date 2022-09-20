import React from 'react';
import Header from '../Layout/Header';
import classes from './RightSection.module.scss';

const RightSection = (props) => {

  const activeItemHandler = (item) => {
    props.activeItem(item);
  };

  return (
    <div className={classes['right-section']}>
      <section className={classes.wrapper}>
        {props.currentItem !== 'home' && <Header currentItem={props.currentItem} activeItem={activeItemHandler}/>}
        {props.children}
      </section>
    </div>
  );
};

export default RightSection;
