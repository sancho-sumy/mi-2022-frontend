import React from 'react';
import Header from '../Layout/Header';
import classes from './RightSection.module.scss';

const RightSection = (props) => {
  const activeItemHandler = (item) => {
    props.setActiveItem(item);
  };

  const searchSubmitHandler = (query) => {
    props.setActiveItem('search');
    props.setSearchQueryParams(query);
    console.log(query);
  };

  return (
    <div className={classes['right-section']}>
      <section className={classes.wrapper}>
        {props.currentItem !== 'home' && (
          <Header
            currentItem={props.currentItem}
            activeItem={activeItemHandler}
            breedsList={props.breedsList}
            setSearchQueryParams={searchSubmitHandler}
          />
        )}
        {props.children}
      </section>
    </div>
  );
};

export default RightSection;
