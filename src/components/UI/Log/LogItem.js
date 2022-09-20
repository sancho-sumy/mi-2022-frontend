import React from 'react';
import clsx from 'clsx';

import classes from './LogItem.module.scss';

const LogItem = () => {
  return <div className={clsx(classes['log-item'])}>
    <div className={clsx(classes.time)}>22:35</div>
    <div className={clsx(classes.text)}>Image ID: <span>fQSunHvl8</span> was added to Favorites</div>
    <div className={clsx(classes.icon)}><span className="icon-fav"></span></div>
  </div>;
};

export default LogItem;
