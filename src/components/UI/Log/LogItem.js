import React from 'react';
import clsx from 'clsx';

import classes from './LogItem.module.scss';

const LogItem = ({ time, imageId, action, section }) => {
  return (
    <div className={clsx(classes['log-item'])}>
      <div className={clsx(classes.time)}>{time}</div>
      <div className={clsx(classes.text)}>
        Image ID: <span className={clsx(classes.imageId)}>{imageId}</span> was
        {action === 'add' ? ' added to' : ' removed from'}
        <span className={clsx(classes.action)}>{section}</span>
      </div>
      <div className={clsx(classes.icon)}>
        <span
          className={
            section === 'favourites'
              ? 'icon-fav red'
              : section === 'likes'
              ? 'icon-like green'
              : 'icon-dislike yellow'
          }
        ></span>
      </div>
    </div>
  );
};

export default LogItem;
