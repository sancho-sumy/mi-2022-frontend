import React from 'react';
import PageWrapper from '../UI/PageWrapper';
import PageHeader from './PageHeader';
import classes from './PageLayout.module.scss';

const PageLayout = (props) => {
  const activeItemHandler = (btnId) => {
    props.setActiveItem(btnId);
  };

  const breedsQueryParamsHandler = (query) => {
    props.setBreedsQueryParams(query);
    props.setBreedsReloadStatus(true)
  };

  return (
    <div className={classes['page-layout']}>
      <PageHeader
        currentItem={props.currentItem}
        limitItems={props.limitItems}
        breedsList={props.breedsList}
        currentBreed={props.currentBreed}
        reloadStatus={props.reloadStatus}
        setActiveItem={activeItemHandler}
        setBreedsQueryParams={breedsQueryParamsHandler}
      />
      <PageWrapper>{props.children}</PageWrapper>
    </div>
  );
};

export default PageLayout;
