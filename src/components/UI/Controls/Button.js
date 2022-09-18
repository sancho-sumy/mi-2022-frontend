import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

const Button = ({ design, option, children, isActive }) => {
  return <div className={clsx(classes.btn, classes[design], classes[option], classes[isActive])}>{children}</div>;
};

export default Button;
