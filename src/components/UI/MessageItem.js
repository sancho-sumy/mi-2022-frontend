import React from 'react';
import clsx from 'clsx';

import classes from './MessageItem.module.scss';

const MessageItem = (props) => {
  return <div className={clsx(classes['message-item'])}>{props.children}</div>;
};

export default MessageItem;
