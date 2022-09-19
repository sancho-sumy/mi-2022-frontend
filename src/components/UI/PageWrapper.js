import React from 'react';
import clsx from 'clsx';

import classes from './PageWrapper.module.scss';

const PageWrapper = (props) => {
  return (
    <div className={clsx(classes['page-wrapper'])}>
      {props.children}
    </div>
  );
};

export default PageWrapper;
