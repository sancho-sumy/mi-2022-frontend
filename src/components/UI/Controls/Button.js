import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

const Button = ({ design, option, children, isDisabled, onButtonClick, btnId }) => {
  const buttonClickHandler = () => {
    onButtonClick(btnId);
  };
  return (
    <div
      onClick={buttonClickHandler}
      className={clsx(
        classes.btn,
        classes[design],
        classes[option],
        isDisabled && classes['disabled']
      )}
    >
      {children}
    </div>
  );
};

export default Button;
