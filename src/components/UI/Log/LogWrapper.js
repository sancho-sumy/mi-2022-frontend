import React from 'react';
import clsx from 'clsx';

import classes from './LogWrapper.module.scss';

const LogWrapper = (props) => {
  return (
    <div className={clsx(classes['log-wrapper'])}>
      {props.children}
    </div>
  );
};

export default LogWrapper;
