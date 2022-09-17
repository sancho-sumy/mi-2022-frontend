import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

const Button = ({ type, option, children }) => {
  return <div className={clsx(classes.btn, classes[type], classes[option])}>{children}</div>;
};

export default Button;
