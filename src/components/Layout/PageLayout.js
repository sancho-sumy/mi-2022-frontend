import React from 'react';
import PageWrapper from '../UI/PageWrapper';
import PageHeader from './PageHeader';
import classes from './PageLayout.module.scss';

const PageLayout = (props) => {
  return (
    <div className={classes['page-layout']}>
      <PageHeader
        currentItem={props.currentItem}
        limitItems={props.limitItems}
        breedsList={props.breedsList}
        currentBreed={props.currentBreed}
      />
      <PageWrapper>{props.children}</PageWrapper>
    </div>
  );
};

export default PageLayout;
