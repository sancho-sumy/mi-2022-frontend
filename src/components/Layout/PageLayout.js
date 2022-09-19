import React from 'react';
import PageWrapper from '../UI/PageWrapper';
import PageHeader from './PageHeader';
import classes from './PageLayout.module.scss';

const PageLayout = (props) => {
  return (
    <div className={classes['page-layout']}>
      <PageHeader activeItem={props.activeItem} />
      <PageWrapper>{props.children}</PageWrapper>
    </div>
  );
};

export default PageLayout;
