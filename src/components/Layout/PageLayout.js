import React from 'react';
import PageWrapper from '../UI/PageWrapper';
import PageHeader from './PageHeader';
import classes from './PageLayout.module.scss';

const PageLayout = (props) => {
  const activeItemHandler = (btnId) => {
    props.setActiveItem(btnId);
  };

  return (
    <div className={classes['page-layout']}>
      <PageHeader
        currentItem={props.currentItem}
        limitItems={props.limitItems}
        breedsList={props.breedsList}
        currentBreed={props.currentBreed}
        reloadStatus={props.reloadStatus}
        setReloadStatus={props.setReloadStatus}
        setActiveItem={activeItemHandler}
      />
      <PageWrapper>{props.children}</PageWrapper>
    </div>
  );
};

export default PageLayout;
