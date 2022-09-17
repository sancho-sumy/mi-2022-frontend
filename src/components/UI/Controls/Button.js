import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, link }) => {
  return (
    <div className={classes.btn}>
      <a href={`${link}`}>{text}</a>
    </div>
  );
};

export default Button;
