import React from 'react';
import PageHeader from './PageHeader';
import classes from './PageLayout.module.scss';

const PageLayout = (props) => {
  return (
    <div className={classes['page-layout']}>
      <PageHeader activeItem={props.activeItem} />
      <div className={classes.wrapper}><div className={classes.test}>{props.children}</div></div>
    </div>
  );
};

export default PageLayout;
