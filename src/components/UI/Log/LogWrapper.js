import React from 'react';
import clsx from 'clsx';

import classes from './LogWrapper.module.scss';
import LogItem from './LogItem';

const LogWrapper = () => {
  return (
    <div className={clsx(classes['log-wrapper'])}>
      <LogItem/>
      <LogItem/>
      <LogItem/>
      <LogItem/>
    </div>
  );
};

export default LogWrapper;
