import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

const Button = ({ design, optionId, children, isDisabled, onButtonClick, btnId }) => {
  const buttonClickHandler = () => {
    onButtonClick(btnId, optionId);
  };
  return (
    <div
      onClick={buttonClickHandler}
      className={clsx(
        classes.btn,
        classes[design],
        isDisabled && classes['disabled']
      )}
    >
      {children}
    </div>
  );
};

export default Button;
